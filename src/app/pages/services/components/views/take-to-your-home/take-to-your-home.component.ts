import { Component } from '@angular/core';
import { CardComponent } from '@shared/templates/card/card.component';

@Component({
  selector: 'app-take-to-your-home',
  imports: [ CardComponent ],
  templateUrl: './take-to-your-home.component.html',
  styleUrl: './take-to-your-home.component.css'
})
export class TakeToYourHomeComponent {

  areas = [
    {
      title: 'Interiores',
      slug: 'interiores',
      description: 'Realizamos trabalhos de instalação de redes tecnicas e acabamentos com acentamento de ceramica, instalação de equipamentos, tecto falso e pinturas',
      imagePath: 'images/services/area-1.png'
    },
    {
      title: 'Exteriores',
      slug: 'exteriores',
      description: 'Criamos ambiente a todo tempo agradável com iluminação exterior e excelente paisagismo',
      imagePath: 'images/services/area-2.png'
    },
    {
      title: 'Arranjos exteriores',
      slug: 'arranjos-exteriores',
      description: 'Piscinas, jardins, acessos, instalação de lancis e pavimentos',
      imagePath: 'images/services/area-3.png'
    }
  ];

}
