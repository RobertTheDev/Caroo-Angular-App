import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-send-password-reset-form',
  templateUrl: './send-password-reset-form.component.html',
})
export class SendPasswordResetFormComponent {
  constructor(
    // Angular form builder is used to build forms in Angular with less code.
    private formBuilder: FormBuilder,
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
      ],
    ],
  });

  // Get access to the the form controls to be used in validation messagin in HTML.
  get formControls() {
    return this.sendPasswordResetForm.controls;
  }

  // Login function calls the sign up handler from our auth service to handle user login.
  // The function handles validation and wont submit until fields are valid.
  // The function handles errors and displays error response messages.
  handleSendPasswordReset() {
    // When function is called set form submitted to true and error message to null.
    this.formSubmitted = true;
    this.formErrorMessage = null;

    // If form is invalid do not continue and return nothing.
    if (this.sendPasswordResetForm.invalid) {
      return;
    }
    // Get the value data from the login form.
    const { value } = this.sendPasswordResetForm;

    alert(JSON.stringify(value));
  }
}
