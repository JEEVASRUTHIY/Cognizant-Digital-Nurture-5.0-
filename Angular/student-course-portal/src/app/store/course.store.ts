import { createAction, createFeatureSelector, createReducer, createSelector, on, props } from '@ngrx/store';
import { Course } from '../models/course.model';

export interface CourseState{courses:Course[];loading:boolean;error:string|null}
export const initialState:CourseState={courses:[],loading:false,error:null};
export const loadCourses=createAction('[Course] Load Courses');
export const loadCoursesSuccess=createAction('[Course] Load Courses Success',props<{courses:Course[]}>());
export const loadCoursesFailure=createAction('[Course] Load Courses Failure',props<{error:string}>());
export const courseReducer=createReducer(initialState,
 on(loadCourses,s=>({...s,loading:true,error:null})),
 on(loadCoursesSuccess,(s,{courses})=>({...s,courses,loading:false})),
 on(loadCoursesFailure,(s,{error})=>({...s,error,loading:false}))
);
export const selectCourseState=createFeatureSelector<CourseState>('course');
export const selectAllCourses=createSelector(selectCourseState,s=>s.courses);
export const selectCoursesLoading=createSelector(selectCourseState,s=>s.loading);
