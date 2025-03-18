import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LspatientListComponent } from './components/lspatient-list/lspatient-list.component';
import { LspatientNewComponent } from './lspatient-new/lspatient-new.component';
import { LspatientInactiveComponent } from './lspatient-inactive/lspatient-inactive.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {path: "login", component: LoginComponent},
  {path: "listActive", component: LspatientListComponent, canActivate: [AuthGuard]},
  {path: "new", component: LspatientNewComponent, canActivate: [AuthGuard]},
  {path: "listInactive", component: LspatientInactiveComponent, canActivate: [AuthGuard]},
  {path: "", redirectTo: "/login", pathMatch: "full"},
  {path: "**", redirectTo: "/login"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
