import { Component, OnInit, Renderer2 } from '@angular/core';
import { LocalStorageService } from './services/local-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Where in the world?';
  private _isDarkTheme = false;
  private _isDarkThemeKey = 'isDarkTheme';
  private _isDarkThemeClass = 'theme-dark';

  constructor(
    private _renderer: Renderer2,
    private localStorageService: LocalStorageService
  ) {}

  get isDarkTheme(): boolean {
    return this._isDarkTheme;
  }

  saveIsDarkTheme(value: boolean): void {
    this.localStorageService.setFlag(this._isDarkThemeKey, value);
  }

  restoreIsDarkTheme(): boolean {
    return this.localStorageService.getFlag(this._isDarkThemeKey);
  }

  toggleIsDarkClass(value: boolean): void {
    if (value) {
      this._renderer.addClass(document.body, this._isDarkThemeClass);
    } else {
      this._renderer.removeClass(document.body, this._isDarkThemeClass);
    }
  }

  ngOnInit(): void {
    this._isDarkTheme = this.restoreIsDarkTheme();
    this.toggleIsDarkClass(this._isDarkTheme);
  }

  public toggleIsDark(): void {
    this._isDarkTheme = !this._isDarkTheme;
    this.saveIsDarkTheme(this._isDarkTheme);
    this.toggleIsDarkClass(this._isDarkTheme);
  }
}
