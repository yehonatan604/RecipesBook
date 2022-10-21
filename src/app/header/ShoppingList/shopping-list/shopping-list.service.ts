import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "src/app/Shared/ingredient.model";

@Injectable({providedIn: 'root'})

export class ShoppingListService {

    ingredientAdded = new EventEmitter<Ingredient[]>();

    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
      ];
    
    getIngredients() {
        return new Array<Ingredient>(...this.ingredients);
    }

    addIngredient(ingredient:Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientAdded.emit(this.ingredients);
    }

    addIngredients(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients);
        this.ingredientAdded.emit(this.ingredients.slice());
    }
}