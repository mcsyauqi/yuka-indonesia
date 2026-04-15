# Yuka Indonesia - yukaindonesia.com

## Trello Reporting (Post-Task Workflow)

Setiap kali menyelesaikan tugas terkait website yukaindonesia.com, **WAJIB** buat kartu di Trello SEO board dan generate laporan PDF.

### Trello Details
- **SEO Board ID**: `69b894ffb5e27a49caff86b7`
- **SEO Done List ID**: `69bd74749a9518237a1b023d`
- **SMM**: Tidak dikelola Claude (sudah ada yang handle)
- **Syauqi Member ID**: `58f95f285a8d5d5d65949327`

### Workflow
1. Buat kartu di **Done** list (paling atas, pos=top)
2. Set `name` = judul tugas yang deskriptif
3. Set `due` = tanggal hari ini, `dueComplete` = true
4. Set `idMembers` = Syauqi (`58f95f285a8d5d5d65949327`)
5. Set `desc` = deskripsi lengkap (Status, Tanggal, PIC, Ringkasan, Yang Dikerjakan, Hasil, Commits)
6. Generate PDF laporan, simpan ke `reports/` folder
7. Attach PDF ke kartu Trello
8. Gunakan `/rankcrown-report` skill (adaptasi per proyek) atau panggil workflow manual

### Trello API
Credentials: `D:/Projects/Creativism App/.env` (TRELLO_API_KEY, TRELLO_TOKEN)


---

## Wiki Knowledge Base
Path: D:/Projects/_wiki

Di akhir percakapan yang menghasilkan informasi baru (keputusan bisnis, data, insight, hasil kerja), simpan ke wiki Obsidian terpusat. Plugin claude-obsidian mengelola vault ini.

When you need context not already in this project:
1. Read wiki/hot.md first (recent context cache)
2. If not enough, read wiki/index.md
3. Only then drill into specific wiki pages

Do NOT read the wiki for general coding questions or tasks unrelated to business context.
