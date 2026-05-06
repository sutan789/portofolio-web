import os
import sys
import json
import shutil
import django
from django.utils.text import slugify

# Add workspace to path
sys.path.append(r'd:\pustakadigital')

# Setup Django environment
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'config.settings')
django.setup()

from folklore.models import Story, Region, Category

# Paths
DATA_FILE = r'd:\pustakadigital\scratch\folklore_data.json'
BRAIN_FOLDER = r'C:\Users\LENOVO LOQ\.gemini\antigravity\brain\b2eb704d-5bc6-4097-8943-dbce05c3076f'
MEDIA_STORIES_FOLDER = r'd:\pustakadigital\media\stories'

# Image Mapping (Title -> Filename in brain folder)
IMAGE_MAPPING = {
    "Hikayat Meurah Pupok": "meurah_pupok_1776822150990.png",
    "Legenda Danau Toba": "danau_toba_1776822169662.png",
    "Malin Kundang": "malin_kundang_1776822186804.png",
    "Putri Kaca Mayang": "kaca_mayang_1776822207964.png",
    "Putri Tangguk": "putri_tangguk_1776822227076.png",
    "Si Pahit Lidah": "si_pahit_lidah_1776822248036.png",
    "Ular N'daung": "ular_ndaung_1776822272354.png",
    "Raden Jambat": "raden_jambat_1776822290939.png",
    "Si Pitung": "si_pitung_1776822311450.png",
    "Sangkuriang": "sangkuriang_1776822329719.png",
    "Roro Jonggrang": "roro_jonggrang_1776822352193.png",
    "Asal Usul Surabaya": "asal_usul_surabaya_1776822371213.png",
    "Jayaprana dan Layonsari": "jayaprana_layonsari_1776822390675.png",
    "Putri Mandalika": "putri_mandalika_1776822408473.png",
    "Suri Ikun dan Dua Ekor Burung": "suri_ikun_1776822426531.png",
    "Asal Usul Sungai Kawat": "sungai_kawat_1776822445510.png",
    "Datu Mabrur dan Ikan Todak": "datu_mabrur_1776822464205.png",
    "Pesut Mahakam": "pesut_mahakam_1776822482742.png",
}

def populate():
    with open(DATA_FILE, 'r', encoding='utf-8') as f:
        data = json.load(f)

    for item in data:
        print(f"Processing: {item['title']}")
        
        # Get or create Region and Category
        region, _ = Region.objects.get_or_create(name=item['region'], defaults={'slug': slugify(item['region'])})
        category, _ = Category.objects.get_or_create(name=item['category'], defaults={'slug': slugify(item['category'])})
        
        # Handle Image
        image_name = IMAGE_MAPPING.get(item['title'])
        target_image_path = None
        
        if image_name:
            source_path = os.path.join(BRAIN_FOLDER, image_name)
            if os.path.exists(source_path):
                # We'll name it simply by slug to be clean
                clean_name = f"{slugify(item['title'])}.png"
                target_path = os.path.join(MEDIA_STORIES_FOLDER, clean_name)
                shutil.copy(source_path, target_path)
                target_image_path = f"stories/{clean_name}"
            else:
                print(f"Warning: Image {source_path} not found.")

        # Create Story
        story, created = Story.objects.update_or_create(
            title=item['title'],
            defaults={
                'slug': slugify(item['title']),
                'content': item['content'],
                'summary': item['summary'],
                'category': category,
                'region': region,
                'characters': item['characters'],
                'cover_image': target_image_path
            }
        )
        if created:
            print(f"Created story: {story.title}")
        else:
            print(f"Updated story: {story.title}")

if __name__ == '__main__':
    populate()
