/* Konten pembelajaran RuangData, 16 pertemuan. Semua data latihan adalah contoh/sintetis. */
window.RUANGDATA_CONTENT = {
  "course": "RuangData • Laboratorium Informetrika",
  "version": "1.0.0",
  "sessions": [
    {
      "no": 1,
      "title": "Pengantar Informetrika dan Literasi Data",
      "tag": "Orientasi & pretest",
      "description": "Mengenali peran data dalam mengukur dan memahami aktivitas informasi. Mahasiswa membedakan fakta, indikator, dan interpretasi sebelum melakukan analisis.",
      "objectives": [
        "Menjelaskan perbedaan informetrika dan literasi data.",
        "Mengenali observasi, variabel, indikator, dan kesimpulan.",
        "Mengikuti asesmen awal sebagai pemetaan kemampuan."
      ],
      "sections": [
        {
          "title": "Apa yang diukur informetrika?",
          "body": "Informetrika mempelajari pengukuran aspek informasi dan aktivitasnya. Data dapat berasal dari publikasi, pengguna informasi, koleksi, sitasi, dan interaksi digital."
        },
        {
          "title": "Data tidak sama dengan kesimpulan",
          "body": "Angka kunjungan perpustakaan adalah observasi. Menyimpulkan bahwa program promosi menyebabkan kenaikan kunjungan membutuhkan bukti tambahan."
        },
        {
          "title": "Siklus literasi data",
          "body": "Mulailah dari pertanyaan, kenali sumber dan kualitas data, olah secara tepat, visualisasikan, lalu tulis kesimpulan beserta batasannya."
        }
      ],
      "steps": [
        "Buka Laboratorium Data dan pilih dataset Kunjungan Perpustakaan.",
        "Sebutkan dua variabel numerik dan satu variabel kategori.",
        "Bandingkan grafik batang dan garis; jelaskan kapan keduanya digunakan.",
        "Selesaikan asesmen awal, lalu catat hal yang paling ingin dipelajari."
      ],
      "assignment": "Tuliskan dua pertanyaan yang dapat dijawab dataset kunjungan dan satu pertanyaan yang belum bisa dijawab.",
      "deliverable": "Catatan singkat (150–200 kata) dan hasil pretest.",
      "criteria": [
        "Pertanyaan dapat diukur dengan variabel tersedia",
        "Tidak membuat klaim sebab-akibat tanpa bukti",
        "Mencatat keterbatasan data"
      ],
      "quiz": [
        {
          "question": "Informetrika terutama berfokus pada …",
          "options": [
            "Merancang tata letak katalog",
            "Mengukur fenomena informasi dan pola aktivitasnya",
            "Memperbaiki perangkat keras",
            "Membuat semua data menjadi rahasia"
          ],
          "correct": 1,
          "explanation": "Informetrika menerapkan pendekatan pengukuran pada fenomena informasi."
        },
        {
          "question": "Sebuah grafik menunjukkan kenaikan kunjungan. Kesimpulan yang paling tepat …",
          "options": [
            "Promosi pasti penyebab kenaikan",
            "Kunjungan naik pada periode yang diamati",
            "Kualitas pustakawan pasti meningkat",
            "Seluruh mahasiswa makin rajin"
          ],
          "correct": 1,
          "explanation": "Data tren menggambarkan perubahan, bukan sebabnya."
        },
        {
          "question": "Variabel kategori pada data kunjungan adalah …",
          "options": [
            "Jumlah kunjungan",
            "Tahun publikasi",
            "Jenis pengguna",
            "Total transaksi"
          ],
          "correct": 2,
          "explanation": "Jenis pengguna berisi kategori seperti mahasiswa, dosen, atau umum."
        },
        {
          "question": "Langkah pertama analisis data adalah …",
          "options": [
            "Memilih grafik terindah",
            "Menentukan pertanyaan dan tujuan analisis",
            "Menulis kesimpulan",
            "Menghapus nilai yang tidak disukai"
          ],
          "correct": 1,
          "explanation": "Pertanyaan menentukan data dan metode yang relevan."
        }
      ],
      "tool": "explorer",
      "reference": "",
      "exam": false
    },
    {
      "no": 2,
      "title": "Dataset, Metadata, dan Komposisi Korpus",
      "tag": "Dasar korpus",
      "description": "Memahami korpus sebagai kumpulan rekaman yang dipilih menurut batas topik, periode, sumber, dan kriteria. Mengidentifikasi struktur metadata publikasi.",
      "objectives": [
        "Menguraikan cakupan dan unit analisis korpus.",
        "Mengidentifikasi field metadata bibliografi.",
        "Menyusun kriteria inklusi dan eksklusi yang dapat direplikasi."
      ],
      "sections": [
        {
          "title": "Korpus penelitian",
          "body": "Korpus adalah himpunan dokumen atau rekaman yang dikumpulkan untuk tujuan analisis tertentu. Komposisi korpus menjelaskan sumber, tahun, bidang, bahasa, dan kriteria pemilihannya."
        },
        {
          "title": "Unit analisis dan unit pengukuran",
          "body": "Satu baris publikasi bukan selalu satu penulis. Untuk menganalisis produktivitas penulis, data perlu diurai menurut kepengarangan; untuk tren tahunan, gunakan satu baris per publikasi."
        },
        {
          "title": "Metadata yang perlu dicek",
          "body": "Judul, penulis, tahun, jurnal, DOI, kata kunci, dan jumlah sitasi mendukung jenis analisis berbeda. Ketidaklengkapan metadata memengaruhi hasil."
        }
      ],
      "steps": [
        "Pilih dataset Publikasi Ilmu Perpustakaan.",
        "Identifikasi jumlah rekaman, kolom, dan rentang tahun.",
        "Susun contoh kriteria inklusi/eksklusi.",
        "Catat field yang belum lengkap atau rawan berbeda ejaan."
      ],
      "assignment": "Buat deskripsi komposisi korpus: tujuan, sumber, rentang waktu, unit analisis, dan keterbatasan.",
      "deliverable": "Deskripsi korpus dan tabel ringkasan kolom.",
      "criteria": [
        "Cakupan data eksplisit",
        "Unit analisis benar",
        "Kriteria dapat diulang"
      ],
      "quiz": [
        {
          "question": "Komposisi korpus sebaiknya mencakup …",
          "options": [
            "Warna grafik dan logo",
            "Sumber, rentang waktu, kriteria, dan jumlah rekaman",
            "Nama laptop peneliti saja",
            "Pendapat tanpa data"
          ],
          "correct": 1,
          "explanation": "Komposisi korpus harus menggambarkan bagaimana himpunan data dibentuk."
        },
        {
          "question": "Untuk menghitung jumlah artikel per tahun, unit analisis paling tepat adalah …",
          "options": [
            "Setiap kata",
            "Setiap publikasi",
            "Setiap penerbit",
            "Setiap pengunjung"
          ],
          "correct": 1,
          "explanation": "Satu rekaman publikasi dipetakan ke tahun terbitnya."
        },
        {
          "question": "Contoh metadata bibliografi adalah …",
          "options": [
            "Kelembapan ruang",
            "Judul, penulis, tahun, DOI",
            "Warna rak",
            "Ukuran ruangan"
          ],
          "correct": 1,
          "explanation": "Keempat item itu merupakan atribut bibliografi."
        },
        {
          "question": "Mengapa kriteria inklusi penting?",
          "options": [
            "Supaya hasil selalu besar",
            "Supaya cakupan korpus transparan dan dapat direplikasi",
            "Supaya grafik selalu naik",
            "Supaya sitasi dihapus"
          ],
          "correct": 1,
          "explanation": "Kriteria menjaga keterlacakan pemilihan data."
        }
      ],
      "tool": "explorer",
      "reference": "",
      "exam": false
    },
    {
      "no": 3,
      "title": "Akuisisi Data Publikasi dan Etika",
      "tag": "Sumber dan validasi",
      "description": "Merencanakan penelusuran publikasi dan memeriksa asal data. Praktik dapat memanfaatkan Publish or Perish (PoP) secara terpisah sebelum data dianalisis di RuangData.",
      "objectives": [
        "Menentukan kata kunci penelusuran yang relevan.",
        "Memeriksa kelayakan sumber dan konsistensi metadata.",
        "Mengenali risiko privasi dan keterbatasan data sitasi."
      ],
      "sections": [
        {
          "title": "Strategi akuisisi",
          "body": "Dokumentasikan kata kunci, sumber indeks, tanggal akses, batas tahun, dan jenis dokumen. Hasil PoP dapat berbeda menurut sumber serta kebijakan cakupan indeks."
        },
        {
          "title": "Penapisan rekaman",
          "body": "Periksa judul yang tidak relevan, duplikasi, DOI, tahun, dan jurnal. Jumlah hasil pencarian tidak sama dengan jumlah dokumen akhir korpus."
        },
        {
          "title": "Etika",
          "body": "Gunakan data publik yang diizinkan atau data simulasi. Jangan memasukkan identitas pribadi mahasiswa, nomor induk, maupun data sensitif ke repositori publik."
        }
      ],
      "steps": [
        "Rancang string pencarian dengan dua konsep dan operator Boolean.",
        "Catat parameter untuk mengambil sekitar 30 rekaman melalui PoP bila tersedia.",
        "Bandingkan dua rekaman dengan judul mirip; tentukan apakah duplikat.",
        "Lakukan analisis awal memakai dataset sampel bila belum memiliki ekspor PoP."
      ],
      "assignment": "Susun log akuisisi data dan tabel 5 rekaman yang perlu diverifikasi.",
      "deliverable": "Log pencarian (sumber, kata kunci, tanggal, batasan) dan tabel keputusan.",
      "criteria": [
        "Strategi pencarian relevan",
        "Keputusan inklusi didukung alasan",
        "Etika pengelolaan data diperhatikan"
      ],
      "quiz": [
        {
          "question": "Metadata sumber pencarian yang penting untuk direplikasi adalah …",
          "options": [
            "Warna tema aplikasi",
            "Kata kunci, tanggal akses, basis data, dan batas tahun",
            "Resolusi monitor",
            "Nama folder gambar"
          ],
          "correct": 1,
          "explanation": "Parameter pencarian menentukan hasil yang dapat diperiksa kembali."
        },
        {
          "question": "Dua publikasi dengan judul sama tetapi DOI berbeda sebaiknya …",
          "options": [
            "Langsung digabung",
            "Diperiksa metadata lengkap sebelum memutuskan duplikasi",
            "Langsung dihapus semua",
            "Dianggap selalu berbeda"
          ],
          "correct": 1,
          "explanation": "Duplikasi perlu verifikasi, bukan asumsi."
        },
        {
          "question": "Praktik yang aman saat mengunggah data ke GitHub adalah …",
          "options": [
            "Menyertakan NIM lengkap",
            "Mengunggah kata sandi",
            "Memakai data publik atau anonim yang diizinkan",
            "Membagikan data rahasia"
          ],
          "correct": 2,
          "explanation": "Repositori publik dapat diakses banyak orang."
        },
        {
          "question": "Data PoP paling tepat dipahami sebagai …",
          "options": [
            "Hasil final yang tidak perlu diperiksa",
            "Hasil pengambilan yang perlu verifikasi dan pembersihan",
            "Bukti kualitas semua artikel",
            "Daftar pasti seluruh publikasi dunia"
          ],
          "correct": 1,
          "explanation": "Cakupan dan kualitas data indeks perlu diperiksa."
        }
      ],
      "tool": "explorer",
      "reference": "",
      "exam": false
    },
    {
      "no": 4,
      "title": "Pembersihan dan Standardisasi Metadata",
      "tag": "Data cleaning",
      "description": "Memperbaiki duplikasi, perbedaan ejaan, data kosong, dan ketidakseragaman format agar penghitungan bibliometrik lebih andal.",
      "objectives": [
        "Mendeteksi tipe kesalahan metadata.",
        "Menentukan aturan normalisasi dan penanganan missing value.",
        "Membuat jejak keputusan cleaning yang transparan."
      ],
      "sections": [
        {
          "title": "Tipe masalah umum",
          "body": "Penulis bisa ditulis sebagai A. Rahman atau Ahmad Rahman; jurnal dapat memiliki singkatan; DOI mungkin kosong. Menggabungkan entitas harus mempertimbangkan bukti."
        },
        {
          "title": "Prosedur cleaning",
          "body": "Inventarisasi kesalahan → tetapkan aturan → buat kolom hasil normalisasi → tinjau rekaman mencurigakan → simpan perubahan dalam log. Jangan menimpa data mentah secara permanen."
        },
        {
          "title": "Konsekuensi analitik",
          "body": "Duplikasi dapat membuat produktivitas, frekuensi kata, maupun sitasi tampak lebih tinggi dari kenyataan."
        }
      ],
      "steps": [
        "Gunakan dataset Publikasi Ilmu Perpustakaan.",
        "Identifikasi nama penulis, jurnal, atau kata kunci yang berpotensi bervariasi.",
        "Buat minimal empat aturan cleaning pada catatan kerja.",
        "Bandingkan jumlah rekaman sebelum dan sesudah penapisan di spreadsheet."
      ],
      "assignment": "Buat mini-codebook aturan cleaning dengan contoh sebelum dan sesudah.",
      "deliverable": "Tabel minimal empat aturan, contoh, dan alasan.",
      "criteria": [
        "Aturan konsisten",
        "Data mentah tetap terlacak",
        "Tidak menghapus rekaman sembarangan"
      ],
      "quiz": [
        {
          "question": "Mengapa data mentah sebaiknya disimpan?",
          "options": [
            "Agar sumber perubahan dapat diaudit",
            "Agar tabel makin banyak",
            "Agar grafik lebih cerah",
            "Karena tidak boleh ada perubahan"
          ],
          "correct": 0,
          "explanation": "Data mentah diperlukan untuk audit dan replikasi."
        },
        {
          "question": "Menghapus semua baris yang memiliki nilai kosong adalah …",
          "options": [
            "Selalu tepat",
            "Keputusan yang harus mempertimbangkan tujuan analisis",
            "Wajib dalam informetrika",
            "Cara menghitung h-index"
          ],
          "correct": 1,
          "explanation": "Penanganan missing value bergantung pada konteks."
        },
        {
          "question": "Contoh normalisasi adalah …",
          "options": [
            "Mengubah jumlah sitasi sesuka hati",
            "Menyamakan nama jurnal yang sama dengan ejaan berbeda",
            "Menghapus tahun yang rendah",
            "Menambah rekaman fiktif"
          ],
          "correct": 1,
          "explanation": "Normalisasi menyamakan representasi entitas yang sepadan."
        },
        {
          "question": "Duplikasi publikasi dapat menyebabkan …",
          "options": [
            "Hitungan artikel menjadi terlalu tinggi",
            "Semua indikator pasti menurun",
            "Korpus berubah menjadi opini",
            "Grafik tidak dapat dibuat"
          ],
          "correct": 0,
          "explanation": "Duplikat menambah frekuensi secara semu."
        }
      ],
      "tool": "explorer",
      "reference": "",
      "exam": false
    },
    {
      "no": 5,
      "title": "Statistik Deskriptif dan Distribusi",
      "tag": "Ukuran dasar",
      "description": "Menggunakan frekuensi, proporsi, rerata, median, dan perubahan antarperiode untuk menggambarkan data informasi.",
      "objectives": [
        "Menghitung frekuensi dan persentase.",
        "Membedakan rerata dan median.",
        "Memilih ringkasan sesuai bentuk variabel."
      ],
      "sections": [
        {
          "title": "Frekuensi dan proporsi",
          "body": "Frekuensi menunjukkan jumlah kejadian; persentase = frekuensi ÷ total × 100%. Selalu sebutkan penyebut."
        },
        {
          "title": "Rerata dan median",
          "body": "Rerata = jumlah nilai ÷ jumlah data; median = nilai tengah setelah urut. Nilai ekstrem dapat memengaruhi rerata lebih besar daripada median."
        },
        {
          "title": "Interpretasi",
          "body": "Rangkuman statistik menggambarkan korpus, bukan populasi yang lebih luas secara otomatis."
        }
      ],
      "steps": [
        "Buka Eksplorasi Visual dan pilih data Publikasi atau Kunjungan.",
        "Pilih variabel kategori lalu hitung frekuensi.",
        "Ubah metrik count, sum, dan mean untuk melihat perbedaannya.",
        "Tulis dua interpretasi yang menyebut periode dan satuan."
      ],
      "assignment": "Buat tabel frekuensi dan dua paragraf interpretasi deskriptif.",
      "deliverable": "Tabel ringkas dan penjelasan 200 kata.",
      "criteria": [
        "Rumus dan pembagi benar",
        "Satuan dan populasi jelas",
        "Tidak menyimpulkan sebab-akibat"
      ],
      "quiz": [
        {
          "question": "Jika 12 dari 40 artikel terbit pada suatu tahun, persentasenya …",
          "options": [
            "12%",
            "25%",
            "30%",
            "48%"
          ],
          "correct": 2,
          "explanation": "12 ÷ 40 × 100% = 30%."
        },
        {
          "question": "Median dari 2, 3, 5, 8, 100 adalah …",
          "options": [
            "5",
            "8",
            "23,6",
            "3"
          ],
          "correct": 0,
          "explanation": "Nilai tengah setelah diurutkan adalah 5."
        },
        {
          "question": "Rerata paling mudah dipengaruhi oleh …",
          "options": [
            "Label kolom",
            "Nilai ekstrem",
            "Urutan abjad",
            "Tipe grafik"
          ],
          "correct": 1,
          "explanation": "Outlier dapat menggeser rerata."
        },
        {
          "question": "Rata-rata 6 sitasi dari sampel 20 artikel berarti …",
          "options": [
            "Semua artikel memiliki 6 sitasi",
            "Rerata pada sampel adalah 6",
            "Tidak ada artikel tanpa sitasi",
            "Semua artikel bermutu sama"
          ],
          "correct": 1,
          "explanation": "Rerata tidak menggambarkan seluruh nilai secara individu."
        }
      ],
      "tool": "explorer",
      "reference": "",
      "exam": false
    },
    {
      "no": 6,
      "title": "Visualisasi Data Ilmiah",
      "tag": "Grafik yang tepat",
      "description": "Memilih grafik berdasarkan tujuan analisis dan tipe data; menganalisis tren publikasi serta perbandingan kategori.",
      "objectives": [
        "Memilih grafik batang dan garis secara tepat.",
        "Membaca sumbu, satuan, dan rentang.",
        "Mengenali visualisasi yang dapat menyesatkan."
      ],
      "sections": [
        {
          "title": "Grafik batang",
          "body": "Cocok untuk membandingkan kategori, seperti jumlah publikasi per jurnal. Pastikan label kategori dapat dibaca."
        },
        {
          "title": "Grafik garis",
          "body": "Cocok untuk urutan waktu yang bermakna, seperti jumlah publikasi setiap tahun; sumbu waktu harus runtut."
        },
        {
          "title": "Integritas visual",
          "body": "Jangan menghilangkan konteks nilai, menggunakan skala tidak konsisten, atau menyampaikan perbedaan kecil sebagai perubahan dramatis."
        }
      ],
      "steps": [
        "Buka Eksplorasi Visual → Publikasi Ilmu Perpustakaan.",
        "Coba kelompokkan berdasarkan tahun dan pilih grafik garis.",
        "Kelompokkan menurut jurnal dan pilih grafik batang.",
        "Ekspor CSV ringkasan, lalu tuliskan alasan pemilihan grafik."
      ],
      "assignment": "Dua grafik disertai caption, sumber data, dan penjelasan pilihan bentuk grafik.",
      "deliverable": "Gambar/screenshot grafik dan narasi 150–250 kata.",
      "criteria": [
        "Jenis grafik sesuai variabel",
        "Caption dan sumber jelas",
        "Interpretasi tepat"
      ],
      "quiz": [
        {
          "question": "Grafik yang cocok untuk perkembangan publikasi per tahun adalah …",
          "options": [
            "Garis",
            "Peta negara",
            "Diagram alir",
            "Bagan organisasi"
          ],
          "correct": 0,
          "explanation": "Garis menekankan urutan temporal."
        },
        {
          "question": "Perbandingan 5 jurnal menurut jumlah artikel paling mudah ditampilkan sebagai …",
          "options": [
            "Grafik batang",
            "Peta panas geografis",
            "Gambar dekoratif",
            "Awan kata tanpa nilai"
          ],
          "correct": 0,
          "explanation": "Grafik batang memudahkan perbandingan kategori."
        },
        {
          "question": "Sumbu yang dipotong tanpa penjelasan berisiko …",
          "options": [
            "Meningkatkan validitas",
            "Membesar-besarkan perbedaan",
            "Memperbaiki metadata",
            "Mengurangi noise secara pasti"
          ],
          "correct": 1,
          "explanation": "Skala visual dapat memengaruhi persepsi perbedaan."
        },
        {
          "question": "Caption grafik sebaiknya memuat …",
          "options": [
            "Judul, satuan, cakupan, dan sumber",
            "Hanya warna tema",
            "Nomor kelompok saja",
            "Hanya logo"
          ],
          "correct": 0,
          "explanation": "Caption memberi konteks untuk interpretasi."
        }
      ],
      "tool": "explorer",
      "reference": "",
      "exam": false
    },
    {
      "no": 7,
      "title": "Interpretasi Bukti dan Penulisan Temuan",
      "tag": "Dari angka ke argumen",
      "description": "Menyusun paragraf hasil berbasis bukti numerik dengan membedakan deskripsi, penjelasan, dan keterbatasan.",
      "objectives": [
        "Mengidentifikasi tren, variasi, dan nilai ekstrem.",
        "Menyusun klaim yang didukung angka.",
        "Menulis keterbatasan cakupan data."
      ],
      "sections": [
        {
          "title": "Pola kalimat temuan",
          "body": "Tulis: [fakta terukur] + [perbandingan] + [konteks] + [batasan]. Contoh: Pada data sampel, 2025 memiliki lebih banyak rekaman daripada 2022; hal ini belum menunjukkan penyebabnya."
        },
        {
          "title": "Klaim kausal",
          "body": "Perubahan grafik tidak sendiri membuktikan intervensi menyebabkan perubahan."
        },
        {
          "title": "Triangulasi",
          "body": "Bila tersedia, bandingkan statistik dengan metadata, konteks kebijakan, atau sumber lain yang benar-benar relevan."
        }
      ],
      "steps": [
        "Amati satu grafik dari Laboratorium Data.",
        "Tuliskan tiga fakta terukur lengkap dengan angka.",
        "Tulis satu dugaan penjelasan dan jelaskan bahwa hal itu belum diuji.",
        "Selesaikan kuis sebagai latihan persiapan UTS."
      ],
      "assignment": "Paragraf hasil singkat (200–250 kata) dan daftar dua keterbatasan.",
      "deliverable": "Interpretasi berbasis grafik dan revisi argumentasi.",
      "criteria": [
        "Klaim didukung angka",
        "Tidak mengklaim sebab-akibat tanpa bukti",
        "Ada konteks dan keterbatasan"
      ],
      "quiz": [
        {
          "question": "Kalimat yang paling aman secara ilmiah adalah …",
          "options": [
            "Program A pasti meningkatkan kunjungan",
            "Data sampel menunjukkan kunjungan meningkat pada periode pengamatan",
            "Kenaikan membuktikan semua pengguna puas",
            "Tidak perlu menyebut sumber"
          ],
          "correct": 1,
          "explanation": "Deskripsi tren sesuai bukti yang tersedia."
        },
        {
          "question": "Kelemahan kesimpulan tanpa sumber data adalah …",
          "options": [
            "Kurang dapat diverifikasi",
            "Lebih singkat",
            "Selalu salah secara matematis",
            "Lebih menarik"
          ],
          "correct": 0,
          "explanation": "Pembaca tidak dapat melacak asal angka."
        },
        {
          "question": "Jika grafik turun lalu naik, istilah yang sesuai adalah …",
          "options": [
            "Konstan",
            "Fluktuatif",
            "Nol",
            "Identik"
          ],
          "correct": 1,
          "explanation": "Fluktuasi adalah perubahan naik-turun."
        },
        {
          "question": "Keterbatasan korpus perlu ditulis agar …",
          "options": [
            "Grafik hilang",
            "Kesimpulan tidak digeneralisasi berlebihan",
            "Jumlah data bertambah",
            "Nilai berubah"
          ],
          "correct": 1,
          "explanation": "Batasan menjaga interpretasi sesuai cakupan."
        }
      ],
      "tool": "explorer",
      "reference": "",
      "exam": false
    },
    {
      "no": 8,
      "title": "UTS: Asesmen Analisis Data Informasi",
      "tag": "Evaluasi tengah semester",
      "description": "Asesmen tengah semester menguji pemilihan data, pemeriksaan kualitas metadata, statistik deskriptif, visualisasi, dan penalaran berbasis bukti.",
      "objectives": [
        "Mengaplikasikan konsep pertemuan 1–7.",
        "Menentukan jenis grafik dan metode ringkasan yang tepat.",
        "Menafsirkan data tanpa klaim berlebihan."
      ],
      "sections": [
        {
          "title": "Instruksi asesmen",
          "body": "Jawab soal secara mandiri berdasarkan pemahaman dari latihan sebelumnya. Skor kuis aplikasi bersifat latihan, bukan otomatis nilai resmi UTS."
        },
        {
          "title": "Soal praktik",
          "body": "Gunakan satu dataset di Laboratorium Data dan rangkum jumlah data, dua pola, serta satu keterbatasan pada portofolio."
        }
      ],
      "steps": [
        "Buka Laboratorium Data dan pilih dataset relevan.",
        "Selesaikan asesmen UTS di bawah tanpa melihat pembahasan sampai dikirim.",
        "Isi refleksi tentang bagian yang masih sulit.",
        "Ekspor portofolio untuk dikumpulkan di SIPEJAR bila diminta dosen."
      ],
      "assignment": "Selesaikan soal UTS dan buat laporan analisis ringkas (maksimal dua halaman).",
      "deliverable": "Skor asesmen dalam browser dan file portofolio.",
      "criteria": [
        "Jawaban mandiri dan dapat dijelaskan",
        "Tepat memilih indikator",
        "Analisis mempertimbangkan kualitas data"
      ],
      "quiz": [
        {
          "question": "Ruang lingkup korpus ditetapkan oleh …",
          "options": [
            "Warna halaman",
            "Sumber, kriteria, dan rentang waktu",
            "Jumlah peserta presentasi",
            "Ukuran font"
          ],
          "correct": 1,
          "explanation": "Cakupan korpus harus didefinisikan."
        },
        {
          "question": "Nilai 9 dari 30 setara …",
          "options": [
            "9%",
            "18%",
            "30%",
            "39%"
          ],
          "correct": 2,
          "explanation": "9 ÷ 30 × 100% = 30%."
        },
        {
          "question": "Grafik yang cocok untuk publikasi tahunan …",
          "options": [
            "Garis",
            "Peta konsep",
            "Ikon",
            "Diagram struktur organisasi"
          ],
          "correct": 0,
          "explanation": "Data tahun memiliki urutan waktu."
        },
        {
          "question": "Kelebihan median terhadap rerata adalah …",
          "options": [
            "Selalu lebih besar",
            "Lebih tahan terhadap nilai ekstrem",
            "Dapat membuktikan sebab",
            "Tidak perlu urutan"
          ],
          "correct": 1,
          "explanation": "Median relatif tahan terhadap outlier."
        },
        {
          "question": "Dua nama penulis yang mirip sebaiknya …",
          "options": [
            "Langsung disatukan",
            "Diverifikasi menggunakan metadata lain",
            "Dihapus",
            "Selalu dianggap berbeda"
          ],
          "correct": 1,
          "explanation": "Disambiguasi penulis perlu verifikasi."
        },
        {
          "question": "Pernyataan yang didukung grafik adalah …",
          "options": [
            "Grafik naik, maka kebijakan pasti berhasil",
            "Kunjungan cenderung meningkat pada data teramati",
            "Semua pengguna puas",
            "Koleksi bertambah secara otomatis"
          ],
          "correct": 1,
          "explanation": "Peningkatan teramati tidak membuktikan penyebab."
        },
        {
          "question": "Metadata DOI kosong berarti …",
          "options": [
            "Seluruh publikasi palsu",
            "Perlu pengecekan dan perlakuan data hilang",
            "Artikel pasti tidak berkualitas",
            "Harus diisi angka nol"
          ],
          "correct": 1,
          "explanation": "Missing value perlu ditangani secara tepat."
        },
        {
          "question": "Variabel jumlah sitasi adalah …",
          "options": [
            "Numerik",
            "Warna",
            "Nominal teks",
            "Label gambar"
          ],
          "correct": 0,
          "explanation": "Sitasi merupakan hitungan."
        },
        {
          "question": "Kesimpulan dari korpus contoh …",
          "options": [
            "Selalu berlaku untuk seluruh dunia",
            "Terbatas pada cakupan data dan metode",
            "Tidak perlu menyebut sumber",
            "Selalu bersifat kausal"
          ],
          "correct": 1,
          "explanation": "Generalisasi harus sesuai cakupan."
        },
        {
          "question": "Langkah yang tepat setelah cleaning adalah …",
          "options": [
            "Menyimpan log perubahan",
            "Menghapus data mentah",
            "Mengubah hasil agar sesuai hipotesis",
            "Mengabaikan duplikasi"
          ],
          "correct": 0,
          "explanation": "Log perubahan meningkatkan keterlacakan."
        }
      ],
      "tool": "explorer",
      "reference": "",
      "exam": true
    },
    {
      "no": 9,
      "title": "Hukum Bradford: Zona Produktivitas Jurnal",
      "tag": "Bradford",
      "description": "Menganalisis sebaran artikel terhadap jurnal, membagi jurnal menjadi zona dengan jumlah artikel yang mendekati sama, dan memahami jurnal inti.",
      "objectives": [
        "Mengurutkan jurnal berdasarkan artikel.",
        "Menghitung pembagian tiga zona Bradford.",
        "Menjelaskan interpretasi dan batasan pola zona."
      ],
      "sections": [
        {
          "title": "Prinsip Bradford",
          "body": "Jika jurnal diurutkan menurut jumlah artikel, pembagian ke zona dengan jumlah artikel mendekati sama sering menunjukkan jumlah jurnal yang makin banyak pada zona berikutnya."
        },
        {
          "title": "Contoh latihan",
          "body": "Pada dataset sampel 20 jurnal dengan 105 artikel, tiga zona ditetapkan dengan total 37, 36, dan 32 artikel, berisi 3, 6, dan 11 jurnal. Pembagian bergantung pada data dan aturan toleransi."
        },
        {
          "title": "Interpretasi",
          "body": "Bradford membantu identifikasi jurnal inti pada korpus, tetapi tidak otomatis membuktikan mutu jurnal atau kesesuaian seluruh artikel."
        }
      ],
      "steps": [
        "Buka Kalkulator Bradford pada Laboratorium Rumus.",
        "Gunakan data contoh atau ketik deret frekuensi jurnal yang telah diurutkan.",
        "Periksa total artikel, jumlah jurnal, dan rasio antar zona.",
        "Jelaskan mengapa ukuran zona berbeda meskipun jumlah artikelnya mendekati sama."
      ],
      "assignment": "Sajikan tabel tiga zona Bradford beserta narasi jurnal inti.",
      "deliverable": "Tabel zona dan interpretasi 200 kata.",
      "criteria": [
        "Pengurutan benar",
        "Jumlah artikel dan jurnal benar",
        "Interpretasi tidak mengklaim kualitas"
      ],
      "quiz": [
        {
          "question": "Pada Bradford, jurnal terlebih dahulu diurutkan berdasarkan …",
          "options": [
            "Jumlah artikel relevan menurun",
            "Abjad nama penulis",
            "Tahun pertama berdiri",
            "Panjang nama jurnal"
          ],
          "correct": 0,
          "explanation": "Urutan berdasarkan produktivitas artikel relevan."
        },
        {
          "question": "Zona Bradford dibentuk agar …",
          "options": [
            "Jumlah jurnal selalu sama",
            "Jumlah artikel tiap zona mendekati sama",
            "Semua jurnal memiliki sitasi sama",
            "Tahun penerbitan identik"
          ],
          "correct": 1,
          "explanation": "Distribusi artikel dipertahankan kira-kira seimbang."
        },
        {
          "question": "Contoh 3, 6, 11 menunjukkan …",
          "options": [
            "Jumlah artikel per zona",
            "Jumlah jurnal per zona",
            "Jumlah penulis",
            "Nilai h-index"
          ],
          "correct": 1,
          "explanation": "Itu adalah banyak jurnal pada masing-masing zona."
        },
        {
          "question": "Jurnal inti di zona pertama berarti …",
          "options": [
            "Paling banyak memuat artikel relevan dalam korpus",
            "Pasti paling berkualitas global",
            "Selalu jurnal Q1",
            "Semua artikelnya benar"
          ],
          "correct": 0,
          "explanation": "Jurnal inti didefinisikan relatif terhadap korpus yang dianalisis."
        }
      ],
      "tool": "bradford",
      "reference": "Contoh zona: 3 jurnal/37 artikel, 6 jurnal/36 artikel, 11 jurnal/32 artikel.",
      "exam": false
    },
    {
      "no": 10,
      "title": "Hukum Lotka: Produktivitas Penulis",
      "tag": "Lotka",
      "description": "Mempelajari pola frekuensi penulis menurut jumlah publikasinya dan membandingkan distribusi teramati dengan bentuk sederhana hukum Lotka.",
      "objectives": [
        "Menghitung banyak penulis per jumlah artikel.",
        "Menggunakan bentuk pendekatan f(n) = C/n².",
        "Membedakan model teoretis dan data observasi."
      ],
      "sections": [
        {
          "title": "Prinsip Lotka",
          "body": "Dalam bentuk sederhana, jumlah penulis yang menghasilkan n publikasi sering didekati dengan f(n) = C/n², dengan C adalah jumlah atau proporsi penulis yang menghasilkan satu publikasi, tergantung normalisasi."
        },
        {
          "title": "Perhitungan",
          "body": "Jika f(1) = 40, prediksi f(2) = 40/4 = 10. Nilai prediksi bukan jumlah aktual dalam data."
        },
        {
          "title": "Batasan",
          "body": "Pola produktivitas dipengaruhi disiplin, periode, definisi penulis, dan disambiguasi identitas."
        }
      ],
      "steps": [
        "Buka Kalkulator Lotka.",
        "Masukkan jumlah penulis satu artikel dan eksponen n.",
        "Bandingkan prediksi untuk n = 1–6 dengan contoh distribusi observasi.",
        "Tulis satu alasan hasil nyata dapat berbeda dari hukum ideal."
      ],
      "assignment": "Tabel prediksi dan observasi produktivitas penulis beserta diskusi.",
      "deliverable": "Tabel frekuensi penulis, kurva/pola, dan interpretasi.",
      "criteria": [
        "Menggunakan rumus benar",
        "Membedakan prediksi dan observasi",
        "Menyebut kondisi data"
      ],
      "quiz": [
        {
          "question": "Bentuk sederhana Hukum Lotka adalah …",
          "options": [
            "f(n) = C/n²",
            "f(n) = C+n²",
            "f(n) = n/C",
            "f(n) = C×n²"
          ],
          "correct": 0,
          "explanation": "Hukum Lotka sering dinyatakan dengan hubungan pangkat terbalik."
        },
        {
          "question": "Jika C=40, prediksi untuk n=2 adalah …",
          "options": [
            "20",
            "40",
            "10",
            "5"
          ],
          "correct": 2,
          "explanation": "40 ÷ 2² = 10."
        },
        {
          "question": "Jumlah penulis dua artikel pada data nyata …",
          "options": [
            "Harus sama dengan prediksi",
            "Dapat berbeda dari model ideal",
            "Selalu dua",
            "Tidak mungkin dihitung"
          ],
          "correct": 1,
          "explanation": "Hukum merupakan pendekatan empiris, bukan persamaan yang selalu persis."
        },
        {
          "question": "Disambiguasi penulis penting karena …",
          "options": [
            "Mengubah warna grafik",
            "Satu orang bisa muncul dalam beberapa bentuk nama",
            "Menghapus semua sitasi",
            "Menghasilkan DOI"
          ],
          "correct": 1,
          "explanation": "Variasi nama dapat memecah hitungan produktivitas."
        }
      ],
      "tool": "lotka",
      "reference": "",
      "exam": false
    },
    {
      "no": 11,
      "title": "Hukum Zipf: Frekuensi Kata Kunci",
      "tag": "Zipf",
      "description": "Menganalisis hubungan peringkat kata dan frekuensinya setelah normalisasi, tokenisasi, dan penghapusan stopword yang sesuai.",
      "objectives": [
        "Menghitung dan mengurutkan frekuensi kata.",
        "Mengamati hubungan peringkat r dan frekuensi f.",
        "Menilai dampak normalisasi kata terhadap hasil."
      ],
      "sections": [
        {
          "title": "Prinsip Zipf",
          "body": "Bentuk ideal yang sering digunakan adalah f(r) ≈ K/r: kata berperingkat tinggi muncul lebih sering daripada kata berperingkat rendah."
        },
        {
          "title": "Persiapan teks",
          "body": "Normalisasi huruf besar-kecil, simbol, stopword, dan sinonim harus konsisten. Frasa seperti digital library dapat menjadi satu unit bila analisis memakai kata kunci frasa."
        },
        {
          "title": "Batasan",
          "body": "Distribusi nyata tidak harus mengikuti rumus secara tepat, terlebih pada korpus kecil."
        }
      ],
      "steps": [
        "Buka Kalkulator Zipf.",
        "Masukkan frekuensi kata paling sering sebagai konstanta K.",
        "Periksa prediksi untuk rank 1–10.",
        "Buat contoh lima kata kunci dari dataset publikasi dan susun peringkat."
      ],
      "assignment": "Buat tabel peringkat, frekuensi, dan interpretasi Zipf.",
      "deliverable": "Tabel minimal lima kata dan satu paragraf keterbatasan.",
      "criteria": [
        "Rank benar",
        "Pemrosesan kata konsisten",
        "Tidak memaksakan kecocokan teoritis"
      ],
      "quiz": [
        {
          "question": "Zipf menghubungkan …",
          "options": [
            "Peringkat kata dan frekuensinya",
            "Jumlah jurnal dan lokasi",
            "Nilai dan jenis kelamin",
            "Ruang rak dan suhu"
          ],
          "correct": 0,
          "explanation": "Zipf mengamati rank-frequency."
        },
        {
          "question": "Jika K=100, f(4) ideal sekitar …",
          "options": [
            "400",
            "25",
            "104",
            "4"
          ],
          "correct": 1,
          "explanation": "100 ÷ 4 = 25."
        },
        {
          "question": "Mengapa stopword perlu dipertimbangkan?",
          "options": [
            "Karena dapat mendominasi frekuensi tanpa makna topik",
            "Supaya semua kata hilang",
            "Karena harus diterjemahkan",
            "Supaya rank acak"
          ],
          "correct": 0,
          "explanation": "Stopword bisa mengaburkan istilah substantif."
        },
        {
          "question": "Kata kunci dua kata yang bermakna satu konsep sebaiknya …",
          "options": [
            "Selalu dipecah tanpa pertimbangan",
            "Diperlakukan konsisten sesuai unit analisis",
            "Dihapus",
            "Diberi frekuensi nol"
          ],
          "correct": 1,
          "explanation": "Unit analisis harus konsisten."
        }
      ],
      "tool": "zipf",
      "reference": "",
      "exam": false
    },
    {
      "no": 12,
      "title": "Analisis Sitasi, h-index, dan Keterbatasannya",
      "tag": "Indikator sitasi",
      "description": "Menghitung jumlah sitasi dan h-index serta membedakan popularitas sitasi dari mutu penelitian.",
      "objectives": [
        "Mengurutkan artikel berdasarkan sitasi menurun.",
        "Menghitung h-index dari sebuah daftar.",
        "Mengenali bias umur dokumen dan basis data."
      ],
      "sections": [
        {
          "title": "Definisi h-index",
          "body": "h-index adalah nilai h terbesar sehingga terdapat sedikitnya h publikasi yang masing-masing memiliki paling sedikit h sitasi."
        },
        {
          "title": "Contoh",
          "body": "Untuk sitasi [12, 8, 5, 3, 1], h-index adalah 3 karena artikel peringkat empat hanya memiliki 3 sitasi."
        },
        {
          "title": "Keterbatasan",
          "body": "Sitasi bukan ukuran sempurna kualitas. Artikel lama, topik populer, dan cakupan pengindeksan dapat memengaruhi hitungan."
        }
      ],
      "steps": [
        "Buka Kalkulator Sitasi pada Laboratorium Rumus.",
        "Masukkan 12, 8, 5, 3, 1 dan cek hasilnya.",
        "Ubah satu nilai untuk melihat perubahan h-index.",
        "Tuliskan dua alasan h-index tidak boleh menjadi satu-satunya dasar evaluasi."
      ],
      "assignment": "Sajikan perhitungan h-index lengkap dengan keterbatasannya.",
      "deliverable": "Daftar sitasi terurut dan interpretasi.",
      "criteria": [
        "h-index benar",
        "Langkah perhitungan jelas",
        "Tidak menyamakan sitasi dengan kualitas"
      ],
      "quiz": [
        {
          "question": "h-index dari [12, 8, 5, 3, 1] adalah …",
          "options": [
            "2",
            "3",
            "4",
            "5"
          ],
          "correct": 1,
          "explanation": "Tiga artikel memiliki ≥3 sitasi, tetapi empat artikel tidak memiliki ≥4."
        },
        {
          "question": "Sitasi tinggi pasti membuktikan …",
          "options": [
            "Kualitas luar biasa",
            "Tidak ada kesalahan",
            "Tidak selalu; perlu konteks",
            "Semua artikel terkait"
          ],
          "correct": 2,
          "explanation": "Sitasi merupakan sinyal perhatian akademik yang membutuhkan konteks."
        },
        {
          "question": "Data sitasi sebaiknya dicatat bersama …",
          "options": [
            "Sumber indeks dan tanggal akses",
            "Warna tema",
            "Jenis laptop",
            "Nomor meja"
          ],
          "correct": 0,
          "explanation": "Sitasi berubah dan bervariasi menurut sumber."
        },
        {
          "question": "Jika urutan sitasi adalah [5,4,3,2], h-index …",
          "options": [
            "4",
            "3",
            "2",
            "1"
          ],
          "correct": 1,
          "explanation": "Artikel ketiga punya ≥3; artikel keempat tidak punya ≥4."
        }
      ],
      "tool": "citation",
      "reference": "",
      "exam": false
    },
    {
      "no": 13,
      "title": "Scientometrika dan Pemetaan Kolaborasi",
      "tag": "Jaringan ilmiah",
      "description": "Mengenali indikator kegiatan ilmiah, pola kolaborasi penulis, dan jaringan hubungan publikasi, tanpa mencampuradukkan jenis hubungan.",
      "objectives": [
        "Membedakan bibliometrika, scientometrika, dan analisis jaringan.",
        "Menjelaskan co-authorship, co-citation, dan bibliographic coupling.",
        "Membaca jejaring kolaborasi sederhana."
      ],
      "sections": [
        {
          "title": "Pembedaan praktis",
          "body": "Bibliometrika mengukur dokumen dan komunikasi ilmiah; scientometrika melihat dinamika dan indikator kegiatan sains; keduanya saling beririsan."
        },
        {
          "title": "Jaringan penulis",
          "body": "Co-authorship menghubungkan penulis yang menulis karya bersama. Banyak koneksi bukan otomatis kualitas kolaborasi."
        },
        {
          "title": "Jenis jaringan",
          "body": "Co-citation: dua karya dikutip bersama oleh karya lain. Bibliographic coupling: dua karya berbagi referensi. Jenis sisi harus disebutkan."
        }
      ],
      "steps": [
        "Buka dataset Publikasi Ilmu Perpustakaan dan amati kolom penulis.",
        "Buat pasangan dua penulis dari contoh artikel bersama.",
        "Jelaskan perbedaan jaringan co-authorship dan co-citation.",
        "Sajikan dua kemungkinan pemanfaatan peta kolaborasi."
      ],
      "assignment": "Buat ilustrasi jaringan sederhana (5 simpul) dan narasi interpretasinya.",
      "deliverable": "Diagram jaringan dan deskripsi jenis hubungan.",
      "criteria": [
        "Sisi jaringan terdefinisi",
        "Tidak melebihkan hasil",
        "Penjelasan dapat ditelusuri"
      ],
      "quiz": [
        {
          "question": "Co-authorship terbentuk ketika …",
          "options": [
            "Dua penulis menulis karya bersama",
            "Dua artikel terbit pada tahun sama",
            "Dua jurnal satu warna",
            "Dua dosen satu kantor"
          ],
          "correct": 0,
          "explanation": "Relasi co-authorship berasal dari kepenulisan bersama."
        },
        {
          "question": "Co-citation berarti …",
          "options": [
            "Dua karya berbagi penulis",
            "Dua karya dikutip bersama oleh karya lain",
            "Dua karya memiliki judul sama",
            "Dua karya dihapus"
          ],
          "correct": 1,
          "explanation": "Keterkutipan bersama menjadi dasar co-citation."
        },
        {
          "question": "Bibliographic coupling terjadi jika …",
          "options": [
            "Dua karya menggunakan referensi yang sama",
            "Dua karya memiliki sitasi sama",
            "Dua penulis bersaudara",
            "Dua artikel memiliki DOI kosong"
          ],
          "correct": 0,
          "explanation": "Kesamaan daftar rujukan menjadi basis coupling."
        },
        {
          "question": "Jaringan padat menunjukkan …",
          "options": [
            "Banyak hubungan menurut definisi sisi",
            "Kualitas selalu tinggi",
            "Semua simpul benar",
            "Seluruh bidang identik"
          ],
          "correct": 0,
          "explanation": "Interpretasi jaringan harus sesuai relasinya."
        }
      ],
      "tool": "explorer",
      "reference": "",
      "exam": false
    },
    {
      "no": 14,
      "title": "Altmetrika dan Evaluasi Dampak Digital",
      "tag": "Indikator alternatif",
      "description": "Membandingkan sitasi akademik dengan jejak perhatian daring seperti penyebutan, unggahan, dan penyimpanan.",
      "objectives": [
        "Membedakan attention metrics dan citation metrics.",
        "Mengidentifikasi sumber dan bias altmetrika.",
        "Menyusun ringkasan multi-indikator dengan caveat."
      ],
      "sections": [
        {
          "title": "Altmetrika",
          "body": "Altmetrika merujuk pada indikator perhatian atau interaksi daring terhadap karya ilmiah, seperti penyebutan di media sosial, berita, atau sistem manajemen referensi."
        },
        {
          "title": "Tidak sama dengan dampak ilmiah",
          "body": "Banyak unggahan tidak membuktikan kualitas, penerimaan ilmiah, atau kebermanfaatan praktis."
        },
        {
          "title": "Sumber dan waktu",
          "body": "Nilai altmetrika dipengaruhi platform, tanggal pengambilan, aksesibilitas konten, dan kebijakan pelacakan."
        }
      ],
      "steps": [
        "Buka dataset Dampak Digital (sampel).",
        "Bandingkan jumlah sitasi dengan penyebutan sosial pada tiga rekaman.",
        "Identifikasi satu artikel dengan sitasi rendah tetapi perhatian daring tinggi.",
        "Tulis penjelasan yang tidak menyamakan kedua indikator tersebut."
      ],
      "assignment": "Tabel komparasi dua indikator dan 200 kata interpretasi.",
      "deliverable": "Tabel dan keterbatasan masing-masing indikator.",
      "criteria": [
        "Indikator dibedakan",
        "Sumber nilai dinyatakan",
        "Tidak membuat klaim kualitas secara otomatis"
      ],
      "quiz": [
        {
          "question": "Altmetrika lebih dekat pada pengukuran …",
          "options": [
            "Perhatian dan interaksi daring",
            "Suhu ruang arsip",
            "Jumlah rak",
            "Kecepatan jaringan"
          ],
          "correct": 0,
          "explanation": "Altmetrika menangkap perhatian atau interaksi digital."
        },
        {
          "question": "Banyaknya unggahan suatu artikel …",
          "options": [
            "Pasti membuktikan kualitas tinggi",
            "Menunjukkan perhatian daring, bukan bukti kualitas otomatis",
            "Sama dengan jumlah sitasi",
            "Tidak dapat diukur"
          ],
          "correct": 1,
          "explanation": "Perhatian daring dan kualitas ilmiah adalah konsep berbeda."
        },
        {
          "question": "Contoh indikator sitasi adalah …",
          "options": [
            "Jumlah tweet",
            "Jumlah kutipan akademik",
            "Jumlah suka foto pribadi",
            "Jumlah klik navigasi"
          ],
          "correct": 1,
          "explanation": "Sitasi berkaitan dengan rujukan karya ilmiah."
        },
        {
          "question": "Mengapa periode pengambilan penting?",
          "options": [
            "Nilai perhatian daring dapat berubah",
            "Supaya grafik indah",
            "Agar semuanya tetap",
            "Supaya artikel punya DOI"
          ],
          "correct": 0,
          "explanation": "Indikator digital bersifat dinamis."
        }
      ],
      "tool": "explorer",
      "reference": "",
      "exam": false
    },
    {
      "no": 15,
      "title": "Proyek Akhir Mini: Laporan Informetrika",
      "tag": "Praktik integratif",
      "description": "Mengintegrasikan penyusunan korpus, cleaning, perhitungan indikator, visualisasi, dan interpretasi ke dalam laporan ringkas yang dapat diaudit.",
      "objectives": [
        "Menyusun alur analisis ujung ke ujung.",
        "Menentukan indikator sesuai pertanyaan penelitian.",
        "Menyajikan laporan yang transparan dan dapat diperiksa."
      ],
      "sections": [
        {
          "title": "Tugas mini proyek",
          "body": "Pilih dataset publikasi sampel atau data publik yang telah dibersihkan. Tentukan satu pertanyaan utama dan satu indikator tambahan: tren, produktivitas, Bradford, Lotka, Zipf, atau sitasi."
        },
        {
          "title": "Struktur laporan",
          "body": "Judul dan pertanyaan → sumber/korpus → cleaning → hasil dan grafik → interpretasi → keterbatasan → lampiran data."
        },
        {
          "title": "Etika dan transparansi",
          "body": "Hapus identitas pribadi yang tidak dibutuhkan; tulis jika dataset merupakan sampel atau hasil simulasi."
        }
      ],
      "steps": [
        "Pilih dataset serta pertanyaan penelitian.",
        "Gunakan Laboratorium Data dan salah satu kalkulator metrik.",
        "Buat grafik, tabel, dan paragraf hasil.",
        "Isi checklist dan ekspor portofolio untuk disatukan dengan laporan."
      ],
      "assignment": "Laporan mini 3–5 halaman dengan tabel/grafik dan lampiran data.",
      "deliverable": "Laporan PDF (diolah sendiri) dan portofolio RuangData JSON.",
      "criteria": [
        "Pertanyaan dan korpus jelas",
        "Perhitungan dapat ditelusuri",
        "Grafik dan interpretasi tepat",
        "Mencantumkan keterbatasan"
      ],
      "quiz": [
        {
          "question": "Urutan analisis yang baik adalah …",
          "options": [
            "Kesimpulan dahulu, baru data",
            "Pertanyaan → korpus → cleaning → analisis → interpretasi",
            "Grafik → asumsi → hapus data",
            "Judul → dekorasi → publikasi"
          ],
          "correct": 1,
          "explanation": "Alur menjaga ketepatan analisis."
        },
        {
          "question": "Jika memakai dataset latihan, laporan wajib …",
          "options": [
            "Mengklaim data resmi",
            "Menjelaskan bahwa data sampel/simulasi",
            "Menghapus sumber",
            "Mengubah semua nilai"
          ],
          "correct": 1,
          "explanation": "Sumber dan sifat data harus transparan."
        },
        {
          "question": "Keterbatasan proyek perlu menyebut …",
          "options": [
            "Hanya warna grafik",
            "Cakupan dan kualitas data",
            "Nama aplikasi foto",
            "Ukuran dokumen saja"
          ],
          "correct": 1,
          "explanation": "Batasan menjelaskan sejauh mana hasil berlaku."
        },
        {
          "question": "Praktik berbasis data yang baik …",
          "options": [
            "Menghindari log proses",
            "Menyertakan aturan cleaning dan asal data",
            "Menyalin hasil tanpa cek",
            "Menggabungkan sumber tanpa catatan"
          ],
          "correct": 1,
          "explanation": "Auditabilitas mendukung replikasi."
        }
      ],
      "tool": "explorer",
      "reference": "",
      "exam": false
    },
    {
      "no": 16,
      "title": "UAS: Analisis dan Refleksi Literasi Data",
      "tag": "Evaluasi akhir semester",
      "description": "Mengukur kembali kemampuan membaca data, menghitung indikator dasar, serta menyusun kesimpulan yang dibatasi bukti. Asesmen ini dapat dibandingkan dengan pertemuan 1 secara deskriptif.",
      "objectives": [
        "Mengintegrasikan keterampilan 15 pertemuan sebelumnya.",
        "Menyelesaikan soal indikator bibliometrika.",
        "Menyusun refleksi pembelajaran dan rencana tindak lanjut."
      ],
      "sections": [
        {
          "title": "Petunjuk UAS",
          "body": "Jawab semua soal aplikasi lalu tulis ringkasan kemampuan yang meningkat dan bagian yang masih membutuhkan latihan."
        },
        {
          "title": "Penggunaan hasil",
          "body": "Skor lokal hanya tersedia pada browser dan file portofolio yang diekspor sendiri. Dosen menentukan penilaian resmi melalui sistem perkuliahan."
        }
      ],
      "steps": [
        "Selesaikan asesmen UAS.",
        "Kerjakan satu analisis data dengan indikator yang sesuai.",
        "Bandingkan catatan refleksi awal dan akhir secara kualitatif.",
        "Ekspor portofolio untuk pelaporan akhir."
      ],
      "assignment": "Asesmen UAS, ringkasan analisis data, dan refleksi 250 kata.",
      "deliverable": "Portofolio JSON dan laporan ringkas.",
      "criteria": [
        "Indikator terhitung benar",
        "Analisis sesuai bukti",
        "Keterbatasan disadari",
        "Refleksi substantif"
      ],
      "quiz": [
        {
          "question": "Jika 20 jurnal memuat 105 artikel, penentuan zona Bradford berorientasi pada …",
          "options": [
            "Artikel per zona mendekati sama",
            "Jurnal per zona selalu sama",
            "Jumlah penulis sama",
            "Semua sitasi nol"
          ],
          "correct": 0,
          "explanation": "Bradford mendekati kesetaraan jumlah artikel per zona."
        },
        {
          "question": "Dengan Lotka C=36, f(3) sekitar …",
          "options": [
            "12",
            "9",
            "4",
            "108"
          ],
          "correct": 2,
          "explanation": "36/3² = 4."
        },
        {
          "question": "Untuk Zipf K=90, perkiraan frekuensi rank 5 …",
          "options": [
            "450",
            "18",
            "95",
            "5"
          ],
          "correct": 1,
          "explanation": "90/5 = 18."
        },
        {
          "question": "h-index [9,7,4,2] adalah …",
          "options": [
            "4",
            "3",
            "2",
            "1"
          ],
          "correct": 1,
          "explanation": "Tiga artikel mempunyai ≥3 sitasi; peringkat empat punya 2."
        },
        {
          "question": "Peningkatan jumlah sitasi membuktikan …",
          "options": [
            "Selalu artikel lebih berkualitas",
            "Tidak selalu; perlu konteks",
            "Seluruh penulis berkolaborasi",
            "Metadata lengkap"
          ],
          "correct": 1,
          "explanation": "Indikator tunggal tidak otomatis membuktikan kualitas."
        },
        {
          "question": "Jika data memuat satu artikel per baris, unit analisis tren tahunan …",
          "options": [
            "Artikel",
            "Penulis unik",
            "Kata",
            "Ruang kelas"
          ],
          "correct": 0,
          "explanation": "Publikasi dipetakan ke tahunnya."
        },
        {
          "question": "Analisis jejaring dua artikel yang berbagi daftar referensi disebut …",
          "options": [
            "Co-authorship",
            "Bibliographic coupling",
            "Altmetrics",
            "Zipf"
          ],
          "correct": 1,
          "explanation": "Coupling berbasis referensi bersama."
        },
        {
          "question": "Kesimpulan yang bertanggung jawab …",
          "options": [
            "Mengklaim kausal dari semua grafik",
            "Memuat angka, konteks, dan keterbatasan",
            "Menutup sumber data",
            "Mengabaikan anomali"
          ],
          "correct": 1,
          "explanation": "Interpretasi harus dapat dilacak."
        },
        {
          "question": "Altmetrika mengukur terutama …",
          "options": [
            "Perhatian daring",
            "Jumlah DOI",
            "Jurnal inti",
            "Median sitasi"
          ],
          "correct": 0,
          "explanation": "Altmetrika menunjukkan perhatian atau interaksi digital."
        },
        {
          "question": "Portofolio yang kuat perlu mencakup …",
          "options": [
            "Hanya skor akhir",
            "Bukti proses, grafik, interpretasi, refleksi",
            "Hanya logo",
            "Tidak perlu sumber"
          ],
          "correct": 1,
          "explanation": "Portofolio merekam proses dan argumen."
        }
      ],
      "tool": "explorer",
      "reference": "",
      "exam": true
    }
  ],
  "datasets": [
    {
      "id": "publikasi",
      "name": "Publikasi Ilmu Perpustakaan",
      "description": "48 rekaman bibliografi ilustratif untuk praktik korpus, grafik, dan sitasi.",
      "category": "Bibliometrika",
      "rows": [
        {
          "id": "PUB-001",
          "tahun": 2020,
          "jurnal": "Jurnal Perpustakaan A",
          "penulis": "Rina Saputra",
          "kata_kunci": "perpustakaan digital",
          "metode": "Survei",
          "sitasi": 3
        },
        {
          "id": "PUB-002",
          "tahun": 2021,
          "jurnal": "Jurnal Digital D",
          "penulis": "Nadia Larasati",
          "kata_kunci": "temu kembali",
          "metode": "Studi kasus",
          "sitasi": 10
        },
        {
          "id": "PUB-003",
          "tahun": 2022,
          "jurnal": "Jurnal Informasi B",
          "penulis": "Andi Prakoso",
          "kata_kunci": "akses terbuka",
          "metode": "Analisis dokumen",
          "sitasi": 17
        },
        {
          "id": "PUB-004",
          "tahun": 2023,
          "jurnal": "Jurnal Data E",
          "penulis": "Lita Kurnia",
          "kata_kunci": "perpustakaan digital",
          "metode": "Bibliometrika",
          "sitasi": 24
        },
        {
          "id": "PUB-005",
          "tahun": 2024,
          "jurnal": "Jurnal Literasi C",
          "penulis": "Bima Nugroho",
          "kata_kunci": "temu kembali",
          "metode": "Survei",
          "sitasi": 4
        },
        {
          "id": "PUB-006",
          "tahun": 2025,
          "jurnal": "Jurnal Perpustakaan A",
          "penulis": "Dewi Rahmani",
          "kata_kunci": "metadata",
          "metode": "Studi kasus",
          "sitasi": 11
        },
        {
          "id": "PUB-007",
          "tahun": 2020,
          "jurnal": "Jurnal Data E",
          "penulis": "Rafi Wijaya",
          "kata_kunci": "literasi informasi",
          "metode": "Analisis dokumen",
          "sitasi": 18
        },
        {
          "id": "PUB-008",
          "tahun": 2022,
          "jurnal": "Jurnal Literasi C",
          "penulis": "Sari Wulandari",
          "kata_kunci": "bibliometrika",
          "metode": "Bibliometrika",
          "sitasi": 25
        },
        {
          "id": "PUB-009",
          "tahun": 2023,
          "jurnal": "Jurnal Perpustakaan A",
          "penulis": "Dewi Rahmani",
          "kata_kunci": "metadata",
          "metode": "Survei",
          "sitasi": 5
        },
        {
          "id": "PUB-010",
          "tahun": 2024,
          "jurnal": "Jurnal Digital D",
          "penulis": "Rafi Wijaya",
          "kata_kunci": "literasi informasi",
          "metode": "Analisis dokumen",
          "sitasi": 12
        },
        {
          "id": "PUB-011",
          "tahun": 2025,
          "jurnal": "Jurnal Informasi B",
          "penulis": "Sari Wulandari",
          "kata_kunci": "akses terbuka",
          "metode": "Bibliometrika",
          "sitasi": 19
        },
        {
          "id": "PUB-012",
          "tahun": 2020,
          "jurnal": "Jurnal Data E",
          "penulis": "Rina Saputra",
          "kata_kunci": "perpustakaan digital",
          "metode": "Survei",
          "sitasi": 26
        },
        {
          "id": "PUB-013",
          "tahun": 2021,
          "jurnal": "Jurnal Digital D",
          "penulis": "Nadia Larasati",
          "kata_kunci": "temu kembali",
          "metode": "Studi kasus",
          "sitasi": 6
        },
        {
          "id": "PUB-014",
          "tahun": 2022,
          "jurnal": "Jurnal Informasi B",
          "penulis": "Andi Prakoso",
          "kata_kunci": "akses terbuka",
          "metode": "Analisis dokumen",
          "sitasi": 13
        },
        {
          "id": "PUB-015",
          "tahun": 2024,
          "jurnal": "Jurnal Data E",
          "penulis": "Lita Kurnia",
          "kata_kunci": "perpustakaan digital",
          "metode": "Bibliometrika",
          "sitasi": 20
        },
        {
          "id": "PUB-016",
          "tahun": 2025,
          "jurnal": "Jurnal Literasi C",
          "penulis": "Bima Nugroho",
          "kata_kunci": "bibliometrika",
          "metode": "Survei",
          "sitasi": 0
        },
        {
          "id": "PUB-017",
          "tahun": 2020,
          "jurnal": "Jurnal Perpustakaan A",
          "penulis": "Andi Prakoso",
          "kata_kunci": "metadata",
          "metode": "Studi kasus",
          "sitasi": 7
        },
        {
          "id": "PUB-018",
          "tahun": 2021,
          "jurnal": "Jurnal Digital D",
          "penulis": "Lita Kurnia",
          "kata_kunci": "literasi informasi",
          "metode": "Analisis dokumen",
          "sitasi": 14
        },
        {
          "id": "PUB-019",
          "tahun": 2022,
          "jurnal": "Jurnal Literasi C",
          "penulis": "Bima Nugroho",
          "kata_kunci": "bibliometrika",
          "metode": "Survei",
          "sitasi": 21
        },
        {
          "id": "PUB-020",
          "tahun": 2023,
          "jurnal": "Jurnal Perpustakaan A",
          "penulis": "Dewi Rahmani",
          "kata_kunci": "metadata",
          "metode": "Studi kasus",
          "sitasi": 1
        },
        {
          "id": "PUB-021",
          "tahun": 2024,
          "jurnal": "Jurnal Digital D",
          "penulis": "Rafi Wijaya",
          "kata_kunci": "temu kembali",
          "metode": "Analisis dokumen",
          "sitasi": 8
        },
        {
          "id": "PUB-022",
          "tahun": 2020,
          "jurnal": "Jurnal Informasi B",
          "penulis": "Sari Wulandari",
          "kata_kunci": "akses terbuka",
          "metode": "Bibliometrika",
          "sitasi": 15
        },
        {
          "id": "PUB-023",
          "tahun": 2021,
          "jurnal": "Jurnal Data E",
          "penulis": "Rina Saputra",
          "kata_kunci": "perpustakaan digital",
          "metode": "Survei",
          "sitasi": 22
        },
        {
          "id": "PUB-024",
          "tahun": 2022,
          "jurnal": "Jurnal Literasi C",
          "penulis": "Nadia Larasati",
          "kata_kunci": "temu kembali",
          "metode": "Studi kasus",
          "sitasi": 2
        },
        {
          "id": "PUB-025",
          "tahun": 2023,
          "jurnal": "Jurnal Informasi B",
          "penulis": "Sari Wulandari",
          "kata_kunci": "akses terbuka",
          "metode": "Analisis dokumen",
          "sitasi": 9
        },
        {
          "id": "PUB-026",
          "tahun": 2024,
          "jurnal": "Jurnal Data E",
          "penulis": "Rina Saputra",
          "kata_kunci": "literasi informasi",
          "metode": "Bibliometrika",
          "sitasi": 16
        },
        {
          "id": "PUB-027",
          "tahun": 2025,
          "jurnal": "Jurnal Literasi C",
          "penulis": "Nadia Larasati",
          "kata_kunci": "bibliometrika",
          "metode": "Survei",
          "sitasi": 23
        },
        {
          "id": "PUB-028",
          "tahun": 2020,
          "jurnal": "Jurnal Perpustakaan A",
          "penulis": "Andi Prakoso",
          "kata_kunci": "metadata",
          "metode": "Analisis dokumen",
          "sitasi": 3
        },
        {
          "id": "PUB-029",
          "tahun": 2022,
          "jurnal": "Jurnal Digital D",
          "penulis": "Lita Kurnia",
          "kata_kunci": "literasi informasi",
          "metode": "Bibliometrika",
          "sitasi": 10
        },
        {
          "id": "PUB-030",
          "tahun": 2023,
          "jurnal": "Jurnal Informasi B",
          "penulis": "Bima Nugroho",
          "kata_kunci": "bibliometrika",
          "metode": "Survei",
          "sitasi": 17
        },
        {
          "id": "PUB-031",
          "tahun": 2024,
          "jurnal": "Jurnal Perpustakaan A",
          "penulis": "Dewi Rahmani",
          "kata_kunci": "perpustakaan digital",
          "metode": "Studi kasus",
          "sitasi": 24
        },
        {
          "id": "PUB-032",
          "tahun": 2025,
          "jurnal": "Jurnal Digital D",
          "penulis": "Rafi Wijaya",
          "kata_kunci": "temu kembali",
          "metode": "Analisis dokumen",
          "sitasi": 4
        },
        {
          "id": "PUB-033",
          "tahun": 2020,
          "jurnal": "Jurnal Informasi B",
          "penulis": "Bima Nugroho",
          "kata_kunci": "akses terbuka",
          "metode": "Bibliometrika",
          "sitasi": 11
        },
        {
          "id": "PUB-034",
          "tahun": 2021,
          "jurnal": "Jurnal Data E",
          "penulis": "Dewi Rahmani",
          "kata_kunci": "perpustakaan digital",
          "metode": "Survei",
          "sitasi": 18
        },
        {
          "id": "PUB-035",
          "tahun": 2022,
          "jurnal": "Jurnal Literasi C",
          "penulis": "Rafi Wijaya",
          "kata_kunci": "temu kembali",
          "metode": "Studi kasus",
          "sitasi": 25
        },
        {
          "id": "PUB-036",
          "tahun": 2024,
          "jurnal": "Jurnal Perpustakaan A",
          "penulis": "Sari Wulandari",
          "kata_kunci": "metadata",
          "metode": "Analisis dokumen",
          "sitasi": 5
        },
        {
          "id": "PUB-037",
          "tahun": 2025,
          "jurnal": "Jurnal Data E",
          "penulis": "Rina Saputra",
          "kata_kunci": "literasi informasi",
          "metode": "Survei",
          "sitasi": 12
        },
        {
          "id": "PUB-038",
          "tahun": 2020,
          "jurnal": "Jurnal Literasi C",
          "penulis": "Nadia Larasati",
          "kata_kunci": "bibliometrika",
          "metode": "Studi kasus",
          "sitasi": 19
        },
        {
          "id": "PUB-039",
          "tahun": 2021,
          "jurnal": "Jurnal Perpustakaan A",
          "penulis": "Andi Prakoso",
          "kata_kunci": "metadata",
          "metode": "Analisis dokumen",
          "sitasi": 26
        },
        {
          "id": "PUB-040",
          "tahun": 2022,
          "jurnal": "Jurnal Digital D",
          "penulis": "Lita Kurnia",
          "kata_kunci": "literasi informasi",
          "metode": "Bibliometrika",
          "sitasi": 6
        },
        {
          "id": "PUB-041",
          "tahun": 2023,
          "jurnal": "Jurnal Informasi B",
          "penulis": "Nadia Larasati",
          "kata_kunci": "akses terbuka",
          "metode": "Survei",
          "sitasi": 13
        },
        {
          "id": "PUB-042",
          "tahun": 2024,
          "jurnal": "Jurnal Data E",
          "penulis": "Andi Prakoso",
          "kata_kunci": "perpustakaan digital",
          "metode": "Studi kasus",
          "sitasi": 20
        },
        {
          "id": "PUB-043",
          "tahun": 2020,
          "jurnal": "Jurnal Digital D",
          "penulis": "Lita Kurnia",
          "kata_kunci": "temu kembali",
          "metode": "Analisis dokumen",
          "sitasi": 0
        },
        {
          "id": "PUB-044",
          "tahun": 2021,
          "jurnal": "Jurnal Informasi B",
          "penulis": "Bima Nugroho",
          "kata_kunci": "akses terbuka",
          "metode": "Bibliometrika",
          "sitasi": 7
        },
        {
          "id": "PUB-045",
          "tahun": 2022,
          "jurnal": "Jurnal Data E",
          "penulis": "Dewi Rahmani",
          "kata_kunci": "perpustakaan digital",
          "metode": "Survei",
          "sitasi": 14
        },
        {
          "id": "PUB-046",
          "tahun": 2023,
          "jurnal": "Jurnal Literasi C",
          "penulis": "Rafi Wijaya",
          "kata_kunci": "bibliometrika",
          "metode": "Analisis dokumen",
          "sitasi": 21
        },
        {
          "id": "PUB-047",
          "tahun": 2024,
          "jurnal": "Jurnal Perpustakaan A",
          "penulis": "Sari Wulandari",
          "kata_kunci": "metadata",
          "metode": "Bibliometrika",
          "sitasi": 1
        },
        {
          "id": "PUB-048",
          "tahun": 2025,
          "jurnal": "Jurnal Digital D",
          "penulis": "Rina Saputra",
          "kata_kunci": "literasi informasi",
          "metode": "Survei",
          "sitasi": 8
        }
      ]
    },
    {
      "id": "bradford",
      "name": "Distribusi Jurnal Bradford",
      "description": "20 jurnal dengan total 105 artikel, disusun untuk praktik tiga zona Bradford.",
      "category": "Hukum bibliometrika",
      "rows": [
        {
          "jurnal": "Jurnal Inti 01",
          "artikel": 15
        },
        {
          "jurnal": "Jurnal Inti 02",
          "artikel": 12
        },
        {
          "jurnal": "Jurnal Inti 03",
          "artikel": 10
        },
        {
          "jurnal": "Jurnal Inti 04",
          "artikel": 8
        },
        {
          "jurnal": "Jurnal Inti 05",
          "artikel": 7
        },
        {
          "jurnal": "Jurnal Inti 06",
          "artikel": 6
        },
        {
          "jurnal": "Jurnal Inti 07",
          "artikel": 6
        },
        {
          "jurnal": "Jurnal Inti 08",
          "artikel": 5
        },
        {
          "jurnal": "Jurnal Inti 09",
          "artikel": 4
        },
        {
          "jurnal": "Jurnal Inti 10",
          "artikel": 4
        },
        {
          "jurnal": "Jurnal Inti 11",
          "artikel": 4
        },
        {
          "jurnal": "Jurnal Inti 12",
          "artikel": 4
        },
        {
          "jurnal": "Jurnal Inti 13",
          "artikel": 3
        },
        {
          "jurnal": "Jurnal Inti 14",
          "artikel": 3
        },
        {
          "jurnal": "Jurnal Inti 15",
          "artikel": 3
        },
        {
          "jurnal": "Jurnal Inti 16",
          "artikel": 3
        },
        {
          "jurnal": "Jurnal Inti 17",
          "artikel": 2
        },
        {
          "jurnal": "Jurnal Inti 18",
          "artikel": 2
        },
        {
          "jurnal": "Jurnal Inti 19",
          "artikel": 2
        },
        {
          "jurnal": "Jurnal Inti 20",
          "artikel": 2
        }
      ]
    },
    {
      "id": "kunjungan",
      "name": "Kunjungan Perpustakaan",
      "description": "12 bulan catatan ilustratif berdasarkan jenis pengguna.",
      "category": "Layanan perpustakaan",
      "rows": [
        {
          "bulan": "Jan",
          "mahasiswa": 83,
          "dosen": 22,
          "umum": 10,
          "total": 115
        },
        {
          "bulan": "Feb",
          "mahasiswa": 95,
          "dosen": 25,
          "umum": 12,
          "total": 132
        },
        {
          "bulan": "Mar",
          "mahasiswa": 100,
          "dosen": 28,
          "umum": 13,
          "total": 141
        },
        {
          "bulan": "Apr",
          "mahasiswa": 90,
          "dosen": 25,
          "umum": 11,
          "total": 126
        },
        {
          "bulan": "Mei",
          "mahasiswa": 118,
          "dosen": 29,
          "umum": 12,
          "total": 159
        },
        {
          "bulan": "Jun",
          "mahasiswa": 113,
          "dosen": 30,
          "umum": 14,
          "total": 157
        },
        {
          "bulan": "Jul",
          "mahasiswa": 120,
          "dosen": 30,
          "umum": 17,
          "total": 167
        },
        {
          "bulan": "Agu",
          "mahasiswa": 130,
          "dosen": 34,
          "umum": 20,
          "total": 184
        },
        {
          "bulan": "Sep",
          "mahasiswa": 125,
          "dosen": 30,
          "umum": 19,
          "total": 174
        },
        {
          "bulan": "Okt",
          "mahasiswa": 141,
          "dosen": 36,
          "umum": 22,
          "total": 199
        },
        {
          "bulan": "Nov",
          "mahasiswa": 135,
          "dosen": 35,
          "umum": 20,
          "total": 190
        },
        {
          "bulan": "Des",
          "mahasiswa": 147,
          "dosen": 40,
          "umum": 24,
          "total": 211
        }
      ]
    },
    {
      "id": "altmetrika",
      "name": "Dampak Digital Artikel",
      "description": "8 artikel contoh untuk membedakan sitasi dan perhatian daring.",
      "category": "Altmetrika",
      "rows": [
        {
          "artikel": "Artikel 1",
          "tahun": 2021,
          "sitasi": 32,
          "penyebutan_sosial": 12,
          "pembaca_daring": 95
        },
        {
          "artikel": "Artikel 2",
          "tahun": 2022,
          "sitasi": 14,
          "penyebutan_sosial": 84,
          "pembaca_daring": 110
        },
        {
          "artikel": "Artikel 3",
          "tahun": 2023,
          "sitasi": 8,
          "penyebutan_sosial": 40,
          "pembaca_daring": 55
        },
        {
          "artikel": "Artikel 4",
          "tahun": 2024,
          "sitasi": 28,
          "penyebutan_sosial": 22,
          "pembaca_daring": 105
        },
        {
          "artikel": "Artikel 5",
          "tahun": 2025,
          "sitasi": 2,
          "penyebutan_sosial": 115,
          "pembaca_daring": 70
        },
        {
          "artikel": "Artikel 6",
          "tahun": 2021,
          "sitasi": 19,
          "penyebutan_sosial": 9,
          "pembaca_daring": 81
        },
        {
          "artikel": "Artikel 7",
          "tahun": 2022,
          "sitasi": 11,
          "penyebutan_sosial": 33,
          "pembaca_daring": 90
        },
        {
          "artikel": "Artikel 8",
          "tahun": 2023,
          "sitasi": 4,
          "penyebutan_sosial": 62,
          "pembaca_daring": 50
        }
      ]
    }
  ]
};
