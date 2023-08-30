import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password-form',
  templateUrl: './forgot-password-form.component.html',
})
export class ForgotPasswordFormComponent {
  // Use the angular form builder.
  constructor(private fb: FormBuilder) {}

  // Sign up form to handle sign up fields.
  forgotPasswordForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
  });

  // Helper function to access sign up form controls.
  get formControls() {
    return this.forgotPasswordForm.controls;
  }

  // Handle forgot password after fields are compelete and form submission.
  handleForgotPassword() {
    // If form is valid.
    if (this.forgotPasswordForm.valid) {
      alert(
        'Form submitted successfully:\n' +
          JSON.stringify(this.forgotPasswordForm.value),
      );
    }
    // If form is invalid.
    else {
      alert('Please correct the errors in the form.');
    }
  }
}
