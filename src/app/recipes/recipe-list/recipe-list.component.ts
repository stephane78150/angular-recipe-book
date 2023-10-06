import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
    public recipes: Recipe[] = [{
      name: "Apple Pie", 
      description: "Nothing is more american than an apple pie, lorem ipsum dolore sit lorem ipsum dolore sit lorem ipsum dolore sit", 
      imagePath: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Tarte_aux_pommes_002.JPG"
    }];
}
