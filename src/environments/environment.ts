export const environment = {
    production: false,
    backend: {
      endpoints:{
        baseUrl: "http://smartwork-dev.idi.ntnu.no:8014/dashboard/getPatientInfo",
        activateUrl: "http://smartwork-dev.idi.ntnu.no:8014/dashboard/activate",
        RCTGroupUrl: "http://smartwork-dev.idi.ntnu.no:8014/dashboard/setRCTGroup",
        deactivateUrl: "http://smartwork-dev.idi.ntnu.no:8014/dashboard/deactivate",
        deleteUrl: "http://smartwork-dev.idi.ntnu.no:8014/dashboard/delete"
      }
    },
    defaults:{
      username: "test-username",
      email: "test@example.com",
      phone: "+47 12345678"
    }
};
