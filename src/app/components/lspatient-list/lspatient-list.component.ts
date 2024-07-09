import { Component, OnInit } from '@angular/core';
import { Lspatient } from 'src/app/common/lspatient';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-lspatient-list',
  templateUrl: './lspatient-list.component.html',
  styleUrls: ['./lspatient-list.component.css']
})
export class LspatientListComponent implements OnInit {

  lspatients: Lspatient[] = [];

    constructor(
      private backendService: BackendService
    ){}

    ngOnInit(): void {
      this.listPatients()
      }  

    listPatients() {
      this.backendService.getPatientInfo().subscribe((data:Lspatient[]) =>
        { this.lspatients = data;
          console.log(data)
        }
      )
  }

  calledSubmit(user: Lspatient): void {
    user.called = true;
    console.log('Called status for: ', user.firstname, user.lastname);
   
  }

  activateBaseline(user: Lspatient): void {
    user.activated = true;
    console.log('Activating Baseline questionaire for: ', user.firstname, user.lastname);
    this.backendService.activateBaseline(user).subscribe()
    /*
    this.backendService.activateBaseline(user).subscribe((data:any) => {
      if (data) {
      user.baselineActivated = data.BaseLineDate;
      user.follwoup2Date = data.Followup2Date;
      user.follwoup3Date = data.Followup3Date;
      console.log('Data received and assigned:', data);
    } else {
      console.error('Received null or undefined data:', data);
    }
  }, (error: any) => {
    console.error('Error activating baseline:', error);
  });
  
*/
  }

  onRctArmChange(user: Lspatient, value:any): void {
    user.rctGroup = value;
    console.log('RCT Arm for:', user.firstname, user.lastname, user.rctGroup);
  }

  onRctArmConfirm(user:Lspatient): void {
    user.groupConfirmed = true;
    const Patient = {
      patientId: user.patientId,
      email: user.email,
      phone: user.phone,
      navId: user.navId,
      rctGroup: user.rctGroup,
      firstname: user.firstname,
      lastname: user.lastname,
      language: user.language
  };
    console.log('Patient: ', Patient);
    this.backendService.setRCTGroup(Patient).subscribe();
    
   
    
  }
}

     


