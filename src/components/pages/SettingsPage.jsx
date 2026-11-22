import { Link } from "react-router-dom";
import ProductLayout from "../templates/ProductLayout";
import Icon from "../atoms/Icon";

export default function SettingsPage({ viewMode, onViewModeChange }) {
  return (
    <ProductLayout
      title="Pengaturan (Settings)"
      subtitle="Sesuaikan preferensi tampilan daftar produk Anda."
    >
      <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
        <div className="mb-6">
          <h2 className="text-lg font-bold text-slate-900">
            Mode Tampilan Produk
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            Pilih tata letak yang digunakan untuk menampilkan daftar produk di
            halaman utama.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <button
            type="button"
            onClick={() => onViewModeChange("grid")}
            className={`text-left p-5 rounded-xl border-2 transition-all duration-150 cursor-pointer flex items-start gap-4 ${
              viewMode === "grid"
                ? "border-blue-600 bg-blue-50/50"
                : "border-slate-200 bg-white hover:border-slate-300"
            }`}
          >
            <div
              className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${
                viewMode === "grid"
                  ? "bg-blue-700 text-white"
                  : "bg-slate-100 text-slate-600"
              }`}
            >
              <Icon name="grid" size={22} />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-bold text-slate-900">
                  Tampilan Grid
                </h3>
                {viewMode === "grid" && (
                  <span className="px-2 py-0.5 text-xs font-semibold rounded-full bg-blue-100 text-blue-700">
                    Aktif
                  </span>
                )}
              </div>
              <p className="text-xs text-slate-600 mt-1">
                Menampilkan produk dalam bentuk kartu-kartu (3 kolom) yang
                ringkas dan visual.
              </p>
            </div>
          </button>

          <button
            type="button"
            onClick={() => onViewModeChange("list")}
            className={`text-left p-5 rounded-xl border-2 transition-all duration-150 cursor-pointer flex items-start gap-4 ${
              viewMode === "list"
                ? "border-blue-600 bg-blue-50/50"
                : "border-slate-200 bg-white hover:border-slate-300"
            }`}
          >
            <div
              className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${
                viewMode === "list"
                  ? "bg-blue-700 text-white"
                  : "bg-slate-100 text-slate-600"
              }`}
            >
              <Icon name="list" size={22} />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-bold text-slate-900">
                  Tampilan List
                </h3>
                {viewMode === "list" && (
                  <span className="px-2 py-0.5 text-xs font-semibold rounded-full bg-blue-100 text-blue-700">
                    Aktif
                  </span>
                )}
              </div>
              <p className="text-xs text-slate-600 mt-1">
                Menampilkan produk dalam baris vertikal memanjang untuk
                kemudahan membaca daftar.
              </p>
            </div>
          </button>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-5 border-t border-slate-200">
          <div className="text-sm text-slate-600">
            Mode aktif saat ini:{" "}
            <span className="font-bold text-slate-900 uppercase">
              {viewMode}
            </span>
          </div>

          <Link
            to="/products"
            className="inline-flex items-center justify-center gap-2 font-semibold text-sm px-5 py-2.5 rounded-lg bg-blue-700 text-white hover:bg-blue-800 transition-colors"
          >
            <Icon name="arrow-left" size={16} />
            <span>Lihat Hasil di Daftar Produk</span>
          </Link>
        </div>
      </div>
    </ProductLayout>
  );
}
