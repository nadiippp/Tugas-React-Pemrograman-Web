import Button from "../atoms/Button";
import Icon from "../atoms/Icon";

export default function ProductLayout({
  title,
  subtitle,
  onAddClick,
  toolbar,
  children,
  footerText,
}) {
  return (
    <div className="py-8 px-6">
      <div className="max-w-[960px] mx-auto">
        <header className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-6">
          <div>
            <h1 className="text-2xl sm:text-[28px] font-bold text-slate-900 tracking-tight">
              {title}
            </h1>
            {subtitle && (
              <p className="text-[15px] text-slate-600 mt-1">{subtitle}</p>
            )}
          </div>
          {onAddClick && (
            <Button
              variant="primary"
              onClick={onAddClick}
              className="px-4.5 py-2.5 self-start"
            >
              <Icon name="plus" size={16} />
              <span>Tambah Produk</span>
            </Button>
          )}
        </header>

        {toolbar && (
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
            {toolbar}
          </div>
        )}

        <main>{children}</main>

        {footerText && (
          <footer className="mt-6 text-sm text-slate-600">{footerText}</footer>
        )}
      </div>
    </div>
  );
}
