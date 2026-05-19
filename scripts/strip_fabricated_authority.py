"""
Strip fabricated authority patterns from Yuka articles.

Strategy: Replace named-source claims (without citation links) with neutral phrasings.
Does NOT remove the underlying claim — softens to remove fake authority.

Run from D:/Projects/Yuka root.
"""
import os
import re
import json
from pathlib import Path

ARTIKEL_DIR = Path("artikel")
REPORT = []

# Pattern → Replacement table
# Each tuple: (regex pattern, replacement, description)
REPLACEMENTS = [
    # === Named-source attributions without citation links ===
    # "Menurut data WHO, sekitar X" → "Estimasi global menyebutkan, sekitar X"
    (
        re.compile(r"Menurut data WHO,?\s+", re.IGNORECASE),
        "Estimasi global menyebutkan, ",
        "WHO attribution removed",
    ),
    (
        re.compile(r"Menurut WHO,?\s+", re.IGNORECASE),
        "Estimasi global menyebutkan, ",
        "WHO attribution removed",
    ),
    (
        re.compile(r"data WHO menunjukkan bahwa\s+", re.IGNORECASE),
        "estimasi global menunjukkan bahwa ",
        "WHO data attribution softened",
    ),
    (
        re.compile(r"Organisasi Kesehatan Dunia \(WHO\) dalam World Report on Disability memperkirakan bahwa\s+", re.IGNORECASE),
        "Berbagai laporan global memperkirakan bahwa ",
        "WHO World Report attribution softened",
    ),
    # BPS — actually verifiable, soften to "berdasarkan data publik"
    (
        re.compile(r"Berdasarkan data Badan Pusat Statistik \(BPS\) tahun 2022,?\s+", re.IGNORECASE),
        "Berdasarkan data publik tahun 2022, ",
        "BPS 2022 attribution softened",
    ),
    (
        re.compile(r"Menurut data Badan Pusat Statistik \(BPS\),?\s+", re.IGNORECASE),
        "Berdasarkan data publik yang tersedia, ",
        "BPS attribution softened",
    ),
    (
        re.compile(r"data Susenas 2022 mencatat\s+", re.IGNORECASE),
        "data survei nasional 2022 mencatat ",
        "Susenas attribution softened",
    ),
    (
        re.compile(r"Berdasarkan Survei Sosial Ekonomi Nasional \(Susenas\) tahun 2022 yang dilakukan oleh Badan Pusat Statistik \(BPS\),?\s+", re.IGNORECASE),
        "Berdasarkan data survei sosial nasional tahun 2022, ",
        "Susenas BPS attribution softened",
    ),
    # Kemdikbud / Kementerian Pendidikan
    (
        re.compile(r"menurut data Kementerian Pendidikan\.?", re.IGNORECASE),
        "menurut data publik yang tersedia.",
        "Kemdikbud attribution removed",
    ),
    (
        re.compile(r"Data Kementerian Pendidikan menunjukkan bahwa\s+", re.IGNORECASE),
        "Data publik menunjukkan bahwa ",
        "Kemdikbud attribution softened",
    ),
    # IDAI
    (
        re.compile(r"Menurut data dari Ikatan Dokter Anak Indonesia \(IDAI\),?\s+", re.IGNORECASE),
        "Estimasi dari berbagai sumber kesehatan anak menyebutkan ",
        "IDAI attribution removed",
    ),
    # American Psychiatric Association
    (
        re.compile(r"Menurut data dari American Psychiatric Association,?\s+", re.IGNORECASE),
        "Estimasi dari literatur psikiatri menyebutkan ",
        "APA attribution removed",
    ),
    # Bank Dunia
    (
        re.compile(r"Menurut data Bank Dunia,?\s+", re.IGNORECASE),
        "Estimasi global menyebutkan ",
        "World Bank attribution removed",
    ),
    # Cone Communications - this is the most suspicious (US-based, Indonesia stat fabricated)
    (
        re.compile(r"Menurut riset Cone Communications,?\s+87%\s+konsumen Indonesia[^.]+\.\s*", re.IGNORECASE),
        "Riset perilaku konsumen menunjukkan bahwa konsumen cenderung lebih memilih membeli produk dari perusahaan yang memiliki program CSR yang jelas. ",
        "Cone Communications 87% Indonesia claim REMOVED (fabricated)",
    ),
    # Greenspan & Wieder 1997 — specific academic citation likely fabricated/uncitable
    (
        re.compile(
            r"<li><strong>Greenspan\s*&amp;?\s*Wieder\s*\(1997\)</strong>:\s*Studi chart review terhadap 200 anak dengan ASD yang menerima intervensi DIR menunjukkan bahwa 58% anak mencapai &quot;good to outstanding&quot; outcomes,[^<]*</li>",
            re.IGNORECASE,
        ),
        "<li><strong>Pendekatan DIR/Floortime</strong>: Berbagai laporan praktik klinis menunjukkan bahwa pendekatan DIR/Floortime dapat membantu kemajuan dalam hubungan, komunikasi, dan kemampuan berpikir pada anak dengan gangguan perkembangan, meskipun hasilnya bervariasi tergantung intensitas intervensi dan kondisi anak.</li>",
        "Greenspan & Wieder 1997 fabricated study removed",
    ),
    (
        re.compile(
            r"<li><strong>Greenspan\s*&\s*Wieder\s*\(1997\)</strong>:\s*Studi chart review terhadap 200 anak dengan ASD yang menerima intervensi DIR menunjukkan bahwa 58% anak mencapai \"good to outstanding\" outcomes,[^<]*</li>",
            re.IGNORECASE,
        ),
        "<li><strong>Pendekatan DIR/Floortime</strong>: Berbagai laporan praktik klinis menunjukkan bahwa pendekatan DIR/Floortime dapat membantu kemajuan dalam hubungan, komunikasi, dan kemampuan berpikir pada anak dengan gangguan perkembangan, meskipun hasilnya bervariasi tergantung intensitas intervensi dan kondisi anak.</li>",
        "Greenspan & Wieder 1997 fabricated study removed (variant)",
    ),
    # Journal of Speech, Language, and Hearing Research — likely fabricated specific journal cite
    (
        re.compile(
            r"Menurut penelitian yang diterbitkan dalam Journal of Speech,?\s*Language,?\s*and Hearing Research,?\s+",
            re.IGNORECASE,
        ),
        "Literatur klinis di bidang terapi wicara umumnya menunjukkan bahwa ",
        "Journal cite softened",
    ),
    # Generic "menurut riset" / "menurut studi" / "menurut penelitian" without source
    (
        re.compile(r"berdasarkan riset ilmiah dan pengalaman kami di YUKA", re.IGNORECASE),
        "berdasarkan praktik umum dan pengalaman kami di YUKA",
        "Vague riset ilmiah softened",
    ),
    (
        re.compile(r"berdasarkan penelitian ilmiah dan pengalaman praktis di lapangan", re.IGNORECASE),
        "berdasarkan praktik umum dan pengalaman di lapangan",
        "Vague penelitian softened",
    ),
    # === Specific suspicious stat claims (no source possible) ===
    # ADHD 70-80% medikamentosa effectiveness
    (
        re.compile(
            r"Obat-obatan stimulan seperti metilfenidat telah terbukti efektif mengurangi gejala ADHD pada sekitar 70-80% anak\.",
            re.IGNORECASE,
        ),
        "Obat-obatan stimulan seperti metilfenidat umumnya dilaporkan efektif membantu mengurangi gejala ADHD pada banyak anak, meskipun respons setiap anak dapat berbeda-beda.",
        "ADHD 70-80% metilfenidat stat softened",
    ),
    # Speech delay 50-70% late talker stat
    (
        re.compile(
            r"Menurut data dari berbagai penelitian,?\s+sekitar 50-70% anak yang didiagnosis sebagai <em>late talker</em>[^.]+normal pada usia 3-4 tahun\.",
            re.IGNORECASE,
        ),
        "Banyak anak yang didiagnosis sebagai <em>late talker</em> pada usia 2 tahun dapat mengejar keterlambatan bicaranya dengan dukungan stimulasi yang tepat, meskipun setiap anak berkembang dengan kecepatan yang berbeda.",
        "Speech delay 50-70% stat softened",
    ),
    # Generic "diperkirakan jutaan anak" - keep but soften
]


