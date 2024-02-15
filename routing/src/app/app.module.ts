import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainComponent } from './view/main/main.component';
import { DashboardComponent } from './view/dashboard/dashboard.component';
import { ManageCustomersComponent } from './view/manage-customers/manage-customers.component';
import { ManageItemsComponent } from './view/manage-items/manage-items.component';
import { NotFoundComponent } from './view/not-found/not-found.component';
import { LoginComponent } from './view/login/login.component';
import {RouterModule, Routes} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {authenticationGuard} from "./guard/authentication.guard";

const mainRoutes: Routes = [
  {
    path: 'home',
    component: DashboardComponent
  },
  {
    path: 'customers',
    component: ManageCustomersComponent
  },
  {
    path: 'items',
    component: ManageItemsComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/app/home'
  }
];

const appRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'app',
    component: MainComponent,
    children: mainRoutes,
    canActivate: [authenticationGuard]
  }
];



@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    DashboardComponent,
    ManageCustomersComponent,
    ManageItemsComponent,
    NotFoundComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
