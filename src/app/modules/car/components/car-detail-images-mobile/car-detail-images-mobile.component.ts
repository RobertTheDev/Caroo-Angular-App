import {
  Component,
  Input,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import CarWithImage from 'src/app/types/CarWithImages';

@Component({
  selector: 'app-car-detail-images-mobile',
  templateUrl: './car-detail-images-mobile.component.html',
  styleUrls: ['./car-detail-images-mobile.component.css'],
})
export class CarDetailImagesMobileComponent implements AfterViewInit {
  @Input() car!: CarWithImage;
  @ViewChild('carImagesContainer') carImagesContainer!: ElementRef;

  currentIndex = 0;

  ngAfterViewInit() {
    const options = {
      root: this.carImagesContainer.nativeElement,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = entry.target.getAttribute('data-index');
          this.currentIndex = Number(index);
        }
      });

      // Update the counter container's content
      this.updateCounterContainer();
    }, options);

    const imageContainers =
      this.carImagesContainer.nativeElement.querySelectorAll(
        '.car-image-mobile-container',
      );
    imageContainers.forEach((container: HTMLElement, index: number) => {
      container.setAttribute('data-index', index.toString());
      observer.observe(container);
    });
  }

  updateCounterContainer() {
    const counterContainer = document.querySelector(
      '.car-image-mobile-counter-container',
    );
    if (counterContainer) {
      counterContainer.textContent = `${this.currentIndex + 1} / ${
        this.car.images.length
      }`;
    }
  }
}
