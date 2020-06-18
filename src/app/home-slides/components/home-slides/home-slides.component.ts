import { Component, OnInit } from '@angular/core';
import { SlideComponent } from '../slide/slide.component';

@Component({
  selector: 'app-home-slides',
  templateUrl: './home-slides.component.html',
  styleUrls: ['./home-slides.component.css']
})
export class HomeSlidesComponent implements OnInit {
    slideIndex = 1;
    slides = [
       {
          url: 'assets/img/slide/slide-1.jpg',
          title: 'Slide 1',selected: false
       },
       {
          url: 'assets/img/slide/slide-2.jpg',
          title: 'Slide 1',selected: true
       },
       {
          url: 'assets/img/slide/slide-3.jpg',
          title: 'Slide 1',selected: false
       }
    ];

  constructor() { }

  ngOnInit() {  }

  slide = function(indexDirection: number) {
    this.slides[this.slideIndex].selected = false;
    this.slideIndex += indexDirection;
    if(this.slideIndex < 0)
      this.slideIndex = this.slides.length - 1;
    this.slideIndex = this.slideIndex % this.slides.length;
    this.slides[this.slideIndex].selected = true;
  }

}
