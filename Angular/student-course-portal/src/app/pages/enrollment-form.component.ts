import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
 standalone:true, imports:[CommonModule,FormsModule],
 template:`<section class="panel"><h1>Template-Driven Enrollment</h1>
 <form #f="ngForm" (ngSubmit)="submit(f)">
 <label>Name<input name="studentName" [(ngModel)]="model.studentName" required minlength="3" #name="ngModel"></label>
 <span class="error" *ngIf="name.touched&&name.errors?.['required']">Name is required</span>
 <span class="error" *ngIf="name.touched&&name.errors?.['minlength']">Name must be at least 3 characters</span>
 <label>Email<input type="email" name="studentEmail" [(ngModel)]="model.studentEmail" required email #email="ngModel"></label>
 <span class="error" *ngIf="email.touched&&email.invalid">Enter a valid email</span>
 <label>Course ID<input type="number" name="courseId" [(ngModel)]="model.courseId" required></label>
 <label>Semester<select name="preferredSemester" [(ngModel)]="model.preferredSemester"><option>Odd</option><option>Even</option></select></label>
 <label class="row"><input style="width:auto" type="checkbox" name="agreeToTerms" [(ngModel)]="model.agreeToTerms" required> Agree to terms</label>
 <div class="row"><button type="submit" [disabled]="f.invalid">Submit</button><button type="button" (click)="f.resetForm();submitted=false">Reset</button></div>
 </form><p class="success" *ngIf="submitted">Enrollment request submitted successfully!</p></section>`
})
export class EnrollmentFormComponent {
 model={studentName:'',studentEmail:'',courseId:null,preferredSemester:'Odd',agreeToTerms:false}; submitted=false;
 submit(form:NgForm){console.log(form.value,form.valid);if(form.valid)this.submitted=true}
}
