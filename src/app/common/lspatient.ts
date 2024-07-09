export interface Lspatient {
    patientId : string
    email: string;
    phone: string;
    navId: string;
    rctGroup : string | null;
    firstname: string;
    lastname: string;
    language: string;
    called: Boolean | null;
    activated: Boolean;
    baselineActivated: Date;
    follwoup2Date: Date;
    follwoup3Date: Date;
    groupConfirmed: Boolean | null;
}
