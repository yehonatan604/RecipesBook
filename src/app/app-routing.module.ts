import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RecipeBookComponent } from "./header/RecipeBook/recipe-book.component";
import { RecipeDetailComponent } from "./header/RecipeBook/recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "./header/RecipeBook/recipe-edit/recipe-edit.component";
import { RecipeResolverService } from "./header/RecipeBook/recipe-resolver.service";
import { RecipeStartComponent } from "./header/RecipeBook/recipe-start/recipe-start.component";
import { ShoppingListComponent } from "./header/ShoppingList/shopping-list/shopping-list.component";

const appRoutes: Routes = [
    {path: '', redirectTo: '/recipes', pathMatch:"full"},
    {path: 'recipes', component: RecipeBookComponent, children: [
        {path: '', component: RecipeStartComponent},
        {path: 'new', component: RecipeEditComponent},
        {path: ':id', component: RecipeDetailComponent, resolve: [RecipeResolverService]},
        {path: ':id/edit', component: RecipeEditComponent, resolve: [RecipeResolverService]}
    ]},
    {path: 'shopping-list', component: ShoppingListComponent}
  ];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {
}