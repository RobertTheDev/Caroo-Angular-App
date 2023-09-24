import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import carColourValues from 'models/car/values/carColourValues';
import carDriveTypeValues from 'models/car/values/carDriveTypeValues';
import carEngineSizeValues from 'models/car/values/carEngineSizeValues';
import carFuelTypeValues from 'models/car/values/carFuelTypeValues';
import carGearboxValues from 'models/car/values/carGearboxValues';
import carMakeAndModelsValues from 'models/car/values/carMakeAndModelsValues';
import generateCarYears from 'models/car/values/carYearValues';
import { Subscription } from 'rxjs';
import { CarService } from 'src/app/services/car/car.service';

@Component({
  selector: 'app-car-create-form',
  templateUrl: './car-create-form.component.html',
})
export class CarCreateFormComponent {
  // Use the angular form builder.
  constructor(
    // Angular form builder is used to build forms in Angular with less code.
    private formBuilder: FormBuilder,
    // Calls our car service to get access to our car function helpers.
    private carService: CarService,
  ) {}

  // Variables are used for handling form states - submitted, loading and errors.
  formErrorMessage: string | null = null;
  formLoading = false;
  formSubmitted = false;

  carColourValues = carColourValues;
  carFuelTypeValues = carFuelTypeValues;
  carGearboxValues = carGearboxValues;
  carDriveTypeValues = carDriveTypeValues;
  carEngineSizeValues = carEngineSizeValues;
  carMakeAndModelsValues = carMakeAndModelsValues;
  years = generateCarYears();

  // Form fields.
  createCarForm = this.formBuilder.group({
    make: [null, [Validators.required]],
    model: ['', [Validators.required]],
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

  get selectedMake() {
    return this.createCarForm.get('make')?.value || null;
  }

  getModelOptions(make: string): string[] {
    const selectedMake = this.carMakeAndModelsValues.find(
      (carMake) => carMake.make === make,
    );
    return selectedMake ? selectedMake.models : [];
  }

  onMakeChange(event: Event) {
    const selectedMake = (event.target as HTMLSelectElement).value;

    // Update the models based on the selected make
    const models = this.getModelOptions(selectedMake);
    const defaultModel = models.length > 0 ? models[0] : null;

    // Update the model control
    this.createCarForm.patchValue({
      model: defaultModel,
    });
  }

  // Helper function to access form controls.
  get formControls() {
    return this.createCarForm.controls;
  }

  // Create car function calls the create car handler from our car service.
  // The function handles validation and wont submit until fields are valid.
  // The function handles errors and displays error response messages.
  handleCreateCar(): Subscription | undefined {
    // When function is called set form submitted to true and error message to null.
    this.formSubmitted = true;
    this.formErrorMessage = null;

    // If form is invalid do not continue and return nothing.
    if (this.createCarForm.invalid) {
      return;
    }

    // Get the value data from the sign up form.
    const { value } = this.createCarForm;

    // Start loading while form is being processed.
    this.formLoading = true;

    return this.carService.createCar(value).subscribe({
      // If form has successfully created a car - stop the form loading.
      next: () => {
        this.formLoading = false;
      },
      // If an error contain the error message in the variable. Stop form loading.
      error: (error) => {
        this.formLoading = false;
        this.formErrorMessage = error.error.statusMessage;
      },
    });
  }
}
