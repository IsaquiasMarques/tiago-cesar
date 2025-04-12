import { Component } from '@angular/core';
import { HeroComponent } from '../views/hero/hero.component';
import { FormsModule } from '@angular/forms';
import { PostCardTemplateComponent } from '@shared/templates/post-card-template/post-card-template.component';

@Component({
  selector: 'app-news',
  imports: [ HeroComponent, FormsModule, PostCardTemplateComponent ],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class NewsComponent {

  searchTerm: string = '';
  categories: any[] = [];

  posts = [
    {
      title: 'A mulher e a ciência',
      slug: 'A mulher e a ciência',
      excerpt: 'Primamos pela honestidade trazendo para os nossos clientes produtos resultantes legais.',
      created: '13/06/2023',
      reading: '2 minutos de leitura',
      imagePath: '/images/news/new.jpg'
    },
    {
      title: 'A mulher e a ciência',
      slug: 'A mulher e a ciência',
      excerpt: 'Primamos pela honestidade trazendo para os nossos clientes produtos resultantes legais.',
      created: '13/06/2023',
      reading: '2 minutos de leitura',
      imagePath: '/images/news/new.jpg'
    },
    {
      title: 'A mulher e a ciência',
      slug: 'A mulher e a ciência',
      excerpt: 'Primamos pela honestidade trazendo para os nossos clientes produtos resultantes legais.',
      created: '13/06/2023',
      reading: '2 minutos de leitura',
      imagePath: '/images/news/new.jpg'
    },
    {
      title: 'A mulher e a ciência',
      slug: 'A mulher e a ciência',
      excerpt: 'Primamos pela honestidade trazendo para os nossos clientes produtos resultantes legais.',
      created: '13/06/2023',
      reading: '2 minutos de leitura',
      imagePath: '/images/news/new.jpg'
    },
    {
      title: 'A mulher e a ciência',
      slug: 'A mulher e a ciência',
      excerpt: 'Primamos pela honestidade trazendo para os nossos clientes produtos resultantes legais.',
      created: '13/06/2023',
      reading: '2 minutos de leitura',
      imagePath: '/images/news/new.jpg'
    },
    {
      title: 'A mulher e a ciência',
      slug: 'A mulher e a ciência',
      excerpt: 'Primamos pela honestidade trazendo para os nossos clientes produtos resultantes legais.',
      created: '13/06/2023',
      reading: '2 minutos de leitura',
      imagePath: '/images/news/new.jpg'
    },
  ];

}
