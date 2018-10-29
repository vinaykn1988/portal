import { Component, OnInit, Input } from '@angular/core';
import {EmployeeService} from '../employees.service';
import {Employee} from '../employeeType';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {

  employeesList: Employee[];

  title = 'Employees Portal';

  constructor(private router: Router, private employeeService: EmployeeService) {
   }

  ngOnInit() {
    this.getAllEmployees();
  }


  getAllEmployees(): void {
    this.employeeService.getEmployees().subscribe(list => {
      this.employeesList = list;
    });
  }

}
