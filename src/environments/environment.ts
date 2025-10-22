export const environment = {
    production: true,
    backend: {
      endpoints:{
        // baseUrl: "https://smartwork-dashboard.idi.ntnu.no/dashboard/getPatientInfo",
        // activateUrl: "https://smartwork-dashboard.idi.ntnu.no/dashboard/activate",
        // RCTGroupUrl: "https://smartwork-dashboard.idi.ntnu.no/dashboard/setRCTGroup",
        // deactivateUrl: "https://smartwork-dashboard.idi.ntnu.no/dashboard/deactivate",
        // deleteUrl: "https://smartwork-dashboard.idi.ntnu.no/dashboard/delete",
        // resetPasswordUrl: "https://smartwork-dashboard.idi.ntnu.no/dashboard/resetPassword",
        // updatedConsentURL: "https://smartwork-dashboard.idi.ntnu.no/dashboard/updatedConsent"
        
        // baseUrl: "http://localhost:8014/dashboard/getPatientInfo",
        // activateUrl: "http://localhost:8014/dashboard/activate",
        // RCTGroupUrl: "http://localhost:8014/dashboard/setRCTGroup",
        // deactivateUrl: "http://localhost:8014/dashboard/deactivate",
        // deleteUrl: "http://localhost:8014/dashboard/delete",
        // resetPasswordUrl: "http://localhost:8014/dashboard/resetPassword",
        // updatedConsentURL: "http://localhost:8014/dashboard/updatedConsent"
        baseUrl: (window as any).env?.BASE_URL || "http://localhost:8014/dashboard/getPatientInfo",
        activateUrl: (window as any).env?.ACTIVATE_URL || "http://localhost:8014/dashboard/activate",
        RCTGroupUrl: (window as any).env?.RCTGROUP_URL || "http://localhost:8014/dashboard/setRCTGroup",
        deactivateUrl: (window as any).env?.DEACTIVATE_URL || "http://localhost:8014/dashboard/deactivate",
        deleteUrl: (window as any).env?.DELETE_URL || "http://localhost:8014/dashboard/delete",
        resetPasswordUrl: (window as any).env?.RESET_PASSWORD_URL || "http://localhost:8014/dashboard/resetPassword",
        updatedConsentURL: (window as any).env?.UPDATED_CONSENT_URL || "http://localhost:8014/dashboard/updatedConsent"
    
      }
    },
};