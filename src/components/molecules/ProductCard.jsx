import Button from "../atoms/Button";
import { formatPrice } from "../../utils/formatPrice";

export default function ProductCard({ product, onEdit, onDelete }) {
  return (
    <div className="product-card">
      <div className="product-card-body">
        <span className="product-id">ID: {product.id}</span>
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">{formatPrice(product.price)}</p>
      </div>
      <div className="product-card-actions">
        <Button variant="outline-primary" onClick={() => onEdit(product)}>
          Edit
        </Button>
        <Button variant="outline-danger" onClick={() => onDelete(product)}>
          Hapus
        </Button>
      </div>
    </div>
  );
}
