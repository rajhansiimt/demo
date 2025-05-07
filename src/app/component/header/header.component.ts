import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isFixed = false;
  adminName: string | null = null;
  isMenuOpen = false;

  constructor(public menuService: MenuService,private router: Router) {} // Make the service public

  ngOnInit(): void {}

  toggleMenu() {
    this.menuService.toggleMenu();
  }

  navigateAndCloseMenu(route: string) {
    this.menuService.closeMenu(); // Close the menu
    this.router.navigate([route]); // Navigate to the route
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.isFixed = scrollPosition > 100;
  } 
} 