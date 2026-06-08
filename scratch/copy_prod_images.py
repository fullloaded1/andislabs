"""
Re-crop product images more precisely from Andislabkatalog.pdf
"""
import fitz
import os

pdf_path = r"c:\Users\Ancimmm\Documents\ANDISLABSWEB\andislab\public\Andislabkatalog.pdf"
output_dir = r"c:\Users\Ancimmm\Documents\ANDISLABSWEB\andislab\public\images\custom-lab-pdf"
os.makedirs(output_dir, exist_ok=True)

doc = fitz.open(pdf_path)

# We use the extracted raw images (already saved) - just rename/copy the best ones
# Based on visual inspection:
# page1_img3_515x756.jpeg = Flammable Cabinet
# page2_img3_393x646.jpeg = Corrosive Cabinet
# page4_img2_684x968.jpeg = Wet Scrubber
# page5_img3 thru img6 = Fume Hoods (PP, MG, SS, P)
# page6_img2_1280x1170.png = Flokulator Portabel (big image)
# page7_img1 = LAF Prime, img2 = LAF Digital, img3 = LAF Standard

import shutil

mapping = [
    ("page1_img3_515x756.jpeg",    "prod_flammable_cabinet.jpeg",   "Flammable Storage Cabinet"),
    ("page2_img3_393x646.jpeg",    "prod_corrosive_cabinet.jpeg",   "Corrosive Storage Cabinet"),
    ("page4_img2_684x968.jpeg",    "prod_wet_scrubber.jpeg",        "Wet Scrubber"),
    ("page5_img3_175x338.jpeg",    "prod_fume_hood_pp.jpeg",        "Fume Hood PP"),
    ("page5_img4_186x340.jpeg",    "prod_fume_hood_mg.jpeg",        "Fume Hood MG"),
    ("page5_img5_166x336.jpeg",    "prod_fume_hood_ss.jpeg",        "Fume Hood SS"),
    ("page5_img6_241x335.jpeg",    "prod_fume_hood_p.jpeg",         "Fume Hood Plywood"),
    ("page6_img2_1280x1170.png",   "prod_flokulator.png",           "Flokulator Portabel"),
    ("page7_img1_336x401.jpeg",    "prod_laf_prime.jpeg",           "LAF V Prime"),
    ("page7_img2_335x403.jpeg",    "prod_laf_digital.jpeg",         "LAF V Digital"),
    ("page7_img3_333x400.jpeg",    "prod_laf_standard.jpeg",        "LAF V Standard"),
    ("page8_img1_1073x1080.png",   "prod_laf_spec.png",             "LAF Specification Panel"),
]

print("Copying extracted product images...")
for src_name, dst_name, label in mapping:
    src = os.path.join(output_dir, src_name)
    dst = os.path.join(output_dir, dst_name)
    if os.path.exists(src):
        shutil.copy2(src, dst)
        size = os.path.getsize(dst)
        print(f"  OK: {dst_name} ({size//1024}KB) — {label}")
    else:
        print(f"  MISSING: {src_name}")

doc.close()
print("\nDone! Use /images/custom-lab-pdf/prod_*.* paths in your catalog page.")
