import { Component, EventEmitter, Output } from '@angular/core';
import { RecipeService } from '../recipes.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  constructor(private recipeService: RecipeService) {
  }
 
  public get recipes() { 
    return this.recipeService.Recipes;
  }
  
}
