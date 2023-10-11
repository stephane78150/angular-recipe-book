import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { ShoppingListService } from '../../shopping-list-service';

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

  public Add() {
    const amount = this.amountInput.nativeElement.valueAsNumber;
    const name = this.nameInput.nativeElement.value;
    this.shoppingListService.AddItem(name, amount);
  }
}
