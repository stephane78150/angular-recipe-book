import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../../../shared/recipe.model';
import { RecipeService } from '../../recipes.service';
import { ActivatedRoute, Router } from '@angular/router';

interface ItemSelectedEvent {
  selected: Recipe;
}

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {
  @Input("recipeItem")
  public item: Recipe = null!;  

  public constructor(
    private recipeService: RecipeService, 
    private router: Router) {    
  }

  public SelectItem() {
    console.log("selecting", this.item.name);
    this.recipeService.SelectRecipe(this.item);
    this.router.navigate(['recipes', this.item.name], {fragment: 'details'});
  }
}
