import { Link } from "react-router-dom";
import ProductLayout from "../templates/ProductLayout";
import SearchBar from "../molecules/SearchBar";
import ProductList from "../organisms/ProductList";
import Icon from "../atoms/Icon";

export default function ProductPage({
  products,
  searchQuery,
  onSearchChange,
  onOpenAdd,
  onOpenEdit,
  onOpenDelete,
  viewMode = "grid",
}) {
  const filteredProducts = products.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toolbar = (
    <>
      <SearchBar
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="Cari nama produk..."
      />
      <div className="flex items-center justify-between sm:justify-end gap-3">
        <Link
          to="/settings"
          className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-600 bg-white border border-slate-200 px-3 py-1.5 rounded-lg hover:border-blue-300 hover:text-blue-700 transition-colors"
          title="Ubah tampilan Grid/List di Settings"
        >
          <Icon name={viewMode === "list" ? "list" : "grid"} size={14} />
          <span>Tampilan: {viewMode === "list" ? "List" : "Grid"}</span>
        </Link>
        <span className="text-sm font-medium text-slate-600 whitespace-nowrap">
          {filteredProducts.length} produk
        </span>
      </div>
    </>
  );

  const footerText = `Menampilkan ${filteredProducts.length} dari ${products.length} produk`;

  return (
    <ProductLayout
      title="Manajemen Produk"
      subtitle="Kelola daftar produk dan harga dalam satu tempat."
      onAddClick={onOpenAdd}
      toolbar={toolbar}
      footerText={footerText}
    >
      <ProductList
        products={filteredProducts}
        onEdit={onOpenEdit}
        onDelete={onOpenDelete}
        viewMode={viewMode}
      />
    </ProductLayout>
  );
}
