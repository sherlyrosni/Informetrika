# RuangData — Laboratorium Informetrika (16 Pertemuan)

Website pembelajaran interaktif untuk mata kuliah **Informetrika, Program Studi Ilmu Perpustakaan**, dengan antarmuka berbasis HTML, CSS, dan JavaScript. Ini adalah pengembangan kurikuler dari konsep RuangData: **visual analytics** dan **data-driven feedback**.

Website ini dapat dijalankan offline maupun diterbitkan di GitHub Pages. Tidak membutuhkan database, server PHP, akun, token, atau layanan berbayar.

## Mulai memakai

1. Buka `index.html` di browser Chrome, Edge, atau Firefox. Semua file (`content.js`, `app.js`, `style.css`, `assets/`) harus tetap berada pada struktur folder aslinya.
2. Pilih menu **16 Pertemuan** dan mulai dari Pertemuan 1.
3. Baca materi, selesaikan langkah praktik, isi refleksi, lalu kerjakan kuis.
4. Gunakan menu **Laboratorium Data** untuk analisis CSV, visualisasi, dan ekspor CSV.
5. Gunakan menu **Kalkulator Rumus** untuk praktik Bradford, Lotka, Zipf, dan h-index.
6. Pada akhir perkuliahan, pilih **Portofolio Belajar** → **Ekspor portofolio JSON** atau **Ekspor ringkasan CSV**.

## Cara mengunggah ke GitHub Pages

1. Buat repositori baru di GitHub, misalnya `ruangdata-informetrika`.
2. Unggah isi folder ini ke **root** repositori. Pastikan `index.html` berada di root, bukan di dalam subfolder.
3. Dari repositori: **Settings** → **Pages** → **Build and deployment: Deploy from a branch**.
4. Pilih branch **main** dan folder **/(root)**, lalu **Save**.
5. Setelah deployment selesai, buka URL yang disediakan GitHub Pages.

Contoh bentuk URL: `https://username.github.io/ruangdata-informetrika/` (ganti `username` dengan akunmu).

**Alternatif:** `preview.html` adalah versi **satu file HTML mandiri** yang berisi seluruh konten, CSS, dan JavaScript. Cukup klik dua kali untuk menguji website tanpa internet. Untuk publikasi dan pembaruan, disarankan menggunakan versi file terpisah agar mudah disunting.

## Berkas utama

| Berkas | Isi |
|---|---|
| `index.html` | Halaman utama aplikasi |
| `style.css` | Semua gaya dan responsivitas |
| `content.js` | **Konten 16 pertemuan, 76 soal, dan dataset latihan** (paling mudah disesuaikan) |
| `app.js` | Navigasi, penilaian kuis, grafik, kalkulator, ekspor, progres |
| `assets/favicon.svg` | Ikon RuangData |
| `data/*.csv` | Salinan dataset latihan dalam format CSV |
| `preview.html` | Versi satu berkas yang berfungsi mandiri |
| `DESKRIPSI_PRAKTIK_16_PERTEMUAN.md` | Narasi pertemuan siap adaptasi SIPEJAR/RPS |

## Modul tersedia

01. Pengantar Informetrika dan Literasi Data (pretest)
02. Dataset, Metadata, dan Komposisi Korpus
03. Akuisisi Data Publikasi dan Etika
04. Pembersihan dan Standardisasi Metadata
05. Statistik Deskriptif dan Distribusi
06. Visualisasi Data Ilmiah
07. Interpretasi Bukti dan Penulisan Temuan
08. UTS: Asesmen Analisis Data Informasi
09. Hukum Bradford
10. Hukum Lotka
11. Hukum Zipf
12. Analisis Sitasi dan h-index
13. Scientometrika dan Pemetaan Kolaborasi
14. Altmetrika dan Evaluasi Dampak Digital
15. Proyek Akhir Mini: Laporan Informetrika
16. UAS: Analisis dan Refleksi Literasi Data

## Fitur yang benar-benar bekerja

- Navigasi materi 16 pertemuan dan 76 soal pilihan ganda dengan pembahasan sesudah dijawab.
- Catatan/refleksi dan checklist langkah praktik untuk tiap pertemuan.
- Menyimpan **hasil kuis yang benar-benar dikerjakan**, termasuk waktu, jawaban, dan riwayat percobaan.
- Grafik batang dan garis yang **dihitung dari dataset aktif**, dengan pilihan kolom dan metode agregasi (`count`, `sum`, `mean`).
- Impor berkas **CSV valid** (maksimal 1 MB, maksimal 500 baris dan 25 kolom), diproses dalam browser.
- Ekspor dataset CSV, ekspor portofolio JSON dan rekap nilai latihan CSV.
- Kalkulator Bradford (partisi tiga zona aproximatif), Lotka, Zipf, dan h-index.
- Berjalan di browser tanpa koneksi internet dan mendukung tampilan ponsel.

## Batasan penting

- **Data bawaan bersifat sintetis/ilustratif**, bukan data empiris mahasiswa. Jangan digunakan sebagai hasil penelitian.
- Website statis ini **belum mempunyai login, database, API, maupun dashboard dosen terpusat**.
- Progres belajar tersimpan **hanya di `localStorage` browser mahasiswa**. Jika data browser dihapus atau perangkat berganti, progres dapat hilang. Ekspor portofolio sebagai cadangan.
- Impor CSV diproses lokal dan **tidak disimpan permanen**; perlu mengimpor ulang setelah refresh.
- Kuis bersifat **latihan**, bukan sistem asesmen berpengawasan. Penilaian resmi tetap dikelola oleh dosen melalui SIPEJAR.
- Kalkulator menyediakan **contoh pembelajaran** dan pendekatan perhitungan. Pengguna tetap perlu memeriksa definisi dan kualitas data ilmiah.
- Untuk penelitian pengaruh penggunaan RuangData terhadap literasi data, gunakan instrumen pretest-posttest, persetujuan partisipan, dan rancangan evaluasi tersendiri. Tidak ada klaim peningkatan kemampuan nyata yang ditanamkan di website.

## Mengubah konten

Buka `content.js`, cari nomor pertemuan, lalu ubah `title`, `description`, `objectives`, `sections`, `steps`, `assignment`, `criteria`, dan `quiz`.

Setiap kuis menggunakan struktur jawaban `correct` berupa indeks **0–3**. Setelah mengubah konten kuis, disarankan melakukan pengujian kembali. Jika pengguna sudah mulai mengerjakan, perubahan soal dapat menyebabkan riwayat jawaban lama tidak lagi sepadan dengan soal baru.

## Saran pelaksanaan di SIPEJAR

Satu minggu: (1) materi singkat, (2) eksplorasi laboratorium, (3) kuis, (4) refleksi, (5) tugas terstruktur jika dijadwalkan. Beri ruang pengumpulan laporan praktik terpisah di SIPEJAR. Pretest/UTS/UAS dapat menggunakan format resmi yang ditentukan dosen.
