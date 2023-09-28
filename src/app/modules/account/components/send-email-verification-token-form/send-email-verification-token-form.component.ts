import { Component } from '@angular/core';
import { AccountService } from 'src/app/services/account/account.service';

@Component({
  selector: 'app-send-email-verification-token-form',
  templateUrl: './send-email-verification-token-form.component.html',
})
export class SendEmailVerificationTokenFormComponent {
  constructor(
    // Calls our account service to get access to our account function helpers.
    private accountService: AccountService,
  ) {}

  // Variables are used for handling form states - submitted, loading and errors.
  formErrorMessage: string | null = null;
  formLoading = false;

  // Function to handle sending email verification token
  handleSendEmailVerificationToken(event: Event) {
    event.preventDefault();

    // Start loading while form is being processed.
    this.formLoading = true;

    this.accountService.sendEmailVerificationToken().subscribe({
      // If form has successfully handled sending verification token - stop the form loading.
      next: () => {
        this.formLoading = false;
        this.formErrorMessage = null; // Clear any previous error messages
      },
      // If an error occurs, set the error message and stop form loading.
      error: (error) => {
        this.formLoading = false;
        this.formErrorMessage = error.message; // Assuming error.message contains the error message
      },
    });
  }
}
