import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private themeService: ThemeService) { }

  ngOnInit() {
    this.themeService.isDarkMode.subscribe((darkMode) => {
      document.body.classList.toggle('dark', darkMode);
    });
  }
  toggleTheme() {
    this.themeService.toggleDarkMode();
  }
}
