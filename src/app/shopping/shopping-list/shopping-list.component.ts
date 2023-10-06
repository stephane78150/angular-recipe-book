import { Component } from '@angular/core';
import { Ingredient } from '../shopping.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
  public ingredients: Ingredient[] = [
    {
      name: "romarin", 
      amount: 10,
    },
    {
      name: "tomate",
      amount: 4,
    },
    {
      name: "oeuf",
      amount: 3
    },
  ];
}
