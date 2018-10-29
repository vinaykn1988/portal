import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Employee} from './employeeType';
import { HttpErrorResponse } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {


  private URL = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  getEmployees (): Observable<Employee[]> {

    return this.http.get<Employee[]>(this.URL + 'getEmployees').pipe(catchError(this.handleError('getEmployees', [])));
  }

  getEmployee (emp): Observable<Employee[]> {

    return this.http.get<Employee[]>(this.URL + 'getEmployee/' + emp).pipe(catchError(this.handleError('getEmployees', [])));
  }

  addEmployee (employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.URL + 'addEmployee', employee, httpOptions).pipe(
      catchError(this.handleError<Employee>('addEmployee'))
    );
  }

  deleteEmployee (id: any): Observable<HttpErrorResponse> {
    return this.http.delete<HttpErrorResponse>(this.URL + 'deleteEmployee/' + id).pipe(
      catchError(this.handleError<HttpErrorResponse>())
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
