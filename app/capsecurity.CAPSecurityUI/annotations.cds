using SupplierService as service from '../../srv/service';
annotate service.Suppliers with @(
    UI.FieldGroup #GeneratedGroup : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Label : 'Company Name',
                Value : companyName,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Contact Name',
                Value : contactName,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Contact Title',
                Value : contactTitle,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Address',
                Value : address,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Country',
                Value : country,
            },
        ],
    },
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            ID : 'GeneratedFacet1',
            Label : 'General Information',
            Target : '@UI.FieldGroup#GeneratedGroup',
        },
    ],
     UI.HeaderInfo: {
        TypeName: 'Suppliers',
        TypeNamePlural: 'Suppliers',
        
    },
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Label : 'Company Name',
            Value : companyName,
        },
        {
            $Type : 'UI.DataField',
            Label : 'Contact Name',
            Value : contactName,
        },
        {
            $Type : 'UI.DataField',
            Label : 'Contact Title',
            Value : contactTitle,
        },
        {
            $Type : 'UI.DataField',
            Label : 'Address',
            Value : address,
        },
        {
            $Type : 'UI.DataField',
            Label : 'Country',
            Value : country,
        },
    ],
);

