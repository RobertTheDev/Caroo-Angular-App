import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import minimumCapitalLettersValidator from 'src/app/lib/formValidationRules/password/minimumCapitalLetters';
import minimumNumbersValidator from 'src/app/lib/formValidationRules/password/minimumNumbers';
import minimumSpecialCharactersValidator from 'src/app/lib/formValidationRules/password/minimumSpecialCharacters';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-reset-password-form',
  templateUrl: './reset-password-form.component.html',
})
export class ResetPasswordFormComponent implements OnInit {
  constructor(
    // Angular form builder is used to build forms in Angular with less code.
    private formBuilder: FormBuilder,
    // Calls our auth service to get access to our auth function helpers.
    private authService: AuthService,

    // Angular route gets the current params name - which for this component is "token".
    private route: ActivatedRoute,
  ) {}

  // On init runs before the components has rendered. Using it to get the token from params to query the handler.
  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      // Access route parameter using 'params.get('parameterName')'
      this.token = params.get('token');
    });
  }

  // Variables are used for handling form states - submitted, loading and errors.
  formErrorMessage: string | null = null;
  formLoading = false;
  formSubmitted = false;
  // Token variable which will contain the token variable from the params.
  token: string | null = null;

  // Defines the form fields with their validators.
  passwordResetForm = this.formBuilder.group({
    password: [
      '',
      [
        // Password cannnot be empty.
        Validators.required,
        // Password must be at least eight characters in length.
        Validators.minLength(8),
        // Password must contain a capital letter.
        minimumCapitalLettersValidator,
        // Password must contain a number.
        minimumNumbersValidator,
        // Password must contain a special character.
        minimumSpecialCharactersValidator,
      ],
    ],
  });

  // Get access to the the form controls to be used in validation messaging in HTML.
  get formControls() {
    return this.passwordResetForm.controls;
  }

  // Function calls the reset password with token handler from our auth service to handle user password reset.
  // The function handles validation and wont submit until fields are valid.
  // The function handles errors and displays error response messages.
  handlePasswordResetWithToken(): Subscription | undefined {
    // When function is called set form submitted to true and error message to null.
    this.formSubmitted = true;
    this.formErrorMessage = null;

    // If form is invalid do not continue and return nothing.
    if (this.passwordResetForm.invalid || !this.token) {
      return;
    }

    // Get the value data from the reset password with token form.
    const { value } = this.passwordResetForm;

    // Start loading while form is being processed.
    this.formLoading = true;

    return this.authService
      .resetPasswordWithToken(this.token, value)
      .subscribe({
        // If form has successfully handled password reset - stop the form loading.
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
