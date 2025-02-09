import { Component, Inject, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { DataSharingServiceService } from '../data-sharing-service.service';
import { ChangeDetectorRef } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  private dataSharingService = inject(DataSharingServiceService);
  private cdr = inject(ChangeDetectorRef);
  form = new FormGroup({
    country: new FormControl(''),
    name: new FormControl('', {
      validators: [Validators.required],
    }),
    email: new FormControl('', {
      validators: [Validators.required, Validators.email],
    }),
    phoneNumber: new FormControl('', {
      validators: [Validators.required, Validators.minLength(9)],
    }),
    // password: new FormControl('', {
    //   validators: [Validators.required, Validators.minLength(6)],
    // }),
  });

  // get invalidPassword() {
  //   return (
  //     this.form.controls.password.invalid &&
  //     this.form.controls.password.touched &&
  //     this.form.controls.password.dirty
  //   );
  // }

  countries: string[] = [
    'India',
    'United States',
    'Canada',
    'United Kingdom',
    'Australia',
    'Germany',
    'China',
    'Japan',
    'Brazil',
    'South Africa',
  ];

  checkBox: boolean = false;

  onCheckBox(event: Event): void {
    this.checkBox = (event.target as HTMLInputElement).checked;
  }

  hasNavigated = false;

  constructor(private router: Router) {}

  navigateOnce() {
    if (!this.hasNavigated) {
      this.router.navigate(['/businesses']);
      this.hasNavigated = true;
    }

    const name = this.form.value.name;
    const email = this.form.value.email;

    if (name && email) {
      // Ensure name and email are not null or undefined
      this.dataSharingService.setData(name);
      this.dataSharingService.setUserEmail(email);
    } else {
      console.error('Name or Email is invalid');
    }
  }
}
