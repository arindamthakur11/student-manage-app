import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Student } from 'src/app/models/student.model';
import { DataManageService } from 'src/app/services/data-manage.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})
export class AddStudentComponent implements OnInit {
  public showSuccessAlert : boolean = false;
  public showErrorAlert : boolean = false
  public addStudent = new FormGroup({
    studentName : new FormControl(''),
    studentClass : new FormControl(''),
    studentEmail: new FormControl(''),
    studentAddress: new FormControl('')
  })

  constructor(
    private apiService : DataManageService
  ) { }

  ngOnInit(): void {
  }

  addNewStudent(){
    let reqBody= {
      name:this.addStudent.value.studentName,
      class: this.addStudent.value.studentClass,
      email: this.addStudent.value.studentEmail,
      address: this.addStudent.value.studentAddress
    }
    this.apiService.addNewStudent(reqBody).subscribe(
      (res) =>{
        this.showSuccessAlert = true;
        this.addStudent.reset({});
        setTimeout(
          () => {
            this.showSuccessAlert = false;
          },
          3000
        );
      },
      (error) =>{
        this.showErrorAlert = true;
        setTimeout(
          () => {
            this.showErrorAlert = false;
          },
          3000
        );
      }
    )
  }

}
