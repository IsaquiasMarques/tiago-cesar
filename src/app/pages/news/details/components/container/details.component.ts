import { Component } from '@angular/core';
import { PostCardTemplateComponent } from '@shared/templates/post-card-template/post-card-template.component';

@Component({
  selector: 'app-details',
  imports: [ PostCardTemplateComponent ],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {

  related = [
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

  share(destination: 'facebook' | 'linkedin'){
    switch(destination){
      case 'facebook':
        
        break;
      case 'linkedin':
        
        break;
      default:
        break;
    }
  }

  copy(destination: 'clipboard'){
    switch(destination){
      case 'clipboard':
        
        break;
    }
  }
}
