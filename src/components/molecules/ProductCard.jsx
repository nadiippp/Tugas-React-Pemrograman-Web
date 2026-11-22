import { Link } from "react-router-dom";
import Button from "../atoms/Button";
import Icon from "../atoms/Icon";
import { formatPrice } from "../../utils/formatPrice";

export default function ProductCard({
  product,
  onEdit,
  onDelete,
  viewMode = "grid",
}) {
  const isList = viewMode === "list";

  if (isList) {
    return (
      <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-150 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
          <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 text-slate-600 w-fit">
            ID: {product.id}
          </span>
          <div>
            <Link
              to={`/products/${product.id}`}
              className="text-lg font-bold text-slate-900 hover:text-blue-700 transition-colors"
            >
              {product.name}
            </Link>
            <p className="text-base font-bold text-blue-700 mt-0.5">
              {formatPrice(product.price)}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          <Link
            to={`/products/${product.id}`}
            className="inline-flex items-center justify-center gap-1.5 font-semibold text-sm px-3.5 py-2 rounded-lg border border-slate-300 bg-white text-slate-700 hover:bg-slate-50 hover:border-slate-400 transition-all duration-150"
          >
            <Icon name="eye" size={16} />
            <span>Lihat Detail</span>
          </Link>
          <Button
            variant="outline-primary"
            onClick={() => onEdit(product)}
            className="px-3.5 py-2"
          >
            Edit
          </Button>
          <Button
            variant="outline-danger"
            onClick={() => onDelete(product)}
            className="px-3.5 py-2"
          >
            Hapus
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-150 flex flex-col justify-between">
      <div className="mb-5">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-medium text-slate-500">
            ID: {product.id}
          </span>
          <Link
            to={`/products/${product.id}`}
            className="inline-flex items-center gap-1 text-xs font-semibold text-blue-700 hover:text-blue-800 hover:underline"
          >
            <span>Detail</span>
            <span>&rarr;</span>
          </Link>
        </div>
        <Link
          to={`/products/${product.id}`}
          className="block text-xl font-bold text-slate-900 hover:text-blue-700 transition-colors mb-1"
        >
          {product.name}
        </Link>
        <p className="text-lg font-bold text-blue-700">
          {formatPrice(product.price)}
        </p>
      </div>

      <div className="flex flex-col gap-2.5">
        <Link
          to={`/products/${product.id}`}
          className="w-full inline-flex items-center justify-center gap-2 font-semibold text-sm px-4 py-2 rounded-lg border border-slate-300 bg-slate-50 text-slate-700 hover:bg-slate-100 hover:border-slate-400 transition-all duration-150"
        >
          <Icon name="eye" size={16} />
          <span>Lihat Detail</span>
        </Link>
        <div className="grid grid-cols-2 gap-2.5">
          <Button variant="outline-primary" onClick={() => onEdit(product)}>
            Edit
          </Button>
          <Button variant="outline-danger" onClick={() => onDelete(product)}>
            Hapus
          </Button>
        </div>
      </div>
    </div>
  );
}
