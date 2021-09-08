import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DataManageService } from 'src/app/services/data-manage.service';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.scss']
})
export class UpdateStudentComponent implements OnInit {
  private studentId = '';
  public showSuccessAlert = false;
  public showErrorAlert = false
  public editStudentForm = new FormGroup (
    {
      name : new FormControl(''),
      class : new FormControl(''),
      email : new FormControl(''),
      address : new FormControl('')
    }
  );
  constructor(
    private activeRoute: ActivatedRoute,
    private dataService: DataManageService
  ) { }

  ngOnInit(): void {
    this.dataService.getDataById(this.activeRoute.snapshot.params.id).subscribe(
      (res : any) => {
        this.editStudentForm = new FormGroup(
          {
            name : new FormControl(res.name),
            class : new FormControl(res.class),
            email : new FormControl(res.email),
            address : new FormControl(res.address)
          }
        )
      }
    );
  }
  editStudent(){
    this.dataService.updateStudentData(this.activeRoute.snapshot.params.id,this.editStudentForm.value).subscribe(
      (result) =>{
        this.showSuccessAlert= true;
        setTimeout(
          () =>{
            this.showSuccessAlert = false
          },
          3000
        )
      },
      (error) => {
        this.showErrorAlert = true;
        setTimeout(
          () => {
            this.showErrorAlert = false;
          }
        )
      }
    )
  }

}
