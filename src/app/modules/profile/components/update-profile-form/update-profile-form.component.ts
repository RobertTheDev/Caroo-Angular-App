import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProfileService } from 'src/app/services/profile/profile.service';

@Component({
  selector: 'app-update-profile-form',
  templateUrl: './update-profile-form.component.html',
  styleUrls: ['./update-profile-form.component.css'],
})
export class UpdateProfileFormComponent {
  constructor(
    // Angular form builder is used to build forms in Angular with less code.
    private formBuilder: FormBuilder,
    // Calls our auth service to get access to our auth function helpers.
    private profileService: ProfileService,
    // Angular router used for routing and navigation in the app.
    private router: Router,
  ) {}

  // Variables are used for handling form states - submitted, loading and errors.
  formErrorMessage: string | null = null;
  formLoading = false;
  formSubmitted = false;

  // Defines the form fields with their validators.
  updateProfileForm = this.formBuilder.group({
    firstName: [''],
    // Last name cannnot be empty.
    lastName: [''],
  });

  // Get access to the the form controls to be used in validation messagin in HTML.
  get formControls() {
    return this.updateProfileForm.controls;
  }

  // Sign up function calls the sign up handler from our auth service to handle user sign up.
  // The function handles validation and wont submit until fields are valid.
  // The function handles errors and displays error response messages.
  handleUpdateProfile(): Subscription | undefined {
    // When function is called set form submitted to true and error message to null.
    this.formSubmitted = true;
    this.formErrorMessage = null;

    // If form is invalid do not continue and return nothing.
    if (this.updateProfileForm.invalid) {
      return;
    }

    // Get the value data from the sign up form.
    const { value } = this.updateProfileForm;

    // Start loading while form is being processed.
    this.formLoading = true;

    return this.profileService.updateProfile(value).subscribe({
      // If form has successfully handled sign up - stop the form loading and navigate to home page.
      next: () => {
        this.formLoading = false;
        this.router.navigate(['/']);
      },
      // If an error contain the error message in the variable. Stop form loading.
      error: (error) => {
        this.formLoading = false;
        this.formErrorMessage = error.error.statusMessage;
      },
    });
  }
}
