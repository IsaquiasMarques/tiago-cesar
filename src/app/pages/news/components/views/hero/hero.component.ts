import { NgClass } from '@angular/common';
import { Component, input, OnChanges, OnInit, output, SimpleChanges } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'posts-hero',
  imports: [ NgClass, FormsModule, ReactiveFormsModule ],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent implements OnInit, OnChanges {
  searchTerm: string = '';
  categories = input([]);
  changeSelectedCategoryEvent = output<string>();
  searchingTermEventListener = output<string>();

  constructor() {};
  
  ngOnInit(): void {
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    
  }
  
  changeSelectedCategory(categorySlug: string){
    this.changeSelectedCategoryEvent.emit(categorySlug);
  }
  
  onTermChange(): void {
    this.searchingTermEventListener.emit(this.searchTerm);
  }
}
