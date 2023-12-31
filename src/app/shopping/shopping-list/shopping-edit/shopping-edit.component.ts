import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { ShoppingListService } from '../../shopping-list-service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
  @ViewChild("amountInput")
  public amountInput: ElementRef<HTMLInputElement> = null!;

  @ViewChild("nameInput")
  public nameInput: ElementRef<HTMLInputElement> = null!; 

  public constructor(private shoppingListService: ShoppingListService) {
  }

  public AddIngredient(form: NgForm) {
    console.log("submitted", form.value);
    this.shoppingListService.AddItem(form.value.name, form.value.amount);
  }

  public ClearIngredients() {
    this.shoppingListService.Clear();
  }
}
