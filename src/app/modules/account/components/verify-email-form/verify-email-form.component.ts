import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccountService } from 'src/app/services/account/account.service';

@Component({
  selector: 'app-verify-email-form',
  templateUrl: './verify-email-form.component.html',
})
export class VerifyEmailFormComponent implements OnInit {
  /* The code provided is a TypeScript component that handles a form for verifying an email address.
Here's a breakdown of what each part does: */
  constructor(
    // Calls our account service to get access to our account function helpers.
    private accountService: AccountService,
    // Calls our account service to get access to our account function helpers.
    private route: ActivatedRoute,
  ) {}

  token: string | null = null;
  formErrorMessage: string | null = null;
  formLoading = false;

  // On init runs before the components has rendered. Using it to get the token from params to query the handler.
  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      // Access route parameter using 'params.get('parameterName')'
      this.token = params.get('token');
    });
  }

  // Login function calls the sign up handler from our auth service to handle user login.
  // The function handles validation and wont submit until fields are valid.
  // The function handles errors and displays error response messages.
  handleVerifyEmailAddress(event: Event) {
    event.preventDefault();

    if (!this.token) {
      return (this.formErrorMessage = 'No token was provided.');
    } else {
      return this.accountService.verifyEmailWithToken(this.token).subscribe({
        // If form has successfully handled login - stop the form loading and navigate to home page.
        next: (data) => {
          console.log(data);
        },
        // If an error contain the error message in the variable. Stop form loading.
        error: (error) => {
          console.error(error);
        },
      });
    }
  }
}
