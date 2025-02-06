export const environment = {
    production: false,
    backend: {
      endpoints:{
        baseUrl: "http://smartwork-dev-backend-limesurvey.idi.ntnu.no/dashboard/getPatientInfo",
        activateUrl: "http://smartwork-dev-backend-limesurvey.idi.ntnu.no/dashboard/activate",
        RCTGroupUrl: "http://smartwork-dev-backend-limesurvey.idi.ntnu.no/dashboard/setRCTGroup",
        deactivateUrl: "http://smartwork-dev-backend-limesurvey.idi.ntnu.no/dashboard/deactivate",
        deleteUrl: "http://smartwork-dev-backend-limesurvey.idi.ntnu.no/dashboard/delete"
      }
    },
    defaults:{
      username: "test-username",
      email: "test@example.com",
      phone: "+47 12345678"
    }
};
