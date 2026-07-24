import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnrollmentService } from '../services/enrollment.service';
@Component({standalone:true,imports:[CommonModule],template:`<section class="panel"><h1>Student Profile</h1><p>Name: Vicky</p><p>GPA: 3.8</p><h3>Enrolled course IDs</h3><p>{{(service.ids$|async)?.join(', ')||'No courses enrolled'}}</p></section>`})
export class ProfileComponent{constructor(public service:EnrollmentService){}}
