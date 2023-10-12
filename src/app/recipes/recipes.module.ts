import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipesComponent } from './recipes.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { Route, RouterModule } from '@angular/router';

const routes: Route[] = [
  {path: '', component: RecipesComponent, children: [
    {path: ':name', component: RecipeDetailsComponent},
  ], title: "Recipe book - Recipe"},
];

@NgModule({
  exports: [],
  declarations: [
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailsComponent,
    RecipeItemComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class RecipesModule { }
