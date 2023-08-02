import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserListMainComponentComponent } from './components/user-list-main-component/user-list-main-component.component';
import { UseListViewComponentComponent } from './components/use-list-view-component/use-list-view-component.component';
import { UserCardComponentComponent } from './components/user-card-component/user-card-component.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListMainComponentComponent,
    UseListViewComponentComponent,
    UserCardComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
