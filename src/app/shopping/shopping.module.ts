import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingComponent } from './shopping.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { Route, RouterModule } from '@angular/router';

const routes: Route[] = [
  {path: '', component: ShoppingListComponent, title: "Recipe book - Shopping List"},
]

@NgModule({
  exports: [
    ShoppingComponent,    
  ],
  declarations: [    
    ShoppingComponent,    
    ShoppingListComponent,
    ShoppingEditComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),    
  ]
})
export class ShoppingModule { }
