import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';
import { MenuService } from 'src/app/services/menu.service';
import { environment } from 'src/environments/environment';

interface FashionItem {
  title: string;
  image: string;
  likes: number;
  comments: string[];
  showCommentBox: boolean;
  newComment: string;
}

@Component({
  selector: 'app-beauty',
  templateUrl: './beauty.component.html',
  styleUrls: ['./beauty.component.css']
})
export class BeautyComponent implements OnInit {
  environment =environment;
  isModalOpen: boolean = false;
  currentIndex: number = 0;
  selectedImage: string | null = null;
  isVisible = true;
  pageDescription: string = "Discover the latest trends and styles from our curated beauty collection. Find the perfect look for every occasion!";
  fashionItems: any[] = [];

  // Array holding all image URLs and associated data

//   fashionItems:FashionItem[]= [
//     {
//       title: 'Fashion Image 2',
//       image: 'https://images.pexels.com/photos/814372/pexels-photo-814372.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
//       likes: 0,
//       comments: [],
//       showCommentBox: false,
//       newComment: ''
    
//     },
//     {
//       title: 'Fashion Image 2',
//       image: 'https://images.pexels.com/photos/814372/pexels-photo-814372.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
//       likes: 0,
//       comments: [],
//       showCommentBox: false,
//       newComment: ''
    
//     },
//     {
//       title: 'Fashion Image 2',
//       image: 'https://images.pexels.com/photos/814372/pexels-photo-814372.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
//       likes: 0,
//       comments: [],
//       showCommentBox: false,
//       newComment: ''
    
//     },
//     {
//       title: 'Fashion Image 2',
//       image: 'https://images.pexels.com/photos/814372/pexels-photo-814372.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
//       likes: 0,
//       comments: [],
//       showCommentBox: false,
//       newComment: ''
    
//     },
//     {
//       title: 'Fashion Image 2',
//       image: 'https://images.pexels.com/photos/814372/pexels-photo-814372.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
//       likes: 0,
//       comments: [],
//       showCommentBox: false,
//       newComment: ''
    
//     },
//     {
//       title: 'Fashion Image 2',
//       image: 'https://images.pexels.com/photos/814372/pexels-photo-814372.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
//       likes: 0,
//       comments: [],
//       showCommentBox: false,
//       newComment: ''
    
//     },
//     {
//       title: 'Fashion Image 2',
//       image: 'https://images.pexels.com/photos/814372/pexels-photo-814372.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
//       likes: 0,
//       comments: [],
//       showCommentBox: false,
//       newComment: ''
    
//     },
//     {
//       title: 'Fashion Image 2',
//       image: 'https://images.pexels.com/photos/814372/pexels-photo-814372.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
//       likes: 0,
//       comments: [],
//       showCommentBox: false,
//       newComment: ''
    
//     },
//     {
//       title: 'Fashion Image 2',
//       image: 'https://images.pexels.com/photos/814372/pexels-photo-814372.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
//       likes: 0,
//       comments: [],
//       showCommentBox: false,
//       newComment: ''
    
//     },
//     {
//       title: 'Fashion Image 2',
//       image: 'https://images.pexels.com/photos/814372/pexels-photo-814372.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
//       likes: 0,
//       comments: [],
//       showCommentBox: false,
//       newComment: ''
    
//     },
//     {
//       title: 'Fashion Image 2',
//       image: 'https://images.pexels.com/photos/814372/pexels-photo-814372.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
//       likes: 0,
//       comments: [],
//       showCommentBox: false,
//       newComment: ''
    
//     },
//     {
//       title: 'Fashion Image 2',
//       image: 'https://images.pexels.com/photos/814372/pexels-photo-814372.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
//       likes: 0,
//       comments: [],
//       showCommentBox: false,
//       newComment: ''
    
//     },
//     {
//       title: 'Fashion Image 2',
//       image: 'https://images.pexels.com/photos/814372/pexels-photo-814372.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
//       likes: 0,
//       comments: [],
//       showCommentBox: false,
//       newComment: ''
    
//     },
    
//  ]
  // fashionItems: FashionItem[] = [
  //   { 
  //     title: 'Beauty Image 1',
  //     image: '../../../assets/images/beauty1.jpg',
  //     likes: 0,
  //     comments: [],
  //     showCommentBox: false,
  //     newComment: ''
  //   },
  //   { 
  //     title: 'Beauty Image 2',
  //     image: '../../../assets/images/beauty2.jpg',
  //     likes: 0,
  //     comments: [],
  //     showCommentBox: false,
  //     newComment: ''
  //   },
  //   { 
  //     title: 'Beauty Image 3',
  //     image: '../../../assets/images/beauty3.jpg',
  //     likes: 0,
  //     comments: [],
  //     showCommentBox: false,
  //     newComment: ''
  //   },
  //   { 
  //     title: 'Beauty Image 4',
  //     image: '../../../assets/images/beauty4.jpg',
  //     likes: 0,
  //     comments: [],
  //     showCommentBox: false,
  //     newComment: ''
  //   },
  //   { 
  //     title: 'Beauty Image 5',
  //     image: '../../../assets/images/beauty5.jpg',
  //     likes: 0,
  //     comments: [],
  //     showCommentBox: false,
  //     newComment: ''
  //   },
  //   { 
  //     title: 'Beauty Image 6',
  //     image: '../../../assets/images/beauty6.jpg',
  //     likes: 0,
  //     comments: [],
  //     showCommentBox: false,
  //     newComment: ''
  //   },
  //   { 
  //     title: 'Beauty Image 7',
  //     image: '../../../assets/images/beauty7.jpg',
  //     likes: 0,
  //     comments: [],
  //     showCommentBox: false,
  //     newComment: ''
  //   },
  //   { 
  //     title: 'Beauty Image 8',
  //     image: '../../../assets/images/beauty8.jpg',
  //     likes: 0,
  //     comments: [],
  //     showCommentBox: false,
  //     newComment: ''
  //   },
  //   { 
  //     title: 'Beauty Image 9',
  //     image: '../../../assets/images/beauty9.jpg',
  //     likes: 0,
  //     comments: [],
  //     showCommentBox: false,
  //     newComment: ''
  //   },
  //   { 
  //     title: 'Beauty Image 10',
  //     image: '../../../assets/images/beauty10.jpg',
  //     likes: 0,
  //     comments: [],
  //     showCommentBox: false,
  //     newComment: ''
  //   },
  //   { 
  //     title: 'Beauty Image 1',
  //     image: '../../../assets/images/beauty11.jpg',
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
    this.contactService.getBeauty().subscribe({
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
