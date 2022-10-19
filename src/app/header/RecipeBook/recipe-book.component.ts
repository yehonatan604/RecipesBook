import { Component } from '@angular/core';
import { Recipe } from '../../Shared/recipe.model';

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.css']
})
export class RecipeBookComponent {
  selectedRecipe:Recipe;

  constructor() { }

}
