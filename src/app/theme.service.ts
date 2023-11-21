import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private _darkMode = new BehaviorSubject<boolean>(false);
  isDarkMode = this._darkMode.asObservable();

  toggleDarkMode() {
    this._darkMode.next(!this._darkMode.value);
  }
  constructor() { }
}
