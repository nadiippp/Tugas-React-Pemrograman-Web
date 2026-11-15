import { useState } from "react";
import ProductLayout from "../templates/ProductLayout";
import SearchBar from "../molecules/SearchBar";
import ProductList from "../organisms/ProductList";
import ProductFormModal from "../organisms/ProductFormModal";
import DeleteConfirmModal from "../organisms/DeleteConfirmModal";

const INITIAL_PRODUCTS = [
  { id: 1, name: "Pulpen", price: 5000 },
  { id: 2, name: "Buku Tulis", price: 12000 },
  { id: 3, name: "Spidol", price: 8000 },
  { id: 4, name: "Penggaris", price: 6000 },
  { id: 5, name: "Penghapus", price: 3000 },
];

export default function ProductPage() {
  const [products, setProducts] = useState(INITIAL_PRODUCTS);
  const [searchQuery, setSearchQuery] = useState("");

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
  });

  const filteredProducts = products.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

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

  function handleOpenDelete(product) {
    setDeleteModal({ isOpen: true, product });
  }

  function handleCloseDeleteModal() {
    setDeleteModal({ isOpen: false, product: null });
  }

  function handleConfirmDelete(productId) {
    setProducts(products.filter((item) => item.id !== productId));
    handleCloseDeleteModal();
  }

  const toolbar = (
    <>
      <SearchBar
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Cari nama produk..."
      />
      <span className="product-count">{filteredProducts.length} produk</span>
    </>
  );

  const footerText = `Menampilkan ${filteredProducts.length} dari ${products.length} produk`;

  return (
    <>
      <ProductLayout
        title="Manajemen Produk"
        subtitle="Kelola daftar produk dan harga dalam satu tempat."
        onAddClick={handleOpenAdd}
        toolbar={toolbar}
        footerText={footerText}
      >
        <ProductList
          products={filteredProducts}
          onEdit={handleOpenEdit}
          onDelete={handleOpenDelete}
        />
      </ProductLayout>

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
    </>
  );
}
