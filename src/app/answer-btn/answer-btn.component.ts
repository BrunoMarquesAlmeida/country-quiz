import { Component, Input, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';

export enum btnTypes {
  normal = 'normal',
  correct = 'correct',
  incorrect = 'incorrect',
}

@Component({
  standalone: true,
  imports: [NgIf],
  selector: 'answer-btn',
  templateUrl: './answer-btn.component.html',
  styleUrls: ['./answer-btn.component.scss'],
})
export class AnswerBtnComponent implements OnInit {
  @Input() type: btnTypes = btnTypes.normal;
  @Input() orderIndex!: number;
  @Input() onClick!: Function;
  @Input() text: string = 'missing text 😥';
  orderLetter!: string;

  ngOnInit() {
    if (this.orderIndex >= 0)
      this.orderLetter = (this.orderIndex + 10).toString(36).toUpperCase();
  }
}
