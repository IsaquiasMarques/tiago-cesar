import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-post-card-template',
  imports: [ RouterLink ],
  templateUrl: './post-card-template.component.html',
  styleUrl: './post-card-template.component.css'
})
export class PostCardTemplateComponent {
  animate = input(true);

  title = input.required();
  slug = input.required();
  posted_at = input.required();
  timeToRead = input.required();
  excerpt = input.required();
  imagePath = input.required();
}
