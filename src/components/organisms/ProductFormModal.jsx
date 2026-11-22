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
    <div
      className="fixed inset-0 bg-slate-900/45 flex items-center justify-center p-4 z-50 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-[380px] bg-white border border-slate-200 rounded-2xl p-6 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-start gap-3">
          <div>
            <h2 className="text-xl font-bold text-slate-900">
              {isEdit ? "Edit Produk" : "Tambah Produk"}
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              {isEdit
                ? "Perbarui informasi produk yang dipilih."
                : "Masukkan informasi produk baru."}
            </p>
          </div>
          <button
            type="button"
            className="text-slate-500 hover:bg-slate-100 hover:text-slate-900 p-1 rounded-md inline-flex items-center justify-center transition-colors cursor-pointer"
            onClick={onClose}
            aria-label="Tutup"
          >
            <Icon name="close" size={18} />
          </button>
        </div>

        {isEdit && initialData && (
          <div className="text-xs font-medium text-slate-600 mt-3.5">
            ID: {initialData.id}
          </div>
        )}

        <form onSubmit={handleSubmit} className="mt-4">
          <div className="mb-4">
            <label
              htmlFor="product-name"
              className="block text-xs font-semibold text-slate-900 mb-1.5"
            >
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

          <div className="mb-4">
            <label
              htmlFor="product-price"
              className="block text-xs font-semibold text-slate-900 mb-1.5"
            >
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
            <span
              className={`block text-xs mt-1.5 ${
                error ? "text-red-600 font-medium" : "text-slate-500"
              }`}
            >
              {error ? error : "Harga harus lebih dari 0."}
            </span>
          </div>

          <div className="flex items-center gap-3 mt-5">
            <Button
              variant="outline-primary"
              onClick={onClose}
              className="min-w-[96px]"
            >
              Batal
            </Button>
            <Button type="submit" variant="primary" className="flex-1">
              {isEdit ? "Simpan Perubahan" : "Simpan Produk"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
