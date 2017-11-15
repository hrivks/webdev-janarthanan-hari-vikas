import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ModuleWithProviders } from '@angular/core';
import { TestComponent } from './components/test/test.component';
import { LoginComponent } from './components/user/login/login.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { RegisterComponent } from './components/user/register/register.component';
import { WebsiteNewComponent } from './components/website/website-new/website-new.component';
import { WebsiteEditComponent } from './components/website/website-edit/website-edit.component';
import { WebsiteListComponent } from './components/website/website-list/website-list.component';
import { PageNewComponent } from './components/page/page-new/page-new.component';
import { PageEditComponent } from './components/page/page-edit/page-edit.component';
import { PageListComponent } from './components/page/page-list/page-list.component';
import { WidgetChooserComponent } from './components/widget/widget-chooser/widget-chooser.component';
import { WidgetEditComponent } from './components/widget/widget-edit/widget-edit.component';
import { WidgetListComponent } from './components/widget/widget-list/widget-list.component';
import { FlickrImageSearchComponent } from './components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component';
import { AuthService } from './services/auth.service.client';

const APP_ROUTES: Routes = [
  { path: '', component: HomeComponent, data: { skipAuth: true } },
  { path: 'test', component: TestComponent, data: { title: 'Test', skipAuth: true } },
  { path: 'login', component: LoginComponent, data: { title: 'Login', skipAuth: true } },
  { path: 'register', component: RegisterComponent, data: { title: 'Register', skipAuth: true } },
  { path: 'profile', component: ProfileComponent, data: { title: 'Profile' }, canActivate: [AuthService] },
  { path: 'user/:uid', component: ProfileComponent, data: { title: 'Profile' } },
  { path: 'user/:uid/website', component: WebsiteListComponent, data: { title: 'Websites' } },
  { path: 'user/:uid/website/new', component: WebsiteNewComponent, data: { title: 'New Website' } },
  { path: 'user/:uid/website/:wid', component: WebsiteEditComponent, data: { title: 'Edit Website' } },
  { path: 'user/:uid/website/:wid/page', component: PageListComponent, data: { title: 'Pages' } },
  { path: 'user/:uid/website/:wid/page/new', component: PageNewComponent, data: { title: 'New Page' } },
  { path: 'user/:uid/website/:wid/page/:pid', component: PageEditComponent, data: { title: 'Edit Page' } },
  { path: 'user/:uid/website/:wid/page/:pid/widget', component: WidgetListComponent, data: { title: 'Widgets' } },
  { path: 'user/:uid/website/:wid/page/:pid/widget/new', component: WidgetChooserComponent, data: { title: 'New Widget' } },
  { path: 'user/:uid/website/:wid/page/:pid/widget/:wgid', component: WidgetEditComponent, data: { title: 'Edit Widget' } },
  { path: 'user/:uid/website/:wid/page/:pid/widget/:wgid/flickr', component: FlickrImageSearchComponent, data: { title: 'Search Flickr' } },
];

// Export the routes as module providers
export const Routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
