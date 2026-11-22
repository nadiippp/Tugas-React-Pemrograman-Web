import ProductCard from "../molecules/ProductCard";

export default function ProductList({
  products,
  onEdit,
  onDelete,
  viewMode = "grid",
}) {
  if (products.length === 0) {
    return (
      <div className="bg-white border border-dashed border-slate-300 rounded-2xl py-12 px-6 text-center text-slate-500 text-base">
        <p>Tidak ada produk yang ditemukan.</p>
      </div>
    );
  }

  const containerClass =
    viewMode === "list"
      ? "flex flex-col gap-4"
      : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5";

  return (
    <div className={containerClass}>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onEdit={onEdit}
          onDelete={onDelete}
          viewMode={viewMode}
        />
      ))}
    </div>
  );
}
