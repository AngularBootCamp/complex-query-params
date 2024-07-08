import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { EmployeeFilterComponent } from '../employee-filter/employee-filter.component';
import { EmployeeListComponent } from '../employee-list/employee-list.component';
import {
  Employee,
  EmployeeService,
  TableOptions
} from '../employees.service';

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  standalone: true,
  imports: [EmployeeFilterComponent, EmployeeListComponent, AsyncPipe]
})
export class EmployeeDashboardComponent {
  tableOptions: Observable<TableOptions>;
  employees: Observable<Employee[]>;

  constructor(employeeService: EmployeeService) {
    this.tableOptions = employeeService.tableOptions;
    this.employees = employeeService.employees;
  }
}
