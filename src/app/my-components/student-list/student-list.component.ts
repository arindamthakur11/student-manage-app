import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/student.model';
import { DataManageService } from 'src/app/services/data-manage.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {
  students: Student[] = [];
  showSuccessAlert = false;
  showErrorAlert = false;
  constructor(
    private getStudentData: DataManageService
  ) { }

  ngOnInit(): void {
    this.getStudentData.getStudentList().subscribe(
      res => {
        this.students = res;
      },
      error => {
        console.log(error);
      }
    );
  }
  deleteStudent(student: Student) {
    this.getStudentData.deleteStudent(student.id).subscribe(
      (res) => {
        this.showSuccessAlert = true;
        this.students.splice(this.students.indexOf(student),1);
        setTimeout(
          () => {
            this.showSuccessAlert = false
          },
          3000
        )
      },
      (error) => {
        this.showErrorAlert = true;
        setTimeout(
          () => {
            this.showErrorAlert = false
          },
          3000
        )
      }
    )
  }

}
