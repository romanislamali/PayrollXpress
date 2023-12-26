import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from '../api.response';
import { SalaryGrade } from '../model/salary-grade.model';

@Injectable({
  providedIn: 'root'
})
export class SalaryGradeService {

  baseUrl: string = "http://localhost:8090";
  constructor(private httpClient: HttpClient) { }

  addSalaryGrade(salaryGrade: SalaryGrade): Observable<ApiResponse> {
    return this.httpClient.post<ApiResponse>(this.baseUrl + "/salarygrade/add", salaryGrade);
  }

  getAllSalaryGrade(): Observable<SalaryGrade> {
    return this.httpClient.get<SalaryGrade>(this.baseUrl+"/salarygrade/all");
  }

  deleteSalaryGradeById(id: number): Observable<ApiResponse> {
    return this.httpClient.delete<ApiResponse>(this.baseUrl+"/salarygrade/delete/"+id);
  }

  updateSalaryGrade(id: number, salaryGrade: SalaryGrade): Observable<ApiResponse> {
    return this.httpClient.put<ApiResponse>(this.baseUrl+"/salarygrade/update/"+salaryGrade.id , salaryGrade);
  }

  getSalaryGradeById(id: number): Observable<any> {
    return this.httpClient.get<any>(this.baseUrl+"/salarygrade/"+id);
  }

  getSalaryLength(): Observable<any> {
    return this.httpClient.get<any>(this.baseUrl+"/salarygrade/check");
  }
}
