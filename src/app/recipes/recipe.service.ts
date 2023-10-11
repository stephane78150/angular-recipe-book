import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from '../shared/recipe.model';
import { AppModule } from '../app.module';
import { ShoppingListService } from '../shopping/shopping-list-service';

type RecipeSelectedEvent = Readonly<{
  selected: Recipe;
}>

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private list: Recipe[] = [
    {
      name: "Apple Pie", 
      description: "Nothing is more american than an apple pie, lorem ipsum dolore sit lorem ipsum dolore sit lorem ipsum dolore sit", 
      imagePath: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Tarte_aux_pommes_002.JPG",
      ingredients: [
        {name: "apple", amount: 20},
        {name: "sugar", amount: 5},
        {name: "flour", amount: 30},
        {name: "egg", amount: 2},
      ]
    },
    {
      name: "Tarte tatin", 
      description: "La tarte tatin est souvent accompagnée d'un boule de glace à la vanille", 
      imagePath: "https://upload.wikimedia.org/wikipedia/commons/e/e5/Tarte_Tatin_a_la_Michalak.jpg",
      ingredients: [
        {name: "apple", amount: 100},
        {name: "ice-cream", amount: 1},
      ]
    }
  ];

  public recipeSelected$ = new EventEmitter<RecipeSelectedEvent>();

  public constructor(private shoppingListService: ShoppingListService) { }

  public get Recipes() {
    return [...this.list];
  }

  public SelectRecipe(selected: Recipe) {
    this.recipeSelected$.emit({selected});
  }

  public AddToShoppingList(selected: Recipe) {
    console.log("Add to shopping list", selected.ingredients);
    this.shoppingListService.AddItems(selected.ingredients);
  }
}
