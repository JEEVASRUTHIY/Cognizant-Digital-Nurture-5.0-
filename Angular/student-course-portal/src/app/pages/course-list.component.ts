import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCardComponent } from '../components/course-card.component';
import { CourseService } from '../services/course.service';
import { EnrollmentService } from '../services/enrollment.service';
import { Course } from '../models/course.model';
import { Store } from '@ngrx/store';
import { loadCourses, selectAllCourses, selectCoursesLoading } from '../store/course.store';

@Component({
 standalone:true, imports:[CommonModule,CourseCardComponent],
 template:`<h1>Course Listing</h1><p *ngIf="isLoading">Loading courses...</p><p class="error" *ngIf="errorMessage">{{errorMessage}}</p>
 <ng-container *ngIf="!isLoading"><div class="grid" *ngIf="courses.length; else noCourses">
 <app-course-card *ngFor="let c of courses;trackBy:trackByCourseId" [course]="c" [enrolled]="enrollment.isEnrolled(c.id)" (enrollRequested)="onEnroll($event)"/>
 </div><ng-template #noCourses><p>No courses available.</p></ng-template></ng-container>
 <p *ngIf="selectedCourseId">Selected course ID: {{selectedCourseId}}</p>`
})
export class CourseListComponent implements OnInit {
 courses:Course[]=[]; isLoading=true; errorMessage=''; selectedCourseId?:number;
 constructor(private service:CourseService, public enrollment:EnrollmentService,private store:Store){}
 ngOnInit(){
  this.store.select(selectAllCourses).subscribe(x=>this.courses=x);
  this.store.select(selectCoursesLoading).subscribe(x=>this.isLoading=x);
  setTimeout(()=>this.store.dispatch(loadCourses()),1500);
 }
 trackByCourseId(_:number,c:Course){return c.id} // prevents unchanged DOM cards being recreated
 onEnroll(id:number){this.enrollment.toggle(id);this.selectedCourseId=id;console.log('Enrolling in course:',id)}
}
