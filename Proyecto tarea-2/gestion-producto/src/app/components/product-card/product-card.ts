import { Component, Input } from '@angular/core';
import { Product, ProductService } from '../../services/product';
import { CommonModule, CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-product-card',
  imports: [CurrencyPipe, CommonModule],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {
  @Input() product!: Product;

  constructor(private productService: ProductService) {}

  eliminar() {
    this.productService.eliminarProducto(this.product._id);
  }
}
