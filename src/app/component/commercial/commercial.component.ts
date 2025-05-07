import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';
import { MenuService } from 'src/app/services/menu.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-commercial',
  templateUrl: './commercial.component.html',
  styleUrls: ['./commercial.component.css']
})
export class CommercialComponent implements OnInit {
  environment =environment;
  isModalOpen: boolean = false;
  currentIndex: number = 0;
  selectedImage: string | null = null;
  isVisible = true;
  fashionItems: any[] = [];
  pageDescription: string = "Discover the latest trends and styles from our curated beauty collection. Find the perfect look for every occasion!";

  // fashionItems = [

    // { title: 'Stylish Coat', image: 'https://images.pexels.com/photos/814372/pexels-photo-814372.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260' },
    // { title: 'Stylish Coat', image: 'https://images.pexels.com/photos/814372/pexels-photo-814372.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260' },

    // { title: 'Stylish Coat', image: 'https://images.pexels.com/photos/814372/pexels-photo-814372.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260' },

    // { title: 'Stylish Coat', image: 'https://images.pexels.com/photos/814372/pexels-photo-814372.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260' },

    // { title: 'Stylish Coat', image: 'https://images.pexels.com/photos/814372/pexels-photo-814372.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260' },

    // { title: 'Stylish Coat', image: 'https://images.pexels.com/photos/814372/pexels-photo-814372.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260' },

    // { title: 'Stylish Coat', image: 'https://images.pexels.com/photos/814372/pexels-photo-814372.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260' },

    // { title: 'Stylish Coat', image: 'https://images.pexels.com/photos/814372/pexels-photo-814372.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260' },

    // { title: 'Stylish Coat', image: 'https://images.pexels.com/photos/814372/pexels-photo-814372.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260' },

    // { title: 'Stylish Coat', image: 'https://images.pexels.com/photos/814372/pexels-photo-814372.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260' },

    // { title: 'Stylish Coat', image: 'https://images.pexels.com/photos/814372/pexels-photo-814372.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260' },

    // { title: 'Stylish Coat', image: 'https://images.pexels.com/photos/814372/pexels-photo-814372.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260' },

    // { title: 'Stylish Coat', image: 'https://images.pexels.com/photos/814372/pexels-photo-814372.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260' },
    // { title: 'Stylish Coat', image: 'https://images.pexels.com/photos/814372/pexels-photo-814372.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260' },

    // { title: 'Stylish Coat', image: 'https://images.pexels.com/photos/814372/pexels-photo-814372.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260' },

    // { title: 'Stylish Coat', image: 'https://images.pexels.com/photos/814372/pexels-photo-814372.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260' },
    // { title: 'Stylish Coat', image: 'https://images.pexels.com/photos/814372/pexels-photo-814372.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260' },

    // { title: 'Stylish Coat', image: 'https://images.pexels.com/photos/814372/pexels-photo-814372.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260' },
    // { title: 'Stylish Coat', image: 'https://images.pexels.com/photos/814372/pexels-photo-814372.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260' },



  //   { title: 'Stylish Coat', image: '../../../assets/images/commercial1.png' },
  //   { title: 'Elegant Evening Dress', image: '../../../assets/images/commercial2.png' },
  //   { title: 'Elegant Evening Dress', image: '../../../assets/images/commercial3.png'},
  //   { title: 'Elegant Evening Dress' , image: '../../../assets/images/commercial4.png'},
  //   { title: 'Elegant Evening Dress' , image: '../../../assets/images/commercial5.png' },
  //   { title: 'Elegant Dress', image: '../../../assets/images/commercial6.png' },
  //   { title: 'Casual Jacket', image: '../../../assets/images/commercial7.png' },
  //   { title: 'Trendy Pants', image: '../../../assets/images/commercial8.png' },
  //   { title: 'Chic Blouse', image: '../../../assets/images/commercial9.png' },
  //   { title: 'Stylish Coat', image: '../../../assets/images/commercial10.png' },
  //   { title: 'Elegant Dress', image: '../../../assets/images/commercial11.png' },
  //   { title: 'Casual Jacket', image: '../../../assets/images/commercial12.png' },
  //   { title: 'Trendy Pants', image: '../../../assets/images/commercial13.png' },
  //   { title: 'Chic Blouse', image: '../../../assets/images/commercial14.png' },
  //   { title: 'Stylish Coat', image: '../../../assets/images/commercial15.png' },
  // ];


 constructor(private menuService: MenuService, private contactService:ContactService) {}
 
   ngOnInit(): void {
     this.menuService.isMenuOpen$.subscribe((isOpen) => {
       this.isVisible = !isOpen;
     });
 
     this.getFashionData(); // Call API here
   }
 
   getFashionData() {
     this.contactService.getCommercial().subscribe({
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
