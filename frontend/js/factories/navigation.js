var adminURL = "";
var adminurl = "https://intimebydesign.com/api/";
if (isproduction) {
  adminURL = "https://intimebydesign.com/demo/index.php";
} else {
  adminURL = "http://localhost/demo/index.php";
}


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





    };




});