import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../employees.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css']
})
export class DeleteEmployeeComponent implements OnInit {

  constructor(private employeeService: EmployeeService,
    private location: Location) { }

  ngOnInit() {
  }

  onDelete(): void {

    const inputValue = (<HTMLInputElement>document.getElementById('emp_id')).value;

    console.log('Inside onDelete::', inputValue);

    // this.employeeService.deleteEmployee(inputValue)

    this.employeeService.getEmployee(inputValue).subscribe(list => {
      if (list.length >= 1) {
        this.employeeService.deleteEmployee(inputValue).subscribe(() => {
          alert(`Deleted employee with id:: ${inputValue}`);
      });
      } else {
        alert(`No employee with id:: ${inputValue}`);
      }

    });


  }

  goBack(): void {
    this.location.back();
  }

}
