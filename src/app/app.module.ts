import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {AdminComponent} from './Admin/admin.component';
import {ProgrammeComponent} from './Programmes/programme.component';

@NgModule({
  declarations: [AppComponent,AdminComponent,ProgrammeComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
