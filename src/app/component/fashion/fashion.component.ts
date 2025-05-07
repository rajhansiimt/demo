import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';
import { MenuService } from 'src/app/services/menu.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-fashion',
  templateUrl: './fashion.component.html',
  styleUrls: ['./fashion.component.css']
})
export class FashionComponent implements OnInit {
  environment =environment;
  isModalOpen: boolean = false;
  currentIndex: number = 0;
  selectedImage: string | null = null;
  isVisible = true;
  pageDescription: string = "Discover the latest trends and styles from our curated beauty collection. Find the perfect look for every occasion!";

  fashionItems: any[] = [];

  // fashionItems = [
  //   { title: 'Fashion Image 1', image: '../../../assets/images/fashion1.jpg' },
  //   { title: 'Fashion Image 2', image: '../../../assets/images/fashion2.jpg' },
  //   { title: 'Fashion Image 3', image: '../../../assets/images/fashion3.jpg' },
  //   { title: 'Fashion Image 4', image: '../../../assets/images/fashion4.jpg' },
  //   { title: 'Fashion Image 5', image: '../../../assets/images/fashion5.jpg' },
  //   { title: 'Fashion Image 6', image: '../../../assets/images/fashion6.jpg' },
  //   { title: 'Fashion Image 7', image: '../../../assets/images/fashion7.jpg' },
  //   { title: 'Fashion Image 8', image: '../../../assets/images/fashion8.jpg' },
  //   { title: 'Fashion Image 9', image: '../../../assets/images/fashion9.jpg' },
  //   { title: 'Fashion Image 10', image: '../../../assets/images/fashion10.jpg' },
  //   { title: 'Fashion Image 11', image: '../../../assets/images/fashion11.jpg' },
  //   { title: 'Fashion Image 12', image: '../../../assets/images/fashion12.jpg' },
  //   { title: 'Fashion Image 13', image: '../../../assets/images/fashion13.jpg' },
  //   { title: 'Fashion Image 14', image: '../../../assets/images/fashion14.jpg' },
  //   { title: 'Fashion Image 15', image: '../../../assets/images/fashion15.jpg' }
  // ];

  constructor(private menuService: MenuService , private contactService: ContactService ) {}

  ngOnInit(): void {
    this.menuService.isMenuOpen$.subscribe((isOpen) => {
      this.isVisible = !isOpen;
    });

    this.getFashionData(); // Call API here
  }

  
  getFashionData() {
    this.contactService.getFashion().subscribe({
      next: (data) => {
        this.fashionItems = data?.aboutUs || []; // Assign only the 'aboutUs' array
      },
      error: (err) => {
        console.error('Error fetching fashion items', err);
      }
    });
  }
  

  openModal(index: number) {
    this.currentIndex = index;
    this.selectedImage = this.fashionItems[this.currentIndex].image;
  }
  

  closeModal() {
    this.selectedImage = null;
  }

  prevImage(event: Event) {
    event.stopPropagation();
    this.currentIndex = (this.currentIndex - 1 + this.fashionItems.length) % this.fashionItems.length;
    this.selectedImage = this.fashionItems[this.currentIndex].image;
  }

  nextImage(event: Event) {
    event.stopPropagation();  
    this.currentIndex = (this.currentIndex + 1) % this.fashionItems.length;
    this.selectedImage = this.fashionItems[this.currentIndex].image;
  }
} 
