import { Injectable } from '@angular/core';
import { Observable, Observer, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _theme: string;
  setTheme: Observable<any>;
  setCover: Observable<any>;
  private themeSubject = new Subject<any>();
  private coverSubject = new Subject<any>();

  constructor() {
    this.setTheme = this.themeSubject.asObservable();
    this.setCover = this.coverSubject.asObservable()
  }

  set(userFromDatabase) {
    localStorage.setItem('user', JSON.stringify(userFromDatabase));
    // this.statusChange.emit(userFromDatabase);
  }

  getProfile() {
    const user = localStorage.getItem('user');
    return JSON.parse(user);
  }

  destroy() {
    localStorage.removeItem('user');
    // this.statusChange.emit(null);
  }

  applyTheme(data) {
    // I have data! Let's return it so subscribers can use it!
    // we can do stuff with data if we want
    localStorage.setItem('theme', data);
    this.themeSubject.next(data);
  }

  applyCover(data) {
    this.coverSubject.next(data);
  }
}
