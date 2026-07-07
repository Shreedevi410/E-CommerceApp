import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

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
      price: '$79',
      description: 'Noise canceling with 20h battery life.',
      badge: 'Best Seller'
    },
    {
      name: 'Smart Watch',
      price: '$129',
      description: 'Fitness tracking and call notifications.',
      badge: 'New'
    },
    {
      name: 'Travel Backpack',
      price: '$49',
      description: 'Lightweight with multiple compartments.',
      badge: 'Top Rated'
    },
    {
      name: 'Bluetooth Speaker',
      price: '$39',
      description: 'Portable sound with rich bass.',
      badge: 'Limited Offer'
    }
  ];

  onHomeClick(): void {
    this.clickMessage = 'Great! You clicked the home button. Enjoy exploring the shop.';
  }

  onAddToCart(productName: string): void {
    this.clickMessage = `Added ${productName} to your cart.`;
  }
}
