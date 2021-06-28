import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Where in the world?';
  isDarkTheme = false;

  constructor(private _renderer: Renderer2) {}

  toggleTheme(): void {
    this.isDarkTheme = !this.isDarkTheme;
    if (this.isDarkTheme) {
      this._renderer.addClass(document.body, 'theme-dark');
    } else {
      this._renderer.removeClass(document.body, 'theme-dark');
    }
  }
}
