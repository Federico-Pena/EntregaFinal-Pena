export class Producto {
  /**
   * Es el objeto que se guarda en stock fijo
   */
  constructor(id, nombre, precio, dimensiones, caracteristicas, foto) {
    (this.id = id),
      (this.nombre = nombre),
      (this.precio = precio),
      (this.dimensiones = dimensiones),
      (this.caracteristicas = caracteristicas),
      (this.foto = foto);
  }
}

export class ProductoCarrito {
  /**
   * Es el objeto temporal que se crea para añadir al carrito
   */
  constructor(id, nombre, precio, foto) {
    (this.id = id),
      (this.nombre = nombre),
      (this.precio = precio),
      (this.foto = foto);
  }
}
