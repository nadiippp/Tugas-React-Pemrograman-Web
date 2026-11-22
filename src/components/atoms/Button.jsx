const VARIANT_CLASSES = {
  primary:
    "bg-blue-700 text-white border-blue-700 hover:bg-blue-800 hover:border-blue-800",
  danger:
    "bg-red-600 text-white border-red-600 hover:bg-red-700 hover:border-red-700",
  "outline-primary":
    "bg-white text-blue-700 border-blue-400 hover:bg-blue-50 hover:border-blue-600",
  "outline-danger":
    "bg-white text-red-600 border-red-300 hover:bg-red-50 hover:border-red-500",
  "outline-neutral":
    "bg-white text-slate-700 border-slate-300 hover:bg-slate-50 hover:border-slate-400",
};

export default function Button({
  children,
  onClick,
  type = "button",
  variant = "primary",
  className = "",
}) {
  const variantClass = VARIANT_CLASSES[variant] || VARIANT_CLASSES.primary;

  return (
    <button
      type={type}
      onClick={onClick}
      className={`inline-flex items-center justify-center gap-2 font-semibold text-sm px-4 py-2.5 rounded-lg border transition-all duration-150 cursor-pointer ${variantClass} ${className}`.trim()}
    >
      {children}
    </button>
  );
}
