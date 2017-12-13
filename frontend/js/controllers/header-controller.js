myApp.controller('headerCtrl', function ($scope, $state,TemplateService, NavigationService, $timeout, toastr, $http, $stateParams, $uibModal) {
    $scope.template = TemplateService;
    $scope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
        $(window).scrollTop(0);
    });

    $.fancybox.close(true);
$scope.onlyNumbers = "^[1-9][0-9]*$";
$scope.submit = function (cartData, detailForm) {
            console.log("submiting...")
            console.log("data",cartData)
            if (cartData) {
                console.log("cartData")
                if (detailForm.$valid == true) {
                    console.log("detailForm.$valid")
                    NavigationService.submitEnquiry(cartData, function (data) {
                     console.log("data is",data)
                        if (data.data.data=="validationfailed") {
                           $scope.showmsg=true;
                        
                        }else{
                             $scope.mycart=false;
                           $scope.cartData={};
                           $scope.showmsg=false;
                             $state.reload()

                        }
                    });
                }
            }
        };



    $scope.onlyDest = [{
        "name": "Argentina"
    }, {
        "name": "Armenia"
    }, {
        "name": "Australia"
    }, {
        "name": "Austria"
    }, {
        "name": "Azerbaijan"
    }, {
        "name": "Bhutan"
    }, {
        "name": "Brazil"
    }, {
        "name": "Bulgaria"
    }, {
        "name": "Canada"
    }, {
        "name": "Chile"
    }, {
        "name": "Croatia"
    }, {
        "name": "Cruise Vacations"
    }, {
        "name": "Czech Republic"
    }, {
        "name": "Denmark"
    }, {
        "name": "Estonia"
    }, {
        "name": "Fiji Islands"
    }, {
        "name": "Finland"
    }, {
        "name": "France"
    }, {
        "name": "Georgia"
    }, {
        "name": "Germany"
    }, {
        "name": "Greece"
    }, {
        "name": "Hong Kong"
    }, {
        "name": "Hungary"
    }, {
        "name": "Iceland"
    }, {
        "name": "Indonesia"
    }, {
        "name": "Israel"
    }, {
        "name": "Italy"
    }, {
        "name": "Jamaica"
    }, {
        "name": "Japan"
    }, {
        "name": "Jordan"
    }, {
        "name": "Kenya"
    }, {
        "name": "Korea"
    }, {
        "name": "Latvia"
    }, {
        "name": "Lithuania"
    }, {
        "name": "Macau"
    }, {
        "name": "Malaysia"
    }, {
        "name": "Maldives"
    }, {
        "name": "Malta"
    }, {
        "name": "Mauritius"
    }, {
        "name": "Mexico"
    }, {
        "name": "Monaco"
    }, {
        "name": "Moscow"
    }, {
        "name": "Netherlands"
    }, {
        "name": "New Zealand"
    }, {
        "name": "Norway"
    }];
    $scope.onlyDest = _.chunk($scope.onlyDest, 10);
    console.log("imm")
});