import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AccountService } from 'src/app/services/account/account.service';

@Component({
  selector: 'app-send-email-verification-token-form',
  templateUrl: './send-email-verification-token-form.component.html',
})
export class SendEmailVerificationTokenFormComponent {
  constructor(
    // Angular form builder is used to build forms in Angular with less code.
    private formBuilder: FormBuilder,
    // Calls our account service to get access to our account function helpers.
    private accountService: AccountService,
  ) {}

  // Variables are used for handling form states - submitted, loading and errors.
  formErrorMessage: string | null = null;
  formLoading = false;
  formSubmitted = false;

  // Defines the form fields with their validators.
  sendEmailVerificationForm = this.formBuilder.group({
    emailAddress: [
      '',
      [
        // Email address cannnot be empty and must be in valid email format.
        Validators.required,
        Validators.email,
      ],
    ],
  });

  // Get access to the the form controls to be used in validation messagin in HTML.
  get formControls() {
    return this.sendEmailVerificationForm.controls;
  }

  // Login function calls the sign up handler from our auth service to handle user login.
  // The function handles validation and wont submit until fields are valid.
  // The function handles errors and displays error response messages.
  handleSendEmailVerificationToken() {
    // When function is called set form submitted to true and error message to null.
    this.formSubmitted = true;
    this.formErrorMessage = null;

    // If form is invalid do not continue and return nothing.
    if (this.sendEmailVerificationForm.valid) {
      return;
    }
    // Get the value data from the login form.
    const { value } = this.sendEmailVerificationForm;

    // Start loading while form is being processed.
    this.formLoading = true;

    return this.accountService.sendEmailVerificationToken(value).subscribe({
      // If form has successfully handled login - stop the form loading and navigate to home page.
      next: () => {
        this.formLoading = false;
      },
      // If an error contain the error message in the variable. Stop form loading.
      error: (error) => {
        this.formLoading = false;
        this.formErrorMessage = error.error.statusMessage;
      },
    });
  }
}
