import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/organisms/Navbar";
import ProductPage from "./components/pages/ProductPage";
import ProductDetailPage from "./components/pages/ProductDetailPage";
import SettingsPage from "./components/pages/SettingsPage";
import NotFoundPage from "./components/pages/NotFoundPage";
import ProductFormModal from "./components/organisms/ProductFormModal";
import DeleteConfirmModal from "./components/organisms/DeleteConfirmModal";

const INITIAL_PRODUCTS = [
  { id: 1, name: "Pulpen", price: 5000 },
  { id: 2, name: "Buku Tulis", price: 12000 },
  { id: 3, name: "Spidol", price: 8000 },
  { id: 4, name: "Penggaris", price: 6000 },
  { id: 5, name: "Penghapus", price: 3000 },
];

export default function App() {
  const [products, setProducts] = useState(INITIAL_PRODUCTS);
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState("grid");

  // State untuk modal tambah & edit
  const [formModal, setFormModal] = useState({
    isOpen: false,
    mode: "add",
    product: null,
  });

  // State untuk modal hapus
  const [deleteModal, setDeleteModal] = useState({
    isOpen: false,
    product: null,
    onDeletedCallback: null,
  });

  function handleOpenAdd() {
    setFormModal({ isOpen: true, mode: "add", product: null });
  }

  function handleOpenEdit(product) {
    setFormModal({ isOpen: true, mode: "edit", product });
  }

  function handleCloseFormModal() {
    setFormModal({ isOpen: false, mode: "add", product: null });
  }

  function handleFormSubmit(formData) {
    if (formModal.mode === "add") {
      const nextId =
        products.length > 0
          ? Math.max(...products.map((item) => item.id)) + 1
          : 1;
      const newProduct = {
        id: nextId,
        name: formData.name,
        price: formData.price,
      };
      setProducts([...products, newProduct]);
    } else if (formModal.mode === "edit" && formModal.product) {
      setProducts(
        products.map((item) =>
          item.id === formModal.product.id
            ? { ...item, name: formData.name, price: formData.price }
            : item
        )
      );
    }
    handleCloseFormModal();
  }

  function handleOpenDelete(product, onDeletedCallback = null) {
    setDeleteModal({ isOpen: true, product, onDeletedCallback });
  }

  function handleCloseDeleteModal() {
    setDeleteModal({ isOpen: false, product: null, onDeletedCallback: null });
  }

  function handleConfirmDelete(productId) {
    const callback = deleteModal.onDeletedCallback;
    setProducts(products.filter((item) => item.id !== productId));
    handleCloseDeleteModal();
    if (typeof callback === "function") {
      callback();
    }
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar viewMode={viewMode} />

      <Routes>
        <Route path="/" element={<Navigate to="/products" replace />} />
        <Route
          path="/products"
          element={
            <ProductPage
              products={products}
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              onOpenAdd={handleOpenAdd}
              onOpenEdit={handleOpenEdit}
              onOpenDelete={handleOpenDelete}
              viewMode={viewMode}
            />
          }
        />
        <Route
          path="/products/:id"
          element={
            <ProductDetailPage
              products={products}
              onOpenEdit={handleOpenEdit}
              onOpenDelete={handleOpenDelete}
            />
          }
        />
        <Route
          path="/settings"
          element={
            <SettingsPage
              viewMode={viewMode}
              onViewModeChange={setViewMode}
            />
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <ProductFormModal
        isOpen={formModal.isOpen}
        mode={formModal.mode}
        initialData={formModal.product}
        onClose={handleCloseFormModal}
        onSubmit={handleFormSubmit}
      />

      <DeleteConfirmModal
        isOpen={deleteModal.isOpen}
        product={deleteModal.product}
        onClose={handleCloseDeleteModal}
        onConfirm={handleConfirmDelete}
      />
    </div>
  );
}
