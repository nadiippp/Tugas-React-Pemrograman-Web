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
      className={`input-field ${className}`.trim()}
    />
  );
}
