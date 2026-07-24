import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../services/course.service';
import { Course } from '../models/course.model';
@Component({standalone:true,imports:[CommonModule],template:`<section class="panel" *ngIf="course"><h1>{{course.name}}</h1><p>{{course.code}}</p><p>Credits: {{course.credits}}</p><p>Status: {{course.gradeStatus}}</p></section>`})
export class CourseDetailComponent implements OnInit{course?:Course;constructor(private route:ActivatedRoute,private service:CourseService){}ngOnInit(){this.service.getCourseById(Number(this.route.snapshot.paramMap.get('id'))).subscribe(x=>this.course=x)}}
