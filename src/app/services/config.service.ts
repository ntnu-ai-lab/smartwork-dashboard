import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ConfigService {
  private env = (window as any).env || {};

  readonly endpoints = {
    baseUrl: this.env.BASE_URL || 'http://localhost:8014/dashboard/getPatientInfo',
    activateUrl: this.env.ACTIVATE_URL || 'http://localhost:8014/dashboard/activate',
    updatedConsentURL: this.env.UPDATED_CONSENT_URL || 'http://localhost:8014/dashboard/updatedConsent',
    RCTGroupUrl: this.env.RCTGROUP_URL || 'http://localhost:8014/dashboard/setRCTGroup',
    deactivateUrl: this.env.DEACTIVATE_URL || 'http://localhost:8014/dashboard/deactivate',
    deleteUrl: this.env.DELETE_URL || 'http://localhost:8014/dashboard/delete',
    resetPasswordUrl: this.env.RESET_PASSWORD_URL || 'http://localhost:8014/dashboard/resetPassword'
  };
}
