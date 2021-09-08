import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Student } from '../models/student.model';

@Injectable({
  providedIn: 'root'
})
export class DataManageService {
  apiUrl = 'http://localhost:3000/students';
  constructor(
    private http : HttpClient 
  ) { }

  getStudentList(){
    return this.http.get<Student[]>(this.apiUrl);
  }

  addNewStudent(reqBody:{}){
    return this.http.post(this.apiUrl,reqBody);
  }
  deleteStudent(studentId:string){
    return this.http.delete(`${this.apiUrl}/${studentId}`);
  }

  getDataById(studentId: string){
    return this.http.get(`${this.apiUrl}/${studentId}`)
  }

  updateStudentData(studentId:string,reqBody: Student){
    return this.http.put(`${this.apiUrl}/${studentId}`,reqBody)
  }
}
