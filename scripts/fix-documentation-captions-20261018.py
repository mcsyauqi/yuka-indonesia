#!/usr/bin/env python3
"""Correct documentary image descriptions without changing image credits or clinical prose."""
import pathlib,re,html,json,hashlib,datetime
ROOT=pathlib.Path(__file__).resolve().parents[1]
CREDIT='Foto: Dokumentasi YUKA (Yayasan Ukhuwah Kaffah Amanatullah).'
DESCRIPTIONS={
'ee291df8eaffef77b03d8ccabd6d68fcc5cfe001e89987ffd138fd3559cab1a3':('Sekelompok anak berkostum tradisional berpose di tangga bangunan candi','Dokumentasi kegiatan budaya: sekelompok anak berkostum tradisional berpose di tangga bangunan candi. Foto ini bukan contoh penggunaan jadwal visual atau sesi terapi.'),
'8937cea59476936f8ac206a75adaf018cd30f08f43ed41b93169e11ec7ef2c67':('Sertifikat berbingkai terpasang pada dinding kayu','Dokumentasi sertifikat berbingkai pada dinding kayu. Foto ini tidak memperlihatkan pendampingan anak atau penggunaan jadwal visual.'),
'7853b4acbf0211a48448625c034454c0ef852604724725f82c9b2c1eec835396':('Foto berbingkai menampilkan seseorang mengenakan busana tradisional','Dokumentasi foto berbingkai dengan subjek mengenakan busana tradisional. Foto ini bukan contoh pelaksanaan jadwal visual.'),
'cadb559d7f7a325317933eeda66b4727be5d376e4359e13b3e9f66d419b7bfe6':('Sekelompok anak berpose bersama di tangga bangunan candi','Dokumentasi kunjungan: sekelompok anak berpose di tangga bangunan candi. Foto ini tidak memperlihatkan terapis, latihan komunikasi, atau latihan oral motor.'),
'a97f0d52c9d68aedd4530a0f59c52592aeb58a1ad3bafdfc5f1c537b6572121b':('Sekelompok anak dan orang dewasa berfoto bersama di ruangan berdinding kayu','Dokumentasi foto bersama anak dan orang dewasa di ruangan berdinding kayu dengan pajangan piala. Foto ini tidak membuktikan hubungan keluarga, diagnosis, atau pelaksanaan terapi.'),
'bab8562251b3dfdc4ba5bbd2630b154de7fb20ccec0d2ccaffb3524db9999fa6':('Deretan piala dan miniatur kapal dipajang pada rak kayu','Dokumentasi deretan piala dan miniatur kapal pada rak kayu. Foto ini tidak menunjukkan sesi terapi maupun membuktikan diagnosis, pemilik penghargaan, atau hasil suatu metode pendidikan.')}
FILES=['terapi-wicara-oral-motor-exercises','cara-membuat-jadwal-visual-untuk-anak-autis','slb-adalah','slb-terdekat','difabel-adalah','kecerdasan-majemuk','disabilitas-adalah']
def edit(slug):
 p=ROOT/'artikel'/(slug+'.html');text=p.read_text();count=0
 def figure(m):
  nonlocal count
  block=m.group();im=re.search(r'<img\b[^>]*>',block,re.S|re.I)
  if not im:return block
  src=re.search(r'\bsrc=["\']([^"\']+)',im.group())
  if not src:return block
  import urllib.parse
  image=(p.parent/urllib.parse.unquote(html.unescape(src[1]))).resolve()
  if not image.is_file() or ROOT not in image.parents:return block
  sha=hashlib.sha256(image.read_bytes()).hexdigest()
  if sha not in DESCRIPTIONS:return block
  alt,caption=DESCRIPTIONS[sha];newimg=re.sub(r'\balt=(["\']).*?\1','alt="'+html.escape(alt,quote=True)+'"',im.group(),count=1,flags=re.S)
  result=block.replace(im.group(),newimg,1)
  result=re.sub(r'(<figcaption\b[^>]*>).*?(</figcaption>)',lambda q:q[1]+html.escape(caption+' '+CREDIT)+q[2],result,count=1,flags=re.S|re.I)
  if result!=block:count+=1
  return result
 new=re.sub(r'<figure\b[^>]*>.*?</figure>',figure,text,flags=re.S|re.I)
 if slug=='terapi-wicara-oral-motor-exercises' and 'Status tinjauan medis' not in new:
  disclosure='<aside class="medical-review-status"><p><strong>Status tinjauan medis:</strong> Artikel ini belum ditinjau oleh dokter berlisensi. Informasi bersifat edukasi dan bukan pengganti pemeriksaan atau rencana terapi individual oleh tenaga kesehatan.</p></aside>'
  assert '<div class="article-body">' in new
  new=new.replace('<div class="article-body">','<div class="article-body">\n'+disclosure,1)
 if new!=text:
  today=datetime.datetime.now(datetime.timezone.utc).date().isoformat();new=re.sub(r'("dateModified"\s*:\s*")[^"]+(\")',lambda m:m[1]+today+m[2],new)
  p.write_text(new)
 return {'slug':slug,'changedFigures':count,'changed':new!=text}
if __name__=='__main__':print(json.dumps([edit(slug) for slug in FILES],ensure_ascii=False,indent=2))
