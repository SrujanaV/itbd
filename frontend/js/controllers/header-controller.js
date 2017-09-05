myApp.controller('headerCtrl', function ($scope, TemplateService) {
    $scope.template = TemplateService;
    $scope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
        $(window).scrollTop(0);
    });
    $.fancybox.close(true);
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
        "name": "India"
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
        "name": "Macao"
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
});