import os
from django.core.management.base import BaseCommand
from folklore.models import Category, Region, Story
from django.utils.text import slugify

class Command(BaseCommand):
    help = 'Seeds the database with dummy folklore data'

    def handle(self, *args, **kwargs):
        # Create Categories
        categories = ['Legenda', 'Mitos', 'Dongeng', 'Fabel', 'Hikayat']
        cat_objs = {}
        for cat in categories:
            obj, _ = Category.objects.get_or_create(name=cat, slug=slugify(cat))
            cat_objs[cat] = obj
            self.stdout.write(f'Category "{cat}" created.')

        # Create Regions
        regions = ['Sumatra', 'Jawa', 'Bali', 'Sulawesi', 'Kalimantan', 'Papua']
        reg_objs = {}
        for reg in regions:
            obj, _ = Region.objects.get_or_create(name=reg, slug=slugify(reg))
            reg_objs[reg] = obj
            self.stdout.write(f'Region "{reg}" created.')

        # Dummy Stories
        stories_data = [
            {
                'title': 'Legenda Danau Toba',
                'category': 'Legenda',
                'region': 'Sumatra',
                'characters': 'Toba, Samosir, Ibu Samosir',
                'summary': 'Kisah seorang pemuda bernama Toba dan seekor ikan ajaib yang berubah menjadi wanita cantik.',
                'content': 'Dahulu kala di wilayah Sumatra Utara, hiduplah seorang pria bernama Toba. Suatu hari ia menangkap seekor ikan emas besar yang ternyata adalah seorang putri yang dikutuk. Mereka menikah dengan syarat Toba tidak boleh menceritakan asal-usul istrinya. Namun suatu hari Toba melanggar janji tersebut, muncullah mata air yang sangat besar hingga menenggelamkan desa dan menjadi Danau Toba.'
            },
            {
                'title': 'Sangkuriang',
                'category': 'Legenda',
                'region': 'Jawa',
                'characters': 'Sangkuriang, Dayang Sumbi, Tumang',
                'summary': 'Legenda terciptanya Gunung Tangkuban Perahu di Jawa Barat.',
                'content': 'Sangkuriang jatuh cinta pada ibunya sendiri, Dayang Sumbi, tanpa menyadarinya. Dayang Sumbi memberikan syarat mustahil untuk membangun perahu dan danau dalam satu malam. Mengetahui Sangkuriang hampir berhasil, ia berbuat curang agar fajar datang lebih cepat. Sangkuriang marah dan menendang perahu tersebut hingga terbalik menjadi gunung.'
            },
            {
                'title': 'Legenda Calon Arang',
                'category': 'Mitos',
                'region': 'Bali',
                'characters': 'Calon Arang, Empu Bharada, Ratna Manggali',
                'summary': 'Kisah janda sakti penganut ilmu hitam dari Desa Girah.',
                'content': 'Calon Arang adalah seorang janda sakti yang memiliki kitab ilmu hitam. Ia marah karena tidak ada yang berani melamar putrinya dan menyebarkan wabah penyakit. Raja Airlangga kemudian mengutus Empu Bharada untuk menghentikannya.'
            },
            {
                'title': 'Lutung Kasarung',
                'category': 'Dongeng',
                'region': 'Jawa',
                'characters': 'Purbasari, Purbararang, Lutung Kasarung',
                'summary': 'Kisah cinta antara putri kerajaan dan seekor monyet ajaib.',
                'content': 'Putri Purbasari diusir oleh kakaknya yang jahat. Di hutan ia bertemu Lutung Kasarung yang ternyata adalah seorang pangeran tampan yang dikutuk.'
            }
        ]

        for s in stories_data:
            Story.objects.get_or_create(
                title=s['title'],
                slug=slugify(s['title']),
                defaults={
                    'category': cat_objs[s['category']],
                    'region': reg_objs[s['region']],
                    'characters': s['characters'],
                    'summary': s['summary'],
                    'content': s['content']
                }
            )
            self.stdout.write(f'Story "{s["title"]}" created.')

        self.stdout.write(self.style.SUCCESS('Database successfully seeded with dummy data.'))
