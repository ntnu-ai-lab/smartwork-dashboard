export interface Lspatient {
    patientId : string
    email: string;
    phone: string;
    navId: string;
    rctGroup : string | null;
    firstname: string;
    lastname: string;
    language: string;
    called: boolean | null;
    consentSent: boolean | null;
    consentApproved: boolean | null;
    activeStatus: string | null;
    baselineActivated: Date;
    baselineCompleted: Date;
    follwoup1Date: Date;
    follwoup1Completed:  Date;
    follwoup2Date: Date;
    follwoup2Completed:  Date;
    follwoup3Date: Date;
    follwoup3Completed:  Date;
    groupConfirmed: boolean;
    deactivationComment: String;
    appLoginStatus:  boolean | null;
    
}
