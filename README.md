# Manajemen Produk - Fundamental React (Week 12)

Aplikasi web **Manajemen Produk** menggunakan **React + Vite** untuk memenuhi tugas mata kuliah Pemrograman Web materi **Fundamental React**.

## Fitur Utama

- **Daftar Produk**: Menampilkan kartu produk berisi ID, Nama Produk, dan Harga (format Rupiah `Rp5.000`) menggunakan `map()` dan `key`.
- **Pencarian Produk**: Filter daftar produk secara real-time berdasarkan nama produk.
- **Tambah Produk (Pop-up Modal)**: Menambahkan produk baru dengan validasi input nama dan harga (`Harga harus lebih dari 0`).
- **Edit Produk (Pop-up Modal)**: Memperbarui nama dan harga produk yang dipilih berdasarkan ID.
- **Hapus Produk (Pop-up Modal Konfirmasi)**: Menampilkan konfirmasi penghapusan beserta detail produk yang akan dihapus.

## Struktur Folder (Atomic Design)

Sesuai dengan materi **Atomic Design** pada slide perkuliahan, komponen dikelompokkan berdasarkan perannya dalam antarmuka (UI):

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
│   │   ├── ProductList.jsx
│   │   ├── ProductFormModal.jsx
│   │   └── DeleteConfirmModal.jsx
│   ├── templates/              # Kerangka tata letak halaman
│   │   └── ProductLayout.jsx
│   └── pages/                  # Halaman dengan konten dan state utama
│       └── ProductPage.jsx
├── utils/
│   └── formatPrice.js          # Fungsi pemformat harga ke Rupiah
├── App.jsx
├── index.css
└── main.jsx
```

## Cara Menjalankan Proyek

1. Masuk ke direktori proyek:
   ```bash
   cd manajemen-produk
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
