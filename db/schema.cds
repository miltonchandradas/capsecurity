namespace db;

using {
    managed,
    cuid,
} from '@sap/cds/common';


entity Suppliers : cuid, managed {
    companyName  : String;
    contactName  : String;
    contactTitle : String;
    address      : String;
    city         : String;
    country      : String;
}
