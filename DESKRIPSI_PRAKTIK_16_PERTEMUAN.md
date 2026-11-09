# Deskripsi Practice Site — RuangData Informetrika

**Nama situs:** RuangData — Laboratorium Informetrika

**Deskripsi singkat untuk SIPEJAR / GitHub**

RuangData adalah situs praktik berbasis web untuk pembelajaran Informetrika selama 16 pertemuan. Mahasiswa belajar memahami struktur dan kualitas dataset, melakukan eksplorasi visual, menginterpretasikan pola publikasi, serta berlatih menghitung Hukum Bradford, Lotka, Zipf, dan h-index. Setiap pertemuan memuat tujuan, materi ringkas, panduan praktik, tugas, kuis dengan umpan balik, dan catatan refleksi. Progres belajar tersimpan secara lokal pada browser dan dapat diekspor oleh mahasiswa sebagai portofolio. Dataset bawaan bersifat sintetis untuk tujuan pendidikan.

**Tujuan pembelajaran umum:** Mahasiswa mampu memperoleh, memeriksa, menganalisis, memvisualisasikan, dan menginterpretasikan data terkait fenomena informasi secara transparan dan bertanggung jawab.

**Alur tiap pertemuan:** Baca materi → gunakan laboratorium/kalkulator → kerjakan tugas → jawab kuis → simpan refleksi → ekspor portofolio.

---

## Pertemuan 1 — Pengantar Informetrika dan Literasi Data

**Deskripsi:** Mengenali peran data dalam mengukur dan memahami aktivitas informasi. Mahasiswa membedakan fakta, indikator, dan interpretasi sebelum melakukan analisis.

**Tujuan:** Menjelaskan perbedaan informetrika dan literasi data.; Mengenali observasi, variabel, indikator, dan kesimpulan.; Mengikuti asesmen awal sebagai pemetaan kemampuan..

**Praktik di website:**
- Buka Laboratorium Data dan pilih dataset Kunjungan Perpustakaan.
- Sebutkan dua variabel numerik dan satu variabel kategori.
- Bandingkan grafik batang dan garis; jelaskan kapan keduanya digunakan.
- Selesaikan asesmen awal, lalu catat hal yang paling ingin dipelajari.

**Tugas:** Tuliskan dua pertanyaan yang dapat dijawab dataset kunjungan dan satu pertanyaan yang belum bisa dijawab.

**Luaran:** Catatan singkat (150–200 kata) dan hasil pretest.


## Pertemuan 2 — Dataset, Metadata, dan Komposisi Korpus

**Deskripsi:** Memahami korpus sebagai kumpulan rekaman yang dipilih menurut batas topik, periode, sumber, dan kriteria. Mengidentifikasi struktur metadata publikasi.

**Tujuan:** Menguraikan cakupan dan unit analisis korpus.; Mengidentifikasi field metadata bibliografi.; Menyusun kriteria inklusi dan eksklusi yang dapat direplikasi..

**Praktik di website:**
- Pilih dataset Publikasi Ilmu Perpustakaan.
- Identifikasi jumlah rekaman, kolom, dan rentang tahun.
- Susun contoh kriteria inklusi/eksklusi.
- Catat field yang belum lengkap atau rawan berbeda ejaan.

**Tugas:** Buat deskripsi komposisi korpus: tujuan, sumber, rentang waktu, unit analisis, dan keterbatasan.

**Luaran:** Deskripsi korpus dan tabel ringkasan kolom.


## Pertemuan 3 — Akuisisi Data Publikasi dan Etika

**Deskripsi:** Merencanakan penelusuran publikasi dan memeriksa asal data. Praktik dapat memanfaatkan Publish or Perish (PoP) secara terpisah sebelum data dianalisis di RuangData.

**Tujuan:** Menentukan kata kunci penelusuran yang relevan.; Memeriksa kelayakan sumber dan konsistensi metadata.; Mengenali risiko privasi dan keterbatasan data sitasi..

**Praktik di website:**
- Rancang string pencarian dengan dua konsep dan operator Boolean.
- Catat parameter untuk mengambil sekitar 30 rekaman melalui PoP bila tersedia.
- Bandingkan dua rekaman dengan judul mirip; tentukan apakah duplikat.
- Lakukan analisis awal memakai dataset sampel bila belum memiliki ekspor PoP.

