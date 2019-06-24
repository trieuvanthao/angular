import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {SharedModule} from './shared/shared.module';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {HeaderComponent} from './shared/header.component';
import {FooterComponent} from './shared/footer/footer.component';
import {HomeModule} from './home/home.module';
import {AuthModule} from './auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    RouterModule,
    AppRoutingModule,
    HomeModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
