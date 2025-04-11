import { Component } from '@angular/core';
import { HeroComponent } from '../views/hero/hero.component';
import { StatementComponent } from '../views/statement/statement.component';
import { AboutUsComponent } from '../views/about-us/about-us.component';
import { ServingTheMarketComponent } from "../views/serving-the-market/serving-the-market.component";
import { ExperienceComponent } from "../views/experience/experience.component";
import { EficientServiceComponent } from "../views/eficient-service/eficient-service.component";

@Component({
  selector: 'app-home',
  imports: [HeroComponent, StatementComponent, AboutUsComponent, ServingTheMarketComponent, ExperienceComponent, EficientServiceComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
