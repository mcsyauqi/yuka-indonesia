from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import cm
from reportlab.lib import colors
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, HRFlowable
from reportlab.lib.enums import TA_CENTER

OUTPUT = "D:/Projects/Yuka/data/laporan-seo-yuka-24-maret-2026.pdf"

NAVY  = colors.HexColor('#2B3A67')
GOLD  = colors.HexColor('#FFD700')
LBLUE = colors.HexColor('#E8EAF6')
LGRAY = colors.HexColor('#F5F5F5')
GRAY  = colors.HexColor('#757575')
GREEN = colors.HexColor('#2E7D32')
LGREEN= colors.HexColor('#E8F5E9')
ORG   = colors.HexColor('#E65100')
WHITE = colors.white

def S(name, **kw):
    return ParagraphStyle(name, **kw)

doc = SimpleDocTemplate(OUTPUT, pagesize=A4,
    rightMargin=1.8*cm, leftMargin=1.8*cm,
    topMargin=1.8*cm, bottomMargin=1.8*cm,
    title="Weekly SEO Report YUKA - 24 Maret 2026",
    author="Creativism Digital Marketing Agency")

story = []

# HEADER
hdr_style = S('hdr', fontSize=16, fontName='Helvetica-Bold', textColor=WHITE, alignment=TA_CENTER)
hdr_sub   = S('hdrsub', fontSize=10, fontName='Helvetica-Bold', textColor=NAVY, alignment=TA_CENTER)
hdr = Table([
    [Paragraph('WEEKLY SEO MONITORING & TRAFFIC REPORT', hdr_style),
     Paragraph('YUKA Indonesia\n24 Maret 2026', hdr_sub)]
], colWidths=[11.5*cm, 5.2*cm])
hdr.setStyle(TableStyle([
    ('BACKGROUND',(0,0),(0,0),NAVY), ('BACKGROUND',(1,0),(1,0),GOLD),
    ('VALIGN',(0,0),(-1,-1),'MIDDLE'), ('PADDING',(0,0),(-1,-1),12),
]))
story += [hdr, Spacer(1, 0.3*cm)]

sub_data = [
    ['Periode Laporan', 'Dibuat oleh', 'Minggu ke-', 'Status'],
    ['17 - 24 Maret 2026', 'Creativism Agency', 'W12 / 2026', 'Selesai']
]
sub_tbl = Table(sub_data, colWidths=[4.2*cm]*4)
sub_tbl.setStyle(TableStyle([
    ('BACKGROUND',(0,0),(-1,0),NAVY), ('TEXTCOLOR',(0,0),(-1,0),WHITE),
    ('FONTNAME',(0,0),(-1,0),'Helvetica-Bold'), ('FONTSIZE',(0,0),(-1,-1),8.5),
    ('BACKGROUND',(0,1),(-1,1),LBLUE),
    ('FONTNAME',(0,1),(-1,1),'Helvetica-Bold'), ('TEXTCOLOR',(0,1),(-1,1),NAVY),
    ('ALIGN',(0,0),(-1,-1),'CENTER'), ('VALIGN',(0,0),(-1,-1),'MIDDLE'),
    ('GRID',(0,0),(-1,-1),0.5,colors.HexColor('#C5CAE9')), ('PADDING',(0,0),(-1,-1),7),
]))
story += [sub_tbl, HRFlowable(width='100%', thickness=2, color=GOLD, spaceBefore=8, spaceAfter=4)]

SEC = S('SEC', fontSize=12, fontName='Helvetica-Bold', textColor=NAVY, spaceBefore=12, spaceAfter=6)
BODY= S('BODY', fontSize=9, fontName='Helvetica', textColor=colors.HexColor('#333333'), leading=13)
SM  = S('SM', fontSize=8, fontName='Helvetica', textColor=GRAY, leading=12, spaceAfter=3)
SUBT= S('SUBT', fontSize=10, fontName='Helvetica-Bold', textColor=NAVY, spaceBefore=8, spaceAfter=4)

# ── SEC 1: GSC ──
story.append(Paragraph('1. Google Search Console', SEC))

