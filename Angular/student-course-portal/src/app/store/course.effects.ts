import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { CourseService } from '../services/course.service';
import { loadCourses, loadCoursesFailure, loadCoursesSuccess } from './course.store';
@Injectable()
export class CourseEffects{
 load$=createEffect(()=>this.actions.pipe(ofType(loadCourses),switchMap(()=>this.service.getCourses().pipe(map(courses=>loadCoursesSuccess({courses})),catchError(e=>of(loadCoursesFailure({error:e.message})))))));
 constructor(private actions:Actions,private service:CourseService){}
}
