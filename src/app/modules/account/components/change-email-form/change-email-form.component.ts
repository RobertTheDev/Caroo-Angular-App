import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-change-email-form',
  templateUrl: './change-email-form.component.html',
})
export class ChangeEmailFormComponent {
  // Use the angular form builder.
  constructor(private fb: FormBuilder) {}

  // Form fields.
  form = this.fb.group({
    newEmail: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
  });

  // Helper function to access form controls.
  get formControls() {
    return this.form.controls;
  }

  // Handle submit after fields are compelete and form submission.
  handleSubmit() {
    // If form is valid.
    if (this.form.valid) {
      alert('Form submitted successfully:\n' + JSON.stringify(this.form.value));
    }
    // If form is invalid.
    else {
      alert('Please correct the errors in the form.');
    }
  }
}
