import { useState, useEffect } from "react";
import Button from "../atoms/Button";
import Input from "../atoms/Input";
import Icon from "../atoms/Icon";

export default function ProductFormModal({
  isOpen,
  mode = "add",
  initialData = null,
  onClose,
  onSubmit,
}) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (isOpen) {
      if (mode === "edit" && initialData) {
        setName(initialData.name);
        setPrice(String(initialData.price));
      } else {
        setName("");
        setPrice("");
      }
      setError("");
    }
  }, [isOpen, mode, initialData]);

  if (!isOpen) return null;

  const isEdit = mode === "edit";

  function handleSubmit(e) {
    e.preventDefault();
    const trimmedName = name.trim();
    const numericPrice = Number(price);

    if (!trimmedName) {
      setError("Nama produk wajib diisi.");
      return;
    }

    if (!price || isNaN(numericPrice) || numericPrice <= 0) {
      setError("Harga harus lebih dari 0.");
      return;
    }

    onSubmit({
      name: trimmedName,
      price: numericPrice,
    });
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div>
            <h2 className="modal-title">
              {isEdit ? "Edit Produk" : "Tambah Produk"}
            </h2>
            <p className="modal-subtitle">
              {isEdit
                ? "Perbarui informasi produk yang dipilih."
                : "Masukkan informasi produk baru."}
            </p>
          </div>
          <button
            type="button"
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Tutup"
          >
            <Icon name="close" size={18} />
          </button>
        </div>

        {isEdit && initialData && (
          <div className="modal-id-badge">ID: {initialData.id}</div>
        )}

        <form onSubmit={handleSubmit} className="modal-form">
          <div className="form-group">
            <label htmlFor="product-name" className="form-label">
              Nama Produk
            </label>
            <Input
              id="product-name"
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                if (error) setError("");
              }}
              placeholder="Contoh: Pulpen"
            />
          </div>

          <div className="form-group">
            <label htmlFor="product-price" className="form-label">
              Harga (Rp)
            </label>
            <Input
              id="product-price"
              type="number"
              value={price}
              onChange={(e) => {
                setPrice(e.target.value);
                if (error) setError("");
              }}
              placeholder="Contoh: 5000"
            />
            <span className={`form-helper ${error ? "form-helper-error" : ""}`}>
              {error ? error : "Harga harus lebih dari 0."}
            </span>
          </div>

          <div className="modal-actions">
            <Button variant="outline-primary" onClick={onClose}>
              Batal
            </Button>
            <Button type="submit" variant="primary">
              {isEdit ? "Simpan Perubahan" : "Simpan Produk"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
