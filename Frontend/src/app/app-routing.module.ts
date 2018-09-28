import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { JoinComponent } from './join/join.component';
import { GetComponent } from './get/get.component';
import { ShowCodeComponent } from './show-code/show-code.component';

const routes: Routes = [
  { path: '', redirectTo: '/create', pathMatch: 'full' },
  { path: 'create', component: CreateComponent},
  { path: 'join', component: JoinComponent},
  { path: 'get', component: GetComponent},
  { path: 'show-code', component: ShowCodeComponent}

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports : [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
