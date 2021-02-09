import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from "@angular/animations";

@Component({
  selector: 'app-highlight',
  templateUrl: './highlight.component.html',
  styleUrls: ['./highlight.component.css'],
  animations: [
    trigger('slideAnimation', [
      transition('void => *', [
        style({ opacity: 0}),
        animate('300ms', style({opacity:1 }))
      ]),
      transition('* => void', [
        animate('300ms', style({ opacity:0 }))
      ])
    ])
  ]
})

export class HighlightComponent implements OnInit {
  slides = [{ src: '../../../../assets/mand2.png' }, { src: '../../../../assets/ph1.png' }, { src: '../../../../assets/ph2.png'}];
  currentSlide = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onPreviousClick() {
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.slides.length - 1 : previous;
  }

  onNextClick() {
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.slides.length ? 0 : next;
  }
}
