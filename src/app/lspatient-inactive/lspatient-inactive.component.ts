import { Component, OnInit } from '@angular/core';
import { Lspatient } from '../common/lspatient';
import { BackendService } from '../services/backend.service';

@Component({
  selector: 'app-lspatient-inactive',
  templateUrl: './lspatient-inactive.component.html',
  styleUrls: ['./lspatient-inactive.component.css']
})
export class LspatientInactiveComponent implements OnInit {

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
        { //this.lspatients = data;
          //this.filteredPatients = data;
          // Iterate over the data and set groupConfirmed based on rctGroup
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
