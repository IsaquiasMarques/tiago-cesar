import { Component } from '@angular/core';
import { HeroComponent } from '../views/hero/hero.component';
import { StatementComponent } from '../views/statement/statement.component';
import { CreatingOportunitiesComponent } from "../views/creating-oportunities/creating-oportunities.component";
import { StrategistPartnershipComponent } from "../views/strategist-partnership/strategist-partnership.component";
import { WeBuildComponent } from "../views/we-build/we-build.component";
import { PartnersComponent } from "../views/partners/partners.component";

@Component({
  selector: 'app-about-us',
  imports: [HeroComponent, StatementComponent, CreatingOportunitiesComponent, StrategistPartnershipComponent, WeBuildComponent, PartnersComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {

}
