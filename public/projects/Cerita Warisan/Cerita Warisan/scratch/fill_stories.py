import os, sys
sys.path.append(r'd:\pustakadigital')
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'config.settings')
import django
django.setup()

from folklore.models import Story

FULL_STORIES = {
    "Hikayat Meurah Pupok": {
        "content": """Pada masa kejayaan Kesultanan Aceh Darussalam di abad ke-17, Sultan Iskandar Muda memerintah dengan tangan besi dan hati yang bersih. Kerajaannya membentang luas, dari ujung Sumatera hingga ke semenanjung Malaka. Ia dikenal di seluruh Nusantara sebagai pemimpin yang bijak, tak kenal kompromi terhadap kejahatan, dan sangat taat pada hukum Allah.

Meurah Pupok adalah putra satu-satunya dari Sultan Iskandar Muda. Sebagai putra mahkota, ia tumbuh dalam kemewahan dan kenyamanan istana. Namun sayangnya, kebebasan dan keistimewaan yang dinikmatinya sejak kecil telah menumbuhkan bibit kesombongan dan kelalaian dalam dirinya. Ia sering mengabaikan nasihat para ulama dan melewati batas-batas yang telah ditetapkan syariat.

Suatu hari yang mengubah segalanya, Meurah Pupok melakukan pelanggaran yang sangat berat. Ia didapati telah berbuat zina, sebuah dosa besar yang dalam hukum Islam memiliki hukuman yang tegas dan jelas. Berita itu segera menyebar ke seluruh istana dan terdengar oleh sang Sultan.

Saat Sultan Iskandar Muda mendengar kabar itu, hatinya terbelah dua. Sebagai seorang ayah, ia sangat mencintai Meurah Pupok. Namun sebagai pemimpin yang beriman, ia sadar bahwa hukum Allah tidak bisa ditawar, tidak untuk siapapun, termasuk darah dagingnya sendiri. Para pembesar istana, para ulama, dan panglima perang mendesak Sultan untuk mempertimbangkan hukuman bagi sang putra mahkota.

Dengan hati yang berat namun tekad yang bulat, Sultan Iskandar Muda memanggil sidang besar. Di hadapan seluruh pembesar kerajaan, ia mengumumkan keputusan yang membuat semua orang terdiam: Meurah Pupok harus menjalani hukuman sesuai syariat. Sultan tidak membiarkan siapapun yang mencoba memohon pengampunan mengubah keputusannya.

"Aku adalah seorang ayah yang mencintai anaknya melebihi segalanya. Namun aku adalah Sultan yang pertama-tama harus tunduk kepada Allah. Jika aku mengampuni anakku sendiri, maka siapa yang akan percaya pada hukum di kerajaan ini?" kata Sultan dengan suara bergetar namun teguh.

Hukuman pun dilaksanakan. Meurah Pupok menerima nasibnya dengan pasrah. Dan Sultan Iskandar Muda, setelah segalanya selesai, turun ke lantai dan menangis sendirian, dalam kesunyian kamarnya yang besar.

Peristiwa itu melahirkan sebuah pepatah Aceh yang hidup hingga kini: "Mate aneuk meupat jeurat, mate adat pat tamita" — yang artinya, "Mati anak ada kuburannya, mati adat di mana dicari." Pepatah ini menjadi pegangan hidup masyarakat Aceh bahwa keadilan dan adat harus dijunjung di atas segalanya, bahkan di atas ikatan darah sekalipun.

Kisah Sultan Iskandar Muda dan Meurah Pupok menjadi legenda abadi tentang keberanian memilih keadilan di atas cinta, dan ketaatan pada Tuhan di atas kepentingan diri sendiri. Hingga kini, kisah ini diajarkan dari generasi ke generasi sebagai cermin kepemimpinan sejati."""
    },
    "Legenda Danau Toba": {
        "content": """Di lereng-lereng hijau tanah Batak, jauh sebelum ada desa dan jalan, hiduplah seorang pemuda dusun bernama Toba. Ia hidup sendiri di sebuah pondok kecil dekat sungai jernih. Setiap hari ia berladang, memancing, dan menjalani hidupnya yang tenang dalam kesederhanaan.

Suatu sore, Toba melempar jala ke sungai seperti biasanya. Kali ini, saat ia menarik jala, ada sesuatu yang berat dan tak biasa. Ketika ia mengangkatnya ke darat, ia tertegun melihat seekor ikan emas yang berkilauan. Sisiknya bersinar seperti permata, dan matanya tampak memancarkan kecerdasan yang tidak biasa pada ikan biasa.

"Lepaskan aku, Toba," kata ikan itu dengan suara yang mengalun lembut, membuat Toba melompat kaget. "Aku bukan ikan sembarangan. Jika kau melepaskanku, aku berjanji akan membalasnya dengan kebaikan yang tak terduga."

Toba, dengan hati yang baik, melepaskan ikan itu kembali ke sungai. Ia pulang ke pondok dengan tangan kosong namun perasaan hangat di dada.

Keesokan paginya, Toba terbangun oleh aroma masakan yang harum dari dapur pondoknya. Saat ia membuka pintu, ia terpaku melihat seorang wanita muda yang sangat cantik sedang memasak di sana. Rambutnya hitam legam, kulitnya bersinar, dan senyumnya seperti fajar pagi.

"Aku adalah ikan yang kau lepaskan kemarin," kata wanita itu dengan tenang. "Aku adalah jelmaan dari alam, dan karena kebaikanmu, aku memilih untuk menemanimu sebagai istri. Namun ada satu syarat yang harus kau jaga seumur hidup: jangan pernah mengungkit asal-usulku. Jangan pernah menyebutku atau anak kita sebagai keturunan ikan."

Toba bersumpah dengan sepenuh jiwanya untuk menjaga rahasia itu. Mereka menikah dan hidup bahagia. Setahun kemudian, lahirlah seorang anak laki-laki yang mereka beri nama Samosir. Anak itu tumbuh cerdas dan perkasa, namun memiliki satu kelemahan: nafsu makannya yang besar selalu membuatnya memakan habis bekal yang disediakan ibunya.

Suatu hari, ibu Samosir menyiapkan bekal makan siang untuk sang ayah di ladang. Samosir ditugasi mengantarkannya. Namun di perjalanan, aroma makanan itu terlalu menggoda. Samosir memakan semua bekal itu sebelum sampai ke ladang.

Toba yang lapar dan lelah menunggu dengan sia-sia. Ketika Samosir akhirnya tiba dengan tangan kosong, kemarahan Toba meledak. Tanpa sadar, tanpa ingat sumpahnya, ia berteriak keras dalam amarah:

"Dasar anak ikan! Tidak berguna seperti ibumu yang juga ikan!"

Seketika, langit berubah gelap. Kilat menyambar dari utara ke selatan. Samosir berlari pulang menghilang. Tanah di bawah kaki Toba mulai bergetar dan amblas. Air menyembur dari dalam bumi dengan deras yang tak terbendung. Istri Toba berdiri di tepi dengan mata penuh kesedihan, lalu perlahan hilang bersama derasnya banjir.

Dalam hitungan hari, seluruh lembah itu tenggelam menjadi danau yang sangat besar. Di tengah danau, muncullah sebuah pulau. Toba tak pernah kembali. Namanya melekat pada danau itu selamanya: Danau Toba. Dan pulau di tengahnya dinamakan Samosir, sebagai pengingat abadi akan anak yang menjadi penyebab musibah dan keajaiban yang menyertainya."""
    },
    "Malin Kundang": {
        "content": """Di tepi pantai Air Manis yang tenang, di kaki Bukit Gunung Padang, hiduplah seorang janda tua bernama Mande Rubayah bersama anak satu-satunya yang ia panggil Malin Kundang. Hidup mereka sangat sederhana. Mande Rubayah bekerja membuat kue dan menjualnya di pasar, sementara Malin membantu seadanya sejak masih kecil.

Malin Kundang tumbuh menjadi pemuda tampan dengan semangat yang membara. Ia tidak ingin seumur hidupnya hanya tinggal di desa kecil itu. Tekadnya bulat: ia ingin pergi merantau, mencari peruntungan di negeri orang, dan kembali membawa kemuliaan untuk sang ibu.

"Ibu, izinkanlah Malin pergi merantau," pintanya suatu pagi. "Malin tidak ingin melihat Ibu bekerja keras seumur hidup. Malin akan kembali dengan kekayaan dan kehormatan."

Mande Rubayah memeluk anaknya lama sekali. Air mata mengalir di pipinya yang keriput. Ia tahu putaran roda kehidupan tak bisa ditahan. Akhirnya ia melepas Malin dengan bekal seadanya dan doa yang tak pernah putus.

Bertahun-tahun berlalu. Malin Kundang merantau dari satu pelabuhan ke pelabuhan lain. Ia bekerja keras, berdagang, dan pelan-pelan membangun keberuntungannya. Ia menikahi seorang wanita cantik dari keluarga kaya, anak seorang saudagar besar. Kapalnya kini berlayar di bawah benderanya sendiri, membawa muatan berlimpah dari satu pulau ke pulau lain. Namanya dikenal di mana-mana sebagai saudagar sukses dan tampan.

Namun seiring kekayaan yang datang, ingatan akan kampung halaman semakin pudar dalam benaknya. Ia terlalu sibuk menjaga citra di hadapan istrinya yang terhormat dan rekan-rekan bisnisnya yang kaya.

Suatu hari, angin membawa kapal Malin Kundang kembali ke Pantai Air Manis. Penduduk kampung yang mengenalinya segera bersorak dan berlari melapor ke Mande Rubayah.

"Ibu! Malin Kundang pulang! Ia sudah kaya raya!"

Mande Rubayah yang sudah tua berlari sekuat tenaga ke pantai. Matanya berkaca-kaca. Ia memeluk Malin di tengah kerumunan orang banyak.

"Malin, anakku... Ini ibumu, nak. Ibu sudah lama menunggumu."

Malin Kundang membeku. Ia melirik ke arah istrinya yang berdiri dengan ekspresi heran. Rasa malu menguasai dirinya. Ia melihat ibunya: tua, kurus, dengan pakaian lusuh yang compang-camping. Bagaimana ia bisa mengakui wanita seperti ini di hadapan istrinya yang mulia?

Dengan suara dingin dan keras, Malin Kundang berkata, "Aku tidak mengenalmu, perempuan tua. Kau salah orang. Aku bukan anakmu."

Mande Rubayah terdiam. Napasnya sesak. Airmata mengalir deras tak terbendung.

"Malin... ini Ibu, nak. Apakah kau sudah lupa ibumu sendiri?"

"Nyingkir kau! Ibuku sudah lama mati!" teriak Malin, mendorong sang ibu hingga terjatuh.

Wanita tua itu berdiri perlahan. Wajahnya penuh luka yang jauh lebih dalam dari luka fisik. Ia mengangkat kedua tangannya ke langit dan berdoa dengan suara serak namun penuh keyakinan.

"Ya Allah, jika memang benar ini anakku, dan ia telah durhaka kepadaku, tunjukkanlah kuasamu. Jika ia bukan anakku, ampunilah aku yang telah berburuk sangka."

Seketika mendung hitam menggumpal. Ombak yang tadinya tenang tiba-tiba mengamuk. Badai dahsyat menerjang dari arah laut. Kapal Malin Kundang terguncang hebat, diombang-ambing gelombang raksasa. Dan saat petir terakhir menyambar, tubuh Malin Kundang bersama kapalnya perlahan membeku menjadi batu.

Hingga hari ini, di Pantai Air Manis, Padang, Sumatera Barat, dapat dilihat batu karang berbentuk manusia yang meringkuk berlutut di tepi pantai. Masyarakat setempat menyebutnya Batu Malin Kundang — pengingat abadi bahwa durhaka pada orang tua adalah dosa yang tidak akan pernah dibiarkan begitu saja oleh Sang Pencipta."""
    },
    "Putri Kaca Mayang": {
        "content": """Di jantung hutan rimba yang lebat di tepi Sungai Siak, berdiri Kerajaan Gasib yang subur dan makmur. Rajanya yang bijak memiliki seorang putri bernama Kaca Mayang, yang kecantikannya terkenal hingga ke ujung-ujung negeri. Matanya bersinar seperti kaca yang memantulkan cahaya bulan, dan suaranya merdu bak gamelan yang dimainkan angin.

Berita tentang kecantikan Putri Kaca Mayang terdengar hingga ke Kerajaan Aceh yang perkasa di ujung barat Sumatera. Raja Aceh yang ambisius memutuskan bahwa ia harus memiliki putri itu sebagai permaisurinya. Ia mengutus seorang duta besar dengan hadiah-hadiah mewah untuk melamar Putri Kaca Mayang.

Namun Putri Kaca Mayang menolak lamaran itu dengan halus namun pasti. Ia sudah memiliki kekasih hatinya sendiri: seorang panglima gagah dari kerajaan tetangga yang setia dan jujur. Penolakan itu menyulut amarah Raja Aceh yang tidak terbiasa ditolak.

Berbulan kemudian, armada perang Aceh berlayar menuju Kerajaan Gasib. Pertempuran sengit terjadi di darat dan di sungai. Pasukan Gasib berjuang mati-matian, namun mereka kalah jumlah dan persenjataan. Kerajaan Gasib pun jatuh.

Putri Kaca Mayang berhasil ditawan dan dibawa ke atas kapal kerajaan Aceh. Saat kapal hendak berlayar, Panglima Gimpam, sang kekasih Putri Kaca Mayang, muncul dengan pasukan kecilnya yang tersisa. Ia berhasil menyerbu kapal dan membebaskan sang Putri di tengah malam yang kelam.

Mereka melarikan diri menyusuri sungai dan hutan belantara. Namun perjalanan yang berat, luka-luka akibat pertempuran, dan penyakit yang mendera dalam kerasnya hutan tropis akhirnya menggerogoti tubuh Putri Kaca Mayang yang lemah. Dalam pelukan Panglima Gimpam di bawah naungan pohon-pohon besar yang menjulang, Putri Kaca Mayang menghembuskan nafas terakhirnya.

"Jangan tangisi aku, Gimpam. Aku mati bebas, bukan mati dalam belenggu. Itu sudah lebih dari cukup," bisiknya sebelum matanya terpejam untuk selamanya.

Panglima Gimpam memakamkan sang Putri dengan penuh hormat di tepi sungai yang rindang. Ia mewariskan kenangan tentang Putri Kaca Mayang kepada masyarakat Riau: bahwa kebebasan dan kesetiaan adalah dua nilai tertinggi yang layak diperjuangkan sampai titik darah penghabisan.

Nama Putri Kaca Mayang kini diabadikan dalam berbagai kesenian dan upacara adat Melayu Riau. Ia menjadi simbol keanggunan, keberanian, dan cinta yang tak tergoyahkan oleh tekanan apapun."""
    },
    "Putri Tangguk": {
        "content": """Dahulu kala di tanah Jambi yang hijau subur, hiduplah sepasang suami istri yang diberkahi sawah luas membentang hingga ke cakrawala. Sang istri yang cantik dan gesit itu dikenal orang-orang sekelilingnya dengan nama Putri Tangguk. Ia mendapat julukan itu karena ia menggunakan tangguk — keranjang anyaman rotan — untuk membawa hasil panen padinya yang melimpah.

Panen demi panen berlimpah ruah. Lumbung mereka selalu penuh, bahkan sering kelebihan. Berkat yang datang setiap musim membuat Putri Tangguk lupa bersyukur dan perlahan membuat hatinya menjadi congkak.

"Ah, betapa lelahnya membawa padi ke rumah," keluhnya suatu hari saat hujan lebat turun dan jalan setapak menuju sawah becek berlumpur. "Daripada repot-repot, lebih baik kita gunakan saja padi ini untuk menutup jalan yang becek ini!"

Suaminya terkejut. "Jangan, istriku. Padi adalah rezeki yang harus kita syukuri. Tidak pantas kita menginjaknya."

"Apa salahnya?" jawab Putri Tangguk dengan sombong. "Toh kita punya banyak sekali. Tahun depan pasti panen lagi."

Dan dengan tangan sendiri, Putri Tangguk menghamburkan ratusan ikat padi di atas jalan berlumpur itu. Para tetangga menyaksikan dengan ngeri namun tak berani berkata apa-apa.

Malam itu, dalam tidurnya, Putri Tangguk bermimpi aneh. Ia berada di sebuah ladang yang luas di bawah langit yang indah. Ribuan malai padi yang biasanya merunduk penuh biji kini tampak tegak kosong. Lalu tiba-tiba seluruh padi itu bergerak, berbaris, dan berjalan pergi meninggalkannya.

"Kami pergi," kata padi-padi itu dalam suara gemuruh. "Engkau tidak menghargai kami. Engkau menginjak-injak kami di lumpur. Kami tidak akan pernah kembali ke lumbungmu."

Putri Tangguk terbangun dalam peluh dingin. Ia berlari ke lumbung, dan dengan ngeri mendapatinya kosong melompong. Ia berlari ke sawah, dan mendapati semua padi telah menghilang. Tidak ada satu malai pun yang tersisa. Hanya tanah kosong yang membentang sunyi.

Bertahun-tahun setelah itu, sebesar apapun usaha Putri Tangguk bercocok tanam, padinya tidak pernah tumbuh dengan baik lagi. Hidupnya jatuh dalam kemiskinan yang dalam. Penyesalan yang terlambat menjadi pelajaran hidupnya yang paling mahal.

Kisah Putri Tangguk menjadi warisan moral yang dijaga masyarakat Jambi: jangan pernah membuang makanan, terutama padi yang merupakan sumber kehidupan. Jangan pernah congkak atas nikmat yang datang, karena rezeki bisa pergi secepat datangnya. Dan pelajaran terpenting: rasa syukur bukan hanya kata-kata, melainkan harus tercermin dalam setiap tindakan kita."""
    },
    "Si Pahit Lidah": {
        "content": """Jauh di pedalaman hutan Sumatera Selatan, di lereng Bukit Barisan yang berkabut, hiduplah seorang ksatria muda bernama Serunting. Ia berasal dari keluarga baik-baik dan memiliki adik ipar bernama Aria Tebing yang sama-sama dikenal sebagai petani handal.

Suatu hari, sebuah pertengkaran kecil membakar hubungan mereka. Aria Tebing secara tidak sengaja mengolok-olok Serunting di depan banyak orang, merendahkan hasil ladangnya dan memuji-muji dirinya sendiri. Api kemarahan dan rasa malu berkobar dalam dada Serunting. Ia pergi meninggalkan desa tanpa sepatah kata, menghilang ke dalam hutan belantara.

Berbulan-bulan Serunting bertapa di bawah pohon bambu raksasa yang keramat di tepi jurang terjal. Ia menahan lapar dan dahaga, merenungkan hidupnya, memohon kepada kekuatan alam untuk memberikannya sesuatu yang tidak dimiliki orang lain. Hujan dan panas silih berganti, namun tekadnya tidak goyah.

Suatu malam, saat bulan purnama bersinar di atas hutan, Serunting merasakan getaran aneh di seluruh tubuhnya. Sebuah suara bergema dari kedalaman bumi: "Engkau telah diberikan anugerah. Setiap kata yang keluar dari mulutmu akan menjadi kenyataan."

Serunting kembali ke dunia manusia dengan kekuatan yang mengubah hidupnya selamanya. Pertama kali ia mencoba kekuatannya: ia menunjuk sebuah batu dan berkata, "Jadilah emas!" Dan batu itu berkilau menjadi emas. Ia menunjuk pohon kering, "Jadilah buah lebat!" Dan pohon itu langsung berbuah.

Namun kepahitan hatinya masih ada. Ketika ia bertemu dengan musuh-musuhnya, kata-kata yang keluar adalah kutukan. Ia berjalan melintasi kampung-kampung, dan dengan satu ucapan saja ia bisa mengubah manusia menjadi batu, mengubah rumah menjadi puing, mengubah kebun menjadi padang gersang.

Di manapun ia melangkah, orang-orang gemetar ketakutan. Mereka memanggilinya: "Si Pahit Lidah" — sang Pahit Lidah — karena setiap kata darinya bisa menjadi racun atau penawar, tergantung keadaan hatinya saat itu.

Suatu hari ia kembali ke kampung asalnya. Aria Tebing, adik iparnya, sudah lama menyesal atas perbuatannya. Ia menyambut Serunting dengan penuh hormat dan memohon maaf. Serunting memandangnya lama, dan untuk pertama kalinya setelah sekian lama, ia tersenyum.

"Maaf itu lebih berharga dari emas," kata Serunting. "Mulai hari ini, kutukan itu tidak akan jatuh lagi di antara kita."

Cerita Si Pahit Lidah menyebar ke seluruh Sumatera Selatan dan Bengkulu. Bebatuan aneh yang tersebar di berbagai tempat di pegunungan dipercaya masyarakat sebagai orang-orang yang pernah dikutuk oleh Si Pahit Lidah. Ia menjadi legenda tentang kekuatan ucapan — bahwa setiap kata yang kita keluarkan memiliki dampak, dan hati yang pahit hanya akan melahirkan kata-kata yang pahit pula."""
    },
    "Ular N'daung": {
        "content": """Di sebuah desa kecil di kaki Bukit Barisan Bengkulu, hiduplah seorang ibu dengan tiga orang putrinya. Suami mereka telah lama tiada, meninggalkan mereka dalam kesederhanaan yang damai namun tidak kekurangan.

Suatu musim, sang ibu jatuh sakit keras. Demamnya tidak turun berhari-hari dan tidak ada obat di desa yang mampu menyembuhkannya. Tabib desa akhirnya memberikan kabar yang mengejutkan: satu-satunya obat yang bisa menyembuhkan adalah ramuan dari sarang Ular N'daung, seekor ular raksasa yang tinggal jauh di dalam hutan keramat yang tak pernah dijamah manusia.

"Siapa yang berani pergi ke sana?" tanya sang tabib. "Banyak yang sudah mencoba dan tidak pernah kembali."

Dua putri tertua menolak dengan alasan takut. Namun si bungsu, gadis lembut yang paling dicintai ibunya, bangkit dan berkata dengan suara yang tenang namun mantap: "Aku akan pergi. Untuk Ibu, aku berani."

Perjalanan si bungsu melewati hutan-hutan gelap, sungai berbatu, dan jurang curam. Setelah tiga hari berjalan, ia menemukan sebuah gua besar yang diterangi cahaya biru aneh dari dalam. Di mulut gua, melingkar dengan kepala terangkat tinggi, adalah Ular N'daung: tubuhnya sebesar batang pohon banyan, sisiknya hijau berkilau, dan matanya menyala seperti permata.

Si bungsu tidak lari. Ia berdiri tegak, memberi salam hormat, dan menceritakan kondisi ibunya dengan jujur.

Ular N'daung menatapnya lama dalam diam. Kemudian ia berkata dengan suara yang menggetarkan dinding gua: "Gadis manusia, banyak yang datang ke sini memohon dengan bujukan dan kebohongan. Kamu datang dengan kejujuran dan cinta kepada ibumu. Aku akan memberikan ramuan itu, dengan satu syarat."

"Syarat apapun akan aku penuhi," jawab si bungsu.

"Kamu harus tinggal di sini menemaniku selama tiga bulan."

Si bungsu menelan ludah, namun ia mengangguk setuju. Ia tinggal di gua bersama Ular N'daung. Dan seiring waktu, ia menyadari bahwa sang ular ternyata makhluk yang sangat bijak, baik hati, dan kesepian. Ia mengajarkan si bungsu tentang tanaman obat, tentang bintang-bintang, tentang rahasia hutan.

Pada bulan ketiga, di malam purnama, Ular N'daung berkata: "Saatnya kamu pulang. Ambil ramuan ini untuk ibumu."

"Tapi bagaimana denganmu?" tanya si bungsu.

"Aku... sebenarnya adalah seorang pangeran," kesah Ular N'daung. "Ratusan tahun lalu, seorang penyihir jahat mengutukku menjadi ular karena aku menolak tunduk padanya. Hanya ketulusan hati seorang manusia yang bisa membebaskanku. Dan kamu... kamu adalah orang pertama yang mau menemaniku tanpa rasa takut dan tanpa motif licik."

Si bungsu memegang kepala sang ular dengan lembut, dan seketika kilat memancar dari langit. Ular N'daung berubah menjadi seorang pangeran tampan yang gagah. Mereka berdua kembali ke desa, ibunya sembuh, dan si bungsu serta sang Pangeran N'daung hidup bersama dalam cinta yang tulus hingga akhir hayat mereka."""
    },
    "Raden Jambat": {
        "content": """Di tepi Way Tulangbawang yang mengalir tenang di tanah Lampung, berdirilah Kerajaan Tulangbawang yang megah dan makmur. Di kerajaan itu lahirlah seorang pangeran yang kelak menjadi legenda: Raden Jambat. Sejak kecil ia menunjukkan tanda-tanda keistimewaan: kuat melampaui anak-anak seusianya, cerdas, dan memiliki ilmu batin yang dalam.

Ketika menginjak dewasa, Raden Jambat jatuh cinta pada Putri Betik Hati, gadis jelita yang tinggal di kerajaan seberang sungai yang dikenal jahat dan tertutup. Sang raja di kerajaan itu tidak pernah mengizinkan siapapun mendekati putrinya, dan menjaga istananya dengan para penjaga sakti dan makhluk-makhluk gaib.

Raden Jambat memutuskan untuk pergi sendiri mencari sang Putri. Ibunya, Ratu Tulangbawang, melarangnya dengan air mata yang jatuh berderai. Namun tekad sang pangeran sudah bulat.

"Ibu, tanpa Putri Betik Hati, hidupku tidak sempurna. Aku akan pergi dan aku berjanji akan kembali," katanya sambil mencium tangan ibunya.

Perjalanan Raden Jambat penuh ujian. Pertama, ia harus melewati Hutan Gaib tempat pohon-pohon bisa bergerak dan menghalangi jalan. Dengan ketenangan dan kemampuannya berbicara dengan alam, ia berhasil meminta izin kepada roh hutan untuk lewat.

Kedua, ia harus menghadapi Buaya Raksasa penguasa Sungai Mesuji yang meminta tumbal. Raden Jambat tidak mau memberi tumbal manusia. Ia menantang sang Buaya dalam adu kekuatan, dan dengan ilmu tenaga dalamnya yang luar biasa, ia berhasil menaklukkan sang Buaya.

Ketiga, dan yang paling berat, ia harus menghadapi Harimau Putih penjaga gerbang kerajaan musuh. Harimau itu terbesar dan terkuat yang pernah ia lihat. Namun Raden Jambat tidak menyerangnya — sebaliknya, ia duduk bersila dan berdoa. Harimau itu, merasa diperlakukan dengan hormat, membiarkannya lewat.

Di dalam istana, Raden Jambat akhirnya bertemu Putri Betik Hati. Namun sang Raja segera menangkap dan memenjarakannya. Malam itu, Putri Betik Hati sendiri yang membebaskan Raden Jambat dan mereka melarikan diri bersama di bawah selimut malam.

Mereka kembali ke Tulangbawang dan menikah dalam upacara kebesaran yang dihadiri seluruh rakyat. Raden Jambat kelak menjadi raja yang dicintai dan bijaksana, dan kisahnya menjadi inspirasi bagi seluruh masyarakat Lampung tentang keberanian, ketekunan, dan kekuatan cinta yang tulus."""
    },
    "Si Pitung": {
        "content": """Jakarta, abad ke-19. Di bawah cengkeraman penjajahan Belanda yang kejam, rakyat Betawi menjalani hidup dalam ketakutan dan kemiskinan. Pajak mencekik leher, tuan tanah sewenang-wenang, dan kompeni memungut upeti tidak berperikemanusiaan. Di sinilah lahirnya legenda bernama Si Pitung.

Pitung tumbuh di Rawabelong, Pesanggrahan. Sejak kecil ia dikenal anak yang saleh, rajin mengaji, dan berbakti kepada orang tua. Ia belajar pencak silat dari Haji Naipin, guru besar yang disegani di seluruh Betawi. Tidak hanya ilmu bela diri, Haji Naipin juga mengajarkan Pitung tentang keadilan, rasa belas kasih, dan keberanian membela kaum lemah.

Suatu hari, Pitung menyaksikan dengan mata kepala sendiri bagaimana seorang anak petani dipukuli oleh mandor Belanda hanya karena terlambat menyetor hasil panen. Darah Pitung mendidih. Sejak saat itu, ia memutuskan untuk melakukan sesuatu.

Pitung mulai merampok rumah-rumah tuan tanah kaya dan pejabat Belanda yang korup. Ia masuk dan keluar seperti angin, tidak meninggalkan jejak, dan selalu membagi-bagikan hasil rampokannya kepada rakyat miskin yang kelaparan. Namanya menjadi legenda dalam sekejap.

"Pitung bukan perampok," kata rakyat. "Ia adalah pahlawan kami."

Schout (kepala polisi) Belanda bernama Heyne Scott menjadi musuh besarnya. Scott menawarkan hadiah besar bagi siapapun yang bisa menangkap Pitung hidup atau mati. Berkali-kali ia mencoba menjebak Pitung, namun sang pejuang selalu lolos.

Dipercaya bahwa Pitung memiliki ilmu kebal. Peluru tidak bisa menembusnya karena ia selalu membaca doa-doa sebelum beraksi. Ia bisa menghilang dari pandangan musuh. Ia bisa berlari secepat angin.

Perang antara Pitung dan kompeni berlangsung lama. Belanda menggunakan segala cara: memata-matai keluarganya, menyewa penghianat dari dalam komunitas Betawi, bahkan menangkap Hajib, bapaknya, untuk dijadikan umpan.

Akhirnya, melalui pengkhianatan seorang orang dalam yang mengetahui jimat kebal Pitung, Heyne Scott berhasil menembak Pitung saat ia sedang salat. Pitung gugur sebagai pahlawan rakyat Betawi yang paling dicintai.

Namun legenda Pitung tidak mati bersama jasadnya. Ia hidup dalam cerita-cerita yang dituturkan dari bibir ke bibir, dalam seni lenong dan gambang kromong, dalam kenangan kolektif orang Betawi yang bangga. Si Pitung adalah lambang keberanian rakyat kecil melawan penindasan, dan namanya akan selalu diingat selama tanah Betawi masih ada."""
    },
    "Sangkuriang": {
        "content": """Di tanah Pasundan yang hijau, di kaki Gunung Burangrang, hiduplah seorang putri cantik bernama Dayang Sumbi yang gemar menenun. Suatu hari, gulungan benangnya jatuh ke dalam jurang. Dalam kegalauan, ia bersumpah akan menikah dengan siapapun yang mau mengambilkannya, baik manusia maupun hewan.

Seekor anjing jantan berbulu hitam bernama Tumang mengambilkan benang itu. Dayang Sumbi menepati janjinya — Tumang sebenarnya adalah dewa yang dikutuk menjadi anjing — dan dari persatuan itulah lahir seorang bayi laki-laki yang dinamakan Sangkuriang.

Sangkuriang tumbuh menjadi pemuda yang gagah dan kuat. Suatu hari, ia pergi berburu bersama Tumang. Namun Tumang enggan mengejar babi hutan buruan Sangkuriang. Sangkuriang yang marah membunuh Tumang dan membawa dagingnya pulang, lalu menyuruh ibunya memasak.

Ketika Dayang Sumbi mengetahui bahwa daging yang ia masak adalah daging Tumang, sang suami yang dikutuk itu, ia terkejut dan marah besar. Dalam kemarahannya, ia memukul kepala Sangkuriang hingga berbekas luka. Sangkuriang yang malu dan marah pun pergi meninggalkan rumah.

Bertahun-tahun Sangkuriang mengembara. Tanpa ia sadari, dalam pengembaraannya itu ia telah berputar dan kembali ke tanah kelahirannya. Di tepi sungai, ia bertemu seorang wanita yang sangat cantik dan jatuh hati. Wanita itu adalah Dayang Sumbi sendiri. Karena kesaktiannya, Dayang Sumbi tidak pernah menua.

Mereka jatuh cinta dan Sangkuriang melamarnya. Namun saat Dayang Sumbi melihat bekas luka di kepala Sangkuriang, ia tersadar dengan ngeri: pemuda ini adalah anaknya sendiri!

Dayang Sumbi berusaha menolak tanpa memberitahu alasan sebenarnya. Ia mengajukan syarat yang tampak mustahil: Sangkuriang harus membuat sebuah danau besar beserta perahu besar dalam satu malam sebelum fajar menyingsing.

Sangkuriang menyanggupi. Dengan kekuatan gaibnya, ia memanggil para jin dan makhluk alam untuk membantu. Danau pun mulai terisi air. Perahu hampir selesai dipahat dari sebatang pohon besar.

Dayang Sumbi panik. Dengan cerdik, ia membangunkan seluruh wanita di desa untuk menumbuk padi agar suaranya meniru suara ayam berkokok tanda fajar tiba. Ayam-ayam pun benar-benar ikut berkokok.

Sangkuriang terkejut. Ia memandang langit yang masih gelap dengan wajah penuh kemarahan. Ia merasa diperdaya. Dalam amarah yang meledak-ledak, ia menendang perahu besar itu sekuat tenaga. Perahu itu terbang berputar di udara dan jatuh terbalik, membentuk gunung. Gunung itulah yang kini kita kenal sebagai Gunung Tangkuban Perahu — gunung yang bentuknya menyerupai perahu terbalik.

Sementara lobang bekas pembuatan danau itu kini menjadi Danau Bandung purba. Sangkuriang menghilang dalam amarah. Dayang Sumbi menghilang ke dalam kabut pegunungan. Dan gunung Tangkuban Perahu berdiri kokoh selamanya sebagai saksi bisu cinta terlarang yang tragis itu."""
    },
    "Roro Jonggrang": {
        "content": """Di Kerajaan Prambanan yang kaya dan makmur, hiduplah seorang putri yang kecantikannya melampaui batas nalar manusia: Roro Jonggrang, putri mahkota Raja Boko. Kulit putihnya bersinar seperti bulan, dan senyumnya bisa membuat panglima perang yang paling garang sekalipun kehilangan ketenangan.

Setelah Raja Boko dikalahkan dan gugur dalam pertempuran melawan Kerajaan Pengging, seluruh wilayahnya jatuh ke tangan Bandung Bondowoso, pangeran Pengging yang sakti mandraguna. Saat Bandung pertama kali melihat Roro Jonggrang, ia langsung jatuh cinta tanpa daya.

"Jadilah permaisuriku," kata Bandung dengan penuh keyakinan.

Roro Jonggrang tidak ingin menikah dengan orang yang membunuh ayahnya. Namun menolak secara langsung bisa berbahaya. Ia berpikir keras, lalu tersenyum tipis.

"Baiklah, aku akan menerimamu. Dengan satu syarat: bangunkan aku seribu candi dalam satu malam, sebelum ayam berkokok menandai fajar."

Bandung Bondowoso tertawa mantap. "Seribu candi dalam satu malam? Baik, aku sanggupi."

Malam turun. Bandung Bondowoso bersila di tengah lapangan terbuka dan bersemadi. Ia memanggil seluruh roh dan jin dari seluruh penjuru alam. Ribuan makhluk gaib muncul, berbaris menunggu perintah. Pekerjaan dimulai. Batu-batu besar diterbangkan dari gunung-gunung jauh, dipahat, dan disusun dengan kecepatan yang mustahil bagi tangan manusia.

Roro Jonggrang mengamati dari balik tirai jendela istana dengan perasaan campur aduk. Ia menghitung dalam hati: candi ke-500, ke-700, ke-900... Pekerjaan itu berlangsung luar biasa cepat. Menjelang tengah malam, sudah 999 candi berdiri tegak berjejer. Hanya tinggal satu lagi.

Roro Jonggrang panik. Ia memerintahkan seluruh dayang-dayang dan wanita di istana untuk segera pergi ke dapur, menumbuk lesung sekeras-kerasnya hingga suaranya bergema seperti gong besar. Ia juga membakar jerami di sisi timur, menciptakan cahaya merah yang meniru cahaya fajar.

Satu demi satu, ayam-ayam di seluruh Prambanan terbangun dan berkokok. Para jin dan roh yang bekerja mendadak berhenti. Mereka berlompatan dan menghilang ke alam mereka masing-masing, meninggalkan candi ke-1000 yang belum selesai.

Bandung Bondowoso melihat langit masih gelap. Ia tahu ia telah diperdaya. Amarah yang meluap-luap membutakan matanya. Ia menghadap Roro Jonggrang dengan wajah merah membara.

"Kamu curang! Kamu yang menipu aku!"

"Aku hanya seorang wanita yang tidak ingin menikah dengan pembunuh ayahnya," jawab Roro Jonggrang dengan tenang namun dingin.

"Baik! Jadilah kamu candi itu sendiri!"

Sebuah kekuatan dahsyat memancar dari tangan Bandung Bondowoso. Dan di depan mata semua orang, Roro Jonggrang perlahan berubah menjadi batu, menjadi arca yang cantik dan anggun yang menghiasi Candi Prambanan ke-1000.

Itulah mengapa hingga hari ini, di Kompleks Candi Prambanan yang megah di Yogyakarta, terdapat arca Roro Jonggrang yang berdiri abadi di salah satu sudut candi terindah. Ia menjadi penjaga abadi dari sebuah kisah cinta dan pengkhianatan yang tak pernah terlupakan."""
    },
    "Asal Usul Surabaya": {
        "content": """Dahulu kala, jauh sebelum manusia membangun rumah dan jalan di tepi sungai Kalimas, lautan dan daratan masih bersatu dalam satu ekosistem yang liar dan bebas. Di sinilah dua makhluk paling perkasa saling bersaing menguasai wilayah: Sura, ikan hiu putih yang gagah perkasa, dan Baya, buaya raksasa yang licik dan kuat.

Sura adalah penguasa lautan. Tubuhnya putih seperti dinding karang, giginya tajam seperti pisau baja, dan ia bisa melibas apapun yang berani melintasi wilayahnya. Tidak ada makhluk laut yang berani mendekatinya tanpa izin.

Baya adalah penguasa sungai dan daratan dekat air. Tubuhnya besar seperti batang pohon, kulitnya tebal seperti baju zirah, dan rahangnya bisa menghancurkan tulang sebesar lengan manusia. Para buaya kecil tunduk padanya, dan binatang darat apapun tidak berani mendekat ke tepi sungai kekuasaannya.

Namun masalah muncul ketika keduanya sama-sama menginginkan daerah muara — di mana sungai bertemu laut. Di muara itu, ikan-ikan berkumpul berlimpah, dan mangsa selalu tersedia sepanjang waktu.

"Ini wilayahku!" teriak Sura. "Muara adalah bagian dari laut!"

"Tidak!" balas Baya. "Muara adalah ujung sungai, dan itu wilayahku!"

Pertarungan pertama berlangsung sengit. Keduanya luka-luka namun tidak ada yang menang atau kalah. Akhirnya mereka sepakat membuat perjanjian untuk mengakhiri pertumpahan darah: Sura mendapat wilayah lautan sepenuhnya, dan Baya mendapat seluruh daratan. Muara menjadi batas yang tidak boleh dilanggar.

Awalnya perjanjian itu berjalan baik. Sura kembali menguasai lautan yang luas, Baya memimpin daratan dengan bebas. Namun Sura tidak betah. Air laut terasa membosankan. Ia mulai diam-diam berenang masuk ke muara sungai, lalu semakin ke dalam, mencuri mangsa di wilayah Baya.

Baya mengetahuinya. Amarahnya meledak dahsyat.

"Kamu telah melanggar perjanjian kita!"

"Aku tidak melanggar apa-apa. Selama aku masih di dalam air, itu adalah wilayahku!" kilah Sura dengan licik.

Pertarungan kedua pun terjadi, jauh lebih dahsyat dari yang pertama. Sura menggigit ekor Baya, Baya mencengkeram sirip Sura. Mereka berputar-putar dalam air yang kian memerah oleh darah keduanya. Guncangan pertarungan mereka terasa hingga ke daratan, membuat tanah bergetar.

Akhirnya Baya berhasil menggigit ekor Sura hampir putus. Kesakitan, Sura melepas diri dan melesat kembali ke laut dalam. Ia tidak pernah kembali ke sungai lagi.

Kemenangan itu dirayakan seluruh makhluk daratan. Dan dari situlah, gabungan nama Sura dan Baya menjadi nama kota yang berdiri di tempat pertarungan itu: Surabaya. Kota Pahlawan yang kini menjadi kota terbesar kedua di Indonesia, menyimpan dalam namanya sebuah kisah tentang sengketa wilayah dan keberanian."""
    },
    "Jayaprana dan Layonsari": {
        "content": """Di Kerajaan Kalianget, Bali Utara, hiduplah seorang pemuda yatim piatu bernama Jayaprana. Sejak kecil ia hidup di jalanan hingga kebaikan hati Raja Kalianget memungutnya menjadi abdi istana. Jayaprana tumbuh menjadi pemuda yang tampan, setia, dan sangat dicintai sang Raja seperti anak kandung sendiri.

Ketika dewasa, Jayaprana jatuh cinta pada Layonsari, gadis jelita dari desa nelayan di pesisir. Kecantikan Layonsari memang sudah terkenal di seantero kerajaan: matanya seperti bintang fajar, langkah kakinya seperti tarian merak, dan suaranya merdu melampaui seruling dari bambu paling halus.

Raja Kalianget mengizinkan pernikahan itu dengan hati yang berbahagia. Upacara pernikahan dirayakan dengan meriah dan megah. Keduanya hidup bahagia di sebuah rumah cantik pemberian sang Raja.

Namun kebahagiaan itu tidak bertahan lama. Raja Kalianget yang sudah tua dan kesepian, saat melihat Layonsari melayani suaminya dengan penuh kasih dan senyum yang mempesona, merasakan sesuatu yang berbeda di dadanya. Rasa kagum berubah menjadi iri, lalu menjadi nafsu yang merusak akal sehat.

Raja ingin memiliki Layonsari. Ia sadar bahwa keinginan itu sangat tidak pantas, namun nafsu telah mengalahkan nuraninya.

Dengan berpura-pura baik, Raja memerintahkan Jayaprana memimpin ekspedisi ke daerah terpencil di Bali Utara dengan alasan mengusir bajak laut yang mengganggu rakyat. Jayaprana, dengan ketaatan seorang abdi setia, menyanggupi tanpa curiga.

Di tengah hutan di perbatasan wilayah kerajaan, seorang prajurit bernama Saunggaling yang bertugas mengawal Jayaprana mendapat perintah rahasia dari sang Raja: habisi Jayaprana di sana. Dengan berat hati namun takut pada titah raja, Saunggaling mengeluarkan kerisnya dan menikam Jayaprana dari belakang.

Jayaprana roboh. Dalam nafasnya yang terakhir, ia berkata: "Aku mati bukan karena musuh, tapi karena pengkhianatan orang yang kupercaya. Bukan aku yang akan menanggung dosa ini."

Kematian Jayaprana tidak bisa lama tersembunyi. Layonsari mengetahui kebenaran itu dari mimpi yang dikirimkan roh suaminya. Ia tahu bahwa sang Raja telah membunuh Jayaprana demi dirinya.

Layonsari menolak untuk menjadi milik Raja Kalianget. Ia meratapi kematian suaminya di kuburannya. Kemudian, dengan keris yang ia ambil dari lemari Jayaprana, Layonsari mengakhiri hidupnya sendiri agar bisa menyusul suaminya ke alam berikutnya.

Raja Kalianget yang mendengar berita itu duduk terpaku dalam kesunyian istananya. Ia mendapatkan kekosongan, bukan Layonsari. Kutukan pun jatuh: dalam waktu singkat, kerajaannya hancur dan ia meninggal dalam penyesalan.

Makam Jayaprana di Desa Teluk Terima, Bali, hingga kini masih dikunjungi wisatawan dan dipuja oleh masyarakat sebagai tempat keramat. Kisah Jayaprana dan Layonsari menjadi inspirasi seniman Bali selama berabad-abad, dikisahkan dalam tari, pentas, dan sastra."""
    },
    "Putri Mandalika": {
        "content": """Di kerajaan Tonjang Beru di Pulau Lombok, lahirlah seorang putri yang kecantikannya dikabarkan sebagai anugerah para dewa. Rambutnya bergelombang hitam pekat, matanya teduh seperti telaga pegunungan, dan kulitnya bersinar keemasan di bawah sinar mentari. Rakyat memanggilnya Putri Mandalika.

Seiring tumbuhnya sang Putri menjadi wanita dewasa seutuhnya, para pangeran dari seluruh penjuru nusantara berdatangan melamarnya. Setiap pangeran datang dengan rombongan besar, hadiah berlimpah, dan janji-janji keemasan. Tercatat ada tujuh pangeran dari tujuh kerajaan berbeda yang semuanya melamar di waktu yang bersamaan.

Raja Tonjang Beru bingung. Menolak salah satu berarti menghina tujuh kerajaan lainnya. Menerima salah satu berarti mengundang perang dari enam yang ditolak. Dan kekhawatiran itu bukan tanpa alasan: masing-masing pangeran sudah mulai saling mengancam satu sama lain di pelataran istana.

Putri Mandalika menyaksikan semua ini dengan hati yang miris. Ia tidak mau menjadi penyebab perang yang akan memakan ribuan nyawa rakyat tak bersalah. Ia membutuhkan waktu untuk berpikir.

Selama tiga hari tiga malam, Putri Mandalika bertapa di tepi pantai Kuta Lombok, memohon petunjuk kepada Tuhan. Angin laut berhembus lembut, ombak berderai pelan, dan di bawah cahaya bintang, jawaban itu datang dalam bisikan yang hanya bisa didengar hatinya.

Pada hari keempat, Putri Mandalika mengumumkan kepada tujuh pangeran dan seluruh rakyat: "Besok pagi, berkumpullah semua di Pantai Kuta. Aku akan memberikan jawaban atas semua lamaran kalian."

Ribuan orang berkumpul di pantai itu sejak dini hari. Para pangeran berdiri di garis terdepan, masing-masing berharap. Rakyat berdesakan di belakang.

Saat fajar mulai menyingsing, Putri Mandalika berdiri di atas batu karang tertinggi menghadap laut. Suaranya terdengar jelas di tengah kerumunan yang sunyi:

"Aku mencintai keluarga ini, aku mencintai kerajaan ini, aku mencintai rakyat ini. Aku tidak sanggup memilih satu dari kalian dan menyakiti yang lain. Aku tidak sanggup menjadi penyebab perang dan kematian. Maka aku memilih untuk menjadi milik semua kalian, dengan caraku sendiri."

Sebelum siapapun sempat bergerak atau berteriak, Putri Mandalika melompat dari batu karang ke dalam laut yang bergemuruh. Riuh rendah tangis dan teriakan memenuhi pantai.

Namun yang mengherankan semua orang: tidak ada tubuh yang muncul ke permukaan. Sebaliknya, dari tempat sang Putri hilang, muncul ribuan cacing warna-warni yang indah, meliuk-liuk di atas permukaan air dengan gemerlap warna yang memukau.

Para tetua adat mengetahui: Putri Mandalika telah menjelma menjadi cacing Nyale — cacing laut yang kehadirannya setiap setahun sekali di pantai Kuta dipercaya sebagai kunjungan sang Putri kepada rakyat yang ia cintai.

Hingga kini, Festival Bau Nyale di Lombok dirayakan setiap tahun ketika cacing Nyale muncul di pantai, sebagai peringatan pengorbanan Putri Mandalika yang memilih menjadi milik semua daripada menjadi milik satu."""
    },
    "Suri Ikun dan Dua Ekor Burung": {
        "content": """Di sebuah desa kecil yang dikelilingi bukit-bukit berbatu di Timor, NTT, hiduplah seorang anak bernama Suri Ikun bersama kakak-kakaknya. Ibunya sudah lama meninggal, dan ayahnya sering pergi berburu berhari-hari. Para kakak lelaki Suri Ikun tidak pernah menyayanginya. Mereka menganggapnya beban, terlalu lemah untuk berburu, terlalu muda untuk berladang.

Suatu hari, saat ayahnya pergi dan mereka berencana berburu bersama, kakak-kakak Suri Ikun sengaja meninggalkannya jauh di belakang, lalu berlari menjauhinya hingga Suri Ikun tersesat sendiri di dalam hutan yang lebat dan asing.

Suri Ikun menangis sendirian di bawah pohon besar. Ia mencoba mencari jalan pulang namun semakin jauh masuk ke dalam hutan. Malam tiba, dan hutan menjadi gelap dan penuh suara-suara aneh.

Tiba-tiba sesuatu yang hitam besar melayang turun dari langit. Sebuah jaring tak terlihat menjerat tubuh Suri Ikun. Ia adalah mangsa dari Hantu Hutan — makhluk besar yang menangkap anak-anak tersesat untuk dijadikan budaknya.

Di dalam sarang hantu itu, Suri Ikun menemukan dua ekor burung elang besar yang juga ditangkap. Dengan hati yang baik, meski ia sendiri kelaparan, Suri Ikun mencari ulat dan buah-buahan untuk burung-burung itu setiap hari. Ia merawat luka-luka mereka, dan berbicara dengan mereka dengan lembut.

"Mengapa kau baik pada kami?" tanya salah satu burung elang dengan suara yang dalam dan biwsar. "Kau sendiri sedang dalam kesusahan."

"Karena aku tidak ingin ada makhluk lain yang menderita seperti aku," jawab Suri Ikun sederhana.

Kedua elang itu bertukar pandang. "Anak ini murni hatinya," kata yang satu kepada yang lain.

Ketika hantu hutan pergi berburu, kedua elang itu mencabik jaring dengan paruh dan cakar mereka yang kini sudah pulih sepenuhnya. Mereka membebaskan diri dan membebaskan Suri Ikun.

"Naiklah ke punggungku," kata elang terbesar. "Kami akan membawamu pulang."

Suri Ikun berpegangan erat saat kedua elang raksasa itu mengepakkan sayapnya yang lebar. Mereka terbang tinggi menembus awan, melampaui bukit-bukit berbatu, melampaui sungai-sungai deras. Dari ketinggian itu, Suri Ikun bisa melihat seluruh tanah NTT tersebar indah di bawahnya.

Mereka mendarat tepat di depan rumah Suri Ikun. Ayahnya yang baru pulang berburu berlari memeluknya dengan penuh keharuan. Para kakak tertunduk malu.

Dua ekor elang itu tinggal bersama keluarga Suri Ikun dan menjadi pelindung desa. Dan sejak saat itu, Suri Ikun tidak pernah lagi diperlakukan semena-mena oleh siapapun."""
    },
    "Asal Usul Sungai Kawat": {
        "content": """Di tanah Sintang, Kalimantan Barat, jauh di pedalaman hutan yang lebat dan sungai yang berliku, hiduplah masyarakat Dayak yang hidup selaras dengan alam. Mereka berladang, berburu, dan menghormati setiap pohon, sungai, dan batu sebagai bagian dari kehidupan yang harus dijaga dengan seimbang.

Di sebuah sungai yang jernih mengalir memotong hutan, terjadi peristiwa aneh yang tidak pernah terjadi sebelumnya. Pada suatu pagi yang tenang, beberapa nelayan yang sedang melempar jala melihat sesuatu bersinar di dasar sungai. Saat mereka mendekat, mereka tak percaya dengan apa yang mereka lihat: sebuah kawat emas yang berkilauan muncul dari dasar sungai dan mengapung ke permukaan.

Berita itu menyebar dengan cepat ke seluruh desa. Orang-orang berbondong-bondong datang ke tepi sungai. Para tetua adat yang bijak memberikan nasihat: "Ambillah secukupnya saja. Ini adalah rezeki dari alam, dan alam memberikan rezeki hanya kepada yang tidak serakah."

Orang-orang pun mengambil kawat emas itu secukupnya — seperlunya untuk kebutuhan mereka. Kawat itu terasa hangat di tangan dan berkilauan dengan cara yang tidak biasa. Mereka bersyukur dan kembali ke rumah masing-masing.

Namun di antara kerumunan itu, ada seorang pria yang hatinya dikuasai keserakahan. Sementara orang lain mengambil sepotong dua potong kawat yang cukup, pria ini menarik kawat itu panjang-panjang. Ia mau mengambil semua yang ia bisa. Matanya berkilat memikirkan berapa banyak emas yang akan ia dapatkan jika ia menjual seluruh kawat itu.

Ia menarik dan menarik. Kawat itu terasa panjang sekali, seolah tidak ada ujungnya. Semakin ia menarik, semakin dalam ia melangkah ke dalam sungai, terlupakan daratan.

Tiba-tiba, dengan bunyi yang keras seperti petir, kawat itu putus. Seluruh kawat yang tersisa melesat kembali ke dasar sungai dan hilang selamanya. Pria serakah itu terjatuh ke dalam air dan hampir tenggelam jika tidak ditolong nelayan yang ada di dekatnya.

"Kawat itu tidak pernah kembali lagi," kata para tetua adat. "Ia pergi karena ada yang tidak menghargainya dengan baik."

Dan sejak peristiwa itu, sungai tersebut dinamakan Sungai Kawat sebagai pengingat abadi bahwa rezeki yang diberikan alam harus diambil secukupnya. Keserakahan hanya akan membuat semua nikmat pergi tanpa bisa kembali."""
    },
    "Datu Mabrur dan Ikan Todak": {
        "content": """Di masa yang lampau, sebelum Pulau Laut di Kalimantan Selatan terbentuk seperti yang kita kenal sekarang, Datu Mabrur adalah seorang pertapa agung yang hidup di tepi pantai Kalimantan. Ia dikenal sebagai wali yang dekat dengan Allah, keilmuannya luas, dan doanya selalu dikabulkan.

Melihat kepadatan penduduk di daratan dan banyaknya rakyat yang hidup dalam kemiskinan karena sempitnya lahan, Datu Mabrur memohon kepada Allah dengan sungguh-sungguh: "Ya Allah, berikanlah sebuah pulau untuk anak cucuku agar mereka bisa hidup dengan lapang dan tenteram."

Dengan membaca bismillah, Datu Mabrur berjalan ke tengah laut dan duduk bersila di atas sebuah batu karang yang mencuat dari permukaan air. Badai tidak menggoyahkannya. Hujan tidak membatalkan semedinya. Ombak besar menerjangnya namun ia tetap teguh.

Pada hari ketiga pertapaannya, dari kedalaman laut muncul ribuan ikan todak — ikan berparuh panjang tajam — dipimpin oleh Raja Ikan Todak yang terbesar. Mereka datang bukan untuk menyerang, melainkan untuk menguji keberanian sang Datu.

Raja Ikan Todak melesat ke atas permukaan air dan menancapkan paruhnya tepat di depan kaki Datu Mabrur. "Siapa kamu yang berani duduk di sini menganggu ketenangan laut kami?"

Datu Mabrur tidak bergerak, tidak pula gentar. "Aku adalah hamba Allah yang memohon sebuah pulau untuk umatku. Jika engkau merasa terganggu, lawanlah aku. Jika aku kalah, aku akan pergi. Namun jika Allah berkehendak membantuku, tidak ada kekuatan apapun yang bisa mencegahnya."

Pertarungan pun terjadi. Ribuan ikan todak menyerbu. Namun dengan kekuatan doanya, Datu Mabrur selamat satu per satu. Hingga akhirnya Raja Ikan Todak sendiri yang maju, namun ia pun tidak mampu mencelakakan sang Datu.

Kelelahan dan kagum, Raja Ikan Todak pun tunduk. "Engkau adalah manusia yang dilindungi dzat yang Maha Besar. Apa yang kau inginkan, katakanlah, dan kami akan membantumu."

Datu Mabrur pun menyampaikan permohonannya. Dan atas perintah Raja Ikan Todak, seluruh ikan todak bergotong royong. Mereka menancapkan paruh-paruh mereka ke dasar laut dan mengangkut gundukan-gundukan tanah dari dasar samudra ke permukaan. Perlahan namun pasti, tanah itu mengumpul, meninggi, dan membentuk sebuah pulau yang semakin besar.

Itulah Pulau Laut yang kini kita kenal sebagai Kotabaru, salah satu kota di Kalimantan Selatan. Dan setiap kali masyarakat setempat melihat ikan todak melompat di perairan sekitar pulau, mereka mengingat dengan penuh syukur kisah Datu Mabrur dan keajaiban yang terjadi karena keikhlasan doa dan keteguhan iman."""
    },
    "Pesut Mahakam": {
        "content": """Di tepi Sungai Mahakam yang mengalir lebar dan tenang di Kalimantan Timur, hiduplah sepasang anak kembar: seorang laki-laki dan seorang perempuan. Mereka tinggal bersama ayah dan ibu tiri mereka di sebuah rumah panggung di tepi sungai.

Ibu kandung mereka sudah lama meninggal. Ibu tiri yang baru datang tidak menyayangi mereka. Ia lebih sering menyimpan makanan lezat untuk dirinya sendiri dan memberikan remah-remah saja untuk anak-anak kecil itu. Ketika ayah mereka pergi berburu atau berdagang ke hulu sungai berhari-hari, nasib kedua anak itu semakin memprihatinkan.

Suatu hari yang panas terik, perut kedua anak itu keroncongan sejak pagi. Ibu tiri tidak memberi mereka makan dan malah pergi ke rumah tetangga. Keduanya memberanikan diri masuk ke dapur dan menemukan sebuah periuk berisi bubur yang masih mengepulkan asap panas.

Kelaparan membuat mereka tidak sabar. Mereka menyuapkan bubur panas itu langsung tanpa menunggu dingin. Mulut, tenggorokan, dan perut mereka terasa terbakar. Kesakitan karena kepanasan, mereka berlari keluar rumah dan terjun ke sungai untuk mendinginkan diri.

Di dalam air dingin Sungai Mahakam, tubuh mereka yang panas perlahan menjadi lebih nyaman. Mereka berenang dan menikmati kesegaran air. Namun semakin lama mereka berendam, sesuatu yang aneh mulai terjadi. Tangan dan kaki mereka perlahan menyatu menjadi sirip. Kulit mereka berubah halus dan licin. Tubuh mereka memanjang dan bulat.

Saat ibu tiri kembali dan mencari mereka, yang ia temukan hanya dua ekor lumba-lumba kecil yang berputar-putar gembira di permukaan sungai, sesekali melompat dan berputar di udara.

"Aku di sini, ibu tiri!" teriak keduanya dalam bahasa lumba-lumba yang tidak bisa dipahami manusia. "Kami di sini! Di sungai yang menjadi rumah baru kami!"

Tetangga-tetangga yang menyaksikan kejadian itu segera menyebarkan kabar. Ketika sang ayah pulang, ia menangis lama di tepi sungai, memanggil-manggil nama anaknya. Sesekali kedua lumba-lumba itu muncul ke permukaan dan mengitari perahu sang ayah, seolah ingin menghiburnya.

Sejak peristiwa itu, lumba-lumba air tawar jenis khusus yang hanya ada di Sungai Mahakam dipercaya adalah jelmaan kedua anak kembar itu. Masyarakat Kalimantan Timur menyebutnya Pesut Mahakam, dan hingga kini melarang siapapun untuk memburu atau menyakiti pesut, karena mereka adalah saudara-saudara leluhur mereka."""
    },
    "Mamanua dan Lumimuut": {
        "content": """Jauh sebelum peradaban manusia menjejakkan kaki di tanah Minahasa, Sulawesi Utara, para dewa berdiam di puncak-puncak gunung berapi yang menjulang tinggi menembus awan. Di antara mereka, ada seorang dewi muda bernama Lumimuut yang cantik jelita.

Kisah kelahiran Lumimuut sendiri sudah penuh dengan keajaiban. Ia lahir dari sebongkah batu putih yang dipanaskan oleh matahari selama ribuan tahun, hingga batu itu pecah dan dari dalamnya muncul seorang bayi perempuan yang bersinar cahayanya. Para petua menyebut ini sebagai "Batu Pinawetengang" — batu tempat kelahiran yang menjadi keramat selamanya.

Lumimuut tumbuh menjadi seorang dewi yang mahakuasa namun rendah hati. Ia bisa menghidupkan tanah yang mati, membuat bunga mekar di musim salju, dan bicara dengan angin serta gemuruh gunung berapi.

Suatu hari, angin membawa sebuah kehadiran baru: Mamanua, dewa matahari yang berjalan turun dari langit pagi. Matanya semerah fajar, rambutnya bersinar seperti sinar pertama sepanjang hari. Ia dan Lumimuut bertemu di puncak Gunung Lokon yang masih mengepulkan asap.

Pertemuan itu bukan kebetulan. Ia adalah takdir yang sudah ditenun alam sejak sebelum manusia pertama dilahirkan. Keduanya jatuh cinta dalam keheningan yang sakral, dan dari cinta itulah muncul kesepakatan besar: mereka akan menurunkan manusia-manusia pertama kepada bumi.

Mamanua memberikan cahaya dan kehangatan — kekuatan yang mendorong manusia untuk bekerja dan berkarya. Lumimuut memberikan bumi yang subur dan alam yang hidup — tempat manusia bisa tumbuh, berkembang, dan berdamai dengan lingkungannya.

Keturunan mereka menjadi cikal bakal masyarakat Minahasa, yang hingga kini masih merayakan hubungan mereka dengan alam melalui berbagai upacara adat. Gunung-gunung berapi di Sulawesi Utara dianggap sebagai rumah para leluhur, dan setiap letusan kecilnya dipahami sebagai sapaan dari Mamanua dan Lumimuut kepada anak-cucunya di bumi.

"Kami masih di sini," kata gunung itu setiap kali mengepul. "Kami masih menjaga kalian."""
    },
    "Sawerigading": {
        "content": """Dalam kanon sastra terbesar yang pernah dilahirkan Nusantara, epos I La Galigo dari tanah Bugis mencatat kisah leluhur agung bernama Sawerigading — pangeran dari separuh dunia atas, cucu dewa yang turun ke bumi untuk menjalani dunia manusia dengan segala kesedihan dan kegagahan yang menyertainya.

Sawerigading lahir bersama seorang saudara kembar perempuan bernama We Tenriabeng. Keduanya begitu mirip rupanya, begitu dekat jiwanya, hingga ikatan antara mereka jauh melampaui ikatan saudara biasa. Namun adat langit melarang keras pernikahan antara saudara kandung — bahkan antara sesama keturunan dewa sekalipun.

Saat Sawerigading tumbuh dewasa dan menyadari perasaannya yang terlarang terhadap We Tenriabeng, ia jatuh dalam kegelisahan yang mendalam. We Tenriabeng sendiri, yang merasakan hal yang sama, memilih jalan yang paling sulit: ia menyembunyi diri di balik tirai istana dan tidak pernah keluar lagi.

"Jangan cari aku, Kakak," bisiknya dalam pertemuan terakhir mereka. "Pergi dan temukan yang lain. Kita diciptakan untuk saling mencintai namun tidak untuk saling memiliki."

Dengan patah hati yang dalam, Sawerigading memutuskan untuk pergi berlayar. Ia memerintahkan ditebangnya pohon Welengreng — pohon raksasa yang konon tumbuh hanya satu di seluruh semesta — untuk dijadikan kapal terbesar yang pernah ada. Ratusan tukang bekerja siang dan malam. Kapal itu panjangnya melampaui pandangan mata, dan layarnya bisa menutupi sinar matahari.

Sawerigading berlayar meninggalkan tanah Luwu menuju negeri Khayangan di timur. Di sana, ia bertemu dengan We Cudai, wanita yang rupanya paling mendekati kemiripan dengan We Tenriabeng. Ia jatuh cinta, menikah, dan dari pernikahan itu lahir La Galigo — putra yang namanya kemudian menjadi judul dari seluruh epos agung ini.

Sawerigading berlayar ke berbagai negeri: ke Tiongkok, ke Johor, ke negeri-negeri yang belum pernah dijamah manusia. Di mana-mana ia disambut sebagai tamu agung. Di mana-mana ia meninggalkan kesan mendalam tentang kejujuran, keberanian, dan loyalitas.

Kisah Sawerigading hidup dalam masyarakat Bugis-Makassar sebagai panduan moral tentang kerendahan hati, pengorbanan, dan kesetiaan terhadap hukum yang lebih besar dari keinginan pribadi. Kapal Pinisi yang menjadi kebanggaan pelaut Bugis hingga kini konon terinspirasi dari kapal legendaris yang dibuat Sawerigading dari pohon Welengreng yang keramat itu."""
    },
    "Oheo": {
        "content": """Di antara lembah-lembah hijau Sulawesi Tenggara, di zaman ketika alam masih berbicara kepada manusia dan langit masih membuka jendela ke dunia lain, hiduplah seorang pemuda sederhana bernama Oheo.

Oheo adalah petani biasa yang lebih sering berbicara dengan pohon-pohonnya daripada dengan manusia lain. Ia punya hati yang bersih, pikiran yang jernih, dan rasa ingin tahu yang besar tentang dunia di luar desanya.

Suatu hari yang panas terik, Oheo memutuskan untuk beristirahat di tepi sungai yang jauh dari perkampungan. Suara air gemericik, angin sepoi-sepoi, dan pepohonan rindang membuat tempat itu sempurna untuk melepas lelah. Ia berbaring di balik semak dan pejamkan matanya.

Namun alih-alih tidur, ia mendengar suara tawa dan canda yang tidak biasa dari arah hulu sungai. Perlahan ia mengintip, dan hampir-hampir suaranya terlontar dari teriknya.

Tujuh bidadari turun dari langit dalam kemilau cahaya. Mereka masing-masing membawa selendang jingga-keemasan yang berkibar seperti sayap kupu-kupu. Satu demi satu mereka melipat selendangnya di atas bebatuan dan masuk ke sungai, bermain air dengan tawa ceria yang mengalun indah.

Oheo terpesona, terutama pada bidadari yang paling cantik di antara mereka: yang bernama Anai, dengan mata yang tenang seperti cermin danau di pagi hari.

Dengan denyut jantung tak karuan, Oheo diam-diam merambat ke arah bebatuan. Tangannya meraih satu selendang — selendang milik Anai. Ia menyembunyikannya di balik bajunya.

Saat para bidadari hendak kembali ke langit, Anai panik mendapati selendangnya hilang. Ia mencarinya ke mana-mana, sementara saudara-saudaranya tak bisa menangguhkan kepulangan lebih lama. Satu per satu mereka terbang, meninggalkan Anai sendirian di bumi.

Oheo keluar dari persembunyiannya dan menawarkan bantuan. Anai, yang tidak punya pilihan, menerima kebaikannya. Ia tinggal di desa Oheo, dan lama-kelamaan jatuh cinta pada kejujuran dan ketulusan hati sang pemuda tani.

Mereka menikah dan memiliki dua orang anak. Kehidupan mereka bahagia, meski Anai seringkali menatap langit dengan kerinduan yang tak bisa disembuhkan.

Suatu hari, saat Oheo pergi ke ladang, Anai sedang membersihkan gudang. Dari balik tumpukan padi yang lama tersimpan, jatuh sesuatu yang bersinar — selendangnya. Air mata Anai mengalir deras. Ia memeluk selendang itu seperti memeluk sesuatu yang lama hilang.

Sore itu, ketika Oheo pulang, ia hanya menemukan selendang kosong dan dua anaknya yang menangis. Anai sudah kembali ke langit.

Oheo duduk lama di depan pintu, menatap langit. Esoknya ia mulai menanam tebu — batang demi batang, berjejer, semakin tinggi. Ia bermaksud membangun tangga dari bumi ke langit untuk menyusul Anai. Bertahun-tahun ia bekerja tanpa henti, hingga akhir hayatnya sekalipun tidak diketahui apakah ia berhasil menyentuh langit atau tidak.

Yang tersisa adalah kisahnya: tentang cinta yang melampaui batas alam, dan kerinduan yang tidak pernah benar-benar padam."""
    },
    "Nenek Luhu": {
        "content": """Di kepulauan Maluku yang indah dan kaya rempah-rempah, nama Nenek Luhu dikenal oleh semua orang — dari nelayan paling sederhana hingga sultan yang bersemayam di istana megah. Namun sedikit yang tahu siapa Nenek Luhu sebenarnya.

Jauh sebelum penjajah barat menginjakkan kaki mereka dengan senapan dan tuntutan monopoli, di Kerajaan Luhu di Pulau Seram, hiduplah seorang putri yang diramal akan menjadi benteng terakhir kerajaannya. Ia adalah putri bungsu sang Raja, anak yang paling dicintai dan sekaligus paling disembunyikan karena kecantikannya yang dikhawatirkan sang Raja bisa mengundang malapetaka.

Ramalan itu akhirnya terbukti dengan cara yang tidak pernah dibayangkan siapapun. Bangsa penjajah Portugis tiba dengan kapal-kapal besar yang penuh meriam. Mereka menginginkan monopoli atas cengkih dan pala Maluku, dan Kerajaan Luhu termasuk yang mereka targetkan.

Sang Raja berjuang sekuat tenaga namun akhirnya tewas dalam serangan besar itu. Kerajaan hancur. Istana dibakar. Rakyat berlarian.

Sang Putri kabur jauh ke hutan pedalaman Seram bersama segelintir rakyat setia. Ia tidak menyerah. Di dalam hutan lebat itu, ia memimpin sisa-sisa pasukan kerajaan melakukan perlawanan gerilya selama bertahun-tahun. Ia belajar ilmu pengobatan dari dukun-dukun hutan. Ia belajar membaca tanda-tanda alam untuk bertahan hidup.

Tahun berganti tahun. Sang Putri tidak menikah, tidak pernah keluar dari hutan. Ia berubah menjadi tua, rambutnya memutih, namun kekuatannya tetap ada — bahkan konon, makin bertambah seiring makin dalamnya ilmu yang ia kuasai.

Rakyat mulai memanggilnya Nenek Luhu — Nenek dari Luhu. Namun bukan dalam arti negatif; bagi mereka, ia adalah leluhur pelindung yang dihormati.

Kepercayaan masyarakat Ambon menyebutkan bahwa arwah Nenek Luhu masih bergentayangan di antara hutan-hutan Seram. Ia muncul saat hujan panas turun — fenomena ketika matahari bersinar namun hujan tetap jatuh — sebagai tanda bahwa ia sedang lewat dan memperhatikan anak cucunya. Warganya dilarang berbicara buruk tentang kerajaannya ketika fenomena itu terjadi, karena Nenek Luhu bisa mendengar dan ia tidak segan memberikan pelajaran kepada yang lancang.

Ia bukan hantu dalam arti yang menakutkan. Ia adalah kenangan sejarah yang masih hidup, wujud dari perlawanan dan kesetiaan yang melampaui kematian itu sendiri."""
    },
    "Asal Usul Talaga Biru": {
        "content": """Di tanah Halmahera Utara yang subur, di dataran tinggi yang dikelilingi pohon-pohon kelapa dan bayangan Gunung Gamkonora yang megah, hiduplah seorang wanita muda bernama Sarce. Kecantikannya sederhana namun tulus, dan cintanya kepada seorang pemuda setempat bernama Rusman adalah cinta yang paling murni yang pernah dikenal desa itu.

Rusman adalah pemuda pemberani dari suku yang berbeda dengan Sarce. Orang tua kedua belah pihak pada awalnya keberatan, namun melihat ketulusan cinta keduanya, mereka akhirnya memberikan restu.

Namun kebahagiaan itu berumur pendek. Konflik antar suku pecah menjadi perang terbuka. Rusman, sebagai pemuda yang dihormati, terpaksa ikut berperang membela sukunya. Ia pergi dengan janji yang diucapkannya berbisik di telinga Sarce:

"Aku pasti kembali. Tunggu aku di bukit itu."

Hari-hari berlalu menjadi minggu. Minggu menjadi bulan. Tidak ada kabar dari front pertempuran. Tidak ada surat, tidak ada utusan. Sarce menunggu di bukit yang dijanjikan setiap pagi dan sore, menatap ke arah matahari terbenam di mana Rusman pergi.

Lalu datanglah kabar yang paling ia takutkan: Rusman gugur dalam pertempuran yang paling sengit. Jasadnya tidak bisa dibawa pulang karena medan pertempuran yang masih berbahaya.

Sarce tidak berteriak, tidak pingsan. Ia hanya berjalan kembali ke bukit itu — bukit tempat mereka berjanji — dan duduk di sana sendirian. Dan ia menangis.

Ia menangis seharian, semalaman. Air matanya tidak kunjung habis. Hari kedua ia masih menangis. Hari ketiga, orang-orang desa mulai khawatir dan naik ke bukit menemuinya. Namun mereka terpaku melihat apa yang terjadi.

Dari bawah kaki Sarce, air menggenang perlahan. Air mata yang jatuh terus-menerus itu tidak meresap ke tanah — sebaliknya mengumpul, membentuk genangan, lalu kolam, lalu semakin dalam dan luas.

Pada saat matahari terbit di hari keempat, di bukit itu telah berdiri sebuah telaga yang jernih dan berwarna biru indah. Sarce tidak ada lagi di sana — atau mungkin ia telah menyatu dengan air yang menggenang itu.

Penduduk desa menamai tempat itu Talaga Biru. Airnya jernih dan tenang, dengan warna biru yang sangat khas yang tidak bisa dijelaskan secara ilmiah biasa. Di tepi telaga itu, sesekali bisa tercium wangi bunga yang tidak ada pohonnya, dan orang-orang yang duduk di tepinya sering merasa tenang dan damai secara tiba-tiba.

Talaga Biru di Galela, Halmahera Utara, kini menjadi salah satu objek wisata paling indah di Maluku Utara. Dan bagi masyarakat Galela, telaga itu bukan sekadar tempat wisata — ia adalah monumen cinta yang dibayar dengan sepanjang air mata."""
    },
    "Biwar Penakluk Naga": {
        "content": """Di lembah-lembah hutan Papua yang belum pernah dijamah peradaban luar, di tepi sungai yang lebarnya melampaui tiga kali lemparan tombak, hiduplah sebuah suku kecil yang bergantung sepenuhnya pada sungai untuk kehidupan mereka.

Namun sejak beberapa musim yang lalu, sungai itu menjadi wilayah kekuasaan seekor naga air raksasa yang kejam. Tubuhnya sebesar batang pohon sagu terbesar, kulitnya bersisik keras seperti batu, dan taringnya bisa menembus perahu yang paling tebal sekalipun. Naga itu telah memangsa banyak manusia, termasuk ayah dan paman Biwar.

Biwar lahir tanpa pernah mengenal ayahnya — sang ayah sudah pergi mencari naga dan tidak pernah kembali sebelum Biwar lahir. Ia tumbuh bersama ibunya yang tegar dan berani. Ibunya mengajarinya berburu, memanah, memanjat pohon, dan membaca tanda-tanda alam. Namun ia tidak pernah menceritakan tentang naga — ia tidak ingin anaknya tumbuh dengan dendam yang membutakan.

Namun Biwar akhirnya mengetahui kebenaran itu saat ia sudah cukup besar. Ia tidak marah kepada ibunya yang menyembunyikan kebenaran — ia paham. Namun tekad untuk menghadapi naga itu sudah tertanam kuat di dadanya.

"Aku akan pergi mencari naga itu, Ibu," katanya. "Bukan karena dendam, tapi karena naga itu mengancam semua orang di sini."

Ibunya menangis namun tidak melarang. Ia memberikan Biwar sebuah tombak pusaka milik ayahnya — senjata yang dibuat dari tulang ikan paus dan dilapisi getah pohon keramat.

Biwar melakukan perjalanan panjang menyusuri pinggir sungai. Ia berpuasa tiga hari tiga malam, memohon kekuatan kepada roh leluhur dan kepada alam. Saat ia berdoa, ribuan capung merah terbang mengelilinginya — tanda bahwa roh leluhur mendengar.

Di tikungan sungai yang dalam dan gelap, naga itu muncul. Tubuhnya sangat besar sehingga saat ia mengangkat kepala, bayangannya menutupi matahari. Ia mendesis panjang, airnya bergolak.

Biwar tidak lari. Ia berdiri tegak, mengatur napas, dan melemparkan tombak pusaka dengan seluruh kekuatan yang ada. Tombak itu menembus sisik naga di lehernya. Naga mengamuk dahsyat, sungai meluap, pohon-pohon di tepi sungai tumbang. Namun Biwar terus menyerang, berlompatan menghindari serangan sang naga.

Pertarungan berlangsung setengah hari. Naga yang akhirnya kelelahan karena darahnya terus mengalir, perlahan tenggelam ke dasar sungai dan tidak pernah muncul kembali.

Biwar kembali ke suku sebagai pahlawan. Namun ia tidak berpesta — ia pertama-tama mendirikan doa untuk ayah dan pamannya. Baginya, kemenangan ini bukan miliknya sendiri, melainkan milik semua yang pernah jatuh sebelumnya."""
    },
    "Asal Usul Burung Cendrawasih": {
        "content": """Di dalam hutan Papua yang belum pernah diinjak sepatu manusia dari luar, di antara pohon-pohon raksasa yang menjulang setinggi langit dan akar-akar yang membentang seperti koridor kerajaan, hiduplah sebuah keluarga kecil yang hidup dari berburu dan meramu.

Kweeya adalah anak bungsu, kurus, dan tidak begitu disukai kakak-kakaknya. Mereka sering mengolok-oloknya karena ia suka memahat dan meronce, kegiatan yang dianggap para kakak sebagai pekerjaan perempuan dan tidak berguna. Kweeya sering bermimpi tentang keindahan dan warna-warni, tentang sesuatu yang bisa terbang bebas di antara cabang-cabang pohon tanpa batas.

Suatu hari, saat berburu di hutan dalam, kakak-kakaknya meninggalkannya sendirian. Mereka berlari mengikuti binatang buruan dan berpura-pura tidak mendengar panggilan Kweeya. Saat Kweeya akhirnya menemukan jalan pulang ke pantai, ia mendapati bahwa kakak-kakaknya tidak peduli padanya sama sekali.

Kweeya duduk sendirian di tepi sungai kecil yang jernih. Air matanya jatuh ke dalam air, menciptakan lingkaran-lingkaran kecil yang memudar. Ia memandang pantulan wajahnya di sungai dan merasa sangat kecil, sangat tidak berarti.

Namun saat ia memandang pantulan dirinya, sesuatu berubah perlahan di dalam hatinya. Bukan kesedihan yang bertambah, melainkan sesuatu yang seperti kedamaian yang datang dari kedalaman jiwanya.

Kweeya mulai mengumpulkan bahan-bahan dari hutan: bulu-bulu yang berjatuhan dari berbagai burung, bunga-bunga berwarna terang, daun-daun hijau yang mengilap. Dengan tangannya yang terampil, ia mulai menancapkan bulu-bulu itu ke bajunya, ke rambutnya, hingga seluruh tubuhnya tertutup warna-warni yang menakjubkan.

Para kakak yang kembali ke tepi sungai terhenti melihat pemandangan aneh itu. "Kweeya, apa yang sedang kamu lakukan?"

"Aku ingin terbang," jawab Kweeya dengan tenang.

Para kakak tertawa mengejek. Namun tawa itu terhenti saat mereka melihat — dengan mata yang tidak percaya — tubuh Kweeya perlahan mengecil, transformasi itu nyata. Tangan menjadi sayap. Kaki menjadi cakar. Wajah menjadi paruh. Dan dari seluruh tubuhnya memancar warna-warna yang tidak pernah ada di dunia sebelumnya: merah keemasan, hijau zamrud, biru safir, ungu royal, oranye api.

Makhluk itu mengepakkan sayapnya sekali, dua kali, dan terbang ke atas dengan indahnya. Ia bertengger sejenak di dahan pohon tertinggi dan memandang para kakaknya dari ketinggian.

"Goodbye," katanya dalam kicauan yang sangat indah.

Lalu ia terbang, semakin tinggi dan tinggi, hilang di antara pucuk-pucuk pohon.

Para kakak terdiam lama. Lalu mereka menangis. Penyesalan datang terlambat, seperti biasanya.

Makhluk yang indah itu hingga kini tinggal di kanopi hutan Papua. Masyarakat mencarinya bukan untuk ditangkap — melainkan untuk dipandang, untuk dikenang, untuk diingatkan bahwa keindahan sejati sering lahir dari jiwa yang paling berserah dan paling dicoba.

Mereka menyebutnya Cendrawasih — Burung Surga. Dalam mitologi Papua, Cendrawasih adalah wujud jiwa yang paling murni, yang menemukan kebebasan abadi setelah melewati kesedihan yang dalam."""
    }
}

def update_stories():
    updated = 0
    not_found = []
    for title, data in FULL_STORIES.items():
        try:
            story = Story.objects.get(title=title)
            story.content = data["content"].strip()
            story.save()
            print(f"[OK] Updated: {title}")
            updated += 1
        except Story.DoesNotExist:
            print(f"[SKIP] Not Found: {title}")
            not_found.append(title)

    print(f"\n{'='*50}")
    print(f"Updated: {updated} stories")
    if not_found:
        print(f"Not found: {not_found}")

if __name__ == '__main__':
    update_stories()
