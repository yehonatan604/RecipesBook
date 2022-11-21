import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, tap } from "rxjs/operators";
import { RecipeService } from "../header/RecipeBook/recipe.service";
import { Recipe } from "./recipe.model";

@Injectable({ providedIn: 'root' })
export class DataStorageService {
    constructor(private http: HttpClient, private recipeService: RecipeService) {
        this.fetchRecipes().subscribe();
    }

    storeRecipes() {
        const recipes: Recipe[] = this.recipeService.getRecipes();
        this.http.put('https://recipe-book-8721c-default-rtdb.firebaseio.com/recipes.json', recipes)
            .subscribe();
    }

    fetchRecipes() {
        return this.http.get<Recipe[]>('https://recipe-book-8721c-default-rtdb.firebaseio.com/recipes.json')
            .pipe(map(recipes => {
                return recipes.map(recipe => {
                    return { ...recipe, ingredients: recipe.ingredients ? recipe.ingredients : [] };
                });
            }), 
            tap(recipes => this.recipeService.setRecipes(recipes)))
    }
}