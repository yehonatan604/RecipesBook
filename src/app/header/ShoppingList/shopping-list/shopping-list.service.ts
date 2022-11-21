import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from "src/app/Shared/ingredient.model";

@Injectable({providedIn: 'root'})

export class ShoppingListService {

    ingredientAdded = new Subject<Ingredient[]>();
    startEdit = new Subject<number>();

    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
      ];
    
    getIngredients() {
        return new Array<Ingredient>(...this.ingredients);
    }

    getIngredient(id:number) {
        return this.ingredients[id];
    }

    addIngredient(ingredient:Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientAdded.next(this.ingredients);
    }

    addIngredients(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients);
        this.ingredientAdded.next(this.ingredients.slice());
    }

    updateIngredient(id: number, newIngredient: Ingredient) {
        this.ingredients[id] = newIngredient;
        this.ingredientAdded.next(this.ingredients.slice());
    }

    deleteIngredient(id: number) {
        this.ingredients.splice(id, 1);
        this.ingredientAdded.next(this.ingredients.slice());
    }

    
}