import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { PhoneValidator } from './phone.validator';
import countriesByCode from './countries';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

/** @title Input with a custom ErrorStateMatcher */
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  countries = countriesByCode;

  contactFormGroup: any;

  /* FormControl is a class that powers an individual form control, tracks the value and validation status, whilst offering a wide set of public API methods */
  firstNameFormControl = new FormControl('', [Validators.required]);

  lastNameFormControl = new FormControl('', [Validators.required]);

  cityFormControl = new FormControl('', [Validators.required]);

  stateFormControl = new FormControl('', [Validators.required]);

  countryFormControl = new FormControl('', [Validators.required]);

  organizationFormControl = new FormControl('', [Validators.required]);

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email
  ]);  

  phoneFormControl = new FormControl('', Validators.compose([
    Validators.required,
    // PhoneValidator.validCountryPhone(this.countryFormControl)
  ]));

  commentFormControl = new FormControl('', [Validators.required]);

  matcher = new MyErrorStateMatcher();

  constructor() { }

  ngOnInit() {
    this.contactFormGroup = new FormGroup({
      'firstName': this.firstNameFormControl,
      'lastName': this.lastNameFormControl,
      'city': this.cityFormControl,
      'state': this.stateFormControl,
      'country': this.countryFormControl,
      'organization': this.organizationFormControl,
      'email': this.emailFormControl,
      'phone': this.phoneFormControl,
      'comment': this.commentFormControl
    });

    /* set US as default country */
    const setCountry = this.countries.find(c => c.code === 'US');
    this.contactFormGroup.get('country').setValue(setCountry.code);
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log('on submit: ', this.contactFormGroup.value);
  }

}
