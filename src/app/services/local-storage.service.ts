import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  public setItem(key: string, value: string) {
    localStorage.setItem(key, value);
  }
  public getItem(key: string) {
    return localStorage.getItem(key);
  }

  public setFlag(key: string, value: boolean) {
    if (value) {
      localStorage.setItem(key, 'true');
    } else {
      localStorage.setItem(key, '');
    }
  }
  public getFlag(key: string): boolean {
    let value = localStorage.getItem(key);
    if (value) {
      return true;
    } else {
      return false;
    }
  }

  public removeItem(key: string) {
    localStorage.removeItem(key);
  }
  public clear() {
    localStorage.clear();
  }
}
