import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Seller } from '../services/seller';

@Component({
  selector: 'app-seller-auth',
  imports: [FormsModule],
  templateUrl: './seller-auth.html',
  styleUrl: './seller-auth.css',
})
export class SellerAuth {
  constructor(private seller: Seller) {}
  signUp(data: object): void {
    console.warn(data);
    this.seller.userSignUp(data).subscribe((result) => {
      console.warn(result);
    });
  }
}

