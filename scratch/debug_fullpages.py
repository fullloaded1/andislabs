import fitz
import os

pdf_path = r"c:\Users\Ancimmm\Documents\ANDISLABSWEB\andislab\public\daihankatalog.pdf"
scratch_dir = r"c:\Users\Ancimmm\Documents\ANDISLABSWEB\andislab\scratch"
os.makedirs(scratch_dir, exist_ok=True)

doc = fitz.open(pdf_path)

# Render several product pages at 150 DPI for layout analysis
DPI = 150
mat = fitz.Matrix(DPI/72, DPI/72)

for page_idx in [5, 6, 9, 11, 13, 14, 15]:
    page = doc[page_idx]
    pix = page.get_pixmap(matrix=mat)
    out = os.path.join(scratch_dir, f"fullpage_{page_idx}.png")
    pix.save(out)
    print(f"Page {page_idx}: {pix.width}x{pix.height} -> {out}")

doc.close()
print("Done!")
