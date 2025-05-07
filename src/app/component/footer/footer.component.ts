import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service'; // Import the MenuService

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  isVisible = true; // Control visibility

  constructor(private menuService: MenuService) {} // Inject the MenuService

  ngOnInit(): void {
    // Subscribe to menu state changes
    this.menuService.isMenuOpen$.subscribe((isOpen) => {
      this.isVisible = !isOpen; // Hide footer when menu is open, show when closed
    });
  }
}