import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { ErrorStateMatcher } from '@angular/material/core';
import { DataService } from './../../services/data.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import * as moment from 'moment';

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
export class ContactComponent implements OnInit, AfterViewChecked {

  countries = countriesByCode;
  contactFormGroup: any;
  messageSuccess: boolean;
  messageError: boolean;
  today = moment().format('dddd, MMMM Do YYYY');

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
  ]));
  commentFormControl = new FormControl('', [Validators.required]);

  matcher = new MyErrorStateMatcher();

  constructor(private dataservice: DataService, public snackBar: MatSnackBar, private spinnerService: Ng4LoadingSpinnerService) { }

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

  ngAfterViewChecked(): void {
    /* target mat-card underline and change color to black */
    
           
}       

  onSubmit() {
    this.spinnerService.show();
    // TODO: Use EventEmitter with form value
    const contactFormObj = {
      ...this.contactFormGroup.value,
      date: this.today
    };

    this.dataservice.sendCommentForm(contactFormObj).subscribe(
      // success
      () => {
        this.openSnackBar('Thank you for your interest!', '');
      },
      // fail
      () => {
        this.openSnackBar('Your letter was not delivered.', 'Please resend.');
      }
    );
  }

  openSnackBar(message: string, action: string) {
    this.spinnerService.hide();
    this.snackBar.open(message, action, {
      duration: 3000,
    });
  }


}
