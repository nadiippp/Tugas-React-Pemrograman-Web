export default function Input({
  id,
  type = "text",
  value,
  onChange,
  placeholder,
  className = "",
  min,
  required = false,
}) {
  return (
    <input
      id={id}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      min={min}
      required={required}
      className={`w-full text-sm text-slate-900 bg-white border border-slate-300 rounded-lg px-3.5 py-2.5 outline-none transition-all duration-150 placeholder:text-slate-400 focus:border-blue-600 focus:ring-3 focus:ring-blue-600/15 ${className}`.trim()}
    />
  );
}
