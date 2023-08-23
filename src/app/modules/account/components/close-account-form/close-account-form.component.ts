import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-close-account-form',
  templateUrl: './close-account-form.component.html',
  styleUrls: ['./close-account-form.component.css'],
})
export class CloseAccountFormComponent {
  // Use the angular form builder.
  constructor(private fb: FormBuilder) {}

  // Form fields.
  form = this.fb.group({
    password: ['', [Validators.required, Validators.minLength(8)]],
    confirmDelete: ['', [Validators.required]],
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
