import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';
import { HttpService } from 'src/app/services/http.service'; // Assuming this is the service to make HTTP calls
import { ContactService } from 'src/app/services/contact.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    environment =environment;
  @ViewChild('backgroundVideo') videoElement!: ElementRef<HTMLVideoElement>;
  isModalOpen: boolean = false;
  currentImage: any = null;
  currentIndex: number = 0;
  pageDescription: string = "Discover the latest trends and styles from our curated beauty collection. Find the perfect look for every occasion!";
  currentBannerIndex = 0;
  bannerInterval: any;
  isVisible = true;
  fashionItems: any[] = []; // Will store fashion items fetched from the service
  videoSource: string = ""; // Store video source URL from the service

  constructor(
    private menuService: MenuService,
    private contactService: ContactService  // Inject HttpService
  ) {}

  ngOnInit(): void {
    this.menuService.isMenuOpen$.subscribe((isOpen) => {
      this.isVisible = !isOpen;
    });

    // Fetch the home data
    this.getHomeData();

    // Fetch the video data
    this.getVideoData();
  }

  ngAfterViewInit() {
    if (this.videoElement?.nativeElement) {
      this.videoElement.nativeElement.muted = true; 
    }
  }

  ngOnDestroy() {
    clearInterval(this.bannerInterval);
  }

  // Fetch home data (e.g., fashion items)
  getHomeData(): void {
    this.contactService.gethome().subscribe(
      (data) => {
        // Assuming data contains the fashion items in an array
        this.fashionItems = data.aboutUs || [];
      },
      (error) => {
        console.error("Error fetching home data:", error);
      }
    );
  }

  getVideoData(): void {
    this.contactService.getvedio().subscribe(
      (data) => {
        this.videoSource = data.vedioUs[0]?.video || '';
      },
      (error) => {
        console.error("Error fetching video data:", error);
      }
    );
  }

  openModal(item: any): void {
    this.isModalOpen = true;
    this.currentImage = item;
    this.currentIndex = this.fashionItems.indexOf(item);
  }

  closeModal(): void {
    this.isModalOpen = false;
  }

  prevImage(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.fashionItems.length - 1;
    }
    this.currentImage = this.fashionItems[this.currentIndex];
  }

  nextImage(): void {
    if (this.currentIndex < this.fashionItems.length - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0;
    }
    this.currentImage = this.fashionItems[this.currentIndex];
  }
}
