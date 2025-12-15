import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService, Product } from './services/product';
import { ProductsList } from './component/products-list/products-list';
import { ProductFormComponent } from './components/product-form/product-form';
import { ProductFilterComponent } from './components/product-filter/product-filter';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,ProductsList, ProductFormComponent, ProductFilterComponent],
  templateUrl: './app.html'
})
export class App {
  //Según el tutorial: export class AppComponent

  protected readonly title = signal('gestion-productos');

  productos: Product[] = [];

  constructor(private productService: ProductService) {
  //this.productService.cargarProductos().subscribe(datos => {
  //  console.log('Productos cargados:', datos);
  //});
  }

  onProductoCreado(producto: any) {
    this.productService.agregarProducto(producto);
  }
}
