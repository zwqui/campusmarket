export type ListingType = "venta" | "prestamo" | "servicio";

export interface Listing {
  id: string;
  title: string;
  description: string;
  price: number;
  type: ListingType;
  category: string;
  seller: string;
}

export const listings: Listing[] = [
  { id: "1", title: "Cálculo de Stewart", description: "Libro en buen estado, 7ma edición.", price: 35000, type: "venta", category: "Libros", seller: "Laura M." },
  { id: "2", title: "Calculadora científica", description: "Casio fx-991, préstamo por 3 días.", price: 0, type: "prestamo", category: "Equipos", seller: "Andrés P." },
  { id: "3", title: "Brownies caseros", description: "Caja de 6 unidades, entrega en el campus.", price: 6000, type: "venta", category: "Comida", seller: "Dulce Campus" },
  { id: "4", title: "Tutoría de física", description: "Mecánica y electricidad, 1 hora.", price: 20000, type: "servicio", category: "Tutorías", seller: "Camilo R." },
  { id: "5", title: "Kit de Arduino", description: "Placa, sensores y cables.", price: 0, type: "prestamo", category: "Equipos", seller: "Club de Robótica" },
  { id: "6", title: "Diseño de logos", description: "Identidad visual para tu emprendimiento.", price: 50000, type: "servicio", category: "Diseño", seller: "Valeria D." },
];

export const typeLabel: Record<ListingType, string> = {
  venta: "Venta",
  prestamo: "Préstamo",
  servicio: "Servicio",
};