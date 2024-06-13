using { db as my } from '../db/schema';

@path : '/service/suppliers'
service SupplierService
{
    entity Suppliers as
        projection on my.Suppliers;
}

annotate SupplierService with @requires :
[
    'authenticated-user'
];
