using { db as my } from '../db/schema';

@path : '/service/suppliers'
service SupplierService
{
    annotate Suppliers with @restrict :
    [
        { grant : [ '*' ], to : [ 'Manager' ] },
        { grant : [ 'READ' ], to : [ 'CustomerSupport' ] }
    ];

    entity Suppliers as
        projection on my.Suppliers;
}

annotate SupplierService with @requires :
[
    'authenticated-user',
    'Manager',
    'CustomerSupport'
];
