import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, catchError, finalize, throwError } from 'rxjs';

export class LoadingState {
  readonly isLoading$ = new BehaviorSubject(false);
}
export const authInterceptor:HttpInterceptorFn=(req,next)=>next(req.clone({setHeaders:{Authorization:'Bearer mock-token-12345'}}));
export const loadingInterceptor:HttpInterceptorFn=(req,next)=>{
  const state=inject(LoadingState);state.isLoading$.next(true);
  return next(req).pipe(finalize(()=>state.isLoading$.next(false)));
};
export const errorInterceptor:HttpInterceptorFn=(req,next)=>{
  const router=inject(Router);
  return next(req).pipe(catchError(err=>{if(err.status===401)router.navigateByUrl('/');return throwError(()=>err)}));
};
