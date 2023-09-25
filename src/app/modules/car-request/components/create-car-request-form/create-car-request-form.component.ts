import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-create-car-request-form',
  templateUrl: './create-car-request-form.component.html',
})
export class CreateCarRequestFormComponent {
  constructor(
    // Angular form builder is used to build forms in Angular with less code.
    private formBuilder: FormBuilder,
  ) {}

  // Variables are used for handling form states - submitted, loading and errors.
  formErrorMessage: string | null = null;
  formLoading = false;
  formSubmitted = false;

  // Defines the form fields with their validators.
  createCarRequestForm = this.formBuilder.group({
    message: [''],
  });

  // Get access to the the form controls to be used in validation messagin in HTML.
  get formControls() {
    return this.createCarRequestForm.controls;
  }

  // Login function calls the sign up handler from our auth service to handle user login.
  // The function handles validation and wont submit until fields are valid.
  // The function handles errors and displays error response messages.
  handleCreateCarRequest() {
    // When function is called set form submitted to true and error message to null.
    this.formSubmitted = true;
    this.formErrorMessage = null;

    // If form is invalid do not continue and return nothing.
    if (this.createCarRequestForm.invalid) {
      return;
    }
    // Get the value data from the login form.
    const { value } = this.createCarRequestForm;

    alert(JSON.stringify(value));
  }
}
