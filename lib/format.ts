export function formatPrice(price: number): string {
  if (price === 0) return "Gratis";
  return "$" + price.toLocaleString("es-CO");
}