import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <header>
      <strong>Student Course Portal</strong>
      <nav>
        <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}">Home</a>
        <a routerLink="/courses" routerLinkActive="active">Courses</a>
        <a routerLink="/enroll" routerLinkActive="active">Enroll</a>
        <a routerLink="/enroll-reactive" routerLinkActive="active">Reactive Form</a>
        <a routerLink="/profile" routerLinkActive="active">Profile</a>
      </nav>
    </header>`,
  styles: [`header{background:#183a8f;color:white;padding:18px 5%;display:flex;justify-content:space-between;gap:20px;align-items:center}nav{display:flex;gap:15px;flex-wrap:wrap}a{color:#dfe7ff;text-decoration:none}.active{color:white;border-bottom:2px solid #ffd54f}`]
})
export class HeaderComponent {}
