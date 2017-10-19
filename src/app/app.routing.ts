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

const APP_ROUTES: Routes = [
  { path: '', component: HomeComponent , data: { skipAuth: true } },
  { path: 'test', component: TestComponent , data: { title: 'Test', skipAuth: true } },
  { path: 'login', component: LoginComponent, data: { title: 'Login', skipAuth: true } },
  { path: 'register', component: RegisterComponent, data: { title: 'Register', skipAuth: true } },
  { path: 'user/:uid', component: ProfileComponent },
  { path: 'user/:uid/website', component: WebsiteListComponent },
  { path: 'user/:uid/website/new', component: WebsiteNewComponent },
  { path: 'user/:uid/website/:wid', component: WebsiteEditComponent },
  { path: 'user/:uid/website/:wid/page', component: PageListComponent },
  { path: 'user/:uid/website/:wid/page/new', component: PageNewComponent },
  { path: 'user/:uid/website/:wid/page/:pid', component: PageEditComponent },
  { path: 'user/:uid/website/:wid/page/:pid/widget', component: WidgetListComponent },
  { path: 'user/:uid/website/:wid/page/:pid/widget/new', component: WidgetChooserComponent },
  { path: 'user/:uid/website/:wid/page/:pid/widget/:wgid', component: WidgetEditComponent },
  { path: 'user/:uid/website/:wid/page/:pid/widget/:wgid/flickr', component: FlickrImageSearchComponent }
];

// Export the routes as module providers
export const Routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
