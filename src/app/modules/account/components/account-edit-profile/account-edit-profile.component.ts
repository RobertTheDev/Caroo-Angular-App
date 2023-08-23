import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-account-edit-profile',
  templateUrl: './account-edit-profile.component.html',
  styleUrls: ['./account-edit-profile.component.css'],
})
export class AccountEditProfileComponent {
  // Use the angular form builder.
  constructor(private fb: FormBuilder) {}

  // Form fields.
  form = this.fb.group({
    avatarUrl: [''],
    firstName: [''],
    lastName: [''],
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
