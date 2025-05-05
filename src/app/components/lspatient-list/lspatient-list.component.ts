import { Component, OnInit } from '@angular/core';
import { Lspatient } from 'src/app/common/lspatient';
import { BackendService } from 'src/app/services/backend.service';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-lspatient-list',
  templateUrl: './lspatient-list.component.html',
  styleUrls: ['./lspatient-list.component.css']
})
export class LspatientListComponent implements OnInit {

  lspatients: Lspatient[] = [];
  filteredPatients: Lspatient[] = [];
  isResetting: boolean = false;
  
  groups: {value: string, label: string}[] = [
    { value: "Control", label: "Control" },
    { value: "Intervention", label: "Intervention"}
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
    console.log('Selection event fired. Value:', value);
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

 
  onConfirmWarning(user: Lspatient): void {
    const confirmation = window.confirm(
      "On Confirm the user will receive a login to the app. If you want to change the group it can be done now via the Reset button.\n\n" + 
      "Click OK to confirm, Cancel to Reset.\n\n"
      );
  
    if (confirmation) {
      this.onRctArmConfirm(user);
    }
  }
    

  onGroupReset(user: Lspatient): void {
    console.log('Resetting group for:', user.firstname, user.lastname);
    user.rctGroup = null;  // Reset selection
    user.groupConfirmed = false; // Allow re-selection
  }

  triggerPasswordReset(user: Lspatient): void {
    this.isResetting = true;
    console.log('Triggering password reset for:', user.firstname, user.lastname);
    this.backendService.triggerpasswordReset(user).subscribe(
      response => {
        // Handle success
        this.isResetting = false;
      },
      error => {
        // Handle error
        this.isResetting = false;
      }
    );
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

     


