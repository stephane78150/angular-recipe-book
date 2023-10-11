import { Component, Input } from '@angular/core';
import { Recipe } from '../../shared/recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent {
    @Input("data")
    public data: Recipe = null!

    public isDropdownMenuExpanded: boolean = false;

    public constructor(private recipeService: RecipeService) {

    }

    public onToggleDropdownMenu() {
      this.isDropdownMenuExpanded = !this.isDropdownMenuExpanded;
    }

    public ShopIngredients() {
      this.recipeService.AddToShoppingList(this.data);
    }
}
