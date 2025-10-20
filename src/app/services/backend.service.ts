import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Lspatient } from '../common/lspatient';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http: HttpClient) { }

  getPatientInfo(): Observable<Lspatient[]> {
    return this.http.get<Lspatient[]>(environment.backend.endpoints.baseUrl);
  }

  activateBaseline(lspatient: Lspatient): Observable<any> {
    console.log(lspatient)
    return this.http.post(environment.backend.endpoints.activateUrl, lspatient);
  }

  updatedConsent(lspatient: Lspatient): Observable<any> {
    console.log(lspatient)
    return this.http.post(environment.backend.endpoints.updatedConsentURL, lspatient);
  }

  setRCTGroup(patient: {}): Observable<any> {
    console.log(patient)
    return this.http.post(environment.backend.endpoints.RCTGroupUrl, patient);
  }

  deactivatePatient(lspatient: Lspatient): Observable<any> {

    return this.http.post(environment.backend.endpoints.deactivateUrl, lspatient);
  }

  deletePatient(lspatient: Lspatient): Observable<any> {
    return this.http.post(environment.backend.endpoints.deleteUrl, lspatient);
  }

  triggerpasswordReset(lspatient: Lspatient): Observable<any> {
    console.log('Resetting password for:', lspatient);
    return this.http.post(environment.backend.endpoints.resetPasswordUrl, lspatient);
  }

}
