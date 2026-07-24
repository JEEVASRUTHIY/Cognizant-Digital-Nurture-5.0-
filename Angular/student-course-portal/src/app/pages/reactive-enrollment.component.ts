import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbstractControl, AsyncValidatorFn, FormArray, FormBuilder, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';

function noCourseCode(c:AbstractControl):ValidationErrors|null { return String(c.value??'').startsWith('XX')?{noCourseCode:true}:null; }
const emailCheck:AsyncValidatorFn=(c)=>new Promise(resolve=>setTimeout(()=>resolve(String(c.value).includes('test@')?{emailTaken:true}:null),800));

@Component({
 standalone:true, imports:[CommonModule,ReactiveFormsModule],
 template:`<section class="panel"><h1>Reactive Enrollment</h1><form [formGroup]="enrollForm" (ngSubmit)="submit()">
 <label>Name<input formControlName="studentName"></label>
 <label>Email<input formControlName="studentEmail"></label><span class="error" *ngIf="enrollForm.get('studentEmail')?.errors?.['emailTaken']">Email is already taken</span>
 <label>Course code<input formControlName="courseId"></label><span class="error" *ngIf="enrollForm.get('courseId')?.errors?.['noCourseCode']">Course code starting with XX is not allowed</span>
 <label>Semester<select formControlName="preferredSemester"><option>Odd</option><option>Even</option></select></label>
 <label class="row"><input style="width:auto" type="checkbox" formControlName="agreeToTerms"> Agree to terms</label>
 <h3>Additional Courses</h3><div formArrayName="additionalCourses"><div class="row" *ngFor="let ctrl of additionalCourses.controls;let i=index"><input [formControlName]="i"><button type="button" (click)="removeCourse(i)">Remove</button></div></div>
 <div class="row"><button type="button" (click)="addCourse()">Add Another Course</button><button [disabled]="enrollForm.invalid">Submit</button></div>
 </form><p class="success" *ngIf="submitted">Reactive form submitted successfully!</p></section>`
})
export class ReactiveEnrollmentComponent {
 private fb=inject(FormBuilder);
 submitted=false;
 enrollForm=this.fb.group({studentName:['',[Validators.required,Validators.minLength(3)]],studentEmail:this.fb.control('',[Validators.required,Validators.email],[emailCheck]),courseId:['',[Validators.required,noCourseCode]],preferredSemester:['Odd',Validators.required],agreeToTerms:[false,Validators.requiredTrue],additionalCourses:this.fb.array([])});
 get additionalCourses(){return this.enrollForm.get('additionalCourses') as FormArray}
 addCourse(){this.additionalCourses.push(this.fb.control('',Validators.required))}
 removeCourse(i:number){this.additionalCourses.removeAt(i)}
 submit(){console.log(this.enrollForm.value,this.enrollForm.getRawValue());this.submitted=this.enrollForm.valid}
}
