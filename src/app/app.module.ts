import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { TranslateModule } from 'ng2-translate';

import { ModalModule } from "angular2-modal";
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';
import { ProgressbarModule } from 'ng2-bootstrap';

const routes: Routes = [
  {
    path: 'authorized',
    redirectTo: 'authorized',
    pathMatch: 'full',
  },
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'authorized',
    loadChildren: './authorized/authorized.module#AuthorizedModule',
  }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AppComponent,],
  exports: [
    TranslateModule,
    RouterModule
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ProgressbarModule.forRoot(),
    ModalModule.forRoot(),
    BootstrapModalModule,
    HttpModule,
    RouterModule.forRoot( routes, { useHash: true } ),
    TranslateModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }