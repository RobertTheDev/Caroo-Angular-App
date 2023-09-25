import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
})
export class LoginFormComponent {
  constructor(
    // Angular form builder is used to build forms in Angular with less code.
    private formBuilder: FormBuilder,
    // Calls our auth service to get access to our auth function helpers.
    private authService: AuthService,
    // Angular router used for routing and navigation in the app.
    private router: Router,
  ) {}

  // Variables are used for handling form states - submitted, loading and errors.
  formErrorMessage: string | null = null;
  formLoading = false;
  formSubmitted = false;

  // Defines the form fields with their validators.
  loginForm = this.formBuilder.group({
    emailAddress: [
      '',
      [
        // Email address cannnot be empty and must be in valid email format.
        Validators.required,
        Validators.email,
      ],
    ],
    password: [
      '',
      [
        // Password cannnot be empty.
        Validators.required,
        // Password must be at least eight characters in length.
        Validators.minLength(8),
      ],
    ],
  });

  // Get access to the the form controls to be used in validation messagin in HTML.
  get formControls() {
    return this.loginForm.controls;
  }

  // Login function calls the sign up handler from our auth service to handle user login.
  // The function handles validation and wont submit until fields are valid.
  // The function handles errors and displays error response messages.
  handleLogin(): Subscription | undefined {
    // When function is called set form submitted to true and error message to null.
    this.formSubmitted = true;
    this.formErrorMessage = null;

    // If form is invalid do not continue and return nothing.
    if (this.loginForm.invalid) {
      return;
    }
    // Get the value data from the login form.
    const { value } = this.loginForm;

    // Start loading while form is being processed.
    this.formLoading = true;

    return this.authService.logIn(value).subscribe({
      // If form has successfully handled login - stop the form loading and navigate to home page.
      next: (data) => {
        console.log(data);
        this.formLoading = false;
        this.router.navigate(['/']);
      },
      // If an error contain the error message in the variable. Stop form loading.
      error: (error) => {
        console.log(error.error);
        this.formLoading = false;
        this.formErrorMessage = error.error.statusMessage;
      },
    });
  }
}
