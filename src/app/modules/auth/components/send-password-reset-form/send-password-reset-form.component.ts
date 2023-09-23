import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-send-password-reset-form',
  templateUrl: './send-password-reset-form.component.html',
})
export class SendPasswordResetFormComponent {
  constructor(
    // Angular form builder is used to build forms in Angular with less code.
    private formBuilder: FormBuilder,
    // Calls our auth service to get access to our auth function helpers.
    private authService: AuthService,
  ) {}

  // Variables are used for handling form states - submitted, loading and errors.
  formErrorMessage: string | null = null;
  formLoading = false;
  formSubmitted = false;

  // Defines the form fields with their validators.
  sendPasswordResetForm = this.formBuilder.group({
    emailAddress: [
      '',
      [
        // Email address cannnot be empty and must be in valid email format.
        Validators.required,
        Validators.email,
      ],
    ],
  });

  // Get access to the the form controls to be used in validation messaging in HTML.
  get formControls() {
    return this.sendPasswordResetForm.controls;
  }

  // Send password reset function calls the send password reset token handler from our auth service to handle sending password reset token.
  // The function handles validation and wont submit until fields are valid.
  // The function handles errors and displays error response messages.
  handleSendPasswordReset(): Subscription | undefined {
    // When function is called set form submitted to true and error message to null.
    this.formSubmitted = true;
    this.formErrorMessage = null;

    // If form is invalid do not continue and return nothing.
    if (this.sendPasswordResetForm.invalid) {
      return;
    }

    // Get the value data the form.
    const { value } = this.sendPasswordResetForm;

    // Start loading while form is being processed.
    this.formLoading = true;

    return this.authService.sendPasswordResetToken(value).subscribe({
      // If form has successfully handled sending password reset - stop the form loading.
      next: () => {
        this.formLoading = false;
      },
      // If an error occurs then contain the error message in the variable. Stop form loading.
      error: (error) => {
        this.formLoading = false;
        this.formErrorMessage = error.error.statusMessage;
      },
    });
  }
}
