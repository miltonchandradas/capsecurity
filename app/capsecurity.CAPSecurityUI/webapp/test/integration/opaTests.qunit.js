sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'capsecurity/CAPSecurityUI/test/integration/FirstJourney',
		'capsecurity/CAPSecurityUI/test/integration/pages/SuppliersList',
		'capsecurity/CAPSecurityUI/test/integration/pages/SuppliersObjectPage'
    ],
    function(JourneyRunner, opaJourney, SuppliersList, SuppliersObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('capsecurity/CAPSecurityUI') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheSuppliersList: SuppliersList,
					onTheSuppliersObjectPage: SuppliersObjectPage
                }
            },
            opaJourney.run
        );
    }
);