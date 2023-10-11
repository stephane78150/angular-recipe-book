import { Component, EventEmitter, Output } from "@angular/core";
import { Menu } from "../shared/app.model";

type MenuSelectedEvent = Readonly<{
    menu: Menu;
}>

@Component({
    templateUrl: "./header.component.html",
    selector: 'app-header',
})
export class HeaderComponent {
    public isBurgerMenuExpanded: boolean = false;

    @Output("menuSelected")
    public onMenuSelected = new EventEmitter<MenuSelectedEvent>();

    public selectedMenu: Menu | null = null;

    public onToggleBurgerMenu() {
        this.isBurgerMenuExpanded = !this.isBurgerMenuExpanded;        
    }

    public onSelectRecipes() {
        this.selectedMenu = 'recipes';
        this.onMenuSelected.emit({menu: 'recipes'});
    }

    public onSelectShoppingList() {
        this.selectedMenu = 'shoppingList';
        this.onMenuSelected.emit({menu: 'shoppingList'});
    }
}