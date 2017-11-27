myApp.factory('NavigationService', function ($http) {
    var navigation = [{
            name: "Home",
            classis: "active",
            anchor: "home",
            subnav: [{
                name: "Subnav1",
                classis: "active",
                anchor: "home"
            }]
        }, {
            name: "Form",
            classis: "active",
            anchor: "form",
            subnav: []
        },
        {
            name: "Grid",
            classis: "active",
            anchor: "grid",
            subnav: []
        }
    ];

    return {
        getNavigation: function () {
            return navigation;
        },


submitEnquiry: function (myForm, callback) {
            $http({
                url: adminurl + 'Enquiry/saveMailData',
                method: 'POST',
                data: myForm
            }).then(callback);
        },
        saveMail: function (myForm, callback) {
            $http({
                url: adminurl + 'EmailInfo/save',
                method: 'POST',
                data: myForm
            }).then(callback);
        },





    };




});