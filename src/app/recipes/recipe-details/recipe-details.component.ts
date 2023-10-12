import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Recipe } from '../../shared/recipe.model';
import { RecipeService } from '../recipes.service';
import { Subscription } from 'rxjs/internal/Subscription';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit, OnDestroy{

    public isDropdownMenuExpanded: boolean = false;
    private selectedName: string | null = null;
    private subParameters: Subscription | null = null;

    public constructor(private recipeService: RecipeService, private route: ActivatedRoute) {

    }

    public ngOnInit(): void {
      this.selectedName = this.route.snapshot.params["name"];
      this.subParameters = this.route.params.subscribe( latestParams => {
        this.selectedName = latestParams["name"];
       });      
    }

    public ngOnDestroy(): void {
      this.subParameters?.unsubscribe();
    }

    public onToggleDropdownMenu() {
      this.isDropdownMenuExpanded = !this.isDropdownMenuExpanded;
    }

    public get data() {
      return this.recipeService.GetByName(this.selectedName);
    }

    public ShopIngredients() {
      if (this.data !== null) {
        this.recipeService.AddToShoppingList(this.data);
      }
    }
}
