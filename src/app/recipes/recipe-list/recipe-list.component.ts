import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../../shared/recipe.model';
import { RecipeService } from '../recipe.service';

interface RecipeSelectedEvent {
  selected: Recipe;
}

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  constructor(private recipeService: RecipeService) {

  }
 
  public SelectRecipe(selected: Recipe) {
    this.recipeService.SelectRecipe(selected);
  }

  public get recipes() { 
    return this.recipeService.Recipes;
  }
  
}
