import { NgClass } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-projects',
  imports: [ RouterLink, NgClass ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

  active = signal<number>(2);

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

  formatIndex(index: number): string {
    return index.toString().padStart(3, '0');
  }

  open(index:number){
    this.active.set(index);
  }

}
