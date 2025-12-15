import { Component } from '@angular/core';
import { ProductService, Product } from '../../services/product';
import { ProductCard } from '../../components/product-card/product-card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products-list',
  imports: [ProductCard, CommonModule],
  templateUrl: './products-list.html',
  styleUrl: './products-list.css',
})
export class ProductsList {
  productos: Product[] = [];

  //He añadido una llamada inicial al metodo cargarProductos para tener 
  //los productos iniciales de la API publica 
  ngOnInit(): void {
    this.productService.cargarProductos();
  }

  constructor(private productService: ProductService) {
    this.productService.productos$.subscribe((productos) => {
      this.productos = productos;
      console.log('Productos recibidos:', productos);
    });
  }

  onEliminar(id: string) {
    console.log('Producto a eliminar:', id);
    // Aquí luego llamaremos al servicio
  }
}
