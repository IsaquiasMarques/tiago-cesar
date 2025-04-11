import { Component } from '@angular/core';
import { CardComponent } from '@shared/templates/card/card.component';

@Component({
  selector: 'app-experience',
  imports: [ CardComponent ],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  segments = [
    {
      title: 'Manutenção',
      slug: 'servico-de-manutencao',
      description: 'Contamos com uma equipe multidisciplinar com vocação em patologia de edificio e que desenha a estrategia de manuteção de edificios e equipamentos',
      imagePath: 'images/experiences/xp-1.png'
    },
    {
      title: 'Obras de Restauro',
      slug: 'obras-de-restauro',
      description: 'Mediante projectos de restauro na modalidade concepção/construção atualizamos o seu imovel para padrões de bem estar mais modernos',
      imagePath: 'images/experiences/xp-2.png'
    },
    {
      title: 'Obras de Raiz',
      slug: 'obras-de-raiz',
      description: 'Realizamos obra de raiz, garantindo que a faze inicial de qualquer obra seja valor acrescentado no tempo de vida util do imovel',
      imagePath: 'images/experiences/xp-3.png'
    }
  ];
}
