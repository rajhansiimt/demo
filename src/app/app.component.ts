import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { MenuService } from './services/menu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';
  showFooter = true;
  isMenuOpen = false;

  constructor(private router: Router,public menuService: MenuService) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.showFooter = event.url !== '/' && event.url !== '/home'; 
      }
    });
  }
  toggleMenu(isOpen: boolean) {
    this.isMenuOpen = isOpen;
  }
}
