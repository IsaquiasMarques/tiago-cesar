import { isPlatformBrowser, NgClass, NgIf, NgOptimizedImage } from '@angular/common';
import { Component, Inject, inject, PLATFORM_ID, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-contents',
  imports: [ NgClass, NgIf, RouterLink ],
  templateUrl: './contents.component.html',
  styleUrl: './contents.component.css'
})
export class ContentsComponent {
  activeIndex = signal<number>(0);

  constructor(@Inject(PLATFORM_ID) private platformId: any) {}
  
  private router = inject(Router);
  
  services: any[] = [
    {
      name: 'Manutenção',
      slug: 'servico-de-manutencao',
      description: 'Contamos com uma equipe multidisciplinar com vocação em patologia de edificio e que desenha a estrategia de manuteção de edificios e equipamentos',
      imagePath: 'images/experiences/xp-1.png'
    },
    {
      name: 'Obras de Restauro',
      slug: 'obras-de-restauro',
      description: 'Mediante projectos de restauro na modalidade concepção/construção atualizamos o seu imovel para padrões de bem estar mais modernos',
      imagePath: 'images/experiences/xp-2.png'
    },
    {
      name: 'Obras de Raiz',
      slug: 'obras-de-raiz',
      description: 'Realizamos obra de raiz, garantindo que a faze inicial de qualquer obra seja valor acrescentado no tempo de vida util do imovel',
      imagePath: 'images/experiences/xp-3.png'
    }
  ];

  seeService(serviceSlug: string) {
    this.router.navigate(['/services/details/', serviceSlug]);
  }

  opentab(index: number){

    if(!isPlatformBrowser(this.platformId)) return;

    let servicesBoxes = document.querySelectorAll('.service-box') as NodeListOf<HTMLElement>;
    let clickedServiceBox = servicesBoxes[index];
    
    clickedServiceBox.classList.forEach((className: string) => {

      if(className == 'active' || className == 'opened'){
        this.activeIndex.set(-1);
      }else{
        this.activeIndex.set(index);
      }
    });

  }

}
