import { NgClass } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-details',
  imports: [ RouterLink, NgClass ],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {

  active = signal<number>(0);

  projects: any[] = [
    {
      name: 'Maxam - Restauro do Acesso',
      description: 'Para a Maxam, realizamos o restauro dos acessos, melhorando a sua apresentação.',
      slug: 'maxam-restauro-do-acesso',
      imagePath: '/images/projects/project-1.png'
    },
    {
      name: 'Maxam - Restauro do Acesso',
      description: 'Para a Maxam, realizamos o restauro dos acessos, melhorando a sua apresentação.',
      slug: 'maxam-restauro-do-acesso',
      imagePath: '/images/projects/project-2.png'
    },
    {
      name: 'Maxam - Restauro do Acesso',
      description: 'Para a Maxam, realizamos o restauro dos acessos, melhorando a sua apresentação.',
      slug: 'maxam-restauro-do-acesso',
      imagePath: '/images/projects/project-3.png'
    },
    {
      name: 'Maxam - Restauro do Acesso',
      description: 'Para a Maxam, realizamos o restauro dos acessos, melhorando a sua apresentação.',
      slug: 'maxam-restauro-do-acesso',
      imagePath: '/images/projects/project-4.png'
    },
    {
      name: 'Maxam - Restauro do Acesso',
      description: 'Para a Maxam, realizamos o restauro dos acessos, melhorando a sua apresentação.',
      slug: 'maxam-restauro-do-acesso',
      imagePath: '/images/projects/project-5.jpg'
    },
  ];

  open(index:number){
    this.active.set(index);
  }

  formatIndex(index: number): string {
    return index.toString().padStart(3, '0');
  }

}
