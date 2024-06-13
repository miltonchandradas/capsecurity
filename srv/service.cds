using { db as my } from '../db/schema';

@path : '/service/suppliers'
service SupplierService
{
    annotate Suppliers with @restrict :
    [
        { grant : [ '*' ], to : [ 'Manager' ], where: 'country = $user.country' },
        { grant : [ 'READ' ], to : [ 'CustomerSupport' ], where: 'country = $user.country' }
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
