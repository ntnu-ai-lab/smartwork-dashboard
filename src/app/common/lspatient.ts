export interface Lspatient {
    patientId : string
    email: string;
    phone: string;
    navId: string;
    rctGroup : string;
    firstname: string;
    lastname: string;
    language: string;
    called: Boolean | false;
    activeStatus: string | null;
    baselineActivated: Date;
    baselineCompleted: Date;
    follwoup2Date: Date;
    follwoup2Completed:  Date;
    follwoup3Date: Date;
    follwoup3Completed:  Date;
    follwoup4Date: Date;
    follwoup4Completed:  Date;
    groupConfirmed: Boolean;
    deactivationComment: String;
    
}