**Tugas:** Susun log akuisisi data dan tabel 5 rekaman yang perlu diverifikasi.

**Luaran:** Log pencarian (sumber, kata kunci, tanggal, batasan) dan tabel keputusan.


## Pertemuan 4 — Pembersihan dan Standardisasi Metadata

**Deskripsi:** Memperbaiki duplikasi, perbedaan ejaan, data kosong, dan ketidakseragaman format agar penghitungan bibliometrik lebih andal.

**Tujuan:** Mendeteksi tipe kesalahan metadata.; Menentukan aturan normalisasi dan penanganan missing value.; Membuat jejak keputusan cleaning yang transparan..

**Praktik di website:**
- Gunakan dataset Publikasi Ilmu Perpustakaan.
- Identifikasi nama penulis, jurnal, atau kata kunci yang berpotensi bervariasi.
- Buat minimal empat aturan cleaning pada catatan kerja.
- Bandingkan jumlah rekaman sebelum dan sesudah penapisan di spreadsheet.

**Tugas:** Buat mini-codebook aturan cleaning dengan contoh sebelum dan sesudah.

**Luaran:** Tabel minimal empat aturan, contoh, dan alasan.


## Pertemuan 5 — Statistik Deskriptif dan Distribusi

**Deskripsi:** Menggunakan frekuensi, proporsi, rerata, median, dan perubahan antarperiode untuk menggambarkan data informasi.

**Tujuan:** Menghitung frekuensi dan persentase.; Membedakan rerata dan median.; Memilih ringkasan sesuai bentuk variabel..

**Praktik di website:**
- Buka Eksplorasi Visual dan pilih data Publikasi atau Kunjungan.
- Pilih variabel kategori lalu hitung frekuensi.
- Ubah metrik count, sum, dan mean untuk melihat perbedaannya.
- Tulis dua interpretasi yang menyebut periode dan satuan.

**Tugas:** Buat tabel frekuensi dan dua paragraf interpretasi deskriptif.

**Luaran:** Tabel ringkas dan penjelasan 200 kata.


## Pertemuan 6 — Visualisasi Data Ilmiah

**Deskripsi:** Memilih grafik berdasarkan tujuan analisis dan tipe data; menganalisis tren publikasi serta perbandingan kategori.

**Tujuan:** Memilih grafik batang dan garis secara tepat.; Membaca sumbu, satuan, dan rentang.; Mengenali visualisasi yang dapat menyesatkan..

**Praktik di website:**
- Buka Eksplorasi Visual → Publikasi Ilmu Perpustakaan.
- Coba kelompokkan berdasarkan tahun dan pilih grafik garis.
- Kelompokkan menurut jurnal dan pilih grafik batang.
- Ekspor CSV ringkasan, lalu tuliskan alasan pemilihan grafik.

**Tugas:** Dua grafik disertai caption, sumber data, dan penjelasan pilihan bentuk grafik.

**Luaran:** Gambar/screenshot grafik dan narasi 150–250 kata.


## Pertemuan 7 — Interpretasi Bukti dan Penulisan Temuan

**Deskripsi:** Menyusun paragraf hasil berbasis bukti numerik dengan membedakan deskripsi, penjelasan, dan keterbatasan.

**Tujuan:** Mengidentifikasi tren, variasi, dan nilai ekstrem.; Menyusun klaim yang didukung angka.; Menulis keterbatasan cakupan data..

**Praktik di website:**
- Amati satu grafik dari Laboratorium Data.
- Tuliskan tiga fakta terukur lengkap dengan angka.
- Tulis satu dugaan penjelasan dan jelaskan bahwa hal itu belum diuji.
- Selesaikan kuis sebagai latihan persiapan UTS.

**Tugas:** Paragraf hasil singkat (200–250 kata) dan daftar dua keterbatasan.

**Luaran:** Interpretasi berbasis grafik dan revisi argumentasi.


## Pertemuan 8 — UTS: Asesmen Analisis Data Informasi

**Deskripsi:** Asesmen tengah semester menguji pemilihan data, pemeriksaan kualitas metadata, statistik deskriptif, visualisasi, dan penalaran berbasis bukti.

