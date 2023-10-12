import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { ShoppingModule } from './shopping/shopping.module';
import { RecipesModule } from './recipes/recipes.module';
import { Route, RouterModule} from '@angular/router'
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping/shopping-list/shopping-list.component';
import { RecipeDetailsComponent } from './recipes/recipe-details/recipe-details.component';
import { AuthGuardService } from './auth-guard.service';


const routes: Route[] = [
  {path: 'recipes', component: RecipesComponent, children: [
    {path: ':name', component: RecipeDetailsComponent},
  ], title: "Recipe book - Recipe"},
  {path: 'shopping-list', component: ShoppingListComponent, canActivate: [AuthGuardService], title: "Recipe book - Shopping List"},
]

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
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
