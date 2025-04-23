import { isPlatformBrowser, NgClass } from '@angular/common';
import { Component, Inject, inject, OnInit, PLATFORM_ID, signal } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContactFacade } from '@pages/contact-us/facades/contact.facade';

@Component({
  selector: 'app-contact-us',
  imports: [ FormsModule, ReactiveFormsModule, NgClass ],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent implements OnInit {

  contactFacade = inject(ContactFacade);

  constructor(@Inject(PLATFORM_ID) private platformId: any) {}

  contactUsFormGroup: any;
  phoneNumberMaxLength: number = 20;

  messageSent = signal<boolean | null>(null);
  isSending = signal<boolean>(false);

  ngOnInit(): void {
    this.contactUsFormGroup = new FormGroup({
      'fullname': new FormControl('', [Validators.required]),
      'email': new FormControl('', [Validators.email, Validators.required]),
      'phone': new FormControl('', [Validators.required, Validators.maxLength(this.phoneNumberMaxLength)]),
      'industry': new FormControl('', [Validators.required]),
      'details': new FormControl('', [Validators.required]),
      'acceptTerms': new FormControl('', [Validators.requiredTrue])
    })
  }

  submit(): void{

    const messageSetTimeout: number = 5;
    const formData = new FormData();

    let fullname = this.contactUsFormGroup.get('fullname').value,
        email = this.contactUsFormGroup.get('email').value,
        phone = this.contactUsFormGroup.get('phone').value,
        industry = this.contactUsFormGroup.get('industry').value,
        details = this.contactUsFormGroup.get('details').value

    let subject = 'Prestação de Serviços';
    let message = details;

    formData.append('name', fullname);
    formData.append('email', email);
    formData.append('subject', subject);
    formData.append('phone', phone);
    formData.append('industry', industry);
    formData.append('message', message);

    this.isSending.set(true);
    this.contactFacade.send(formData).subscribe({
      next: (response: any) => {
        this.isSending.set(false);
        this.messageSent.set(true);
        this.contactUsFormGroup.reset();
        if(!isPlatformBrowser(this.platformId)) return;
        setTimeout(() => {
          this.messageSent.set(null);
        }, messageSetTimeout * 1000);
      },
      error: (error:any) => {
        this.isSending.set(false);
        this.messageSent.set(false);
        if(!isPlatformBrowser(this.platformId)) return;
        setTimeout(() => {
          this.messageSent.set(null);
        }, messageSetTimeout * 1000);
      }
    });

  }

}
