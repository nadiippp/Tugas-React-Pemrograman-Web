import { Link, useParams, useNavigate } from "react-router-dom";
import ProductLayout from "../templates/ProductLayout";
import Button from "../atoms/Button";
import Icon from "../atoms/Icon";
import { formatPrice } from "../../utils/formatPrice";

export default function ProductDetailPage({
  products,
  onOpenEdit,
  onOpenDelete,
}) {
  const { id } = useParams();
  const navigate = useNavigate();

  const numericId = Number(id);
  const product = products.find((item) => item.id === numericId);

  if (!product) {
    return (
      <ProductLayout
        title="Detail Produk Tidak Ditemukan"
        subtitle={`Produk dengan ID "${id}" tidak tersedia atau telah dihapus.`}
      >
        <div className="bg-white border border-slate-200 rounded-2xl p-8 text-center shadow-sm max-w-lg mx-auto mt-4">
          <div className="w-14 h-14 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mx-auto mb-4">
            <Icon name="alert" size={28} />
          </div>
          <h2 className="text-xl font-bold text-slate-900 mb-2">
            Produk Tidak Ditemukan
          </h2>
          <p className="text-sm text-slate-600 mb-6">
            Data produk dengan ID <span className="font-semibold">{id}</span>{" "}
            tidak ditemukan di dalam daftar produk.
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

  return (
    <ProductLayout
      title="Detail Produk"
      subtitle="Informasi lengkap produk berdasarkan ID yang dipilih."
    >
      <div className="mb-5">
        <Link
          to="/products"
          className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-800 hover:underline"
        >
          <Icon name="arrow-left" size={16} />
          <span>Kembali ke Daftar Produk</span>
        </Link>
      </div>

      <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
          <div>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200 mb-3">
              ID Produk: {product.id}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              {product.name}
            </h2>
          </div>
          <div className="sm:text-right">
            <span className="block text-xs font-medium text-slate-500 uppercase tracking-wider">
              Harga Satuan
            </span>
            <p className="text-2xl sm:text-3xl font-bold text-blue-700 mt-0.5">
              {formatPrice(product.price)}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-6 border-b border-slate-200">
          <div className="bg-slate-50 rounded-xl p-4 border border-slate-200/80">
            <span className="block text-xs font-medium text-slate-500">
              ID Produk
            </span>
            <span className="block text-base font-bold text-slate-900 mt-1">
              #{product.id}
            </span>
          </div>
          <div className="bg-slate-50 rounded-xl p-4 border border-slate-200/80">
            <span className="block text-xs font-medium text-slate-500">
              Nama Produk
            </span>
            <span className="block text-base font-bold text-slate-900 mt-1">
              {product.name}
            </span>
          </div>
          <div className="bg-slate-50 rounded-xl p-4 border border-slate-200/80">
            <span className="block text-xs font-medium text-slate-500">
              Harga (Rupiah)
            </span>
            <span className="block text-base font-bold text-blue-700 mt-1">
              {formatPrice(product.price)}
            </span>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 pt-6">
          <Link
            to="/products"
            className="inline-flex items-center justify-center gap-2 font-semibold text-sm px-4 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-700 hover:bg-slate-50 transition-colors"
          >
            <Icon name="arrow-left" size={16} />
            <span>Kembali</span>
          </Link>

          <div className="flex items-center gap-3">
            <Button
              variant="outline-primary"
              onClick={() => onOpenEdit(product)}
            >
              Edit Produk
            </Button>
            <Button
              variant="outline-danger"
              onClick={() =>
                onOpenDelete(product, () => {
                  navigate("/products");
                })
              }
            >
              Hapus Produk
            </Button>
          </div>
        </div>
      </div>
    </ProductLayout>
  );
}
