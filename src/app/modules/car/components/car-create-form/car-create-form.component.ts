import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-car-create-form',
  templateUrl: './car-create-form.component.html',
  styleUrls: ['./car-create-form.component.css'],
})
export class CarCreateFormComponent {
  // Use the angular form builder.
  constructor(private fb: FormBuilder) {}

  images: string[] = new Array(6).fill('');

  replaceImage(index: number) {
    // Handle replacing the image at the specified index
    const newImageUrl = prompt('Enter image URL:');
    if (newImageUrl) {
      this.images[index] = newImageUrl;
    }
  }

  deleteImage(index: number) {
    // Handle deleting the image at the specified index
    this.images[index] = '';
  }

  uploadImage(event: any, index: number) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.images[index] = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  // Form fields.
  form = this.fb.group({
    make: [null, [Validators.required]],
    model: [null, [Validators.required]],
    colour: [null, [Validators.required]],
    year: [null, [Validators.required]],
    fuelType: [null, [Validators.required]],
    gearbox: [null, [Validators.required]],
    driveType: [null, [Validators.required]],
    mileage: [null, [Validators.required]],
    price: [null, [Validators.required]],
    engineSize: [null, [Validators.required]],
    doors: [null, [Validators.required]],
    seats: [null, [Validators.required]],
    description: [null, [Validators.required]],
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