gsc = [
    ['Metrik', 'Nilai', 'Catatan'],
    ['Total Impressions', '36', 'Mulai terdeteksi Google sejak 16 Mar 2026'],
    ['Total Klik', '0', 'Normal - situs baru terindeks ~1 minggu'],
    ['Rata-rata CTR', '0.00%', 'Akan naik saat posisi masuk top 10'],
    ['Rata-rata Posisi', '33.3', 'Target: < 20 dalam 4 minggu ke depan'],
    ['Pages Mulai Muncul', '~8 halaman', 'Indexing masih berjalan bertahap'],
]
t = Table(gsc, colWidths=[5*cm,3*cm,8.7*cm])
t.setStyle(TableStyle([
    ('BACKGROUND',(0,0),(-1,0),NAVY), ('TEXTCOLOR',(0,0),(-1,0),WHITE),
    ('FONTNAME',(0,0),(-1,0),'Helvetica-Bold'), ('FONTSIZE',(0,0),(-1,-1),8.5),
    ('ROWBACKGROUNDS',(0,1),(-1,-1),[WHITE,LGRAY]),
    ('GRID',(0,0),(-1,-1),0.5,colors.HexColor('#E0E0E0')),
    ('PADDING',(0,0),(-1,-1),7), ('VALIGN',(0,0),(-1,-1),'MIDDLE'),
]))
story.append(t)

story.append(Paragraph('Top Halaman - Impressions', SUBT))
pages = [
    ['Halaman', 'Impressions', 'Posisi', 'Status'],
    ['/artikel/keutamaan-merawat-anak-yatim', '11', '5.8', 'HAMPIR PAGE 1!'],
    ['/artikel/adhd-adalah', '11', '66.1', 'Perlu optimasi'],
    ['/artikel/down-syndrome-adalah', '6', '61.7', 'Perlu optimasi'],
    ['/kontak.html (lama)', '7', '3.7', 'Sudah diperbaiki'],
    ['/program.html (lama)', '3', '7.0', 'Sudah diperbaiki'],
]
tp = Table(pages, colWidths=[6.5*cm,2.5*cm,2.5*cm,5.2*cm])
tp.setStyle(TableStyle([
    ('BACKGROUND',(0,0),(-1,0),NAVY), ('TEXTCOLOR',(0,0),(-1,0),WHITE),
    ('FONTNAME',(0,0),(-1,0),'Helvetica-Bold'), ('FONTSIZE',(0,0),(-1,-1),8),
    ('ROWBACKGROUNDS',(0,1),(-1,-1),[WHITE,LGRAY]),
    ('BACKGROUND',(0,1),(-1,1),LGREEN),
    ('TEXTCOLOR',(3,1),(3,1),GREEN), ('FONTNAME',(3,1),(3,1),'Helvetica-Bold'),
    ('GRID',(0,0),(-1,-1),0.5,colors.HexColor('#E0E0E0')),
    ('PADDING',(0,0),(-1,-1),7), ('VALIGN',(0,0),(-1,-1),'MIDDLE'),
]))
story.append(tp)
story.append(Paragraph('Fix canonical + internal links sudah di-deploy 24 Mar. URL .html tidak muncul lagi setelah Google re-crawl.', SM))

story.append(Paragraph('Top Keywords', SUBT))
kws = [
    ['Keyword', 'Impressions', 'Posisi', 'Aksi'],
    ['adhd adalah', '2', '63.0', 'Perkuat artikel - tambah FAQ'],
    ['www.yuka', '2', '5.5', 'Brand search - pertahankan'],
    ['adhd itu apa', '1', '27.0', 'Long-tail - tambah internal link'],
    ['anak down syndrome', '1', '74.0', 'Optimasi on-page + ALT image'],
    ['gejala adhd', '1', '87.0', 'Tambah sub-section di artikel ADHD'],
    ['penyebab adhd', '1', '75.0', 'Tambah sub-section di artikel ADHD'],
]
tk = Table(kws, colWidths=[4.5*cm,2.5*cm,2.5*cm,7.2*cm])
tk.setStyle(TableStyle([
    ('BACKGROUND',(0,0),(-1,0),NAVY), ('TEXTCOLOR',(0,0),(-1,0),WHITE),
    ('FONTNAME',(0,0),(-1,0),'Helvetica-Bold'), ('FONTSIZE',(0,0),(-1,-1),8),
    ('ROWBACKGROUNDS',(0,1),(-1,-1),[WHITE,LGRAY]),
    ('GRID',(0,0),(-1,-1),0.5,colors.HexColor('#E0E0E0')),
    ('PADDING',(0,0),(-1,-1),7), ('VALIGN',(0,0),(-1,-1),'MIDDLE'),
]))
story.append(tk)

