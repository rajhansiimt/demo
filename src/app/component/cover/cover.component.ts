import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';
import { MenuService } from 'src/app/services/menu.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.css']
})
export class CoverComponent implements OnInit {

  environment =environment;
  isModalOpen: boolean = false;
  currentIndex: number = 0;
  selectedImage: string | null = null;  
  isVisible = true;
  isZoomed: boolean = false;
  pageDescription: string = "Discover the latest trends and styles from our curated beauty collection. Find the perfect look for every occasion!";
  fashionItems: any[] = [];

  // fashionItems=[
  //   {
  //     title: 'Fashion Image 2',
  //     image: 'https://images.pexels.com/photos/814372/pexels-photo-814372.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
  //     likes: 0,
  //     comments: [],
  //     showCommentBox: false,
  //     newComment: ''
  //   },
  //   {
  //     title: 'Fashion Image 2',
  //     image: 'https://images.pexels.com/photos/814372/pexels-photo-814372.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
  //     likes: 0,
  //     comments: [],
  //     showCommentBox: false,
  //     newComment: ''
  //   },
  //   {
  //     title: 'Fashion Image 2',
  //     image: 'https://images.pexels.com/photos/814372/pexels-photo-814372.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
  //     likes: 0,
  //     comments: [],
  //     showCommentBox: false,
  //     newComment: ''
  //   },

  //    {
  //     title: 'Fashion Image 2',
  //     image: 'https://images.pexels.com/photos/814372/pexels-photo-814372.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
  //     likes: 0,
  //     comments: [],
  //     showCommentBox: false,
  //     newComment: ''
  //   },
  //   {
  //     title: 'Fashion Image 2',
  //     image: 'https://images.pexels.com/photos/814372/pexels-photo-814372.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
  //     likes: 0,
  //     comments: [],
  //     showCommentBox: false,
  //     newComment: ''
  //   },
  //   {
  //     title: 'Fashion Image 2',
  //     image: 'https://images.pexels.com/photos/814372/pexels-photo-814372.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
  //     likes: 0,
  //     comments: [],
  //     showCommentBox: false,
  //     newComment: ''
  //   }, {
  //     title: 'Fashion Image 2',
  //     image: 'https://images.pexels.com/photos/814372/pexels-photo-814372.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
  //     likes: 0,
  //     comments: [],
  //     showCommentBox: false,
  //     newComment: ''
  //   },
  //   {
  //     title: 'Fashion Image 2',
  //     image: 'https://images.pexels.com/photos/814372/pexels-photo-814372.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
  //     likes: 0,
  //     comments: [],
  //     showCommentBox: false,
  //     newComment: ''
  //   },

  //    {
  //     title: 'Fashion Image 2',
  //     image: 'https://images.pexels.com/photos/814372/pexels-photo-814372.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
  //     likes: 0,
  //     comments: [],
  //     showCommentBox: false,
  //     newComment: ''
    
  //   },
  //   {
  //     title: 'Fashion Image 2',
  //     image: 'https://images.pexels.com/photos/814372/pexels-photo-814372.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
  //     likes: 0,
  //     comments: [],
  //     showCommentBox: false,
  //     newComment: ''
    
  //   },
  //   {
  //     title: 'Fashion Image 2',
  //     image: 'https://images.pexels.com/photos/814372/pexels-photo-814372.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
  //     likes: 0,
  //     comments: [],
  //     showCommentBox: false,
  //     newComment: ''
    
  //   },
  //   {
  //     title: 'Fashion Image 2',
  //     image: 'https://images.pexels.com/photos/814372/pexels-photo-814372.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
  //     likes: 0,
  //     comments: [],
  //     showCommentBox: false,
  //     newComment: ''
    
  //   },
  //   {
  //     title: 'Fashion Image 2',
  //     image: 'https://images.pexels.com/photos/814372/pexels-photo-814372.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
  //     likes: 0,
  //     comments: [],
  //     showCommentBox: false,
  //     newComment: ''
    
  //   },
  //   {
  //     title: 'Fashion Image 2',
  //     image: 'https://images.pexels.com/photos/814372/pexels-photo-814372.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
  //     likes: 0,
  //     comments: [],
  //     showCommentBox: false,
  //     newComment: ''
    
  //   },
    
    
  // ]

