myApp.controller('footerCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $http, $stateParams, $uibModal) {
    $scope.template = TemplateService;
    $scope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
        $(window).scrollTop(0);
    });
    console.log("inside footerctrl")
$scope.submitEmail=function(data){

     NavigationService.saveMail(data, function (data1) {
         console.log("go");
         $scope.data={};
         if(data1.value==true){
             
         }
      });
}

});