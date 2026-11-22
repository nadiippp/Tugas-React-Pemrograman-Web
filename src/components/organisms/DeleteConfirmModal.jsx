import Button from "../atoms/Button";
import Icon from "../atoms/Icon";
import { formatPrice } from "../../utils/formatPrice";

export default function DeleteConfirmModal({
  isOpen,
  product,
  onClose,
  onConfirm,
}) {
  if (!isOpen || !product) return null;

  return (
    <div
      className="fixed inset-0 bg-slate-900/45 flex items-center justify-center p-4 z-50 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-[380px] bg-white border border-slate-200 rounded-2xl p-6 pt-7 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="absolute top-4 right-4 text-slate-500 hover:bg-slate-100 hover:text-slate-900 p-1 rounded-md inline-flex items-center justify-center transition-colors cursor-pointer"
          onClick={onClose}
          aria-label="Tutup"
        >
          <Icon name="close" size={18} />
        </button>

        <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 flex items-center justify-center mx-auto mb-3.5">
          <Icon name="trash" size={24} />
        </div>

        <h2 className="text-xl font-bold text-slate-900 text-center">
          Hapus Produk?
        </h2>
        <p className="text-xs text-slate-500 mt-1 text-center">
          Produk yang dihapus tidak dapat dikembalikan.
        </p>

        <div className="border border-slate-200 rounded-xl p-3.5 px-4 mt-4 bg-white">
          <span className="block text-xs text-slate-500 mb-1">
            ID: {product.id}
          </span>
          <h3 className="text-lg font-bold text-slate-900 mb-0.5">
            {product.name}
          </h3>
          <p className="text-base font-bold text-blue-700">
            {formatPrice(product.price)}
          </p>
        </div>

        <div className="flex items-center gap-3 mt-5">
          <Button
            variant="outline-primary"
            onClick={onClose}
            className="min-w-[96px]"
          >
            Batal
          </Button>
          <Button
            variant="danger"
            onClick={() => onConfirm(product.id)}
            className="flex-1"
          >
            Hapus Produk
          </Button>
        </div>
      </div>
    </div>
  );
}
