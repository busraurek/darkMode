import { Component, OnInit  } from '@angular/core';
import { ThemeService } from './theme.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{
  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    this.themeService.isDarkMode.subscribe((darkMode) => {
      document.body.classList.toggle('dark', darkMode);
    });
  }

  toggleDarkMode() {
    this.themeService.toggleDarkMode();
  }
}
