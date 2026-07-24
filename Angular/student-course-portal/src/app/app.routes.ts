import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home.component';
import { CourseListComponent } from './pages/course-list.component';
import { CourseDetailComponent } from './pages/course-detail.component';
import { EnrollmentFormComponent } from './pages/enrollment-form.component';
import { ReactiveEnrollmentComponent } from './pages/reactive-enrollment.component';
import { ProfileComponent } from './pages/profile.component';
import { NotFoundComponent } from './pages/not-found.component';

export const routes:Routes=[
 {path:'',component:HomeComponent},
 {path:'courses',component:CourseListComponent},
 {path:'courses/:id',component:CourseDetailComponent},
 {path:'enroll',component:EnrollmentFormComponent},
 {path:'enroll-reactive',component:ReactiveEnrollmentComponent},
 {path:'profile',component:ProfileComponent},
 {path:'**',component:NotFoundComponent}
];
