import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingComponent } from './shopping.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { Route, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

const routes: Route[] = [
  {path: '', component: ShoppingComponent, title: "Recipe book - Shopping List"},
]

@NgModule({
  exports: [    ],
  declarations: [    
    ShoppingComponent,    
    ShoppingListComponent,
    ShoppingEditComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),    
  ]
})
export class ShoppingModule { }
