import fitz  # PyMuPDF
import os

pdf_path = r"c:\Users\Ancimmm\Documents\ANDISLABSWEB\andislab\public\daihankatalog.pdf"
output_dir = r"c:\Users\Ancimmm\Documents\ANDISLABSWEB\andislab\scratch\daihan_pages"

os.makedirs(output_dir, exist_ok=True)

doc = fitz.open(pdf_path)
print(f"Total pages: {doc.page_count}")

# Render each page as an image (150 DPI for good quality)
for i in range(doc.page_count):
    page = doc[i]
    # Render at 150 DPI
    mat = fitz.Matrix(150/72, 150/72)
    pix = page.get_pixmap(matrix=mat)
    img_path = os.path.join(output_dir, f"page_{i+1:02d}.png")
    pix.save(img_path)
    print(f"  Saved page {i+1}: {pix.width}x{pix.height}")

doc.close()
print(f"\nDone! {doc.page_count} pages extracted to {output_dir}")
