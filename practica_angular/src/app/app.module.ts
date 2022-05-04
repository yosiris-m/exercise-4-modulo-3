import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from "@angular/material/list";
import {MatCardModule} from "@angular/material/card";
import {PersonDataComponent} from "./person-data/person-data.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatTableModule} from "@angular/material/table";
import {ScrollingModule} from "@angular/cdk/scrolling";
import {MatChipsModule} from "@angular/material/chips";
import {MatIconModule} from "@angular/material/icon";


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    FormsModule,
    MatListModule,
    MatCardModule,
    FormsModule,
    MatTableModule,
    ScrollingModule,
    ReactiveFormsModule,
    MatChipsModule,
    MatIconModule,
  ],
  declarations: [
    AppComponent,
    PersonDataComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