def process_file(path: Path) -> dict:
    """Apply all replacements to a file. Returns change report."""
    text = path.read_text(encoding="utf-8")
    original = text
    changes = []

    for pattern, replacement, description in REPLACEMENTS:
        new_text, count = pattern.subn(replacement, text)
        if count > 0:
            changes.append({"pattern": description, "count": count})
            text = new_text

    if text != original:
        path.write_text(text, encoding="utf-8")
        return {
            "file": path.name,
            "modified": True,
            "changes": changes,
            "total_replacements": sum(c["count"] for c in changes),
        }
    return {"file": path.name, "modified": False, "changes": [], "total_replacements": 0}


def main():
    if not ARTIKEL_DIR.exists():
        print(f"ERROR: {ARTIKEL_DIR} not found. Run from D:/Projects/Yuka root.")
        return

    files = sorted(ARTIKEL_DIR.glob("*.html"))
    print(f"Processing {len(files)} files...")

    for f in files:
        result = process_file(f)
        REPORT.append(result)
        if result["modified"]:
            print(f"  MODIFIED: {result['file']} ({result['total_replacements']} replacements)")

    # Save report
    modified = [r for r in REPORT if r["modified"]]
    total_replacements = sum(r["total_replacements"] for r in modified)

    summary = {
        "total_files_scanned": len(files),
        "files_modified": len(modified),
        "total_replacements": total_replacements,
        "details": REPORT,
    }

    report_path = Path("data") / "_fabricated_authority_fix_report.json"
    report_path.parent.mkdir(exist_ok=True)
    report_path.write_text(json.dumps(summary, indent=2), encoding="utf-8")

    print(f"\n=== SUMMARY ===")
    print(f"Files scanned: {len(files)}")
    print(f"Files modified: {len(modified)}")
    print(f"Total replacements: {total_replacements}")
    print(f"Report: {report_path}")


if __name__ == "__main__":
    main()
