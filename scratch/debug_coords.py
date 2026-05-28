import fitz
import os

# Debug: render page 6 with red rectangles to see where crops land
pdf_path = r"c:\Users\Ancimmm\Documents\ANDISLABSWEB\andislab\public\daihankatalog.pdf"
out_dir = r"c:\Users\Ancimmm\Documents\ANDISLABSWEB\andislab\scratch"

doc = fitz.open(pdf_path)
page = doc[5]  # Page 6 (index 5)

# Get page dimensions
print(f"Page size (points): {page.rect.width} x {page.rect.height}")
# That's in 72 DPI points

# Render at 150 DPI to match our reference images
mat150 = fitz.Matrix(150/72, 150/72)
pix = page.get_pixmap(matrix=mat150)
print(f"Page size (150 DPI px): {pix.width} x {pix.height}")

# Now render at 150 DPI with annotation shapes to debug
# We'll draw rectangles on the page first, then render

# Create a test: crop a vertical strip from x=0, w=300, full page height, 
# and save it to see the layout
# Let's crop 10 horizontal strips to find where the photos are
strip_h_pts = page.rect.height / 20  # 20 strips

for i in range(20):
    y_start = i * strip_h_pts
    y_end = (i + 1) * strip_h_pts
    clip = fitz.Rect(0, y_start, page.rect.width * 0.5, y_end)
    strip = page.get_pixmap(matrix=mat150, clip=clip)
    strip.save(os.path.join(out_dir, f"debug_strip_{i:02d}.png"))
    print(f"Strip {i}: y={y_start:.1f}-{y_end:.1f} pts = y={y_start*150/72:.0f}-{y_end*150/72:.0f} px (150dpi)")

doc.close()
print("Done! Check strips in scratch/")
