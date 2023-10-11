import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingComponent } from './shopping.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';

@NgModule({
  exports: [
    ShoppingComponent,    
  ],
  declarations: [    
    ShoppingComponent,    
    ShoppingListComponent,
    ShoppingEditComponent],
  imports: [
    CommonModule
  ]
})
export class ShoppingModule { }
