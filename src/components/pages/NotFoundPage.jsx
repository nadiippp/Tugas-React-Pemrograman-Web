import { Link, useLocation } from "react-router-dom";
import ProductLayout from "../templates/ProductLayout";
import Icon from "../atoms/Icon";

export default function NotFoundPage() {
  const location = useLocation();

  return (
    <ProductLayout
      title="404 - Halaman Tidak Ditemukan"
      subtitle="Maaf, alamat URL yang Anda tuju tidak tersedia di aplikasi ini."
    >
      <div className="bg-white border border-slate-200 rounded-2xl p-8 sm:p-12 text-center shadow-sm max-w-xl mx-auto mt-2">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-red-50 text-red-600 font-extrabold text-2xl mb-4">
          404
        </div>

        <h2 className="text-2xl font-bold text-slate-900 mb-2">
          Halaman Tidak Ditemukan
        </h2>

        <p className="text-sm text-slate-600 mb-6 leading-relaxed">
          Halaman dengan rute{" "}
          <code className="px-2 py-0.5 rounded bg-slate-100 text-slate-800 font-mono text-xs">
            {location.pathname}
          </code>{" "}
          tidak ditemukan. Periksa kembali URL yang Anda masukkan atau kembali
          ke halaman daftar produk.
        </p>

        <Link
          to="/products"
          className="inline-flex items-center justify-center gap-2 font-semibold text-sm px-5 py-2.5 rounded-lg bg-blue-700 text-white hover:bg-blue-800 transition-colors"
        >
          <Icon name="arrow-left" size={16} />
          <span>Kembali ke Daftar Produk</span>
        </Link>
      </div>
    </ProductLayout>
  );
}
