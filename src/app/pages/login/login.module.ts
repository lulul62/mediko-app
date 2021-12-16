import { NgModule } from '@angular/core';

import { LoginRoutingModule } from './login-routing.module';

import { LoginComponent } from './login.component';

import { NzButtonModule } from 'ng-zorro-antd/button';

import { NzCardModule } from 'ng-zorro-antd/card';
import { FormsModule } from '@angular/forms';



@NgModule({
  imports: [LoginRoutingModule, NzButtonModule, NzCardModule, FormsModule],
  declarations: [LoginComponent],
  exports: [LoginComponent],
  providers: [
  ],
})
export class LoginModule {

}
