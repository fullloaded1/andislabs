import fitz  # PyMuPDF
import os
import json

pdf_path = r"c:\Users\Ancimmm\Documents\ANDISLABSWEB\andislab\public\Andislabkatalog.pdf"
output_dir = r"c:\Users\Ancimmm\Documents\ANDISLABSWEB\andislab\public\images\custom-lab-pdf"

os.makedirs(output_dir, exist_ok=True)

doc = fitz.open(pdf_path)
print(f"Total pages: {doc.page_count}")

# Extract text from all pages
print("\n=== TEXT PER PAGE ===")
for i, page in enumerate(doc):
    text = page.get_text("text").strip()
    if text:
        print(f"\n--- PAGE {i+1} ---")
        print(text[:600])

# Extract all images
print("\n\n=== IMAGES ===")
img_count = 0
image_map = []  # store mapping page -> image files

for page_num in range(doc.page_count):
    page = doc[page_num]
    images = page.get_images(full=True)
    
    if images:
        print(f"Page {page_num+1}: {len(images)} image(s)")
        
    for img_idx, img_info in enumerate(images):
        xref = img_info[0]
        base_image = doc.extract_image(xref)
        img_bytes = base_image["image"]
        img_ext = base_image["ext"]
        img_width = base_image["width"]
        img_height = base_image["height"]
        
        # Skip tiny images (icons/decorative)
        if img_width < 80 or img_height < 80:
            print(f"  Skipping small image {xref} ({img_width}x{img_height})")
            continue
        
        filename = f"page{page_num+1}_img{img_idx+1}_{img_width}x{img_height}.{img_ext}"
        filepath = os.path.join(output_dir, filename)
        
        with open(filepath, "wb") as f:
            f.write(img_bytes)
        
        image_map.append({
            "page": page_num + 1,
            "index": img_idx + 1,
            "xref": xref,
            "width": img_width,
            "height": img_height,
            "ext": img_ext,
            "filename": filename,
            "path": f"/images/custom-lab-pdf/{filename}"
        })
        
        img_count += 1
        print(f"  Saved: {filename} ({img_width}x{img_height})")

# Also render each page as PNG for full-page view
print("\n\n=== RENDERING PAGES AS PNG ===")
for page_num in range(doc.page_count):
    page = doc[page_num]
    mat = fitz.Matrix(2.0, 2.0)  # 2x zoom for quality
    clip = page.rect
    pix = page.get_pixmap(matrix=mat, clip=clip)
    page_img_path = os.path.join(output_dir, f"page{page_num+1}_full.png")
    pix.save(page_img_path)
    print(f"  Rendered page {page_num+1} -> page{page_num+1}_full.png ({pix.width}x{pix.height})")

# Save image map
with open(os.path.join(output_dir, "image_map.json"), "w", encoding="utf-8") as f:
    json.dump(image_map, f, indent=2, ensure_ascii=False)

print(f"\nDone! {img_count} images extracted to {output_dir}")
print(f"Image map saved to image_map.json")
doc.close()
