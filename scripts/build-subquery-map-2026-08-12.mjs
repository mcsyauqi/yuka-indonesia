import fs from 'node:fs';

const target = 'D:/Projects/Yuka/seo/subquery-map-2026-07.csv';
const data = [
  ['disabilitas',12100,['apa itu disabilitas menurut hukum Indonesia','hak pendidikan penyandang disabilitas','jenis layanan pendukung disabilitas di sekolah','perbedaan disabilitas fisik dan mental','cara mengenali hambatan disabilitas pada anak','pendanaan program inklusi disabilitas']],
  ['homeschooling',9900,['apa definisi homeschooling di Indonesia','syarat izin homeschooling','kurikulum homeschooling standar nasional','kendala orang tua homeschooling','evaluasi kemajuan homeschooling','apakah homeschooling diakui pemerintah']],
  ['montessori',9900,['prinsip dasar Montessori','implementasi Montessori di sekolah Indonesia','manfaat Montessori untuk perkembangan anak','fasilitas sekolah Montessori','cara mengukur keberhasilan Montessori','materi Montessori di Indonesia']],
  ['jenis disabilitas',5400,['kategori jenis disabilitas di Indonesia','definisi tiap jenis disabilitas','contoh jenis disabilitas pada anak','asesmen jenis disabilitas di sekolah','perbedaan disabilitas fisik sensorik intelektual','dukungan tiap jenis disabilitas']],
  ['tuna rungu',5400,['pengertian tuna rungu','hak pendidikan Tuli dan tuna rungu','alat bantu dengar di sekolah','cara mengajar siswa tuna rungu','akses juru bahasa isyarat','evaluasi belajar siswa tuna rungu']],
  ['motorik halus adalah',4400,['arti motorik halus','tanda keterlambatan motorik halus','latihan motorik halus anak','peran sekolah untuk motorik halus','alat bantu motorik halus di kelas','cara mengevaluasi motorik halus']],
  ['hiperaktif',3600,['pengertian hiperaktif dan ADHD','cara mendampingi anak hiperaktif di sekolah','kebijakan siswa hiperaktif','strategi kelas untuk anak hiperaktif','peran keluarga anak hiperaktif','manfaat skrining dini hiperaktif']],
  ['shadow teacher',2900,['apa itu shadow teacher','biaya dan pendanaan shadow teacher','kualifikasi shadow teacher','cara kerja shadow teacher di kelas inklusi','tantangan shadow teacher','cara menilai efektivitas shadow teacher']],
  ['disabilitas intelektual',2400,['pengertian disabilitas intelektual','identifikasi dini disabilitas intelektual','hak pendidikan disabilitas intelektual','penyesuaian kurikulum','terapi okupasi untuk disabilitas intelektual','mengukur kemajuan belajar']],
  ['motorik kasar',1900,['arti motorik kasar','tanda keterlambatan motorik kasar','kegiatan untuk motorik kasar','dukungan motorik kasar di sekolah','olahraga dan motorik kasar','cara mengevaluasi motorik kasar']],
  ['pendidikan inklusi adalah',1300,['definisi pendidikan inklusi Indonesia','implementasi pendidikan inklusi','manfaat inklusi bagi semua siswa','kendala pendidikan inklusi','pelatihan guru inklusi','indikator keberhasilan sekolah inklusi']],
  ['disabilitas sensorik',1300,['pengertian disabilitas sensorik','jenis disabilitas sensorik','hak pendidikan disabilitas sensorik','teknologi bantu sensorik','pendamping bahasa isyarat','evaluasi belajar disabilitas sensorik']],
  ['homeschooling adalah',1300,['elemen utama homeschooling','beda homeschooling dan sekolah formal','regulasi homeschooling terbaru','cara menyusun kurikulum homeschooling','tantangan orang tua homeschooling','akreditasi dan ijazah homeschooling']],
  ['disabilitas fisik',1000,['pengertian disabilitas fisik','hak pendidikan disabilitas fisik','contoh aksesibilitas sekolah','desain sekolah ramah disabilitas fisik','teknologi bantu disabilitas fisik','audit aksesibilitas sekolah']],
  ['biaya homeschooling',1000,['estimasi biaya homeschooling','komponen biaya homeschooling','bantuan biaya homeschooling','insentif keluarga homeschooling','perbandingan biaya homeschooling dan sekolah','cara menghemat biaya homeschooling']],
  ['sensori integrasi adalah',880,['pengertian integrasi sensorik','tanda gangguan integrasi sensorik','terapi sensori integrasi','peran keluarga dalam integrasi sensorik','kebutuhan sensorik di kelas','alat bantu integrasi sensorik']],
  ['yayasan sosial',720,['pengertian yayasan sosial','cara mendirikan yayasan sosial','peran yayasan sosial dalam pendidikan inklusi','sumber dana yayasan sosial','kerja sama yayasan dengan pemerintah','program yayasan disabilitas']],
  ['pengertian ABK',390,['arti singkatan ABK','cara identifikasi ABK di sekolah','hak dan layanan ABK','pelatihan guru untuk ABK','ragam kebutuhan ABK','asesmen dan penempatan ABK']],
  ['kartu disabilitas',390,['pengertian kartu disabilitas','cara mendapatkan kartu disabilitas','syarat dokumen kartu disabilitas','manfaat kartu disabilitas','beda kartu disabilitas dan bantuan sosial','masa berlaku kartu disabilitas']],
  ['gangguan sensorik',170,['pengertian gangguan sensorik','dampak gangguan sensorik pada belajar','penanganan awal gangguan sensorik','alat bantu gangguan sensorik','monitoring gangguan sensorik','penyesuaian lingkungan belajar sensorik']],
];

const quote = value => `"${String(value).replaceAll('"','""')}"`;
const rows = [['keyword','volume_bulanan','sub_query','priority','source','bing_crosscheck']];
for (const [keyword, volume, queries] of data) {
  queries.forEach((query,index) => rows.push([keyword,volume,query,index < 3 ? 'target' : 'covered','Perplexity sonar-pro 2026-08-12','UNAVAILABLE_AUTH_INVALID_API_KEY']));
}
fs.mkdirSync('D:/Projects/Yuka/seo',{recursive:true});
fs.writeFileSync(target, rows.map(row=>row.map(quote).join(',')).join('\n')+'\n','utf8');
console.log(JSON.stringify({target,keywords:data.length,subqueries:rows.length-1},null,2));
