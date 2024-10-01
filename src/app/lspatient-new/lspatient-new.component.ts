import { Component, OnInit} from '@angular/core';
import { Lspatient } from 'src/app/common/lspatient';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-lspatient-new',
  templateUrl: './lspatient-new.component.html',
  styleUrls: ['./lspatient-new.component.css']
})
export class LspatientNewComponent implements OnInit {

  lspatients: Lspatient[] = [];
  filteredPatients: Lspatient[] = [];

    constructor(
      private backendService: BackendService
    ){}

    ngOnInit(): void {
      this.listPatients()
      }  

    listPatients() {
      this.backendService.getPatientInfo().subscribe((data:Lspatient[]) =>
        { 
      this.lspatients = data.map(patient => ({
        ...patient,
        groupConfirmed: patient.rctGroup !== null
      }));

      // Assuming you want filteredPatients to be the same as lspatients initially
      this.filteredPatients = [...this.lspatients];

      console.log(this.lspatients);
        }
      )
  }

  calledSubmit(user: Lspatient): void {
    user.called = true;
    console.log('Called status for: ', user.firstname, user.lastname);
   
  }

  activateBaseline(user: Lspatient): void {
    user.activeStatus = "active";
    console.log('Activating Baseline questionaire for: ', user.firstname, user.lastname);
    this.backendService.activateBaseline(user).subscribe();
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
  
  deactivatePatient(user: Lspatient, comment: string): void {
    user.activeStatus = "Inactive"
    user.deactivationComment = comment
    console.log('Deactivating Patient: ', user.firstname, user.lastname, comment);
    this.backendService.deactivatePatient(user).subscribe();
  }

  onRctArmChange(user: Lspatient, value:any): void {
    user.rctGroup = value;
    console.log('RCT Arm for:', user.firstname, user.lastname, user.rctGroup);
  }

  onRctArmConfirm(user:Lspatient): void {
    user.groupConfirmed = true;
    console.log('Patient: ', user.rctGroup);
    const Patient = {
      patientId: user.patientId,
      email: user.email,
      phone: user.phone,
      navId: user.navId,
      rctGroup: user.rctGroup,
      firstname: user.firstname,
      lastname: user.lastname,
      language: user.language,
      
  };
    
    this.backendService.setRCTGroup(Patient).subscribe();
    
  
  }
  applyFilter(event: Event): void {
    let searchTerm = (event.target as HTMLInputElement).value;
    console.log(searchTerm)
    searchTerm = searchTerm.toLowerCase();
    this.filteredPatients = this.lspatients.filter(patient => patient.firstname.toLowerCase().includes(searchTerm)||
                                                              patient.lastname.toLowerCase().includes(searchTerm) ||
                                                              patient.patientId.toLowerCase().includes(searchTerm) ||
                                                              patient.navId.toLowerCase().includes(searchTerm) ||
                                                              patient.email.toLowerCase().includes(searchTerm)
                                                            );
  }
}
{

}