  // fashionItems = [
  //   {
  //     title: 'Fashion Image 1',
  //     image: '../../../assets/images/personal 2.jpg',
  //     likes: 0,
  //     comments: [],
  //     showCommentBox: false,
  //     newComment: ''
  //   },
  //   {
  //     title: 'Fashion Image 2',
  //     image: '../../../assets/images/personal 3.jpg',
  //     likes: 0,
  //     comments: [],
  //     showCommentBox: false,
  //     newComment: ''
  //   },
  //   {
  //     title: 'Fashion Image 3',
  //     image: '../../../assets/images/personal 4.jpg',
  //     likes: 0,
  //     comments: [],
  //     showCommentBox: false,
  //     newComment: ''
  //   },
  //   {
  //     title: 'Fashion Image 4',
  //     image: '../../../assets/images/personal 5.jpg',
  //     likes: 0,
  //     comments: [],
  //     showCommentBox: false,
  //     newComment: ''
  //   },
  //   {
  //     title: 'Fashion Image 5',
  //     image: '../../../assets/images/personal 6.jpg',
  //     likes: 0,
  //     comments: [],
  //     showCommentBox: false,
  //     newComment: ''
  //   },
  //   {
  //     title: 'Fashion Image 6',
  //     image: '../../../assets/images/personal 7.jpg',
  //     likes: 0,
  //     comments: [],
  //     showCommentBox: false,
  //     newComment: ''
  //   },
  //   {
  //     title: 'Fashion Image 7',
  //     image: '../../../assets/images/personal 8.jpg',
  //     likes: 0,
  //     comments: [],
  //     showCommentBox: false,
  //     newComment: ''
  //   },
  //   {
  //     title: 'Fashion Image 8',
  //     image: '../../../assets/images/personal 9.jpg',
  //     likes: 0,
  //     comments: [],
  //     showCommentBox: false,
  //     newComment: ''
  //   },
  //   {
  //     title: 'Fashion Image 9',
  //     image: '../../../assets/images/personal 10.jpg',
  //     likes: 0,
  //     comments: [],
  //     showCommentBox: false,
  //     newComment: ''
  //   },
  //   {
  //     title: 'Fashion Image 10',
  //     image: '../../../assets/images/personal 11.jpg',
  //     likes: 0,
  //     comments: [],
  //     showCommentBox: false,
  //     newComment: ''
  //   },
  //   {
  //     title: 'Fashion Image 1',
  //     image: '../../../assets/images/personal 12.jpg',
  //     likes: 0,
  //     comments: [],
  //     showCommentBox: false,
  //     newComment: ''
  //   },
  //   {
  //     title: 'Fashion Image 2',
  //     image: '../../../assets/images/personal 13.jpg',
  //     likes: 0,
  //     comments: [],
  //     showCommentBox: false,
  //     newComment: ''
  //   },
  //   {
  //     title: 'Fashion Image 1',
  //     image: '../../../assets/images/personal 14.jpg',
  //     likes: 0,
  //     comments: [],
  //     showCommentBox: false,
  //     newComment: ''
  //   },
  //   {
  //     title: 'Fashion Image 2',
  //     image: '../../../assets/images/personal 15.jpg',
  //     likes: 0,
  //     comments: [],
  //     showCommentBox: false,
  //     newComment: ''
  //   },
  //   {
  //     title: 'Fashion Image 1',
  //     image: '../../../assets/images/personal 16.jpg',
  //     likes: 0,
  //     comments: [],
  //     showCommentBox: false,
  //     newComment: ''
  //   },
  //   {
  //     title: 'Fashion Image 2',
  //     image: '../../../assets/images/personal 17.jpg',
  //     likes: 0,
  //     comments: [],
  //     showCommentBox: false,
  //     newComment: ''
  //   },
  //   {
  //     title: 'Fashion Image 1',
  //     image: '../../../assets/images/personal 18.jpg',
  //     likes: 0,
  //     comments: [],
  //     showCommentBox: false,
  //     newComment: ''
  //   },
  //   {
  //     title: 'Fashion Image 2',
  //     image: '../../../assets/images/personal 19.jpg',
  //     likes: 0,
  //     comments: [],
  //     showCommentBox: false,
  //     newComment: ''
  //   },
  //   {
  //     title: 'Fashion Image 1',
  //     image: '../../../assets/images/personal 20.jpg',
  //     likes: 0,
  //     comments: [],
  //     showCommentBox: false,
  //     newComment: ''
  //   },
  // ];

 
  constructor(private menuService: MenuService, private contactService:ContactService) {}

  ngOnInit(): void {
    this.menuService.isMenuOpen$.subscribe((isOpen) => {
      this.isVisible = !isOpen;
    });

    this.getFashionData(); // Call API here
  }

  getFashionData() {
    this.contactService.getCover().subscribe({
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
