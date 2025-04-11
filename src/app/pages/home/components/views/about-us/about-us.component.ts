import { isPlatformBrowser, NgClass, NgIf } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-about-us',
  imports: [ NgClass, NgIf ],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent implements OnInit {

  missionLabel: string = 'Ler mais';
  visionLabel: string = 'Ler mais';
  valuesLabel: string = 'Ler mais';

  sliderPosition: WritableSignal<number> = signal<number>(0); 

  isMissionActive: WritableSignal<boolean> = signal<boolean>(true);
  isVisionActive: WritableSignal<boolean> = signal<boolean>(false);
  isValuesActive: WritableSignal<boolean> = signal<boolean>(false);

  isMissionExtended: WritableSignal<boolean> = signal<boolean>(false);
  isVisionExtended: WritableSignal<boolean> = signal<boolean>(false);
  isValuesExtended: WritableSignal<boolean> = signal<boolean>(false);

  constructor(
    @Inject(PLATFORM_ID) private platformId: any
  ) { }

  ngOnInit(): void {
  }

  toggleExtend(area: string){
    switch(area){
      case 'mission':
        if(!this.isMissionExtended()){
          this.isMissionExtended.set(true);
          this.missionLabel = 'Ler menos';
        }else{
          this.isMissionExtended.set(false);
          this.missionLabel = 'Ler mais';
        }

        break;
      case 'vision':
        if(!this.isVisionExtended()){
          this.isVisionExtended.set(true);
          this.visionLabel = 'Ler menos';
        }else{
          this.isVisionExtended.set(false);
          this.visionLabel = 'Ler mais';
        }
        break;
      case 'values':
        if(!this.isValuesExtended()){
          this.isValuesExtended.set(true);
          this.valuesLabel = 'Ler menos';
        }else{
          this.isValuesExtended.set(false);
          this.valuesLabel = 'Ler mais';
        }
        break;
      default:
        break;
    }
  }

  lineTabSlideTo(elementOffsetLeft: number){
    // console.log(elementOffsetLeft);
    this.sliderPosition.set(elementOffsetLeft);
  }

  scrollToTab(area: string){
    if(!isPlatformBrowser(this.platformId)) return
    let areaTab = document.querySelector(`.${area}-tab`) as HTMLElement;
    this.lineTabSlideTo(areaTab.offsetLeft);
  }

  tabToView(area: string){

    this.scrollToTab(area);

    switch(area){
      case 'mission':
        this.isMissionActive.set(true);
        this.isVisionActive.set(false);
        this.isValuesActive.set(false);
        break;
      case 'vision':
        this.isMissionActive.set(false);
        this.isVisionActive.set(true);
        this.isValuesActive.set(false);
        break;
      case 'values':
        this.isMissionActive.set(false);
        this.isVisionActive.set(false);
        this.isValuesActive.set(true);
        break;
      default:
        break;
    }
  }

}
