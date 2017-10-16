import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { TestComponent } from './components/test/test.component';
import { Routing } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// #region App services
import { UserService } from './services/user.service.client';
import { WebsiteService } from './services/website.service.client';
import { PageService } from './services/page.service.client';
import { WidgetService } from './services/widget.service.client';
import { InteractionsService } from './services/interactions.service.client';
import { AuthService } from './services/auth.service.client';
import { TestService } from './services/test.service.client';
// #endregion

// #region App Components
// user components
import { LoginComponent } from './components/user/login/login.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { RegisterComponent } from './components/user/register/register.component';
// website components
import { WebsiteNewComponent } from './components/website/website-new/website-new.component';
import { WebsiteEditComponent } from './components/website/website-edit/website-edit.component';
import { WebsiteListComponent } from './components/website/website-list/website-list.component';
// page components
import { PageNewComponent } from './components/page/page-new/page-new.component';
import { PageEditComponent } from './components/page/page-edit/page-edit.component';
import { PageListComponent } from './components/page/page-list/page-list.component';
// widget components
import { WidgetChooserComponent } from './components/widget/widget-chooser/widget-chooser.component';
// widget edit components
import { WidgetEditComponent } from './components/widget/widget-edit/widget-edit.component';
import { WidgetHeaderEditComponent } from './components/widget/widget-edit/widget-header/widget-header.component';
import { WidgetImageEditComponent } from './components/widget/widget-edit/widget-image/widget-image.component';
import { WidgetYoutubeEditComponent } from './components/widget/widget-edit/widget-youtube/widget-youtube.component';
import { WidgetHtmlEditComponent } from './components/widget/widget-edit/widget-html/widget-html.component';
// widget list components
import { WidgetListComponent } from './components/widget/widget-list/widget-list.component';
import { WidgetHeaderComponent } from './components/widget/widget-list/widget-header/widget-header.component';
import { WidgetImageComponent } from './components/widget/widget-list/widget-image/widget-image.component';
import { WidgetYoutubeComponent } from './components/widget/widget-list/widget-youtube/widget-youtube.component';
import { WidgetHtmlComponent } from './components/widget/widget-list/widget-html/widget-html.component';

// shared components
import { FooterComponent } from './components/shared/footer/footer.component';
import { AlertComponent } from './components/shared/alert/alert.component';
import { LoaderComponent } from './components/shared/loader/loader.component';


// #endregion

@NgModule({
  // Declare components here
  declarations: [
    AppComponent,
    HomeComponent,
    TestComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent,
    WebsiteNewComponent,
    WebsiteEditComponent,
    WebsiteListComponent,
    PageNewComponent,
    PageEditComponent,
    PageListComponent,
    WidgetChooserComponent,
    WidgetEditComponent,
    WidgetHeaderEditComponent,
    WidgetImageEditComponent,
    WidgetYoutubeEditComponent,
    WidgetHtmlEditComponent,
    WidgetListComponent,
    WidgetHeaderComponent,
    WidgetImageComponent,
    WidgetYoutubeComponent,
    WidgetHtmlComponent,
    FooterComponent,
    AlertComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    Routing
  ],
  // Client Side services here
  providers: [TestService, UserService, WebsiteService, PageService, WidgetService, AuthService, InteractionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
