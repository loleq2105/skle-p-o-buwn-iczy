import { Component } from '@angular/core';
import { Shoe } from './shoe-model';
import { SHOES } from './shoes-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Sklep Obuwniczy';
  shoes: Shoe[] = SHOES;
}