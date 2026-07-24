import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, retry, tap, throwError } from 'rxjs';
import { Course } from '../models/course.model';

@Injectable({ providedIn: 'root' })
export class CourseService {
  private readonly url = 'http://localhost:3000/courses';
  constructor(private http: HttpClient) {}
  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.url).pipe(
      retry(2), map(items => items.filter(c => (c.credits ?? 0) > 0)),
      tap(items => console.log('Courses loaded:', items.length)),
      catchError(() => throwError(() => new Error('Failed to load courses. Start JSON Server with: npm run api')))
    );
  }
  getCourseById(id: number) { return this.http.get<Course>(`${this.url}/${id}`); }
  createCourse(course: Omit<Course, 'id'>) { return this.http.post<Course>(this.url, course); }
  updateCourse(course: Course) { return this.http.put<Course>(`${this.url}/${course.id}`, course); }
  deleteCourse(id: number) { return this.http.delete(`${this.url}/${id}`); }
}
