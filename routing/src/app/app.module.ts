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

const routes: Routes = [
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
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
