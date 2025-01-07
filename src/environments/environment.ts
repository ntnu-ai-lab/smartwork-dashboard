export const environment = {
    production: false,
    backend: {
      endpoints:{
        baseUrl: "http://localhost:8014/dashboard/getPatientInfo",
        activateUrl: "http://localhost:8014/dashboard/activate",
        RCTGroupUrl: "http://localhost:8014/dashboard/setRCTGroup",
        deactivateUrl: "http://localhost:8014/dashboard/deactivate",
        deleteUrl: "http://localhost:8014/dashboard/delete"
      }
    },
    defaults:{
      username: "test-username",
      email: "test@example.com",
      phone: "+47 12345678"
    }
};
