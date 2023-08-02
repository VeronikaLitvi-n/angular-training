import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserListMainComponentComponent } from './components/user-list-main-component/user-list-main-component.component';
import { UseListViewComponentComponent } from './components/use-list-view-component/use-list-view-component.component';
import { UserCardComponentComponent } from './components/user-card-component/user-card-component.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { AgeHighlightDirective } from './directives/age-highlight.directive';
import { FullNamePipe } from './pipes/full-name.pipe';
import { OrderByCreationDatePipe } from './pipes/order-by-creation-date.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UserListMainComponentComponent,
    UseListViewComponentComponent,
    UserCardComponentComponent,
    AgeHighlightDirective,
    FullNamePipe,
    OrderByCreationDatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
