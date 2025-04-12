import { NgClass } from '@angular/common';
import { Component, input, OnChanges, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'posts-hero',
  imports: [ NgClass, FormsModule ],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent implements OnInit {
  searchTerm: string = '';
  categories = input([
    {
      name: 'Arquitectura',
      slug: 'arquitectura',
      isActive: true
    },
    {
      name: 'Topografia',
      slug: 'topografia',
      isActive: false
    },
    {
      name: 'Estudos técnicos',
      slug: 'estudos-tecnicos',
      isActive: false
    },
    {
      name: 'Engenharia',
      slug: 'engenharia',
      isActive: false
    },
    {
      name: 'Fiscalização',
      slug: 'fiscalizacao',
      isActive: false
    }
  ]);
  active = signal(0);

  constructor() {};
  
  ngOnInit(): void {
    
  }

  changeCategory(index: number){
    this.active.set(index);
  }
}
