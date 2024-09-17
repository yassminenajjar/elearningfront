import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements AfterViewInit {
  courseTitle: string = 'Course Title';
  description: string = 'Description of the course.';
  price: number = 100;

  images = [
    'https://i.pinimg.com/736x/af/b5/f3/afb5f3a7df5968569449daa8984d43bc.jpg',
    'https://i.pinimg.com/736x/af/b5/f3/afb5f3a7df5968569449daa8984d43bc.jpg',
    'https://i.pinimg.com/736x/af/b5/f3/afb5f3a7df5968569449daa8984d43bc.jpg',
    'https://i.pinimg.com/736x/af/b5/f3/afb5f3a7df5968569449daa8984d43bc.jpg',
    'https://i.pinimg.com/736x/af/b5/f3/afb5f3a7df5968569449daa8984d43bc.jpg',
    'https://i.pinimg.com/736x/af/b5/f3/afb5f3a7df5968569449daa8984d43bc.jpg',
    'https://i.pinimg.com/736x/af/b5/f3/afb5f3a7df5968569449daa8984d43bc.jpg',
    'https://i.pinimg.com/736x/af/b5/f3/afb5f3a7df5968569449daa8984d43bc.jpg',
  ];

  currentImageIndex = 0;
  isFullscreen = false;

  @ViewChild('thumbnailsContainer') thumbnailsContainer!: ElementRef;
  router: any;

  ngAfterViewInit() {}

  get currentImage() {
    return this.images[this.currentImageIndex];
  }

  prevImage() {
    this.currentImageIndex = (this.currentImageIndex - 1 + this.images.length) % this.images.length;
    this.scrollToImage();
  }

  nextImage() {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
    this.scrollToImage();
  }

  scrollToImage() {
    const thumbnail = this.thumbnailsContainer.nativeElement.children[this.currentImageIndex] as HTMLElement;
    thumbnail.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    });
  }

  openFullscreen(index: number) {
    this.currentImageIndex = index;
    this.isFullscreen = true;
  }

  closeFullscreen() {
    this.isFullscreen = false;
  }

  newReview = {
    rating: 0,
    title: '',
    body: ''
  };

  onRatingChange(value: number) {
    this.newReview.rating = value;
  }

  submitReview() {
    console.log(this.newReview);
    this.newReview = { rating: 0, title: '', body: '' };
  }



  
}