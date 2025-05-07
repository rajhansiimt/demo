import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MenuService } from 'src/app/services/menu.service';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  submitted = false;
  contactForm!: FormGroup;
  isVisible = true; // Control visibility

  constructor(private menuService: MenuService,
              private fb: FormBuilder,
              private contactService: ContactService) {}

  ngOnInit(): void {
    // Subscribe to menu state changes
    this.menuService.isMenuOpen$.subscribe((isOpen) => {
      this.isVisible = !isOpen; // Hide/show based on menu state
    });
    this.initializeform();
  }

  initializeform(): void {
    this.contactForm = this.fb.group({
      FirstName: ['', [Validators.required, Validators.minLength(3)]],
      LastName: ['', []],
      phoneNumber: ['', []],
      email: ['', [Validators.required, Validators.email]],
      address: ['', []],
      Message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  onSubmit(): void {
    this.submitted = true;
    this.contactForm.markAllAsTouched();

    if (this.contactForm.valid) {
      const payload = this.contactForm.value;
    
      this.contactService.addContactForm(payload).subscribe({
        next: (response) => {
          this.contactForm.reset();
          console.log('Form submitted successfully', response);
        },
        error: (error) => {
          console.error('Form submission failed', error);
        }
      });
    }    
  }
}
