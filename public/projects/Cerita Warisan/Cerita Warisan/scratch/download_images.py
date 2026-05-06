import os
import sys
import urllib.request
import ssl

sys.path.append(r'd:\pustakadigital')
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'config.settings')

import django
django.setup()

from folklore.models import Story

# High-quality curated images from Unsplash for each missing story
# Format: story_slug -> (unsplash_url, filename)
IMAGE_SOURCES = {
    'mamanua-dan-lumimuut': (
        'https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?w=1200&q=85&fit=crop',
        'mamanua-dan-lumimuut.png'
    ),  # Volcano / volcanic landscape - North Sulawesi
    'sawerigading': (
        'https://images.unsplash.com/photo-1582564286939-400a311013a2?w=1200&q=85&fit=crop',
        'sawerigading.png'
    ),  # Traditional wooden sailing ship - Bugis Pinisi
    'oheo': (
        'https://images.unsplash.com/photo-1517824806704-9040b037703b?w=1200&q=85&fit=crop',
        'oheo.png'
    ),  # Hidden waterfall in jungle - mystical fairies
    'nenek-luhu': (
        'https://images.unsplash.com/photo-1448375240586-882707db888b?w=1200&q=85&fit=crop',
        'nenek-luhu.png'
    ),  # Misty mysterious forest
    'asal-usul-talaga-biru': (
        'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1200&q=85&fit=crop',
        'asal-usul-talaga-biru.png'
    ),  # Beautiful crystal blue lake
    'biwar-penakluk-naga': (
        'https://images.unsplash.com/photo-1586348943529-beaae6c28db9?w=1200&q=85&fit=crop',
        'biwar-penakluk-naga.png'
    ),  # Dense tropical swamp jungle - Papua
    'asal-usul-burung-cendrawasih': (
        'https://images.unsplash.com/photo-1444464666168-49d633b86797?w=1200&q=85&fit=crop',
        'asal-usul-burung-cendrawasih.png'
    ),  # Exotic tropical bird - Bird of Paradise
}

MEDIA_FOLDER = r'd:\pustakadigital\media\stories'

# Disable SSL verification for Windows compatibility
ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
}

def download_image(url, dest_path):
    req = urllib.request.Request(url, headers=headers)
    with urllib.request.urlopen(req, context=ctx, timeout=30) as response:
        with open(dest_path, 'wb') as f:
            f.write(response.read())

for slug, (url, filename) in IMAGE_SOURCES.items():
    try:
        story = Story.objects.get(slug=slug)
        dest_path = os.path.join(MEDIA_FOLDER, filename)
        
        print(f'Downloading: {story.title}...', end=' ', flush=True)
        download_image(url, dest_path)
        
        # Update the story's cover_image  
        story.cover_image = f'stories/{filename}'
        story.save()
        
        print(f'OK ({os.path.getsize(dest_path) // 1024} KB)')
    except Story.DoesNotExist:
        print(f'SKIP: Story with slug "{slug}" not found')
    except Exception as e:
        print(f'ERROR: {e}')

print('\nDone! Verifying...')
from folklore.models import Story
missing = Story.objects.filter(cover_image='')
print(f'Stories still missing images: {missing.count()}')
