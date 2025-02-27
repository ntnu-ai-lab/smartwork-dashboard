export const environment = {
    production: true,
    backend: {
      endpoints:{
        baseUrl: "https://smartwork-dev-backend-limesurvey.idi.ntnu.no/dashboard/getPatientInfo",
        activateUrl: "https://smartwork-dev-backend-limesurvey.idi.ntnu.no/dashboard/activate",
        RCTGroupUrl: "https://smartwork-dev-backend-limesurvey.idi.ntnu.no/dashboard/setRCTGroup",
        deactivateUrl: "https://smartwork-dev-backend-limesurvey.idi.ntnu.no/dashboard/deactivate",
        deleteUrl: "https://smartwork-dev-backend-limesurvey.idi.ntnu.no/dashboard/delete"
      }
    },
    defaults:{
      username: "test-username",
      email: "test@example.com",
      phone: "+47 12345678"
    }
};
