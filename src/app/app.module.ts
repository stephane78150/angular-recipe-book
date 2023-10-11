import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailsComponent } from './recipes/recipe-details/recipe-details.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping/shopping-list/shopping-edit/shopping-edit.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { ShoppingModule } from './shopping/shopping.module';
import { RecipesModule } from './recipes/recipes.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,

    DropdownDirective
  ],
  imports: [
    BrowserModule, 
    ShoppingModule,
    RecipesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