# ── SEC 2: GA4 ──
story.append(Paragraph('2. Google Analytics 4 (17-24 Maret 2026)', SEC))

ga = [
    ['Metrik', 'Minggu Ini', 'Minggu Lalu', 'Perubahan'],
    ['Total Users', '16', '0 (situs baru)', '-'],
    ['Sessions', '20', '0 (situs baru)', '-'],
    ['Page Views', '24', '0 (situs baru)', '-'],
    ['Bounce Rate', '50.0%', '-', 'Wajar untuk situs baru'],
    ['Organic Search Sessions', '4', '0', 'PERTAMA KALI!'],
    ['donation_cta_click', '1', '0', 'PERTAMA KALI!'],
]
tg = Table(ga, colWidths=[4.5*cm,3.2*cm,3.8*cm,5.2*cm])
tg.setStyle(TableStyle([
    ('BACKGROUND',(0,0),(-1,0),NAVY), ('TEXTCOLOR',(0,0),(-1,0),WHITE),
    ('FONTNAME',(0,0),(-1,0),'Helvetica-Bold'), ('FONTSIZE',(0,0),(-1,-1),8.5),
    ('ROWBACKGROUNDS',(0,1),(-1,-1),[WHITE,LGRAY]),
    ('BACKGROUND',(0,5),(-1,6),LGREEN),
    ('TEXTCOLOR',(3,5),(3,6),GREEN), ('FONTNAME',(3,5),(3,6),'Helvetica-Bold'),
    ('GRID',(0,0),(-1,-1),0.5,colors.HexColor('#E0E0E0')),
    ('PADDING',(0,0),(-1,-1),7), ('VALIGN',(0,0),(-1,-1),'MIDDLE'),
]))
story.append(tg)

story.append(Paragraph('Top Landing Pages & Traffic Sources', SUBT))

lp_data = [
    ['Landing Page', 'Sessions', 'Users', 'Bounce'],
    ['/ (Beranda)', '11', '9', '45%'],
    ['/artikel/slb-terdekat', '3', '3', '100%'],
    ['/artikel/inklusi-sosial', '2', '1', '0%'],
    ['/artikel/adhd-adalah', '1', '1', '0%'],
    ['/artikel/bisindo-adalah', '1', '1', '100%'],
    ['/artikel/retardasi-mental-adalah', '1', '1', '0%'],
]
src_data = [
    ['Traffic Source', 'Sessions'],
    ['Direct', '16'],
    ['Organic Search', '4'],
]
evt_data = [
    ['Event', 'Count'],
    ['article_view', '7'],
    ['scroll', '7'],
    ['donation_cta_click', '1'],
    ['navigation_click', '3'],
]

def make_table(data, cols):
    t = Table(data, colWidths=cols)
    t.setStyle(TableStyle([
        ('BACKGROUND',(0,0),(-1,0),NAVY), ('TEXTCOLOR',(0,0),(-1,0),WHITE),
        ('FONTNAME',(0,0),(-1,0),'Helvetica-Bold'), ('FONTSIZE',(0,0),(-1,-1),8),
        ('ROWBACKGROUNDS',(0,1),(-1,-1),[WHITE,LGRAY]),
        ('GRID',(0,0),(-1,-1),0.5,colors.HexColor('#E0E0E0')),
        ('PADDING',(0,0),(-1,-1),6), ('VALIGN',(0,0),(-1,-1),'MIDDLE'),
        ('ALIGN',(1,0),(-1,-1),'CENTER'),
    ]))
    return t

tlp = make_table(lp_data, [6.5*cm,2*cm,2*cm,2*cm])
story.append(tlp)

pair = Table([[make_table(src_data,[4.5*cm,2.5*cm]),
               make_table(evt_data,[4.5*cm,2.5*cm])]],
             colWidths=[8.5*cm,9.2*cm])
pair.setStyle(TableStyle([('VALIGN',(0,0),(-1,-1),'TOP'),('LEFTPADDING',(1,0),(1,0),12)]))
story += [Spacer(1,6), pair]

