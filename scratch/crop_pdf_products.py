"""
Crop product images from Andislabkatalog.pdf pages,
removing the BataviaLab header/footer areas.
"""
import fitz
import os

pdf_path = r"c:\Users\Ancimmm\Documents\ANDISLABSWEB\andislab\public\Andislabkatalog.pdf"
output_dir = r"c:\Users\Ancimmm\Documents\ANDISLABSWEB\andislab\public\images\custom-lab-pdf"
os.makedirs(output_dir, exist_ok=True)

doc = fitz.open(pdf_path)
ZOOM = 2.5  # High quality zoom

# Each page: define crop rect as (x0_pct, y0_pct, x1_pct, y1_pct) of page dimensions
# We crop out header/footer with BataviaLab branding
crop_configs = {
    # Page 1: Flammable Storage Cabinet - crop the cabinet photo area
    1: [
        {"name": "flammable_cabinet", "rect": (0.42, 0.12, 1.0, 0.72), "label": "Flammable Storage Cabinet"},
    ],
    # Page 2: Corrosive Storage Cabinet - crop cabinet photo
    2: [
        {"name": "corrosive_cabinet", "rect": (0.42, 0.12, 1.0, 0.72), "label": "Corrosive Storage Cabinet"},
    ],
    # Page 3: Corrosive Cabinet features page - another angle/photo
    3: [
        {"name": "corrosive_cabinet_2", "rect": (0.38, 0.10, 1.0, 0.75), "label": "Corrosive Storage Cabinet Fitur"},
    ],
    # Page 4: Wet Scrubber - crop the scrubber photo
    4: [
        {"name": "wet_scrubber", "rect": (0.40, 0.05, 1.0, 0.70), "label": "Wet Scrubber"},
    ],
    # Page 5: Fume Hood - crop each fume hood type image (left column)
    5: [
        {"name": "fume_hood_pp", "rect": (0.0, 0.17, 0.28, 0.42), "label": "Fume Hood PP"},
        {"name": "fume_hood_mg", "rect": (0.0, 0.43, 0.28, 0.67), "label": "Fume Hood MG"},
        {"name": "fume_hood_ss", "rect": (0.0, 0.62, 0.28, 0.84), "label": "Fume Hood SS"},
        {"name": "fume_hood_p", "rect": (0.0, 0.80, 0.28, 0.97), "label": "Fume Hood P"},
    ],
    # Page 6: Flokulator Portabel - crop flokulator photo
    6: [
        {"name": "flokulator_portabel", "rect": (0.35, 0.02, 1.0, 0.32), "label": "Flokulator Portabel"},
    ],
    # Page 7: Laminar Air Flow - crop LAF photos (left column)
    7: [
        {"name": "laf_prime", "rect": (0.0, 0.06, 0.30, 0.35), "label": "LAF V Prime"},
        {"name": "laf_digital", "rect": (0.0, 0.35, 0.30, 0.65), "label": "LAF V Digital"},
        {"name": "laf_standard", "rect": (0.0, 0.63, 0.30, 0.95), "label": "LAF V Standard"},
    ],
}

results = {}

for page_num, configs in crop_configs.items():
    page = doc[page_num - 1]
    pw = page.rect.width
    ph = page.rect.height
    
    for cfg in configs:
        name = cfg["name"]
        x0p, y0p, x1p, y1p = cfg["rect"]
        
        # Convert pct to absolute coords
        clip = fitz.Rect(x0p * pw, y0p * ph, x1p * pw, y1p * ph)
        mat = fitz.Matrix(ZOOM, ZOOM)
        pix = page.get_pixmap(matrix=mat, clip=clip)
        
        filename = f"{name}.png"
        filepath = os.path.join(output_dir, filename)
        pix.save(filepath)
        
        web_path = f"/images/custom-lab-pdf/{filename}"
        results[name] = {"label": cfg["label"], "path": web_path, "size": f"{pix.width}x{pix.height}"}
        print(f"  Saved: {filename} ({pix.width}x{pix.height}) — {cfg['label']}")

doc.close()

print("\n\nFinal mapping:")
for k, v in results.items():
    print(f"  {k}: {v['path']} ({v['size']})")

print("\nDone!")
