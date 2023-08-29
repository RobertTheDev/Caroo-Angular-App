import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent {
  // Use the angular form builder.
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
  ) {}

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
      const data = this.loginForm.value;

      return this.authService.logIn(data).subscribe({
        next: (user) => {
          console.log('user', user);
          window.location.reload();
        },
        error: (error) => console.error(error.error.error),
      });
    }
    // If profile form is invalid.
    else {
      return alert('Please correct the errors in the form.');
    }
  }
}
