import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListComponent } from './header/ShoppingList/shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './header/ShoppingList/shopping-list/shopping-list-edit/shopping-list-edit.component';
import { IngredientComponent } from './header/ShoppingList/ingredient/ingredient.component';
import { RecipeBookComponent } from './header/RecipeBook/recipe-book/recipe-book.component';
import { RecipeListComponent } from './header/RecipeBook/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './header/RecipeBook/recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './header/RecipeBook/recipe-detail/recipe-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    IngredientComponent,
    RecipeBookComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
