import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class EnrollmentService {
  private idsSubject = new BehaviorSubject<number[]>([]);
  ids$ = this.idsSubject.asObservable();
  enroll(id: number) {
    if (!this.isEnrolled(id)) this.idsSubject.next([...this.idsSubject.value, id]);
  }
  unenroll(id: number) { this.idsSubject.next(this.idsSubject.value.filter(x => x !== id)); }
  toggle(id: number) { this.isEnrolled(id) ? this.unenroll(id) : this.enroll(id); }
  isEnrolled(id: number) { return this.idsSubject.value.includes(id); }
}
