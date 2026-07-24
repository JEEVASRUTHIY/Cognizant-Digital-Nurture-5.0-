import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  standalone:true, imports:[FormsModule],
  template:`<section class="panel"><h1>{{portalName}}</h1><p>Browse courses, enroll and track your progress.</p></section>
  <section class="stats"><div class="stat"><b>Courses Available</b><h2>{{courseCount}}</h2></div><div class="stat"><b>Enrolled</b><h2>3</h2></div><div class="stat"><b>GPA</b><h2>3.8</h2></div></section>
  <section class="panel"><label>Search <input [(ngModel)]="searchTerm" placeholder="Type a course"></label><p>Searching for: {{searchTerm}}</p>
  <button [disabled]="!isPortalActive" (click)="onEnrollClick()">Enroll Now</button> <b>{{message}}</b></section>`
})
export class HomeComponent implements OnInit, OnDestroy {
  portalName='Student Course Portal'; isPortalActive=true; message=''; searchTerm=''; courseCount=12;
  ngOnInit(){ console.log('HomeComponent initialised — courses loaded'); }
  ngOnDestroy(){ console.log('HomeComponent destroyed'); }
  onEnrollClick(){ this.message='Enrollment opened!'; }
}
