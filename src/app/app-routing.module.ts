import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentComponent } from './my-components/add-student/add-student.component';
import { LoginUserComponent } from './my-components/login-user/login-user.component';
import { RegisterUserComponent } from './my-components/register-user/register-user.component';
import { StudentListComponent } from './my-components/student-list/student-list.component';
import { UpdateStudentComponent } from './my-components/update-student/update-student.component';

const routes: Routes = [
  {
    component:RegisterUserComponent,
    path:'registration'
  },
  {
    component:LoginUserComponent,
    path:'login'
  },
  {
    component:StudentListComponent,
    path:'student-list'
  },
  {
    component:AddStudentComponent,
    path:'add-student'
  },
  {
    component:UpdateStudentComponent,
    path:'update-student/:id'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
