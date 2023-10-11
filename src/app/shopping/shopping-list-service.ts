import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/shopping.model";

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  private data: Ingredient[] = [
    {name: "tomato", amount: 5},
    {name: "apple", amount: 10},    
  ];

  public $added = new EventEmitter<{data: Ingredient[]}>();

  public AddItem(name: string, amount: number) {
    console.log("Add item to shopping list", name, amount);

    const ingredient = {name, amount};    
    this.data.push(ingredient);
    this.$added.emit({data: this.data})
  }

  public AddItems(items: Ingredient[]) {        
    this.data = [...this.data, ...items];
    this.$added.emit({data: this.data})
  }

  public get ingredients() {
    return [...this.data];
  }
}