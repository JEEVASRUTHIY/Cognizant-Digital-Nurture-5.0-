import { TestBed } from '@angular/core/testing';
import { CourseCardComponent } from './course-card.component';
describe('CourseCardComponent',()=>{
 beforeEach(()=>TestBed.configureTestingModule({imports:[CourseCardComponent]}));
 it('creates and renders input',()=>{
  const fixture=TestBed.createComponent(CourseCardComponent);
  fixture.componentInstance.course={id:1,name:'Data Structures',code:'CS101',credits:4,gradeStatus:'passed'};
  fixture.detectChanges();
  expect(fixture.componentInstance).toBeTruthy();
  expect(fixture.nativeElement.querySelector('h3').textContent).toContain('Data Structures');
 });
 it('emits course id',()=>{
  const fixture=TestBed.createComponent(CourseCardComponent);
  fixture.componentInstance.course={id:1,name:'Data Structures',code:'CS101',credits:4,gradeStatus:'passed'};
  spyOn(fixture.componentInstance.enrollRequested,'emit');fixture.detectChanges();
  fixture.nativeElement.querySelector('button').click();
  expect(fixture.componentInstance.enrollRequested.emit).toHaveBeenCalledWith(1);
 });
});
