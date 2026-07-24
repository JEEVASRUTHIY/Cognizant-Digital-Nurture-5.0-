import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { routes } from './app.routes';
import { authInterceptor, errorInterceptor, LoadingState, loadingInterceptor } from './interceptors/http.interceptors';
import { courseReducer } from './store/course.store';
import { CourseEffects } from './store/course.effects';

export const appConfig:ApplicationConfig={providers:[
 provideBrowserGlobalErrorListeners(),provideZoneChangeDetection({eventCoalescing:true}),provideRouter(routes),
 provideHttpClient(withInterceptors([authInterceptor,loadingInterceptor,errorInterceptor])),LoadingState,
 provideStore({course:courseReducer}),provideEffects(CourseEffects),provideStoreDevtools({maxAge:25})
]};
