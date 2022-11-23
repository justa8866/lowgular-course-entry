import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map, Observable} from 'rxjs';
import { EmployeeModel } from '../model/employee.model';
import {ApiResponse} from "./api.response";
import {EmployeeResponse} from "./employee.response";

@Injectable()
export class EmployeeService {
  constructor(private _httpClient: HttpClient) {
  }

  getAll(): Observable<EmployeeModel[]>  {
    return this._httpClient.get<ApiResponse<EmployeeResponse[]>>('https://dummy.restapiexample.com/api/v1/employees')
      .pipe(map((response: ApiResponse<EmployeeResponse[]>) => {
          return response.data.map((employeeResponse: EmployeeResponse) => {
            return {
              personalNumber: employeeResponse.id,
              name: employeeResponse.employee_name,
              img: employeeResponse.profile_image,
              salary: employeeResponse.employee_salary,
              age: employeeResponse.employee_age,
            };
          })

        })
      )
  }

  delete(id: string): Observable<void>{
    return this._httpClient.delete('https://dummy.restapiexample.com/api/v1/delete/' + id).pipe(map( _ => void 0 ));
  }

  create(employee: EmployeeModel): Observable<void>{
    return this._httpClient.post('https://dummy.restapiexample.com/api/v1/create', employee).pipe(map( _ => void 0 ));
  }
}
