import fitz  # PyMuPDF
import json
import os

pdf_path = r"c:\Users\Ancimmm\Documents\ANDISLABSWEB\andislab\public\daihankatalog.pdf"
output_dir = r"c:\Users\Ancimmm\Documents\ANDISLABSWEB\andislab\scratch"

doc = fitz.open(pdf_path)
print(f"Total pages: {doc.page_count}")

# Extract text from all pages
all_text = []
for i, page in enumerate(doc):
    text = page.get_text("text")
    all_text.append(f"\n{'='*60}\nPAGE {i+1}\n{'='*60}\n{text}")

# Save full text
with open(os.path.join(output_dir, "daihan_full_text.txt"), "w", encoding="utf-8") as f:
    f.write("\n".join(all_text))

# Also extract images info per page
print("\nPages with images:")
for i, page in enumerate(doc):
    images = page.get_images()
    if images:
        print(f"  Page {i+1}: {len(images)} images")

# Extract first 10 pages text to stdout for quick review
for i in range(min(15, doc.page_count)):
    page = doc[i]
    text = page.get_text("text")
    if text.strip():
        print(f"\n--- PAGE {i+1} ---")
        print(text[:800])

doc.close()
print("\nDone! Full text saved to daihan_full_text.txt")
