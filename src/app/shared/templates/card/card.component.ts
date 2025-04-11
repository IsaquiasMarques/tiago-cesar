import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card-template',
  imports: [ RouterLink ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  title = input.required<string>();
  slug = input.required<string>();
  imagePath = input.required<string>();
  description = input.required<string>();
}
