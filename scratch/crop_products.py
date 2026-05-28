import fitz
import os

pdf_path = r"c:\Users\Ancimmm\Documents\ANDISLABSWEB\andislab\public\daihankatalog.pdf"
out_dir = r"c:\Users\Ancimmm\Documents\ANDISLABSWEB\andislab\public\images\daihan"
os.makedirs(out_dir, exist_ok=True)

doc = fitz.open(pdf_path)

DPI = 300
mat = fitz.Matrix(DPI/72, DPI/72)

# Page at 150 DPI: 1241 x 1755
# Layout from fullpage renders at 150 DPI:
#   3 rows × 2 columns per page
#   Title bars sit above the photos. We want PHOTO ONLY (no title text).
#
#   Adjusted Y to skip title bar (~50px below cell start):
#     Row 0 photo: y=190 to 465   (skip title at ~130-185)
#     Row 1 photo: y=715 to 990   (skip title at ~655-710)
#     Row 2 photo: y=1190 to 1465 (skip title at ~1130-1185)
#
#   X boundaries:
#     Left col:  x=30 to 290  (width 260)
#     Right col: x=620 to 880 (width 260)

def px150_to_pts(x, y, w, h):
    s = 72.0 / 150.0
    return (x*s, y*s, (x+w)*s, (y+h)*s)

def grid_2x3(page_idx, products):
    rows_y = [195, 720, 1195]   # photo start Y (below title) at 150 DPI
    cols_x = [30, 620]           # left/right column X at 150 DPI
    photo_w = 260                # width at 150 DPI
    photo_h = 265                # height at 150 DPI (photo area only)

    crops = []
    for fname, col, row in products:
        x = cols_x[col]
        y = rows_y[row]
        crops.append((page_idx, x, y, photo_w, photo_h, fname))
    return crops

all_crops = []

# Page 6 (index 5): Water Bath
all_crops += grid_2x3(5, [
    ("water-bath-digital", 0, 0),
    ("water-bath-multi-chamber", 1, 0),
    ("water-bath-shaking", 0, 1),
    ("water-bath-extraction-cod", 1, 1),
    ("water-bath-viscosight", 0, 2),
    ("water-bath-cooling-viscosight", 1, 2),
])

# Page 7 (index 6): Bath Circulator
all_crops += grid_2x3(6, [
    ("bath-oil", 0, 0),
    ("bath-immersion-circulator", 1, 0),
    ("bath-refrigerated-circulator", 0, 1),
    ("bath-cooling-circulator", 1, 1),
    ("bath-ultra-low-temp-circulator", 0, 2),
    ("bath-cold-trap", 1, 2),
])

# Page 8 (index 7): Water Still
all_crops += grid_2x3(7, [
    ("water-still-basic", 0, 0),
    ("water-still-automatic", 1, 0),
    ("water-still-double", 0, 1),
])

# Page 10 (index 9): Hotplate & Stirrer
all_crops += grid_2x3(9, [
    ("hotplate-stirrer", 0, 0),
    ("hotplate-stirrer-multi-position", 1, 0),
    ("hotplate-jumbo", 0, 1),
    ("dry-block-heater", 1, 1),
    ("microcentrifuge", 0, 2),
    ("roller-mixer", 1, 2),
])

# Page 12 (index 11): Furnace
all_crops += grid_2x3(11, [
    ("furnace-muffle-swing", 0, 0),
    ("furnace-muffle-fold-down", 1, 0),
    ("furnace-tube", 0, 1),
    ("furnace-elevator", 0, 2),
    ("furnace-high-temp", 1, 2),
])

# Page 14 (index 13): Oven
all_crops += grid_2x3(13, [
    ("oven-natural-convection-eco", 0, 0),
    ("oven-natural-convection", 1, 0),
    ("oven-forced-convection", 0, 1),
    ("oven-upright-forced", 1, 1),
    ("oven-hi-temp", 0, 2),
    ("oven-vacuum-drying", 1, 2),
])

# Page 15 (index 14): Incubator
all_crops += grid_2x3(14, [
    ("incubator-general", 0, 0),
    ("incubator-dual-chamber", 1, 0),
    ("incubator-bod", 0, 1),
    ("incubator-multi-room", 1, 1),
    ("incubator-peltier", 0, 2),
    ("incubator-co2", 1, 2),
])

# Page 16 (index 15): Shaking Incubator & Shaker
all_crops += grid_2x3(15, [
    ("incubator-shaking", 0, 0),
    ("incubator-shaking-multi-stack", 1, 0),
    ("shaker-standard", 0, 1),
    ("shaker-multi-stack", 1, 1),
])

print(f"Cropping {len(all_crops)} product photos at {DPI} DPI...")

for page_idx, x_px, y_px, w_px, h_px, fname in all_crops:
    page = doc[page_idx]
    x1, y1, x2, y2 = px150_to_pts(x_px, y_px, w_px, h_px)
    clip = fitz.Rect(x1, y1, x2, y2)
    cropped_pix = page.get_pixmap(matrix=mat, clip=clip)
    out_path = os.path.join(out_dir, f"{fname}.png")
    cropped_pix.save(out_path)
    print(f"  > {fname}.png ({cropped_pix.width}x{cropped_pix.height})")

doc.close()
print(f"\nDone! {len(all_crops)} photos saved to {out_dir}")
