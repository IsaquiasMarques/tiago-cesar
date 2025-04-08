import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '@partials/footer/footer.component';
import { HeaderComponent } from '@partials/header/header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tiago-cesar';
}
