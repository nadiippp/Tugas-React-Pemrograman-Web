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
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-card modal-delete-card"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="modal-close-btn modal-close-top-right"
          onClick={onClose}
          aria-label="Tutup"
        >
          <Icon name="close" size={18} />
        </button>

        <div className="delete-icon-wrapper">
          <Icon name="trash" size={24} />
        </div>

        <h2 className="modal-title text-center">Hapus Produk?</h2>
        <p className="modal-subtitle text-center">
          Produk yang dihapus tidak dapat dikembalikan.
        </p>

        <div className="delete-preview-box">
          <span className="product-id">ID: {product.id}</span>
          <h3 className="delete-preview-name">{product.name}</h3>
          <p className="delete-preview-price">{formatPrice(product.price)}</p>
        </div>

        <div className="modal-actions">
          <Button variant="outline-primary" onClick={onClose}>
            Batal
          </Button>
          <Button variant="danger" onClick={() => onConfirm(product.id)}>
            Hapus Produk
          </Button>
        </div>
      </div>
    </div>
  );
}
