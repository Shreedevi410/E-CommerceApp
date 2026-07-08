import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../services/cart.service';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class Home {
  title = 'Shop the Best Deals Today';
  subtitle = 'Find top products, new arrivals, and special offers on our ecommerce home page.';
  clickMessage = '';

  products = [
    {
      name: 'Wireless Headphones',
      price: 79,
      displayPrice: '$79',
      description: 'Noise canceling with 20h battery life.',
      badge: 'Best Seller'
    },
    {
      name: 'Smart Watch',
      price: 129,
      displayPrice: '$129',
      description: 'Fitness tracking and call notifications.',
      badge: 'New'
    },
    {
      name: 'Travel Backpack',
      price: 49,
      displayPrice: '$49',
      description: 'Lightweight with multiple compartments.',
      badge: 'Top Rated'
    },
    {
      name: 'Bluetooth Speaker',
      price: 39,
      displayPrice: '$39',
      description: 'Portable sound with rich bass.',
      badge: 'Limited Offer'
    }
  ];

  constructor(private readonly cartService: CartService) {}

  onHomeClick(): void {
    this.clickMessage = 'Great! You clicked the home button. Enjoy exploring the shop.';
  }

  onAddToCart(product: { name: string; price: number }): void {
    this.cartService.addItem(product.name, product.price);
    this.clickMessage = `Added ${product.name} to your cart.`;
  }

  onRemoveFromCart(productName: string): void {
    this.cartService.removeItem(productName);
    this.clickMessage = `Removed one ${productName} from your cart.`;
  }

  get cartCount() {
    return this.cartService.cartCount;
  }

  get cartItems() {
    return this.cartService.cartItems;
  }

  get cartTotal() {
    return this.cartService.cartTotal;
  }
}
