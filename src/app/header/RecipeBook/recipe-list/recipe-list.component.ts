import { Component, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../../Shared/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Cheese Cake',
               'This is some Cheese Cake',
               'https://i0.hippopx.com/photos/987/274/461/cake-piece-of-cake-recipe-a-piece-of-preview.jpg'),
               
    new Recipe('New York Cheese Cake',
               'This is some New York Cheese Cake',
               'https://i0.hippopx.com/photos/987/274/461/cake-piece-of-cake-recipe-a-piece-of-preview.jpg'),
  ];
  constructor() { }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
