import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LspatientListComponent } from './components/lspatient-list/lspatient-list.component';
import { LspatientNewComponent } from './lspatient-new/lspatient-new.component';
import { LspatientInactiveComponent } from './lspatient-inactive/lspatient-inactive.component';

const routes: Routes = [
  {path:"listActive", component: LspatientListComponent},
  {path:"new", component: LspatientNewComponent},
  {path:"listInactive", component: LspatientInactiveComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
