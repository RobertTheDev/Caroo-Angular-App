import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
})
export class SignUpFormComponent {
  // Use the angular form builder.
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
  ) {}

  // Sign up form to handle sign up fields.
  signUpForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(8)]],
  });

  // Helper function to access sign up form controls.
  get formControls() {
    return this.signUpForm.controls;
  }

  // Handle sign up after fields are compelete and form submission.
  handleSignUp() {
    // If profile form is valid.
    if (this.signUpForm.valid) {
      const data = this.signUpForm.value;

      return this.authService.signUp(data).subscribe({
        next: (data) => {
          console.log(data);
          window.location.reload();
        },
        error: (error) => console.error(error),
      });
    }
    // If profile form is invalid.
    else {
      return alert('Please correct the errors in the form.');
    }
  }
}
