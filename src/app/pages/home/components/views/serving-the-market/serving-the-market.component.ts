import { Component } from '@angular/core';
import { CardComponent } from '@shared/templates/card/card.component';

@Component({
  selector: 'app-serving-the-market',
  imports: [ CardComponent ],
  templateUrl: './serving-the-market.component.html',
  styleUrl: './serving-the-market.component.css'
})
export class ServingTheMarketComponent {

  segments = [
    {
      title: 'Ambiente',
      slug: 'ambiente',
      description: 'Constuimos uma política ambiental forte porque acreditamos que a arte de construir deve acrestar a paisagem natural, mantendo os ecocistemas no mesmo equilibrio',
      imagePath: 'images/services/service-1.png'
    },
    {
      title: 'Qualidade',
      slug: 'qualidade',
      description: 'Constuimos nossas obras com completo rigor no controlo e dimensionamento dos elementos construtivos em todas as actividades da fase de execução',
      imagePath: 'images/services/service-2.png'
    },
    {
      title: 'Segurança',
      slug: 'seguranca',
      description: 'Nossas equipas são continuamente instruidas nos pressupostos do cumprimentos das  regras da segurança',
      imagePath: 'images/services/service-3.png'
    }
  ];

}
