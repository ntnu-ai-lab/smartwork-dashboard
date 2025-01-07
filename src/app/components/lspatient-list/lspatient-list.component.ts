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
  filteredPatients: Lspatient[] = [];
  groups: string[] = [
    "Control",
    "Intervention"
  ];

    constructor(
      private backendService: BackendService
    ){}

    ngOnInit(): void {
      this.listPatients()
      }  

    listPatients() {
      this.backendService.getPatientInfo().subscribe((data:Lspatient[]) =>
        { 
          // Iterate over the data and set groupConfirmed based on rctGroup
          this.lspatients = data.map(patient => ({
            ...patient,
          groupConfirmed: patient.rctGroup !== null
      }));

      // Assuming you want filteredPatients to be the same as lspatients initially
      this.filteredPatients = [...this.lspatients];
      this.filteredPatients.sort((b, a) => {
        return new Date(a.baselineActivated).getTime() - new Date(b.baselineActivated).getTime();
      });

      console.log(this.lspatients);
        }
      )
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
      language: user.language
  };
    
    this.backendService.setRCTGroup(Patient).subscribe();
    
  
  }

  
  deletePatient(user: Lspatient): void {
    this.backendService.deletePatient(user).subscribe();
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

     


