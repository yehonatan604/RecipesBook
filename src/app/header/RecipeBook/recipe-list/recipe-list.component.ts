import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Recipe',
               'This is some description',
               'https://i0.hippopx.com/photos/987/274/461/cake-piece-of-cake-recipe-a-piece-of-preview.jpg'),
               
    new Recipe('Recipe',
               'This is some description',
               'https://i0.hippopx.com/photos/987/274/461/cake-piece-of-cake-recipe-a-piece-of-preview.jpg'),
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
