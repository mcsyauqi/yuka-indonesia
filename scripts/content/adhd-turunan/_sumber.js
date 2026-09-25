'use strict';
// Sumber yang dipakai klaster ADHD turunan. Semua URL dibuka dan isinya dicocokkan
// dengan klaim di artikel pada 25 September 2026 (lihat laporan kartu qnuMy8UV).

const S = {
  cdcAbout: { url: 'https://www.cdc.gov/adhd/about/index.html', label: 'CDC: ADHD in Children (diperbarui 1 Juni 2026, ditinjau 30 Juli 2026)' },
  cdcSigns: { url: 'https://www.cdc.gov/adhd/signs-symptoms/index.html', label: 'CDC: Symptoms of ADHD (2026)' },
  cdcDiag: { url: 'https://www.cdc.gov/adhd/diagnosis/index.html', label: 'CDC: Diagnosing ADHD (diperbarui 7 Juli 2026)' },
  cdcTreat: { url: 'https://www.cdc.gov/adhd/treatment/index.html', label: 'CDC: Treatment of ADHD (diperbarui 2 Juni 2026)' },
  cdcData: { url: 'https://www.cdc.gov/adhd/data/index.html', label: 'CDC: Data on ADHD in Children (data survei 2024)' },
  nimh: { url: 'https://www.nimh.nih.gov/health/publications/attention-deficit-hyperactivity-disorder-what-you-need-to-know', label: 'NIMH (NIH): Attention-Deficit/Hyperactivity Disorder, What You Need to Know' },
  nice: { url: 'https://www.nice.org.uk/guidance/ng87/chapter/Recommendations', label: 'NICE NG87: ADHD diagnosis and management, Recommendations (2018, diperbarui 2019)' },
  aapGuide: { url: 'https://pubmed.ncbi.nlm.nih.gov/31570648/', label: 'Wolraich ML dkk. Clinical Practice Guideline for ADHD in Children and Adolescents. Pediatrics (AAP), 2019' },
  aapDiag: { url: 'https://www.healthychildren.org/English/health-issues/conditions/adhd/Pages/Diagnosing-ADHD-in-Children-Guidelines-Information-for-Parents.aspx', label: 'American Academy of Pediatrics (HealthyChildren.org): Diagnosing ADHD in Children' },
  aapUnderstand: { url: 'https://www.healthychildren.org/English/health-issues/conditions/adhd/Pages/Understanding-ADHD.aspx', label: 'American Academy of Pediatrics (HealthyChildren.org): Understanding ADHD, Information for Parents' },
  nhs: { url: 'https://www.nhs.uk/conditions/adhd-children-teenagers/', label: 'NHS (Inggris): ADHD in children and young people' },
  kemenkes: { url: 'https://ayosehat.kemkes.go.id/topik-penyakit/kelainan-mental/adhd', label: 'Kementerian Kesehatan RI (Ayo Sehat): ADHD' },
  pmk66: { url: 'https://peraturan.bpk.go.id/Details/154776/permenkes-no-66-tahun-2014', label: 'Permenkes No. 66 Tahun 2014 tentang Pemantauan Pertumbuhan, Perkembangan, dan Gangguan Tumbuh Kembang Anak (JDIH BPK RI)' },
  pmk66pdf: { url: 'https://platform.who.int/docs/default-source/mca-documents/policy-documents/law/idn-ch-14-03-law-2014-ind-moh-regulation-66-2014---monitoring-of-growth--development--and-disorder-of-child-growth.pdf', label: 'Lampiran Permenkes 66/2014 (salinan PDF di portal WHO), bagian GPPH dan deteksi dini GPPH' },
  faraone2019: { url: 'https://pubmed.ncbi.nlm.nih.gov/29892054/', label: 'Faraone SV, Larsson H. Genetics of attention deficit hyperactivity disorder. Mol Psychiatry, 2019' },
  polanczyk2015: { url: 'https://pubmed.ncbi.nlm.nih.gov/25649325/', label: 'Polanczyk GV dkk. A meta-analysis of the worldwide prevalence of mental disorders in children and adolescents. J Child Psychol Psychiatry, 2015' },
  lange2010: { url: 'https://pubmed.ncbi.nlm.nih.gov/21258430/', label: 'Lange KW dkk. The history of attention deficit hyperactivity disorder. Atten Defic Hyperact Disord, 2010' }
};

const a = (key, text) => `<a href="${S[key].url}" target="_blank" rel="noopener">${text}</a>`;

// Kartu artikel seri (tautan antar-turunan dan ke pilar).
const SERI = {
  'adhd-adalah': { href: 'adhd-adalah', title: 'ADHD Adalah: Pengertian, Gejala, dan Penanganan', desc: 'Artikel utama seri ini, gambaran lengkap ADHD pada anak.' },
  'adhd-singkatan-dari-apa': { href: 'adhd-singkatan-dari-apa', title: 'ADHD Singkatan dari Apa? Arti dan Istilahnya', desc: 'Kepanjangan ADHD, istilah GPPH, dan beda ADD dengan ADHD.' },
  'ciri-ciri-anak-adhd-berdasarkan-usia': { href: 'ciri-ciri-anak-adhd-berdasarkan-usia', title: 'Ciri-Ciri Anak ADHD Berdasarkan Usia', desc: 'Tanda yang perlu diperhatikan dari balita sampai remaja.' },
  'penyebab-adhd-pada-anak': { href: 'penyebab-adhd-pada-anak', title: 'Penyebab ADHD pada Anak', desc: 'Peran genetik, perkembangan otak, dan faktor risiko lain.' },
  'diagnosis-adhd-di-indonesia': { href: 'diagnosis-adhd-di-indonesia', title: 'Diagnosis ADHD di Indonesia', desc: 'Alur dari skrining puskesmas sampai pemeriksaan spesialis.' },
  'terapi-adhd-pada-anak': { href: 'terapi-adhd-pada-anak', title: 'Terapi dan Penanganan ADHD pada Anak', desc: 'Pilihan penanganan sesuai usia menurut pedoman resmi.' },
  'hiperaktif-artinya': { href: 'hiperaktif-artinya', title: 'Hiperaktif Artinya Apa? Bedanya dengan ADHD', desc: 'Kapan anak aktif itu wajar dan kapan perlu diperiksa.' }
};
const seri = (self) => ['adhd-adalah', ...Object.keys(SERI).filter(k => k !== 'adhd-adalah' && k !== self)].slice(0, 6).map(k => SERI[k]);

module.exports = { S, a, seri };
