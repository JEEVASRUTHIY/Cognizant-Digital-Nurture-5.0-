import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Course } from '../models/course.model';
import { CreditLabelPipe } from '../pipes/credit-label.pipe';
import { HighlightDirective } from '../directives/highlight.directive';

@Component({
  selector: 'app-course-card', standalone: true,
  imports: [CommonModule, CreditLabelPipe, HighlightDirective],
  template: `
  <article class="card" [ngClass]="cardClasses" [ngStyle]="{'border-left-color': borderColor}"
           [appHighlight]="'#fff8d8'">
    <h3>{{course.name}}</h3><p>{{course.code}} · {{course.credits | creditLabel}}</p>
    <div [ngSwitch]="course.gradeStatus">
      <span *ngSwitchCase="'passed'" class="passed">Passed</span>
      <span *ngSwitchCase="'failed'" class="failed">Failed</span>
      <span *ngSwitchDefault class="pending">Pending</span>
    </div>
    <p *ngIf="isExpanded">Course ID: {{course.id}} — status: {{course.gradeStatus}}</p>
    <div class="row">
      <button (click)="enrollRequested.emit(course.id)">{{enrolled ? 'Unenroll' : 'Enroll'}}</button>
      <button class="secondary" (click)="isExpanded=!isExpanded">Show Details</button>
    </div>
  </article>`,
  styles: [`.card{background:white;border-left:6px solid;padding:18px;border-radius:12px;min-height:190px;transition:.2s}.expanded{min-height:240px}.card--enrolled{outline:2px solid #2956d8}.card--full{box-shadow:0 4px 16px #0002}.passed{color:#16803c}.failed{color:#c62828}.pending{color:#666}.secondary{background:#63708c}`]
})
export class CourseCardComponent implements OnChanges {
  @Input({ required: true }) course!: Course;
  @Input() enrolled = false;
  @Output() enrollRequested = new EventEmitter<number>();
  isExpanded = false;
  ngOnChanges(changes: SimpleChanges) {
    if (changes['course']) console.log('Course input changed:', changes['course'].previousValue, changes['course'].currentValue);
  }
  get cardClasses() { return {'card--enrolled': this.enrolled, 'card--full': (this.course.credits ?? 0) >= 4, expanded: this.isExpanded}; }
  get borderColor() { return this.course.gradeStatus === 'passed' ? 'green' : this.course.gradeStatus === 'failed' ? 'red' : 'grey'; }
}
