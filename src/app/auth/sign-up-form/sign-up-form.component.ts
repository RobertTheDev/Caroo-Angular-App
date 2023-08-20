import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css'],
})
export class SignUpFormComponent {
  // Use the angular form builder.
  constructor(private fb: FormBuilder) {}

  // Sign up form to handle sign up fields.
  profileForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(8)]],
  });

  // Helper function to access sign up form controls.
  get formControls() {
    return this.profileForm.controls;
  }

  // Handle sign up after fields are compelete and form submission.
  handleSignUp() {
    // If profile form is valid.
    if (this.profileForm.valid) {
      alert(
        'Form submitted successfully:\n' +
          JSON.stringify(this.profileForm.value),
      );
    }
    // If profile form is invalid.
    else {
      alert('Please correct the errors in the form.');
    }
  }
}