# ── SEC 3: ACTION ITEMS ──
story.append(Paragraph('3. Action Items', SEC))
act = [
    ['#', 'Action', 'Priority', 'PIC', 'Status'],
    ['1', 'Fix canonical + internal links - Deploy Vercel', 'High', 'Creativism', 'DONE (24 Mar)'],
    ['2', 'Request re-indexing GSC untuk 8 halaman', 'High', 'Creativism', 'Segera'],
    ['3', 'Tambah FAQ di /adhd-adalah (gejala, penyebab adhd)', 'Medium', 'Content', 'Segera'],
    ['4', 'Internal link ke /keutamaan-merawat dari 3+ artikel', 'Medium', 'Content', 'Segera'],
    ['5', 'Monitor posisi keyword - target keutamaan top 5', 'Low', 'Andri', 'Minggu depan'],
]
ta = Table(act, colWidths=[0.7*cm,6.8*cm,2*cm,2.5*cm,3*cm])
ta.setStyle(TableStyle([
    ('BACKGROUND',(0,0),(-1,0),NAVY), ('TEXTCOLOR',(0,0),(-1,0),WHITE),
    ('FONTNAME',(0,0),(-1,0),'Helvetica-Bold'), ('FONTSIZE',(0,0),(-1,-1),8),
    ('ROWBACKGROUNDS',(0,1),(-1,-1),[WHITE,LGRAY]),
    ('BACKGROUND',(0,1),(-1,1),LGREEN),
    ('TEXTCOLOR',(4,1),(4,1),GREEN), ('FONTNAME',(4,1),(4,1),'Helvetica-Bold'),
    ('GRID',(0,0),(-1,-1),0.5,colors.HexColor('#E0E0E0')),
    ('PADDING',(0,0),(-1,-1),6), ('VALIGN',(0,0),(-1,-1),'MIDDLE'),
    ('ALIGN',(0,0),(0,-1),'CENTER'),
]))
story.append(ta)

# ── SEC 4: INSIGHTS ──
story.append(Paragraph('4. Key Insights', SEC))
insights = [
    ('Quick Win', '/keutamaan-merawat-anak-yatim posisi 5.8 - hampir page 1! Tambah 3+ internal link untuk dorong masuk top 5.', LGREEN, GREEN),
    ('First Organic Traffic', '4 sesi dari Organic Search + 1 donation_cta_click minggu ini - milestone positif untuk situs baru 1 minggu terindeks.', colors.HexColor('#E3F2FD'), colors.HexColor('#1565C0')),
    ('URL Fix Deployed', 'Canonical + internal links diperbaiki dan di-deploy 24 Mar. Efek di GSC terlihat dalam 1-2 minggu setelah re-crawl.', colors.HexColor('#FFF8E1'), ORG),
    ('Proyeksi', 'Target klik organik pertama: April 2026. Target 100 sessions/minggu: Mei-Juni 2026.', LBLUE, NAVY),
]
for title, text, bg, tc in insights:
    row = [
        [Paragraph(title, S('it', fontSize=8.5, fontName='Helvetica-Bold', textColor=tc)),
         Paragraph(text, S('ib', fontSize=8.5, fontName='Helvetica', textColor=colors.HexColor('#212121'), leading=13))]
    ]
    ti = Table(row, colWidths=[2.8*cm,13.9*cm])
    ti.setStyle(TableStyle([
        ('BACKGROUND',(0,0),(-1,-1),bg),
        ('LINEAFTER',(0,0),(0,-1),2,tc),
        ('GRID',(0,0),(-1,-1),0.5,colors.HexColor('#E0E0E0')),
        ('PADDING',(0,0),(-1,-1),8), ('VALIGN',(0,0),(-1,-1),'MIDDLE'),
    ]))
    story.append(ti)
    story.append(Spacer(1,3))

story.append(HRFlowable(width='100%', thickness=1, color=LBLUE, spaceBefore=6, spaceAfter=4))

# FOOTER
ft = Table([['Creativism Digital Marketing Agency  |  creativism.id  |  Laporan W12-2026  |  KONFIDENSIAL']],
           colWidths=[16.7*cm])
ft.setStyle(TableStyle([
    ('BACKGROUND',(0,0),(-1,-1),NAVY), ('TEXTCOLOR',(0,0),(-1,-1),WHITE),
    ('FONTNAME',(0,0),(-1,-1),'Helvetica'), ('FONTSIZE',(0,0),(-1,-1),8),
    ('ALIGN',(0,0),(-1,-1),'CENTER'), ('PADDING',(0,0),(-1,-1),8),
]))
story.append(ft)

doc.build(story)
print("PDF created:", OUTPUT)
