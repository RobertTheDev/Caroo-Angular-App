import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { NavigationService } from 'src/app/services/navigation/navigation.service';

@Component({
  selector: 'app-create-car-view',
  templateUrl: './create-car-view.component.html',
})
export class CreateCarViewComponent implements OnInit {
  constructor(
    private meta: Meta,
    private title: Title,
    private navigationService: NavigationService,
  ) {}
  ngOnInit(): void {
    this.title.setTitle('Create Car Listing | Caroo');

    this.meta.updateTag({
      name: 'description',
      content: '',
    });
  }

  navigateNext() {
    this.navigationService.navigateTo('/sell-a-car/add-about');
  }

  navigateBack(): void {
    this.navigationService.navigateBack();
  }
}
