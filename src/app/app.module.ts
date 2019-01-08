
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { NgbdModalFocus } from './user-modal/user-modal.component';
import { UsersComponent } from './users/users.component';
import { SelectRoleComponent } from './select-role/select-role.component';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule, NgbModule],
  declarations: [AppComponent, NgbdModalFocus, SelectRoleComponent, UsersComponent],
  entryComponents: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
