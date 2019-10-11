import { Component } from '@angular/core';

@Component({
  selector: 'angular-core-workspace-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular Core Workshop';
  links: Link[] = [
    { path: '/', icon: 'home', title: 'Home' },
    { path: '/customers', icon: 'face', title: 'Customers' },
    { path: '/projects', icon: 'work', title: 'Projects' }
  ];
}

interface Link {
  path: string;
  icon: string;
  title: string;
}