**Tujuan:** Mengaplikasikan konsep pertemuan 1–7.; Menentukan jenis grafik dan metode ringkasan yang tepat.; Menafsirkan data tanpa klaim berlebihan..

**Praktik di website:**
- Buka Laboratorium Data dan pilih dataset relevan.
- Selesaikan asesmen UTS di bawah tanpa melihat pembahasan sampai dikirim.
- Isi refleksi tentang bagian yang masih sulit.
- Ekspor portofolio untuk dikumpulkan di SIPEJAR bila diminta dosen.

**Tugas:** Selesaikan soal UTS dan buat laporan analisis ringkas (maksimal dua halaman).

**Luaran:** Skor asesmen dalam browser dan file portofolio.


## Pertemuan 9 — Hukum Bradford: Zona Produktivitas Jurnal

**Deskripsi:** Menganalisis sebaran artikel terhadap jurnal, membagi jurnal menjadi zona dengan jumlah artikel yang mendekati sama, dan memahami jurnal inti.

**Tujuan:** Mengurutkan jurnal berdasarkan artikel.; Menghitung pembagian tiga zona Bradford.; Menjelaskan interpretasi dan batasan pola zona..

**Praktik di website:**
- Buka Kalkulator Bradford pada Laboratorium Rumus.
- Gunakan data contoh atau ketik deret frekuensi jurnal yang telah diurutkan.
- Periksa total artikel, jumlah jurnal, dan rasio antar zona.
- Jelaskan mengapa ukuran zona berbeda meskipun jumlah artikelnya mendekati sama.

**Tugas:** Sajikan tabel tiga zona Bradford beserta narasi jurnal inti.

**Luaran:** Tabel zona dan interpretasi 200 kata.


## Pertemuan 10 — Hukum Lotka: Produktivitas Penulis

**Deskripsi:** Mempelajari pola frekuensi penulis menurut jumlah publikasinya dan membandingkan distribusi teramati dengan bentuk sederhana hukum Lotka.

**Tujuan:** Menghitung banyak penulis per jumlah artikel.; Menggunakan bentuk pendekatan f(n) = C/n².; Membedakan model teoretis dan data observasi..

**Praktik di website:**
- Buka Kalkulator Lotka.
- Masukkan jumlah penulis satu artikel dan eksponen n.
- Bandingkan prediksi untuk n = 1–6 dengan contoh distribusi observasi.
- Tulis satu alasan hasil nyata dapat berbeda dari hukum ideal.

**Tugas:** Tabel prediksi dan observasi produktivitas penulis beserta diskusi.

**Luaran:** Tabel frekuensi penulis, kurva/pola, dan interpretasi.


## Pertemuan 11 — Hukum Zipf: Frekuensi Kata Kunci

**Deskripsi:** Menganalisis hubungan peringkat kata dan frekuensinya setelah normalisasi, tokenisasi, dan penghapusan stopword yang sesuai.

**Tujuan:** Menghitung dan mengurutkan frekuensi kata.; Mengamati hubungan peringkat r dan frekuensi f.; Menilai dampak normalisasi kata terhadap hasil..

**Praktik di website:**
- Buka Kalkulator Zipf.
- Masukkan frekuensi kata paling sering sebagai konstanta K.
- Periksa prediksi untuk rank 1–10.
- Buat contoh lima kata kunci dari dataset publikasi dan susun peringkat.

**Tugas:** Buat tabel peringkat, frekuensi, dan interpretasi Zipf.

**Luaran:** Tabel minimal lima kata dan satu paragraf keterbatasan.


## Pertemuan 12 — Analisis Sitasi, h-index, dan Keterbatasannya

**Deskripsi:** Menghitung jumlah sitasi dan h-index serta membedakan popularitas sitasi dari mutu penelitian.

**Tujuan:** Mengurutkan artikel berdasarkan sitasi menurun.; Menghitung h-index dari sebuah daftar.; Mengenali bias umur dokumen dan basis data..

**Praktik di website:**
- Buka Kalkulator Sitasi pada Laboratorium Rumus.
- Masukkan 12, 8, 5, 3, 1 dan cek hasilnya.
- Ubah satu nilai untuk melihat perubahan h-index.
- Tuliskan dua alasan h-index tidak boleh menjadi satu-satunya dasar evaluasi.

**Tugas:** Sajikan perhitungan h-index lengkap dengan keterbatasannya.

