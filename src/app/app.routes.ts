import { Routes } from '@angular/router';
//--Layouts
import {
  AppHeaderComponent,
  AppLayoutComponent,
  AppFooterComponent,
} from "./components/_layout";
//--App components
import { AppComponent } from "./app.component";
//--Components
import {
  HomeComponent,
  AboutComponent,
  NoContentComponent,
  LoginComponent,
  ForgotPasswordComponent,
} from './components';


export const ROUTES: Routes = [
  {
    path: '', component: AppLayoutComponent,
    children: [
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'about', component: AboutComponent },
    ],
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'forgot-password', component: ForgotPasswordComponent
  },
  { path: '**', component: NoContentComponent },
];
