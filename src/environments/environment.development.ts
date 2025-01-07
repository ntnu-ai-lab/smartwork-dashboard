export const environment = {
    production: true,
    backend: {
      endpoints:{
        baseUrl: "http://localhost:8014/dashboard/getPatientInfo",
        activateUrl: "http://localhost:8014/dashboard/activate",
        RCTGroupUrl: "http://localhost:8014/dashboard/setRCTGroup",
        deactivateUrl: "http://localhost:8014/dashboard/deactivate",
        deleteUrl: "http://localhost:8014/dashboard/delete"
       
      }
    },
};
