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
        
        baseUrl: "http://localhost:8014/dashboard/getPatientInfo",
        activateUrl: "http://localhost:8014/dashboard/activate",
        RCTGroupUrl: "http://localhost:8014/dashboard/setRCTGroup",
        deactivateUrl: "http://localhost:8014/dashboard/deactivate",
        deleteUrl: "http://localhost:8014/dashboard/delete",
        resetPasswordUrl: "http://localhost:8014/dashboard/resetPassword",
        updatedConsentURL: "http://localhost:8014/dashboard/updatedConsent"
      }
    },
};