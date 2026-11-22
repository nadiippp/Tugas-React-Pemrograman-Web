# Manajemen Produk - React Router & Tailwind CSS (Tugas 4)

Aplikasi web **Manajemen Produk** menggunakan **React + Vite**, **React Router**, dan **Tailwind CSS** untuk memenuhi tugas mata kuliah Pemrograman Web.

## Fitur Utama

- **CRUD Produk (Tetap Bekerja)**:
  - **Lihat & Cari Produk**: Menampilkan daftar produk dengan filter pencarian nama produk secara *real-time*.
  - **Tambah Produk (Pop-up Modal)**: Menambahkan produk baru dengan validasi input nama dan harga (`Harga harus lebih dari 0`).
  - **Edit Produk (Pop-up Modal)**: Memperbarui nama dan harga produk yang dipilih berdasarkan ID.
  - **Hapus Produk (Pop-up Modal Konfirmasi)**: Menampilkan konfirmasi penghapusan beserta detail produk yang akan dihapus.
- **Detail Produk (`/products/:id`)**:
  - Menampilkan informasi lengkap produk sesuai parameter `:id` dari URL (`useParams`) serta tautan `Link` untuk kembali ke halaman daftar produk.
- **Pengaturan Tampilan (`/settings`)**:
  - Mengubah mode tampilan daftar produk antara **Grid** (kartu 3 kolom) dan **List** (baris vertikal).
- **Halaman 404 Not Found (`*`)**:
  - Menampilkan pesan halaman tidak ditemukan yang jelas beserta tautan kembali ke daftar produk.

## Struktur Folder (Atomic Design)

```text
src/
├── components/
│   ├── atoms/                  # Elemen UI dasar
│   │   ├── Button.jsx
│   │   ├── Input.jsx
│   │   └── Icon.jsx
│   ├── molecules/              # Gabungan sederhana dengan satu fungsi
│   │   ├── SearchBar.jsx
│   │   └── ProductCard.jsx
│   ├── organisms/              # Bagian UI yang lebih lengkap
│   │   ├── Navbar.jsx
│   │   ├── ProductList.jsx
│   │   ├── ProductFormModal.jsx
│   │   └── DeleteConfirmModal.jsx
│   ├── templates/              # Kerangka tata letak halaman
│   │   └── ProductLayout.jsx
│   └── pages/                  # Halaman rute aplikasi
│       ├── ProductPage.jsx
│       ├── ProductDetailPage.jsx
│       ├── SettingsPage.jsx
│       └── NotFoundPage.jsx
├── utils/
│   └── formatPrice.js          # Fungsi pemformat harga ke Rupiah
├── App.jsx
├── index.css
└── main.jsx
```

## Cara Menjalankan Proyek

1. Masuk ke direktori proyek:
   ```bash
   cd "D:\KULIAH\Pemrograman Web\Tugas React"
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Jalankan server pengembangan (development server):
   ```bash
   npm run dev
   ```
4. Buka URL yang muncul di terminal (biasanya `http://localhost:5173`) pada browser.
