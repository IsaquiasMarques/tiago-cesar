import { Component } from '@angular/core';
import { HeroComponent } from '../views/hero/hero.component';
import { ContentsComponent } from "../views/contents/contents.component";
import { TakeToYourHomeComponent } from "../views/take-to-your-home/take-to-your-home.component";
import { BestResourcesComponent } from "../views/best-resources/best-resources.component";
import { BestChoiceComponent } from "../views/best-choice/best-choice.component";

@Component({
  selector: 'app-services',
  imports: [HeroComponent, ContentsComponent, TakeToYourHomeComponent, BestResourcesComponent, BestChoiceComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {

}
