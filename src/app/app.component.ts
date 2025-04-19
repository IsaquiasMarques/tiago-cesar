import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '@partials/footer/footer.component';
import { HeaderComponent } from '@partials/header/header.component';
import * as AOS from "aos";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'tiago-cesar';

  constructor(@Inject(PLATFORM_ID) private platformId: any) {}

  ngOnInit(): void {
    if(isPlatformBrowser(this.platformId)){
      AOS.init({
        offset: 70,
        duration: 900,
        easing: 'ease-in-out-cubic',
        delay: 100,
      })
    }
  }
}
