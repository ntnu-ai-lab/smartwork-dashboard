export const environment = {
    production: true,
    backend: {
      endpoints:{
        //baseUrl: "http://smartwork-dashboard.idi.ntnu.no/dashboard/getPatientInfo",
        //activateUrl: "http://smartwork-dashboard.idi.ntnu.no/dashboard/activate",
        //RCTGroupUrl: "http://smartwork-dashboard.idi.ntnu.no/dashboard/setRCTGroup",
        //deactivateUrl: "http://smartwork-dashboard.idi.ntnu.no/dashboard/deactivate",
        //deleteUrl: "http://smartwork-dashboard.idi.ntnu.no/dashboard/delete",
        //resetPasswordUrl: "https://smartwork-dev-backend-limesurvey.idi.ntnu.no/dashboard/resetPassword",
        
        baseUrl: "http://localhost:8014/dashboard/getPatientInfo",
        activateUrl: "http://localhost:8014/dashboard/activate",
        RCTGroupUrl: "http://localhost:8014/dashboard/setRCTGroup",
        deactivateUrl: "http://localhost:8014/dashboard/deactivate",
        deleteUrl: "http://localhost:8014/dashboard/delete",
        resetPasswordUrl: "http://localhost:8014/dashboard/resetPassword"
      }
    },
};
