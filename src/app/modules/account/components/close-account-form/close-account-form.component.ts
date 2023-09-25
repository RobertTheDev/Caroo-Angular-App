import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-close-account-form',
  templateUrl: './close-account-form.component.html',
  styleUrls: ['./close-account-form.component.css'],
})
export class CloseAccountFormComponent {
  constructor(
    // Angular form builder is used to build forms in Angular with less code.
    private formBuilder: FormBuilder,
  ) {}

  // Variables are used for handling form states - submitted, loading and errors.
  formErrorMessage: string | null = null;
  formLoading = false;
  formSubmitted = false;

  // Defines the form fields with their validators.
  closeAccountForm = this.formBuilder.group({
    close: [
      '',
      [
        // Close input cannot be empty.
        Validators.required,
      ],
    ],
    password: [
      '',
      [
        // Password input cannnot be empty.
        Validators.required,
      ],
    ],
  });

  // Get access to the the form controls to be used in validation messagin in HTML.
  get formControls() {
    return this.closeAccountForm.controls;
  }

  // Sign up function calls the sign up handler from our auth service to handle user sign up.
  // The function handles validation and wont submit until fields are valid.
  // The function handles errors and displays error response messages.
  handleCloseAccount() {
    // When function is called set form submitted to true and error message to null.
    this.formSubmitted = true;
    this.formErrorMessage = null;

    // If form is invalid do not continue and return nothing.
    if (this.closeAccountForm.invalid) {
      return;
    }

    // Get the value data from the sign up form.
    const { value } = this.closeAccountForm;

    // Start loading while form is being processed.
    this.formLoading = true;

    alert(JSON.stringify(value));

    // return this.authService.signUp(value).subscribe({
    //   // If form has successfully handled sign up - stop the form loading and navigate to home page.
    //   next: () => {
    //     this.formLoading = false;
    //     this.router.navigate(['/']);
    //   },
    //   // If an error contain the error message in the variable. Stop form loading.
    //   error: (error) => {
    //     this.formLoading = false;
    //     this.formErrorMessage = error.error.statusMessage;
    //   },
    // });
  }
}
