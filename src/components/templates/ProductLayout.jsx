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
    <div className="page-wrapper">
      <div className="container">
        <header className="page-header">
          <div className="page-header-text">
            <h1 className="page-title">{title}</h1>
            <p className="page-subtitle">{subtitle}</p>
          </div>
          <Button variant="primary" onClick={onAddClick} className="btn-add">
            <Icon name="plus" size={16} />
            <span>Tambah Produk</span>
          </Button>
        </header>

        {toolbar && <div className="page-toolbar">{toolbar}</div>}

        <main className="page-content">{children}</main>

        {footerText && <footer className="page-footer">{footerText}</footer>}
      </div>
    </div>
  );
}
