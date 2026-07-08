import { Injectable, signal, computed } from '@angular/core';

export interface CartItem {
  name: string;
  price: number;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private readonly items = signal<CartItem[]>([]);
  readonly cartItems = this.items;
  readonly cartCount = computed(() => this.items().reduce((count, item) => count + item.quantity, 0));
  readonly cartTotal = computed(() => this.items().reduce(
    (total, item) => total + item.price * item.quantity,
    0
  ));

  addItem(name: string, price: number): void {
    const existing = this.items().find((item) => item.name === name);
    if (existing) {
      this.items.update((list) => list.map((item) =>
        item.name === name ? { ...item, quantity: item.quantity + 1 } : item
      ));
      return;
    }

    this.items.update((list) => [...list, { name, price, quantity: 1 }]);
  }

  clearCart(): void {
    this.items.set([]);
  }
}
