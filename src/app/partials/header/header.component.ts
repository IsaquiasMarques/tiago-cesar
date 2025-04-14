import { isPlatformBrowser, NgClass } from '@angular/common';
import { Component, Inject, PLATFORM_ID, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [ RouterLink, RouterLinkActive, NgClass ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  dropdownExtended = signal(false);

  // constructor(@Inject(PLATFORM_ID) private platformId: any) {}

  toggleDropdown(){
    if(this.dropdownExtended()){
      this.closeDropdown();
      return;
    }

    this.openDropdown();
  }

  openDropdown(){
    this.dropdownExtended.set(true);
    this.toggleBodyScrolling();
  }

  closeDropdown(){
    this.dropdownExtended.set(false);
    this.toggleBodyScrolling();
  }

  toggleBodyScrolling(){
    // if(!isPlatformBrowser(this.platformId)) return;

    let body = document.querySelector("body") as HTMLElement;
    if(this.dropdownExtended()){
      body.style.height = '90vh';
      body.style.overflow = 'hidden';

    }else{
      body.style.height = 'auto';
      body.style.overflow = 'auto';
    }
  }

}
