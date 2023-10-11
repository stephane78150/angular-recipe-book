import { Component } from '@angular/core';
import { Menu } from './shared/app.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public selectedMenu: Menu | null = null; 

  public SelectMenu(menu: Menu) {
    this.selectedMenu = menu;
  }
}
