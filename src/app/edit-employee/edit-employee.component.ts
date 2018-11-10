import { Component, OnInit } from '@angular/core';
import {Employee} from '../employeeType';
import {EmployeeService} from '../employees.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  employeeDetails;
  id: any;

  constructor(private employeeService: EmployeeService,
    private location: Location) { }

  ngOnInit() {
  }

  onSelect(): void {


    const inputValue = (<HTMLInputElement>document.getElementById('emp_id')).value;

    console.log('The element is value is ::' + inputValue);

    this.employeeService.getEmployee(inputValue).subscribe(list => {
      if (list.length >= 1) {
        this.employeeDetails = list;
      } else {
        alert(`No employee with id:: ${inputValue}`);
      }

    });

  }

  goBack(): void {
    this.location.back();
  }

}
