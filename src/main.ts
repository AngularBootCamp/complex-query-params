// https://github.com/stackblitz/core/issues/2366
import 'zone.js'; // Avoid error in StackBlitz for Angular polyfill

import { provideHttpClient } from '@angular/common/http';
import { bootstrapApplication } from '@angular/platform-browser';
import {
  provideRouter,
  Routes,
  withHashLocation,
  withInMemoryScrolling
} from '@angular/router';

import { AppComponent } from './app/app.component';
import { EmployeeDashboardComponent } from './app/employee-dashboard/employee-dashboard.component';

const routes: Routes = [
  { path: '', component: EmployeeDashboardComponent }
];

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideRouter(
      routes,
      withHashLocation(),
      withInMemoryScrolling({ scrollPositionRestoration: 'enabled' })
    )
  ]
}).catch(err => console.error(err));
