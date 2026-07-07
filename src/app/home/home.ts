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
  title = 'Welcome to the Home Page';
  subtitle = 'Click the button or a card to see the home page design in action.';
  clickMessage = '';

  onHomeClick(): void {
    this.clickMessage = 'Great! You clicked the home button. Enjoy exploring the app.';
  }

  onCardClick(): void {
    this.clickMessage = 'Nice choice! The home page is designed to respond when you click here.';
  }
}
