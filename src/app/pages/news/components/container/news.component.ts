import { Component } from '@angular/core';
import { HeroComponent } from '../views/hero/hero.component';

@Component({
  selector: 'app-news',
  imports: [ HeroComponent ],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class NewsComponent {

  categories = [

  ];
  selectedTag: string = 'Todos os Tópicos';
  posts: any[] = [];
  postsFilteredToDisplay: any[] = [];
  remainingPosts: any[] = [];

  changeSelectedCategory($event: any){}

  searchingEventListener($searchTerm: any){
    this.postsFilteredToDisplay = [];
    // this.postsModuleFacade.searchForPost($searchTerm)
    //                       .pipe(
    //                         map((posts: PostsInterface[]) => {
    //                           this.postsFilteredToDisplay = posts;
    //                           return this.postsFilteredToDisplay;
    //                         })
    //                       )
    //                       .subscribe(() => this.separatePostsRows());
  }

}
