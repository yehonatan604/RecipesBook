import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "src/app/Shared/ingredient.model";
import { Recipe } from "src/app/Shared/recipe.model";
import { ShoppingListService } from "../ShoppingList/shopping-list/shopping-list.service";

@Injectable({providedIn: 'root'})

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Cheese Cake',
                   'This is some Cheese Cake',
                   'https://i0.hippopx.com/photos/987/274/461/cake-piece-of-cake-recipe-a-piece-of-preview.jpg',
                   [
                    new Ingredient('eggs', 3),
                    new Ingredient('flour', 1),
                    new Ingredient('sugar', 2),
                    new Ingredient('strawberries', 7)
                   ]),
                   
        new Recipe('New York Cheese Cake',
                   'This is some New York Cheese Cake',
                   'https://i0.hippopx.com/photos/987/274/461/cake-piece-of-cake-recipe-a-piece-of-preview.jpg',
                   [
                    new Ingredient('eggs', 2),
                    new Ingredient('flour', 2),
                    new Ingredient('sugar', 1),
                    new Ingredient('strawberries', 6)
                   ]),
      ];

      constructor(private shoppingListService: ShoppingListService){

      }

      getRecipes() : Recipe[] {

        return new Array<Recipe>(...this.recipes);
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
      }
}