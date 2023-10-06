import { Component } from "@angular/core";

@Component({
    templateUrl: "./header.component.html",
    selector: 'app-header',
})
export class HeaderComponent {
    public isBurgerMenuExpanded: boolean = false;

    public onToggleBurgerMenu() {
        this.isBurgerMenuExpanded = !this.isBurgerMenuExpanded;
    }
}