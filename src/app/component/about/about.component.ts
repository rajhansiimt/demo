import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';
import { MenuService } from 'src/app/services/menu.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  environment = environment;
  isVisible = true;
  aboutDescription: string = '';
  title: string = '';
  aboutImage: string = ''; // Store the image path

  constructor(
    private menuService: MenuService,
    private contactService: ContactService
  ) {}

  ngOnInit(): void {
    this.subscribeToMenu();
    this.fetchAboutData();
  }

  private subscribeToMenu(): void {
    this.menuService.isMenuOpen$.subscribe((isOpen) => {
      this.isVisible = !isOpen;
    });
  }

  private fetchAboutData(): void {
    this.contactService.getabout().subscribe({
      next: (res) => {
        console.log('About data:', res);
        // Assuming res is an object with 'aboutUs' array
        if (res?.aboutUs && res.aboutUs.length > 0) {
          const aboutData = res.aboutUs[0]; // Access the first item in the array
          this.title = aboutData?.title ?? '';
          this.aboutDescription = aboutData?.description ?? '';
          this.aboutImage = aboutData?.image?.[0] ?? ''; // Get the first image from the array
        }
      },
      error: (err) => {
        console.error('Error fetching about data:', err);
      }
    });
  }

  getExperienceYears(): number {
    const startDate = new Date(2021, 3); // April 2021
    const currentDate = new Date();
    let years = currentDate.getFullYear() - startDate.getFullYear();
    const monthsDiff = currentDate.getMonth() - startDate.getMonth();
    
    if (monthsDiff < 0 || (monthsDiff === 0 && currentDate.getDate() < startDate.getDate())) {
      years--;
    }
    return years;
  }
}
