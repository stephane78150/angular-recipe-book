import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../../../shared/recipe.model';
import { RecipeService } from '../../recipe.service';

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

  @Output("recipeSelected")
  public onItemSelected = new EventEmitter<ItemSelectedEvent>();  

  public constructor(private recipeService: RecipeService) {    
  }

  public SelectItem() {
    this.recipeService.SelectRecipe(this.item);    
  }
}
