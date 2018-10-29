import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';

const routes: Routes = [
  { path: '', redirectTo: '/getEmployees', pathMatch: 'full' },
  { path: 'getEmployees', component: EmployeesListComponent },
  {path: 'addEmployee', component: AddEmployeeComponent},
  {path: 'editEmployee', component: EditEmployeeComponent},
  {path: 'deleteEmployee', component: DeleteEmployeeComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}
