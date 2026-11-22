import Icon from "../atoms/Icon";
import Input from "../atoms/Input";

export default function SearchBar({
  value,
  onChange,
  placeholder = "Cari nama produk...",
}) {
  return (
    <div className="relative w-full sm:max-w-[380px]">
      <Icon
        name="search"
        size={16}
        className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none"
      />
      <Input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="pl-10"
      />
    </div>
  );
}
