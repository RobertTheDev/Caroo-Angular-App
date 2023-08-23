import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent {
  // Use the angular form builder.
  constructor(private fb: FormBuilder) {}

  // Login form to handle sign up fields.
  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
  });

  // Helper function to access sign up form controls.
  get formControls() {
    return this.loginForm.controls;
  }

  // Handle login after fields are compelete and form submission.
  handleLogin() {
    // If profile form is valid.
    if (this.loginForm.valid) {
      alert(
        'Form submitted successfully:\n' + JSON.stringify(this.loginForm.value),
      );
    }
    // If login form is invalid.
    else {
      alert('Please correct the errors in the form.');
    }
  }
}
