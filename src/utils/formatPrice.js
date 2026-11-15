export function formatPrice(price) {
  const numericPrice = Number(price) || 0;
  return "Rp" + numericPrice.toLocaleString("id-ID");
}
