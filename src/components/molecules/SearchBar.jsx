import Icon from "../atoms/Icon";
import Input from "../atoms/Input";

export default function SearchBar({ value, onChange, placeholder = "Cari nama produk..." }) {
  return (
    <div className="search-bar">
      <Icon name="search" size={16} className="search-icon" />
      <Input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="search-input"
      />
    </div>
  );
}
