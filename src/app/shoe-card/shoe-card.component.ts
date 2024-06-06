import { Component, Input } from '@angular/core';
import { Shoe } from '../shoe-model';

@Component({
  selector: 'app-shoe-card',
  templateUrl: './shoe-card.component.html',
  styleUrl: './shoe-card.component.css'
})
export class ShoeCardComponent {
  @Input() shoe!: Shoe;
}