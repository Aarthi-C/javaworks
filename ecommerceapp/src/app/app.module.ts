import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { AboutComponent } from './about/about.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatListModule,
  MatSlideToggleModule
} from '@angular/material';
import {MatIconModule} from '@angular/material';
import {MenubarModule} from 'primeng/menubar';
import {ProductPostsResolver} from './product/dataresolver';
import { GalleryComponent } from './product/gallery/gallery.component';
import { SearchComponent } from './product/search/search.component';
import { LoginComponent } from './login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AuthService} from './util/authservice';
import {SearchRequestInterceptor} from './util/SearchRequestInterceptor';
import { CountryPipe } from './util/country.pipe';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import {ObservableUtility} from './util/observableutility';
import {CartComponent} from './order/cart/cart.component';
import { RegisterComponent } from './register/register.component';
import {EqualValidator} from './register/matchvalidator';
import { NotificationComponent } from './home/notification/notification.component';
import { SenderComponent } from './home/sender/sender.component';
import { NotifierComponent } from './home/notifier/notifier.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProductComponent,
    AboutComponent,
    GalleryComponent,
    SearchComponent,
    LoginComponent,
    CountryPipe,
    ObservableUtility,
    CartComponent,
    RegisterComponent,
    EqualValidator,
    NotificationComponent,
    SenderComponent,
    NotifierComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BreadcrumbModule,
    MenubarModule,
    HttpClientModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })

  ],
  providers: [ProductPostsResolver, AuthService, {
    provide: HTTP_INTERCEPTORS,
    useClass: SearchRequestInterceptor,
    multi: true
  },
    {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
