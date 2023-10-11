import { Component, Input, OnInit } from '@angular/core';
import { Ingredient } from '../../shared/shopping.model';
import { ShoppingListService } from '../shopping-list-service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  public ingredients: Ingredient[] = null!

  public constructor(private shoppingListService: ShoppingListService) {    
  }

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.ingredients;
    this.shoppingListService.$added.subscribe( ({data}) => this.ingredients = data);
  }

}

