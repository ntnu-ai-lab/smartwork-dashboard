import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Lspatient } from '../common/lspatient';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http: HttpClient, private config: ConfigService) { }

  getPatientInfo(): Observable<Lspatient[]> {
    console.log('Using URL:', this.config.endpoints.baseUrl);
    return this.http.get<Lspatient[]>(this.config.endpoints.baseUrl);
  }

  activateBaseline(lspatient: Lspatient): Observable<any> {
    console.log(lspatient)
    return this.http.post(this.config.endpoints.activateUrl, lspatient);
  }

  updatedConsent(lspatient: Lspatient): Observable<any> {
    console.log(lspatient)
    return this.http.post(this.config.endpoints.updatedConsentURL, lspatient);
  }

  setRCTGroup(patient: {}): Observable<any> {
    console.log(patient)
    return this.http.post(this.config.endpoints.RCTGroupUrl, patient);
  }

  deactivatePatient(lspatient: Lspatient): Observable<any> {

    return this.http.post(this.config.endpoints.deactivateUrl, lspatient);
  }

  deletePatient(lspatient: Lspatient): Observable<any> {
    return this.http.post(this.config.endpoints.deleteUrl, lspatient);
  }

  triggerpasswordReset(lspatient: Lspatient): Observable<any> {
    console.log('Resetting password for:', lspatient);
    return this.http.post(this.config.endpoints.resetPasswordUrl, lspatient);
  }

}
