import { Component, OnDestroy, OnInit } from '@angular/core';
import { Recipe } from '../shared/recipe.model';
import { RecipeService } from './recipe.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit, OnDestroy {

  public selectedRecipe: Recipe | null = null;

  private sub: Subscription | null = null;

  public constructor(private recipeService: RecipeService) {
  }

  ngOnInit(): void {
     this.sub = this.recipeService.recipeSelected$.subscribe(e => this.selectedRecipe = e.selected);
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}
