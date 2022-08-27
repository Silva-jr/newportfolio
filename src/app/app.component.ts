import { Component } from '@angular/core';
import { NgsRevealConfig } from 'ngx-scrollreveal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'José da Silva';
  constructor(config: NgsRevealConfig) {
    

  }

  ngOnInit(): void {
    const toggle_theme = document.querySelector('.toggle-theme');
    const chance_theme = document.querySelector('.change-theme');

    toggle_theme.addEventListener('click', () => {
      document.documentElement.classList.toggle('dark');
    });
  }
}