**Luaran:** Daftar sitasi terurut dan interpretasi.


## Pertemuan 13 — Scientometrika dan Pemetaan Kolaborasi

**Deskripsi:** Mengenali indikator kegiatan ilmiah, pola kolaborasi penulis, dan jaringan hubungan publikasi, tanpa mencampuradukkan jenis hubungan.

**Tujuan:** Membedakan bibliometrika, scientometrika, dan analisis jaringan.; Menjelaskan co-authorship, co-citation, dan bibliographic coupling.; Membaca jejaring kolaborasi sederhana..

**Praktik di website:**
- Buka dataset Publikasi Ilmu Perpustakaan dan amati kolom penulis.
- Buat pasangan dua penulis dari contoh artikel bersama.
- Jelaskan perbedaan jaringan co-authorship dan co-citation.
- Sajikan dua kemungkinan pemanfaatan peta kolaborasi.

**Tugas:** Buat ilustrasi jaringan sederhana (5 simpul) dan narasi interpretasinya.

**Luaran:** Diagram jaringan dan deskripsi jenis hubungan.


## Pertemuan 14 — Altmetrika dan Evaluasi Dampak Digital

**Deskripsi:** Membandingkan sitasi akademik dengan jejak perhatian daring seperti penyebutan, unggahan, dan penyimpanan.

**Tujuan:** Membedakan attention metrics dan citation metrics.; Mengidentifikasi sumber dan bias altmetrika.; Menyusun ringkasan multi-indikator dengan caveat..

**Praktik di website:**
- Buka dataset Dampak Digital (sampel).
- Bandingkan jumlah sitasi dengan penyebutan sosial pada tiga rekaman.
- Identifikasi satu artikel dengan sitasi rendah tetapi perhatian daring tinggi.
- Tulis penjelasan yang tidak menyamakan kedua indikator tersebut.

**Tugas:** Tabel komparasi dua indikator dan 200 kata interpretasi.

**Luaran:** Tabel dan keterbatasan masing-masing indikator.


## Pertemuan 15 — Proyek Akhir Mini: Laporan Informetrika

**Deskripsi:** Mengintegrasikan penyusunan korpus, cleaning, perhitungan indikator, visualisasi, dan interpretasi ke dalam laporan ringkas yang dapat diaudit.

**Tujuan:** Menyusun alur analisis ujung ke ujung.; Menentukan indikator sesuai pertanyaan penelitian.; Menyajikan laporan yang transparan dan dapat diperiksa..

**Praktik di website:**
- Pilih dataset serta pertanyaan penelitian.
- Gunakan Laboratorium Data dan salah satu kalkulator metrik.
- Buat grafik, tabel, dan paragraf hasil.
- Isi checklist dan ekspor portofolio untuk disatukan dengan laporan.

**Tugas:** Laporan mini 3–5 halaman dengan tabel/grafik dan lampiran data.

**Luaran:** Laporan PDF (diolah sendiri) dan portofolio RuangData JSON.


## Pertemuan 16 — UAS: Analisis dan Refleksi Literasi Data

**Deskripsi:** Mengukur kembali kemampuan membaca data, menghitung indikator dasar, serta menyusun kesimpulan yang dibatasi bukti. Asesmen ini dapat dibandingkan dengan pertemuan 1 secara deskriptif.

**Tujuan:** Mengintegrasikan keterampilan 15 pertemuan sebelumnya.; Menyelesaikan soal indikator bibliometrika.; Menyusun refleksi pembelajaran dan rencana tindak lanjut..

**Praktik di website:**
- Selesaikan asesmen UAS.
- Kerjakan satu analisis data dengan indikator yang sesuai.
- Bandingkan catatan refleksi awal dan akhir secara kualitatif.
- Ekspor portofolio untuk pelaporan akhir.

**Tugas:** Asesmen UAS, ringkasan analisis data, dan refleksi 250 kata.

**Luaran:** Portofolio JSON dan laporan ringkas.

---

**Catatan dosen:** Setiap kuis pada website adalah asesmen formatif latihan, bukan nilai resmi. UTS dan UAS dapat divalidasi ulang melalui SIPEJAR. Sesuaikan RPS, jadwal, dan rubrik dengan kebijakan program studi.
