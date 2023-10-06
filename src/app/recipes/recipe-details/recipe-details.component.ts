import { Component } from '@angular/core';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent {
    public isDropdownMenuExpanded: boolean = false;

    public onToggleDropdownMenu() {
      this.isDropdownMenuExpanded = !this.isDropdownMenuExpanded;
    }
}
