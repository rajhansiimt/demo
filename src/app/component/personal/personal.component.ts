import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ContactService } from 'src/app/services/contact.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {
  environment =environment;
  isVisible = true;
  pageData: any = {}; // yahan sara data aayega

  constructor(
    private menuService: MenuService,
    private contactService: ContactService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    // Menu Service
    this.menuService.isMenuOpen$.subscribe((isOpen) => {
      this.isVisible = !isOpen;
    });

    // Personal Data Service
    this.fetchPersonalData();
  }

  fetchPersonalData(): void {
    this.contactService.getpersional().subscribe(
      (response) => {
        if (response && response.data && response.data.length > 0) {
          const item = response.data[0];

          this.pageData = {
            // mainImage: this.sanitizeUrl(item.mainImage),
            // subImage: this.sanitizeUrl(item.subImage),
            mainImage: item.mainImage,
            subImage: item.subImage,
            
            titleMain: item.titlemain,
            titleSub: item.titlesub,
            description: item.description,
            interviewTitle: item.interviewtitle,
            interviewQuote: item.interviewQuote
          };
        }
      },
      (error) => {
        console.error('Error fetching personal data', error);
      }
    );
  }

  sanitizeUrl(url: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }
}
