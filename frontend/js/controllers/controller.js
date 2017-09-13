myApp.controller('HomeCtrl', function ($scope, TemplateService, NavigationService, $timeout, $state) {
        $scope.template = TemplateService.getHTML("content/home.html");
        TemplateService.title = "Home"; //This is the Title of the Website
        $scope.navigation = NavigationService.getNavigation();
        $scope.formData = {};

        $scope.gotoFun = function (id) {
            $state.go('customdestination', {
                id: id
            })

        }
        $scope.search = function (name) {
            $scope.goTo = name;
            $scope.gotoFun($scope.goTo);
        }
        $scope.mySlides = [{
            "img": "img/bg1.jpg"
        }, {
            "img": "img/bg2.jpg"
        }, {
            "img": "img/bg3.jpg"
        }, {
            "img": "img/bg4.jpg"
        }];
        $scope.popularDestination = [{
            "image": "img/australia.jpg",
            "name": "Australia"
        }, {
            "image": "img/brazil.jpg",
            "name": "Brazil"
        }, {
            "image": "img/canada.jpg",
            "name": "Canada"
        }, {
            "image": "img/france.jpg",
            "name": "France"
        }];
        $scope.popularAttraction = [{
            "image1": "img/italy.jpg",
            "name": "Italy"
        }, {
            "image1": "img/cruise.jpg",
            "name": "Cruise Vacations"
        }, {
            "image1": "img/hongkong.jpg",
            "name": "Hong Kong"
        }, {
            "image1": "img/uk.jpg",
            "name": "United Kingdom"
        }];
        $scope.dropDown = [{
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
        }, {
            "name": "Peru"
        }, {
            "name": "Phillippines"
        }, {
            "name": "Poland"
        }, {
            "name": "Portugal"
        }, {
            "name": "Puerto Rico"
        }, {
            "name": "River Cruises"
        }, {
            "name": "Rwanda"
        }, {
            "name": "Seychelles"
        }, {
            "name": "Singapore"
        }, {
            "name": "Slovakia"
        }, {
            "name": "Slovenia"
        }, {
            "name": "South Africa"
        }, {
            "name": "Srilanka"
        }, {
            "name": "St.Petersburg"
        }, {
            "name": "Sweden"
        }, {
            "name": "Switzerland"
        }, {
            "name": "Tanzania"
        }, {
            "name": "Thailand"
        }, {
            "name": "United Arab of Emirates"
        }, {
            "name": "United Kingdom"
        }, {
            "name": "United States of America"
        }, {
            "name": "Zimbabwe"
        }];


        // myApp.filter('safeHtml', function ($sce) {
        //         return function (val) {
        //             return $sce.trustAsHtml(val);
        //         };

    })

    .controller('FormCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $http) {
        $scope.template = TemplateService.getHTML("content/form.html");
        TemplateService.title = "Form"; //This is the Title of the Website
        $scope.navigation = NavigationService.getNavigation();
        $scope.formSubmitted = false;
        // $scope.data = {
        //     name: "Chintan",
        //     "age": 20,
        //     "email": "chinyan@wohlig.com",
        //     "query": "query"
        // };
        $scope.submitForm = function (data) {
            console.log("This is it");
            return new Promise(function (callback) {
                $timeout(function () {
                    callback();
                }, 5000);
            });
        };
    })
    .controller('DestinationCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $http) {
        $scope.template = TemplateService.getHTML("content/destination.html");
        TemplateService.title = "Destination"; // This is the Title of the Website
        $scope.navigation = NavigationService.getNavigation();
        $scope.DestinationLand = [{
            "name": "Argentina",
            "image": "img/dest/argentina.jpg",
        }, {
            "name": "Fiji",
            "image": "img/dest/fiji_text.jpg",
        }, {
            "name": "Korea",
            "image": "img/dest/korea.jpg",
        }, {
            "name": "Puerto Rico",
            "image": "img/dest/puerto_rico_text.jpg",
        }, {
            "name": "Portugal",
            "image": "img/dest/portugal.jpg",
        }, {
            "name": "River Cruise",
            "image": "img/dest/river_cruise.jpg",
        }, {
            "name": "Rwanda",
            "image": "img/dest/rwanda.jpg",
        }, {
            "name": "Zimbabwe",
            "image": "img/dest/zimbabwe.jpg",
        }];

        $scope.DestinationLand = _.chunk($scope.DestinationLand, 2);
        for (var i = 0; i < $scope.DestinationLand.length; i++) {
            $scope.DestinationLand[i] = _.chunk($scope.DestinationLand[i], 2);
        }

        $scope.allDestination = [{
            "name": "Argentina",
            "image": "img/dest/argentina.jpg",
        }, {
            "name": "Armenia",
            "image": "img/dest/armenia.jpg",
        }, {
            "name": "Australia",
            "image": "img/dest/australia.jpg",
        }, {
            "name": "Austria",
            "image": "img/dest/argentina.jpg",
        }, {
            "name": "Bhutan",
            "image": "img/dest/bhutan.jpg",
        }, {
            "name": "Brazil",
            "image": "img/dest/brazil.jpg",
        }, {
            "name": "Bulgaria",
            "image": "img/dest/bulgaria.jpg",
        }, {
            "name": "Canada",
            "image": "img/dest/canada.jpg",
        }, {
            "name": "Chile",
            "image": "img/dest/chile.jpg",
        }, {
            "name": "Croatia",
            "image": "img/dest/croatia.jpg",
        }, {
            "name": "Cruise ",
            "image": "img/dest/cruise.jpg",
        }, {
            "name": "Czechia",
            "image": "img/dest/czech.jpg",
        }, {
            "name": "Denmark",
            "image": "img/dest/denmark.jpg",
        }, {
            "name": "Estonia",
            "image": "img/dest/estonia.jpg",
        }, {
            "name": "Fiji",
            "image": "img/dest/fiji.jpg",
        }, {
            "name": "Finland",
            "image": "img/dest/finland.jpg",
        }, {
            "name": "France",
            "image": "img/dest/france.jpg",
        }, {
            "name": "Georgia",
            "image": "img/dest/georgia.jpg",
        }, {
            "name": "Germany",
            "image": "img/dest/germany.jpg",
        }, {
            "name": "Greece",
            "image": "img/dest/greece.jpg",
        }, {
            "name": "Hong Kong",
            "image": "img/dest/hongkong.jpg",
        }, {
            "name": "Hungary",
            "image": "img/dest/hungary.jpg",
        }, {
            "name": "Iceland",
            "image": "img/dest/iceland.jpg",
        }, {
            "name": "Indonesia",
            "image": "img/dest/indonesia.jpg",
        }, {
            "name": "Israel",
            "image": "img/dest/israel.jpg",
        }, {
            "name": "Italy",
            "image": "img/dest/italy.jpg",
        }, {
            "name": "Jamaica",
            "image": "img/dest/jamaica.jpg",
        }, {
            "name": "Japan",
            "image": "img/dest/japan.jpg",
        }, {
            "name": "Jordan",
            "image": "img/dest/jordan.jpg",
        }, {
            "name": "Kenya",
            "image": "img/dest/kenya.jpg",
        }, {
            "name": "Korea",
            "image": "img/dest/korea.jpg",
        }, {
            "name": "Latvia",
            "image": "img/dest/latvia.jpg",
        }, {
            "name": "Lithuania",
            "image": "img/dest/lithuania.jpg",
        }, {
            "name": "Macau",
            "image": "img/dest/macao.jpg",
        }, {
            "name": "Malaysia",
            "image": "img/dest/malaysia.jpg",
        }, {
            "name": "Maldives",
            "image": "img/dest/maldives.jpg",
        }, {
            "name": "Malta",
            "image": "img/dest/malta.jpg",
        }, {
            "name": "Mauritius",
            "image": "img/dest/mauritius.jpg",
        }, {
            "name": "Mexico",
            "image": "img/dest/mexico.jpg",
        }, {
            "name": "Monaco",
            "image": "img/dest/monaco.jpg",
        }, {
            "name": "Moscow",
            "image": "img/dest/moscow.jpg",
        }, {
            "name": "Netherlands",
            "image": "img/dest/netherlands.jpg",
        }, {
            "name": "New Zealand",
            "image": "img/dest/new_zealand.jpg",
        }, {
            "name": "Norway",
            "image": "img/dest/norway.jpg",
        }, {
            "name": "Peru",
            "image": "img/dest/peru.jpg",
        }, {
            "name": "Philippines",
            "image": "img/dest/phillippines.jpg",
        }, {
            "name": "Poland",
            "image": "img/dest/poland.jpg",
        }, {
            "name": "Portugal",
            "image": "img/dest/portugal.jpg",
        }, {
            "name": "Puerto Rico",
            "image": "img/dest/puerto_rico.jpg",
        }, {
            "name": "River Cruise",
            "image": "img/dest/river_cruise.jpg",
        }, {
            "name": "Rwanda",
            "image": "img/dest/rwanda.jpg",
        }, {
            "name": "Seychelles",
            "image": "img/dest/seychelles.jpg",
        }, {
            "name": "Singapore",
            "image": "img/dest/singapore.jpg",
        }, {
            "name": "Slovakia",
            "image": "img/dest/slovakia.jpg",
        }, {
            "name": "Slovenia",
            "image": "img/dest/slovenia.jpg",
        }, {
            "name": "South Africa",
            "image": "img/dest/south_africa.jpg",
        }, {
            "name": "Sri Lanka",
            "image": "img/dest/srilanka.jpg",
        }, {
            "name": "St.Petersburg",
            "image": "img/dest/st_petersburg.jpg",
        }, {
            "name": "Sweden",
            "image": "img/dest/sweden.jpg",
        }, {
            "name": "Switzerland",
            "image": "img/dest/switzerland.jpg",
        }, {
            "name": "Tanzania",
            "image": "img/dest/tanzania.jpg",
        }, {
            "name": "Thailand",
            "image": "img/dest/thailand.jpg",
        }, {
            "name": "United Arab Emirates",
            "image": "img/dest/UAE.jpg",
        }, {
            "name": "United Kingdom",
            "image": "img/dest/UK.jpg",
        }, {
            "name": "United States of America",
            "image": "img/dest/USA.jpg",
        }, {
            "name": "Zimbabwe",
            "image": "img/dest/zimbabwe.jpg",
        }]
    })
    .controller('GridCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $http) {
        $scope.template = TemplateService.getHTML("content/grid.html");
        TemplateService.title = "Grid"; // This is the Title of the Website
        $scope.navigation = NavigationService.getNavigation();
    })
    .controller('CustomDestinationCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $http, $stateParams) {
        $scope.template = TemplateService.getHTML("content/customdestination.html");
        TemplateService.title = "Grid"; // This is the Title of the Website
        $scope.navigation = NavigationService.getNavigation();
        $scope.id = $stateParams.id;
        // $scope.getDestination = {
        //     "image": "img/customDes/argentina.jpg",
        //     "description": "Hash brownies... Hot Girls... Unlimited Alcohol... Ultimate Nightlife... World famous Red Light District! Oh Yes! This city lets you indulge into everything that is not so legal in the other parts of the world!"
        // };
        console.log($stateParams.id);
        switch ($stateParams.id) {
            //3//
            case 'Argentina':
                $scope.getDestination = {
                    "image": "img/banner_images/argentina.jpg",
                    "description": "Hash brownies... Hot Girls... Unlimited Alcohol... Ultimate Nightlife... World famous Red Light District! Oh Yes! This city lets you indulge into everything that is not so legal in the other parts of the world!",
                    "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever"
                };
                $scope.getActivity = [{
                    "image": "img/custom_dest/argentina/ar1.jpg"
                }, {
                    "image": "img/custom_dest/argentina/ar2.jpg"
                }, {
                    "image": "img/custom_dest/argentina/ar3.jpg"
                }, {
                    "image": "img/custom_dest/argentina/ar4.jpg"
                }, {
                    "image": "img/custom_dest/argentina/ar5.jpg"
                }, {
                    "image": "img/custom_dest/argentina/ar6.jpg"
                }, {
                    "image": "img/custom_dest/argentina/ar7.jpg"
                }, {
                    "image": "img/custom_dest/argentina/ar8.jpg"
                }];
                break;
            case 'Armenia':
                $scope.getDestination = {
                    "image": "img/banner_images/armenia.jpg",
                    "description": "Hash brownies... Hot Girls... Unlimited Alcohol... Ultimate Nightlife... World famous Red Light District! Oh Yes! This city lets you indulge into everything that is not so legal in the other parts of the world!",
                    "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever"
                };
                $scope.getActivity = [{
                    "image": "img/custom_dest/armenia/arm1.jpg"
                }, {
                    "image": "img/custom_dest/armenia/arm2.jpg"
                }, {
                    "image": "img/custom_dest/armenia/arm3.jpg"
                }, {
                    "image": "img/custom_dest/armenia/arm4.jpg"
                }, {
                    "image": "img/custom_dest/armenia/arm5.jpg"
                }, {
                    "image": "img/custom_dest/armenia/arm6.jpg"
                }, {
                    "image": "img/custom_dest/armenia/arm7.jpg"
                }, {
                    "image": "img/custom_dest/armenia/arm8.jpg"
                }, {
                    "image": "img/custom_dest/armenia/arm9.jpg"
                }];
                break;
            case 'Australia':
                $scope.getDestination = {
                    "image": "img/banner_images/australia.jpg",
                    "description": "Hash brownies... Hot Girls... Unlimited Alcohol... Ultimate Nightlife... World famous Red Light District! Oh Yes! This city lets you indulge into everything that is not so legal in the other parts of the world!",
                    "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever"
                };
                $scope.getActivity = [{
                    "image": "img/custom_dest/australia/australia1.jpg"
                }, {
                    "image": "img/custom_dest/australia/australia2.jpg"
                }, {
                    "image": "img/custom_dest/australia/australia3.jpg"
                }, {
                    "image": "img/custom_dest/australia/australia4.jpg"
                }, {
                    "image": "img/custom_dest/australia/australia5.jpg"
                }, {
                    "image": "img/custom_dest/australia/australia6.jpg"
                }, {
                    "image": "img/custom_dest/australia/australia7.jpg"
                }, {
                    "image": "img/custom_dest/australia/australia8.jpg"
                }, {
                    "image": "img/custom_dest/australia/australia9.jpg"
                }];
                break;
            case 'Austria':
                $scope.getDestination = {
                    "image": "img/banner_images/austria.jpg",
                    "description": "Hash brownies... Hot Girls... Unlimited Alcohol... Ultimate Nightlife... World famous Red Light District! Oh Yes! This city lets you indulge into everything that is not so legal in the other parts of the world!",
                    "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever"
                };
                $scope.getActivity = [{
                    "image": "img/custom_dest/austria/austria1.jpg"
                }, {
                    "image": "img/custom_dest/austria/austria2.jpg"
                }, {
                    "image": "img/custom_dest/austria/austria3.jpg"
                }, {
                    "image": "img/custom_dest/austria/austria4.jpg"
                }, {
                    "image": "img/custom_dest/austria/austria5.jpg"
                }, {
                    "image": "img/custom_dest/austria/austria6.jpg"
                }, {
                    "image": "img/custom_dest/austria/austria7.jpg"
                }, {
                    "image": "img/custom_dest/austria/austria8.jpg"
                }, {
                    "image": "img/custom_dest/austria/austria9.jpg"
                }, {
                    "image": "img/custom_dest/austria/austria10.jpg"
                }, {
                    "image": "img/custom_dest/austria/austria11.jpg"
                }];
                break;
            case 'Azerbaijan':
                $scope.getDestination = {
                    "image": "img/banner_images/azerbaijan.jpg",
                    "description": "Hash brownies... Hot Girls... Unlimited Alcohol... Ultimate Nightlife... World famous Red Light District! Oh Yes! This city lets you indulge into everything that is not so legal in the other parts of the world!",
                    "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever"
                };
                $scope.getActivity = [{
                    "image": "img/custom_dest/azerbaijan/azerbaijan1.jpg"
                }, {
                    "image": "img/custom_dest/azerbaijan/azerbaijan2.jpg"
                }, {
                    "image": "img/custom_dest/azerbaijan/azerbaijan3.jpg"
                }, {
                    "image": "img/custom_dest/azerbaijan/azerbaijan4.jpg"
                }, {
                    "image": "img/custom_dest/azerbaijan/azerbaijan5.jpg"
                }, {
                    "image": "img/custom_dest/azerbaijan/azerbaijan6.jpg"
                }, {
                    "image": "img/custom_dest/azerbaijan/azerbaijan7.jpg"
                }, {
                    "image": "img/custom_dest/azerbaijan/azerbaijan8.jpg"
                }];
                break;
            case 'Bhutan':
                $scope.getDestination = {
                    "image": "img/banner_images/bhutan.jpg",
                    "description": "Hash brownies... Hot Girls... Unlimited Alcohol... Ultimate Nightlife... World famous Red Light District! Oh Yes! This city lets you indulge into everything that is not so legal in the other parts of the world!",
                    "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever"
                };
                $scope.getActivity = [{
                    "image": "img/custom_dest/bhutan/bhutan1.jpg"
                }, {
                    "image": "img/custom_dest/bhutan/bhutan2.jpg"
                }, {
                    "image": "img/custom_dest/bhutan/bhutan3.jpg"
                }, {
                    "image": "img/custom_dest/bhutan/bhutan4.jpg"
                }, {
                    "image": "img/custom_dest/bhutan/bhutan5.jpg"
                }, {
                    "image": "img/custom_dest/bhutan/bhutan6.jpg"
                }];
                break;
            case 'Brazil':
                $scope.getDestination = {
                    "image": "img/banner_images/brazil.jpg",
                    "description": "Hash brownies... Hot Girls... Unlimited Alcohol... Ultimate Nightlife... World famous Red Light District! Oh Yes! This city lets you indulge into everything that is not so legal in the other parts of the world!",
                    "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever"
                };
                $scope.getActivity = [{
                    "image": "img/custom_dest/brazil/brazil1.jpg"
                }, {
                    "image": "img/custom_dest/brazil/brazil2.jpg"
                }, {
                    "image": "img/custom_dest/brazil/brazil3.jpg"
                }, {
                    "image": "img/custom_dest/brazil/brazil4.jpg"
                }, {
                    "image": "img/custom_dest/brazil/brazil5.jpg"
                }, {
                    "image": "img/custom_dest/brazil/brazil6.jpg"
                }, {
                    "image": "img/custom_dest/brazil/brazil7.jpg"
                }];
                break;
            case 'Bulgaria':
                $scope.getDestination = {
                    "image": "img/banner_images/bulgaria.jpg",
                    "description": "Hash brownies... Hot Girls... Unlimited Alcohol... Ultimate Nightlife... World famous Red Light District! Oh Yes! This city lets you indulge into everything that is not so legal in the other parts of the world!",
                    "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever"
                };
                $scope.getActivity = [{
                    "image": "img/custom_dest/bulgaria/bulgaria1.jpg"
                }, {
                    "image": "img/custom_dest/bulgaria/bulgaria2.jpg"
                }, {
                    "image": "img/custom_dest/bulgaria/bulgaria3.jpg"
                }, {
                    "image": "img/custom_dest/bulgaria/bulgaria4.jpg"
                }, {
                    "image": "img/custom_dest/bulgaria/bulgaria5.jpg"
                }, {
                    "image": "img/custom_dest/bulgaria/bulgaria6.jpg"
                }];
                break;
            case 'Canada':
                $scope.getDestination = {
                    "image": "img/banner_images/canada.jpg",
                    "description": "Hash brownies... Hot Girls... Unlimited Alcohol... Ultimate Nightlife... World famous Red Light District! Oh Yes! This city lets you indulge into everything that is not so legal in the other parts of the world!",
                    "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever"
                };
                $scope.getActivity = [{
                    "image": "img/custom_dest/canada/canada1.jpg"
                }, {
                    "image": "img/custom_dest/canada/canada2.jpg"
                }, {
                    "image": "img/custom_dest/canada/canada3.jpg"
                }, {
                    "image": "img/custom_dest/canada/canada4.jpg"
                }, {
                    "image": "img/custom_dest/canada/canada5.jpg"
                }, {
                    "image": "img/custom_dest/canada/canada6.jpg"
                }, {
                    "image": "img/custom_dest/canada/canada7.jpg"
                }, {
                    "image": "img/custom_dest/canada/canada8.jpg"
                }, {
                    "image": "img/custom_dest/canada/canada9.jpg"
                }, {
                    "image": "img/custom_dest/canada/canada10.jpg"
                }];
                break;
            case 'Chile':
                $scope.getDestination = {
                    "image": "img/banner_images/chile.jpg",
                    "description": "Hash brownies... Hot Girls... Unlimited Alcohol... Ultimate Nightlife... World famous Red Light District! Oh Yes! This city lets you indulge into everything that is not so legal in the other parts of the world!",
                    "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever"
                };
                $scope.getActivity = [{
                    "image": "img/custom_dest/chile/chile1.jpg"
                }, {
                    "image": "img/custom_dest/chile/chile2.jpg"
                }, {
                    "image": "img/custom_dest/chile/chile3.jpg"
                }, {
                    "image": "img/custom_dest/chile/chile4.jpg"
                }, {
                    "image": "img/custom_dest/chile/chile5.jpg"
                }, {
                    "image": "img/custom_dest/chile/chile6.jpg"
                }, {
                    "image": "img/custom_dest/chile/chile7.jpg"
                }, {
                    "image": "img/custom_dest/chile/chile8.jpg"
                }, {
                    "image": "img/custom_dest/chile/chile9.jpg"
                }];
                break;
            case 'Croatia':
                $scope.getDestination = {
                    "image": "img/banner_images/croatia.jpg",
                    "description": "Hash brownies... Hot Girls... Unlimited Alcohol... Ultimate Nightlife... World famous Red Light District! Oh Yes! This city lets you indulge into everything that is not so legal in the other parts of the world!",
                    "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever"
                };
                $scope.getActivity = [{
                    "image": "img/custom_dest/croatia/croatia1.jpg"
                }, {
                    "image": "img/custom_dest/croatia/croatia2.jpg"
                }, {
                    "image": "img/custom_dest/croatia/croatia3.jpg"
                }, {
                    "image": "img/custom_dest/croatia/croatia4.jpg"
                }, {
                    "image": "img/custom_dest/croatia/croatia5.jpg"
                }, {
                    "image": "img/custom_dest/croatia/croatia6.jpg"
                }, {
                    "image": "img/custom_dest/croatia/croatia7.jpg"
                }, {
                    "image": "img/custom_dest/croatia/croatia8.jpg"
                }, {
                    "image": "img/custom_dest/croatia/croatia9.jpg"
                }];
                break;
            case 'Cruise Vacations':
                $scope.getDestination = {
                    "image": "img/banner_images/cruise vacations.jpg",
                    "description": "Hash brownies... Hot Girls... Unlimited Alcohol... Ultimate Nightlife... World famous Red Light District! Oh Yes! This city lets you indulge into everything that is not so legal in the other parts of the world!",
                    "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever"
                };
                $scope.getActivity = [{
                    "image": "img/custom_dest/cruise_vacations/cruise_vacations1.jpg"
                }, {
                    "image": "img/custom_dest/cruise_vacations/cruise_vacations2.jpg"
                }, {
                    "image": "img/custom_dest/cruise_vacations/cruise_vacations3.jpg"
                }, {
                    "image": "img/custom_dest/cruise_vacations/cruise_vacations4.jpg"
                }, {
                    "image": "img/custom_dest/cruise_vacations/cruise_vacations5.jpg"
                }, {
                    "image": "img/custom_dest/cruise_vacations/cruise_vacations6.jpg"
                }, {
                    "image": "img/custom_dest/cruise_vacations/cruise_vacations7.jpg"
                }, {
                    "image": "img/custom_dest/cruise_vacations/cruise_vacations8.jpg"
                }, {
                    "image": "img/custom_dest/cruise_vacations/cruise_vacations9.jpg"
                }, {
                    "image": "img/custom_dest/cruise_vacations/cruise_vacations10.jpg"
                }, {
                    "image": "img/custom_dest/cruise_vacations/cruise_vacations11.jpg"
                }];
                break;
            case 'Czech Republic':
                $scope.getDestination = {
                    "image": "img/banner_images/czech republic.jpg",
                    "description": "Hash brownies... Hot Girls... Unlimited Alcohol... Ultimate Nightlife... World famous Red Light District! Oh Yes! This city lets you indulge into everything that is not so legal in the other parts of the world!",
                    "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever"
                };
                $scope.getActivity = [{
                    "image": "img/custom_dest/czech republic/czech republic1.jpg"
                }, {
                    "image": "img/custom_dest/czech republic/czech republic2.jpg"
                }, {
                    "image": "img/custom_dest/czech republic/czech republic3.jpg"
                }, {
                    "image": "img/custom_dest/czech republic/czech republic4.jpg"
                }, {
                    "image": "img/custom_dest/czech republic/czech republic5.jpg"
                }];
                break;
            case 'Denmark':
                $scope.getDestination = {
                    "image": "img/banner_images/denmark.jpg",
                    "description": "Hash brownies... Hot Girls... Unlimited Alcohol... Ultimate Nightlife... World famous Red Light District! Oh Yes! This city lets you indulge into everything that is not so legal in the other parts of the world!",
                    "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever"
                };
                $scope.getActivity = [{
                    "image": "img/custom_dest/denmark/denmark1.jpg"
                }, {
                    "image": "img/custom_dest/denmark/denmark2.jpg"
                }, {
                    "image": "img/custom_dest/denmark/denmark3.jpg"
                }, {
                    "image": "img/custom_dest/denmark/denmark4.jpg"
                }, {
                    "image": "img/custom_dest/denmark/denmark5.jpg"
                }, {
                    "image": "img/custom_dest/denmark/denmark6.jpg"
                }, {
                    "image": "img/custom_dest/denmark/denmark7.jpg"
                }, {
                    "image": "img/custom_dest/denmark/denmark8.jpg"
                }];
                break;
            case 'Estonia':
                $scope.getDestination = {
                    "image": "img/banner_images/estonia.jpg",
                    "description": "Hash brownies... Hot Girls... Unlimited Alcohol... Ultimate Nightlife... World famous Red Light District! Oh Yes! This city lets you indulge into everything that is not so legal in the other parts of the world!",
                    "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever"
                };
                $scope.getActivity = [{
                    "image": "img/custom_dest/estonia/estonia1.jpg"
                }, {
                    "image": "img/custom_dest/estonia/estonia2.jpg"
                }, {
                    "image": "img/custom_dest/estonia/estonia3.jpg"
                }, {
                    "image": "img/custom_dest/estonia/estonia4.jpg"
                }, {
                    "image": "img/custom_dest/estonia/estonia5.jpg"
                }, {
                    "image": "img/custom_dest/estonia/estonia6.jpg"
                }, {
                    "image": "img/custom_dest/estonia/estonia7.jpg"
                }];
                break;
            case 'Fiji Islands':
                $scope.getDestination = {
                    "image": "img/banner_images/fiji islands.jpg",
                    "description": "Hash brownies... Hot Girls... Unlimited Alcohol... Ultimate Nightlife... World famous Red Light District! Oh Yes! This city lets you indulge into everything that is not so legal in the other parts of the world!",
                    "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever"
                };
                $scope.getActivity = [{
                    "image": "img/custom_dest/fiji islands/fiji islands1.jpg"
                }, {
                    "image": "img/custom_dest/fiji islands/fiji islands2.jpg"
                }, {
                    "image": "img/custom_dest/fiji islands/fiji islands3.jpg"
                }, {
                    "image": "img/custom_dest/fiji islands/fiji islands4.jpg"
                }, {
                    "image": "img/custom_dest/fiji islands/fiji islands5.jpg"
                }];
                break;
            case 'Finland':
                $scope.getDestination = {
                    "image": "img/banner_images/finland.jpg",
                    "description": "Hash brownies... Hot Girls... Unlimited Alcohol... Ultimate Nightlife... World famous Red Light District! Oh Yes! This city lets you indulge into everything that is not so legal in the other parts of the world!",
                    "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever"
                };
                $scope.getActivity = [{
                    "image": "img/custom_dest/finland/finland1.jpg"
                }, {
                    "image": "img/custom_dest/finland/finland2.jpg"
                }, {
                    "image": "img/custom_dest/finland/finland3.jpg"
                }, {
                    "image": "img/custom_dest/finland/finland4.jpg"
                }, {
                    "image": "img/custom_dest/finland/finland5.jpg"
                }, {
                    "image": "img/custom_dest/finland/finland6.jpg"
                }];
                break;
            case 'France':
                $scope.getDestination = {
                    "image": "img/banner_images/france.jpg",
                    "description": "Hash brownies... Hot Girls... Unlimited Alcohol... Ultimate Nightlife... World famous Red Light District! Oh Yes! This city lets you indulge into everything that is not so legal in the other parts of the world!",
                    "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever"
                };
                $scope.getActivity = [{
                    "image": "img/custom_dest/france/france1.jpg"
                }, {
                    "image": "img/custom_dest/france/france2.jpg"
                }, {
                    "image": "img/custom_dest/france/france3.jpg"
                }, {
                    "image": "img/custom_dest/france/france4.jpg"
                }, {
                    "image": "img/custom_dest/france/france5.jpg"
                }, {
                    "image": "img/custom_dest/france/france6.jpg"
                }, {
                    "image": "img/custom_dest/france/france7.jpg"
                }, {
                    "image": "img/custom_dest/france/france8.jpg"
                }, {
                    "image": "img/custom_dest/france/france9.jpg"
                }, {
                    "image": "img/custom_dest/france/france10.jpg"
                }];
                break;
            case 'Georgia':
                $scope.getDestination = {
                    "image": "img/banner_images/georgia.jpg",
                    "description": "Hash brownies... Hot Girls... Unlimited Alcohol... Ultimate Nightlife... World famous Red Light District! Oh Yes! This city lets you indulge into everything that is not so legal in the other parts of the world!",
                    "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever"
                };
                $scope.getActivity = [{
                    "image": "img/custom_dest/georgia/georgia1.jpg"
                }, {
                    "image": "img/custom_dest/georgia/georgia2.jpg"
                }, {
                    "image": "img/custom_dest/georgia/georgia3.jpg"
                }, {
                    "image": "img/custom_dest/georgia/georgia4.jpg"
                }, {
                    "image": "img/custom_dest/georgia/georgia5.jpg"
                }, {
                    "image": "img/custom_dest/georgia/georgia6.jpg"
                }, {
                    "image": "img/custom_dest/georgia/georgia7.jpg"
                }, {
                    "image": "img/custom_dest/georgia/georgia8.jpg"
                }, {
                    "image": "img/custom_dest/georgia/georgia9.jpg"
                }, {
                    "image": "img/custom_dest/georgia/georgia10.jpg"
                }];
                break;
            case 'Germany':
                $scope.getDestination = {
                    "image": "img/banner_images/germany.jpg",
                    "description": "Hash brownies... Hot Girls... Unlimited Alcohol... Ultimate Nightlife... World famous Red Light District! Oh Yes! This city lets you indulge into everything that is not so legal in the other parts of the world!",
                    "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever"
                };
                $scope.getActivity = [{
                    "image": "img/custom_dest/germany/germany1.jpg"
                }, {
                    "image": "img/custom_dest/germany/germany2.jpg"
                }, {
                    "image": "img/custom_dest/germany/germany3.jpg"
                }, {
                    "image": "img/custom_dest/germany/germany4.jpg"
                }, {
                    "image": "img/custom_dest/germany/germany5.jpg"
                }, {
                    "image": "img/custom_dest/germany/germany6.jpg"
                }, {
                    "image": "img/custom_dest/germany/germany7.jpg"
                }, {
                    "image": "img/custom_dest/germany/germany8.jpg"
                }, {
                    "image": "img/custom_dest/germany/germany9.jpg"
                }, {
                    "image": "img/custom_dest/germany/germany10.jpg"
                }, {
                    "image": "img/custom_dest/germany/germany11.jpg"
                }, {
                    "image": "img/custom_dest/germany/germany12.jpg"
                }, {
                    "image": "img/custom_dest/germany/germany13.jpg"
                }];
                break;
            case 'Greece':
                $scope.getDestination = {
                    "image": "img/banner_images/greece.jpg",
                    "description": "Hash brownies... Hot Girls... Unlimited Alcohol... Ultimate Nightlife... World famous Red Light District! Oh Yes! This city lets you indulge into everything that is not so legal in the other parts of the world!",
                    "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever"
                };
                $scope.getActivity = [{
                    "image": "img/custom_dest/greece/greece1.jpg"
                }, {
                    "image": "img/custom_dest/greece/greece2.jpg"
                }, {
                    "image": "img/custom_dest/greece/greece3.jpg"
                }, {
                    "image": "img/custom_dest/greece/greece4.jpg"
                }, {
                    "image": "img/custom_dest/greece/greece5.jpg"
                }, {
                    "image": "img/custom_dest/greece/greece6.jpg"
                }, {
                    "image": "img/custom_dest/greece/greece7.jpg"
                }, {
                    "image": "img/custom_dest/greece/greece8.jpg"
                }, {
                    "image": "img/custom_dest/greece/greece9.jpg"
                }, {
                    "image": "img/custom_dest/greece/greece10.jpg"
                }];
                break;
            case 'Hong Kong':
                $scope.getDestination = {
                    "image": "img/banner_images/hongkong.jpg",
                    "description": "Hash brownies... Hot Girls... Unlimited Alcohol... Ultimate Nightlife... World famous Red Light District! Oh Yes! This city lets you indulge into everything that is not so legal in the other parts of the world!",
                    "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever"
                };
                $scope.getActivity = [{
                    "image": "img/custom_dest/hongkong/hongkong1.jpg"
                }, {
                    "image": "img/custom_dest/hongkong/hongkong2.jpg"
                }, {
                    "image": "img/custom_dest/hongkong/hongkong3.jpg"
                }, {
                    "image": "img/custom_dest/hongkong/hongkong4.jpg"
                }, {
                    "image": "img/custom_dest/hongkong/hongkong5.jpg"
                }, {
                    "image": "img/custom_dest/hongkong/hongkong6.jpg"
                }];
                break;
            case 'Hungary':
                $scope.getDestination = {
                    "image": "img/banner_images/hungary.jpg",
                    "description": "Hash brownies... Hot Girls... Unlimited Alcohol... Ultimate Nightlife... World famous Red Light District! Oh Yes! This city lets you indulge into everything that is not so legal in the other parts of the world!",
                    "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever"
                };
                $scope.getActivity = [{
                    "image": "img/custom_dest/hungary/hungary1.jpg"
                }, {
                    "image": "img/custom_dest/hungary/hungary2.jpg"
                }, {
                    "image": "img/custom_dest/hungary/hungary3.jpg"
                }, {
                    "image": "img/custom_dest/hungary/hungary4.jpg"
                }, {
                    "image": "img/custom_dest/hungary/hungary5.jpg"
                }, {
                    "image": "img/custom_dest/hungary/hungary6.jpg"
                }, {
                    "image": "img/custom_dest/hungary/hungary7.jpg"
                }, {
                    "image": "img/custom_dest/hungary/hungary8.jpg"
                }];
                break;
            case 'Iceland':
                $scope.getDestination = {
                    "image": "img/banner_images/iceland.jpg",
                    "description": "Hash brownies... Hot Girls... Unlimited Alcohol... Ultimate Nightlife... World famous Red Light District! Oh Yes! This city lets you indulge into everything that is not so legal in the other parts of the world!",
                    "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever"
                };
                $scope.getActivity = [{
                    "image": "img/custom_dest/iceland/iceland1.jpg"
                }, {
                    "image": "img/custom_dest/iceland/iceland2.jpg"
                }, {
                    "image": "img/custom_dest/iceland/iceland3.jpg"
                }, {
                    "image": "img/custom_dest/iceland/iceland4.jpg"
                }, {
                    "image": "img/custom_dest/iceland/iceland5.jpg"
                }];
                break;
            case 'Indonesia':
                $scope.getDestination = {
                    "image": "img/banner_images/indonesia.jpg",
                    "description": "Hash brownies... Hot Girls... Unlimited Alcohol... Ultimate Nightlife... World famous Red Light District! Oh Yes! This city lets you indulge into everything that is not so legal in the other parts of the world!",
                    "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever"
                };
                $scope.getActivity = [{
                    "image": "img/custom_dest/indonesia/indonesia1.jpg"
                }, {
                    "image": "img/custom_dest/indonesia/indonesia2.jpg"
                }, {
                    "image": "img/custom_dest/indonesia/indonesia3.jpg"
                }, {
                    "image": "img/custom_dest/indonesia/indonesia4.jpg"
                }, {
                    "image": "img/custom_dest/indonesia/indonesia5.jpg"
                }, {
                    "image": "img/custom_dest/indonesia/indonesia6.jpg"
                }, {
                    "image": "img/custom_dest/indonesia/indonesia7.jpg"
                }, {
                    "image": "img/custom_dest/indonesia/indonesia8.jpg"
                }, {
                    "image": "img/custom_dest/indonesia/indonesia9.jpg"
                }, {
                    "image": "img/custom_dest/indonesia/indonesia10.jpg"
                }, {
                    "image": "img/custom_dest/indonesia/indonesia11.jpg"
                }, {
                    "image": "img/custom_dest/indonesia/indonesia12.jpg"
                }];
                break;
            case 'Israel':
                $scope.getDestination = {
                    "image": "img/banner_images/israel.jpg",
                    "description": "Hash brownies... Hot Girls... Unlimited Alcohol... Ultimate Nightlife... World famous Red Light District! Oh Yes! This city lets you indulge into everything that is not so legal in the other parts of the world!",
                    "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever"
                };
                $scope.getActivity = [{
                    "image": "img/custom_dest/israel/israel1.jpg"
                }, {
                    "image": "img/custom_dest/israel/israel2.jpg"
                }, {
                    "image": "img/custom_dest/israel/israel3.jpg"
                }, {
                    "image": "img/custom_dest/israel/israel4.jpg"
                }, {
                    "image": "img/custom_dest/israel/israel5.jpg"
                }, {
                    "image": "img/custom_dest/israel/israel6.jpg"
                }, {
                    "image": "img/custom_dest/israel/israel7.jpg"
                }, {
                    "image": "img/custom_dest/israel/israel8.jpg"
                }, {
                    "image": "img/custom_dest/israel/israel9.jpg"
                }, {
                    "image": "img/custom_dest/israel/israel10.jpg"
                }];
                break;
            case 'Italy':
                $scope.getDestination = {
                    "image": "img/banner_images/italy.jpg",
                    "description": "Hash brownies... Hot Girls... Unlimited Alcohol... Ultimate Nightlife... World famous Red Light District! Oh Yes! This city lets you indulge into everything that is not so legal in the other parts of the world!",
                    "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever"
                };
                $scope.getActivity = [{
                    "image": "img/custom_dest/italy/italy1.jpg"
                }, {
                    "image": "img/custom_dest/italy/italy2.jpg"
                }, {
                    "image": "img/custom_dest/italy/italy3.jpg"
                }, {
                    "image": "img/custom_dest/italy/italy4.jpg"
                }, {
                    "image": "img/custom_dest/italy/italy5.jpg"
                }, {
                    "image": "img/custom_dest/italy/italy6.jpg"
                }, {
                    "image": "img/custom_dest/italy/italy7.jpg"
                }, {
                    "image": "img/custom_dest/italy/italy9.jpg"
                }, {
                    "image": "img/custom_dest/italy/italy10.jpg"
                }, {
                    "image": "img/custom_dest/italy/italy11.jpg"
                }];
                break;
            case 'Jamaica':
                $scope.getDestination = {
                    "image": "img/banner_images/jamaica.jpg",
                    "description": "Hash brownies... Hot Girls... Unlimited Alcohol... Ultimate Nightlife... World famous Red Light District! Oh Yes! This city lets you indulge into everything that is not so legal in the other parts of the world!",
                    "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever"
                };
                $scope.getActivity = [{
                    "image": "img/custom_dest/jamaica/jamaica1.jpg"
                }, {
                    "image": "img/custom_dest/jamaica/jamaica2.jpg"
                }, {
                    "image": "img/custom_dest/jamaica/jamaica3.jpg"
                }, {
                    "image": "img/custom_dest/jamaica/jamaica4.jpg"
                }, {
                    "image": "img/custom_dest/jamaica/jamaica5.jpg"
                }];
                break;
            case 'Japan':
                $scope.getDestination = {
                    "image": "img/banner_images/japan.jpg",
                    "description": "Hash brownies... Hot Girls... Unlimited Alcohol... Ultimate Nightlife... World famous Red Light District! Oh Yes! This city lets you indulge into everything that is not so legal in the other parts of the world!",
                    "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever"
                };
                $scope.getActivity = [{
                    "image": "img/custom_dest/japan/japan1.jpg"
                }, {
                    "image": "img/custom_dest/japan/japan2.jpg"
                }, {
                    "image": "img/custom_dest/japan/japan3.jpg"
                }, {
                    "image": "img/custom_dest/japan/japan4.jpg"
                }, {
                    "image": "img/custom_dest/japan/japan5.jpg"
                }, {
                    "image": "img/custom_dest/japan/japan6.jpg"
                }, {
                    "image": "img/custom_dest/japan/japan7.jpg"
                }, {
                    "image": "img/custom_dest/japan/japan8.jpg"
                }, {
                    "image": "img/custom_dest/japan/japan9.jpg"
                }];
                break;
            case 'Jordan':
                $scope.getDestination = {
                    "image": "img/banner_images/jordan.jpg",
                    "description": "Hash brownies... Hot Girls... Unlimited Alcohol... Ultimate Nightlife... World famous Red Light District! Oh Yes! This city lets you indulge into everything that is not so legal in the other parts of the world!",
                    "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever"
                };
                $scope.getActivity = [{
                    "image": "img/custom_dest/jordan/jordan1.jpg"
                }, {
                    "image": "img/custom_dest/jordan/jordan2.jpg"
                }, {
                    "image": "img/custom_dest/jordan/jordan3.jpg"
                }, {
                    "image": "img/custom_dest/jordan/jordan4.jpg"
                }, {
                    "image": "img/custom_dest/jordan/jordan5.jpg"
                }, {
                    "image": "img/custom_dest/jordan/jordan6.jpg"
                }, {
                    "image": "img/custom_dest/jordan/jordan7.jpg"
                }];
                break;
            case 'Kenya':
                $scope.getDestination = {
                    "image": "img/banner_images/kenya.jpg",
                    "description": "Hash brownies... Hot Girls... Unlimited Alcohol... Ultimate Nightlife... World famous Red Light District! Oh Yes! This city lets you indulge into everything that is not so legal in the other parts of the world!",
                    "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever"
                };
                $scope.getActivity = [{
                    "image": "img/custom_dest/kenya/kenya1.jpg"
                }, {
                    "image": "img/custom_dest/kenya/kenya2.jpg"
                }, {
                    "image": "img/custom_dest/kenya/kenya3.jpg"
                }, {
                    "image": "img/custom_dest/kenya/kenya4.jpg"
                }, {
                    "image": "img/custom_dest/kenya/kenya5.jpg"
                }];
                break;
            case 'Korea':
                $scope.getDestination = {
                    "image": "img/banner_images/korea.jpg",
                    "description": "Hash brownies... Hot Girls... Unlimited Alcohol... Ultimate Nightlife... World famous Red Light District! Oh Yes! This city lets you indulge into everything that is not so legal in the other parts of the world!",
                    "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever"
                };
                $scope.getActivity = [{
                    "image": "img/custom_dest/korea/korea1.jpg"
                }, {
                    "image": "img/custom_dest/korea/korea2.jpg"
                }, {
                    "image": "img/custom_dest/korea/korea3.jpg"
                }, {
                    "image": "img/custom_dest/korea/korea4.jpg"
                }, {
                    "image": "img/custom_dest/korea/korea5.jpg"
                }, {
                    "image": "img/custom_dest/korea/korea6.jpg"
                }, {
                    "image": "img/custom_dest/korea/korea7.jpg"
                }, {
                    "image": "img/custom_dest/korea/korea8.jpg"
                }, {
                    "image": "img/custom_dest/korea/korea9.jpg"
                }];
                break;
            case 'Latvia':
                $scope.getDestination = {
                    "image": "img/banner_images/latvia.jpg",
                    "description": "Hash brownies... Hot Girls... Unlimited Alcohol... Ultimate Nightlife... World famous Red Light District! Oh Yes! This city lets you indulge into everything that is not so legal in the other parts of the world!",
                    "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever"
                };
                $scope.getActivity = [{
                    "image": "img/custom_dest/latvia/latvia1.jpg"
                }, {
                    "image": "img/custom_dest/latvia/latvia2.jpg"
                }, {
                    "image": "img/custom_dest/latvia/latvia3.jpg"
                }, {
                    "image": "img/custom_dest/latvia/latvia4.jpg"
                }, {
                    "image": "img/custom_dest/latvia/latvia5.jpg"
                }, {
                    "image": "img/custom_dest/latvia/latvia6.jpg"
                }, {
                    "image": "img/custom_dest/latvia/latvia7.jpg"
                }, {
                    "image": "img/custom_dest/latvia/latvia8.jpg"
                }];
                break;
            case 'Lithuania':
                $scope.getDestination = {
                    "image": "img/banner_images/lithuania.jpg",
                    "description": "Hash brownies... Hot Girls... Unlimited Alcohol... Ultimate Nightlife... World famous Red Light District! Oh Yes! This city lets you indulge into everything that is not so legal in the other parts of the world!",
                    "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever"
                };
                $scope.getActivity = [{
                    "image": "img/custom_dest/lithuania/lithuania1.jpg"
                }, {
                    "image": "img/custom_dest/lithuania/lithuania2.jpg"
                }, {
                    "image": "img/custom_dest/lithuania/lithuania3.jpg"
                }, {
                    "image": "img/custom_dest/lithuania/lithuania4.jpg"
                }, {
                    "image": "img/custom_dest/lithuania/lithuania5.jpg"
                }];
                break;
            case 'Macao':
                $scope.getDestination = {
                    "image": "img/banner_images/macau.jpg",
                    "description": "Hash brownies... Hot Girls... Unlimited Alcohol... Ultimate Nightlife... World famous Red Light District! Oh Yes! This city lets you indulge into everything that is not so legal in the other parts of the world!",
                    "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever"
                };
                $scope.getActivity = [{
                    "image": "img/custom_dest/macao/macao1.jpg"
                }, {
                    "image": "img/custom_dest/macao/macao2.jpg"
                }, {
                    "image": "img/custom_dest/macao/macao3.jpg"
                }, {
                    "image": "img/custom_dest/macao/macao4.jpg"
                }, {
                    "image": "img/custom_dest/macao/macao5.jpg"
                }, {
                    "image": "img/custom_dest/macao/macao6.jpg"
                }, {
                    "image": "img/custom_dest/macao/macao7.jpg"
                }];
                break;
            case 'Malaysia':
                $scope.getDestination = {
                    "image": "img/banner_images/malaysia.jpg",
                    "description": "Hash brownies... Hot Girls... Unlimited Alcohol... Ultimate Nightlife... World famous Red Light District! Oh Yes! This city lets you indulge into everything that is not so legal in the other parts of the world!",
                    "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever"
                };
                $scope.getActivity = [{
                    "image": "img/custom_dest/malaysia/malaysia1.jpg"
                }, {
                    "image": "img/custom_dest/malaysia/malaysia2.jpg"
                }, {
                    "image": "img/custom_dest/malaysia/malaysia3.jpg"
                }, {
                    "image": "img/custom_dest/malaysia/malaysia4.jpg"
                }, {
                    "image": "img/custom_dest/malaysia/malaysia5.jpg"
                }, {
                    "image": "img/custom_dest/malaysia/malaysia6.jpg"
                }, {
                    "image": "img/custom_dest/malaysia/malaysia7.jpg"
                }];
                break;
            case 'Maldives':
                $scope.getDestination = {
                    "image": "img/banner_images/maldives.jpg",
                    "description": "Hash brownies... Hot Girls... Unlimited Alcohol... Ultimate Nightlife... World famous Red Light District! Oh Yes! This city lets you indulge into everything that is not so legal in the other parts of the world!",
                    "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever"
                };
                $scope.getActivity = [{
                    "image": "img/custom_dest/maldives/maldives1.jpg"
                }, {
                    "image": "img/custom_dest/maldives/maldives2.jpg"
                }, {
                    "image": "img/custom_dest/maldives/maldives3.jpg"
                }, {
                    "image": "img/custom_dest/maldives/maldives4.jpg"
                }, {
                    "image": "img/custom_dest/maldives/maldives5.jpg"
                }, {
                    "image": "img/custom_dest/maldives/maldives6.jpg"
                }];
                break;
            case 'Malta':
                $scope.getDestination = {
                    "image": "img/banner_images/malta.jpg",
                    "description": "Hash brownies... Hot Girls... Unlimited Alcohol... Ultimate Nightlife... World famous Red Light District! Oh Yes! This city lets you indulge into everything that is not so legal in the other parts of the world!",
                    "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever"
                };
                $scope.getActivity = [{
                    "image": "img/custom_dest/malta/malta1.jpg"
                }, {
                    "image": "img/custom_dest/malta/malta2.jpg"
                }, {
                    "image": "img/custom_dest/malta/malta3.jpg"
                }, {
                    "image": "img/custom_dest/malta/malta4.jpg"
                }, {
                    "image": "img/custom_dest/malta/malta5.jpg"
                }, {
                    "image": "img/custom_dest/malta/malta6.jpg"
                }];
                break;
            case 'Mauritius':
                $scope.getDestination = {
                    "image": "img/banner_images/mauritius.jpg",
                    "description": "Hash brownies... Hot Girls... Unlimited Alcohol... Ultimate Nightlife... World famous Red Light District! Oh Yes! This city lets you indulge into everything that is not so legal in the other parts of the world!",
                    "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever"
                };
                $scope.getActivity = [{
                    "image": "img/custom_dest/mauritius/mauritius1.jpg"
                }, {
                    "image": "img/custom_dest/mauritius/mauritius2.jpg"
                }, {
                    "image": "img/custom_dest/mauritius/mauritius3.jpg"
                }, {
                    "image": "img/custom_dest/mauritius/mauritius4.jpg"
                }, {
                    "image": "img/custom_dest/mauritius/mauritius5.jpg"
                }];
                break;
            case 'Mexico':
                $scope.getDestination = {
                    "image": "img/banner_images/mexico.jpg",
                    "description": "Hash brownies... Hot Girls... Unlimited Alcohol... Ultimate Nightlife... World famous Red Light District! Oh Yes! This city lets you indulge into everything that is not so legal in the other parts of the world!",
                    "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever"
                };
                $scope.getActivity = [{
                    "image": "img/custom_dest/mexico/mexico1.jpg"
                }, {
                    "image": "img/custom_dest/mexico/mexico2.jpg"
                }, {
                    "image": "img/custom_dest/mexico/mexico3.jpg"
                }, {
                    "image": "img/custom_dest/mexico/mexico4.jpg"
                }, {
                    "image": "img/custom_dest/mexico/mexico5.jpg"
                }, {
                    "image": "img/custom_dest/mexico/mexico6.jpg"
                }];
                break;
            case 'Monaco':
                $scope.getDestination = {
                    "image": "img/banner_images/monaco.jpg",
                    "description": "Hash brownies... Hot Girls... Unlimited Alcohol... Ultimate Nightlife... World famous Red Light District! Oh Yes! This city lets you indulge into everything that is not so legal in the other parts of the world!",
                    "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever"
                };
                $scope.getActivity = [{
                    "image": "img/custom_dest/monaco/monaco1.jpg"
                }, {
                    "image": "img/custom_dest/monaco/monaco2.jpg"
                }, {
                    "image": "img/custom_dest/monaco/monaco3.jpg"
                }, {
                    "image": "img/custom_dest/monaco/monaco4.jpg"
                }, {
                    "image": "img/custom_dest/monaco/monaco5.jpg"
                }, {
                    "image": "img/custom_dest/monaco/monaco6.jpg"
                }, {
                    "image": "img/custom_dest/monaco/monaco7.jpg"
                }];
                break;
            case 'Moscow':
                $scope.getDestination = {
                    "image": "img/banner_images/moscow.jpg",
                    "description": "Hash brownies... Hot Girls... Unlimited Alcohol... Ultimate Nightlife... World famous Red Light District! Oh Yes! This city lets you indulge into everything that is not so legal in the other parts of the world!",
                    "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever"
                };
                $scope.getActivity = [{
                    "image": "img/custom_dest/moscow/moscow1.jpg"
                }, {
                    "image": "img/custom_dest/moscow/moscow2.jpg"
                }, {
                    "image": "img/custom_dest/moscow/moscow3.jpg"
                }, {
                    "image": "img/custom_dest/moscow/moscow5.jpg"
                }, {
                    "image": "img/custom_dest/moscow/moscow6.jpg"
                }, {
                    "image": "img/custom_dest/moscow/moscow7.jpg"
                }, {
                    "image": "img/custom_dest/moscow/moscow8.jpg"
                }, {
                    "image": "img/custom_dest/moscow/moscow9.jpg"
                }, {
                    "image": "img/custom_dest/moscow/moscow10.jpg"
                }, {
                    "image": "img/custom_dest/moscow/moscow11.jpg"
                }];
                break;
            case 'Netherlands':
                $scope.getDestination = {
                    "image": "img/banner_images/netherlands.jpg",
                    "description": "Hash brownies... Hot Girls... Unlimited Alcohol... Ultimate Nightlife... World famous Red Light District! Oh Yes! This city lets you indulge into everything that is not so legal in the other parts of the world!",
                    "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever"
                };
                $scope.getActivity = [{
                    "image": "img/custom_dest/netherlands/netherlands1.jpg"
                }, {
                    "image": "img/custom_dest/netherlands/netherlands2.jpg"
                }, {
                    "image": "img/custom_dest/netherlands/netherlands3.jpg"
                }, {
                    "image": "img/custom_dest/netherlands/netherlands4.jpg"
                }, {
                    "image": "img/custom_dest/netherlands/netherlands5.jpg"
                }, {
                    "image": "img/custom_dest/netherlands/netherlands6.jpg"
                }];
                break;
            case 'New Zealand':
                $scope.getDestination = {
                    "image": "img/banner_images/new zealand.jpg",
                    "description": "Hash brownies... Hot Girls... Unlimited Alcohol... Ultimate Nightlife... World famous Red Light District! Oh Yes! This city lets you indulge into everything that is not so legal in the other parts of the world!",
                    "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever"
                };
                $scope.getActivity = [{
                    "image": "img/custom_dest/new zealand/new zealand1.jpg"
                }, {
                    "image": "img/custom_dest/new zealand/new zealand2.jpg"
                }, {
                    "image": "img/custom_dest/new zealand/new zealand3.jpg"
                }, {
                    "image": "img/custom_dest/new zealand/new zealand4.jpg"
                }, {
                    "image": "img/custom_dest/new zealand/new zealand5.jpg"
                }, {
                    "image": "img/custom_dest/new zealand/new zealand6.jpg"
                }, {
                    "image": "img/custom_dest/new zealand/new zealand7.jpg"
                }, {
                    "image": "img/custom_dest/new zealand/new zealand8.jpg"
                }, {
                    "image": "img/custom_dest/new zealand/new zealand9.jpg"
                }, {
                    "image": "img/custom_dest/new zealand/new zealand10.jpg"
                }];
                break;
            case 'Norway':
                $scope.getDestination = {
                    "image": "img/banner_images/norway.jpg",
                    "description": "Hash brownies... Hot Girls... Unlimited Alcohol... Ultimate Nightlife... World famous Red Light District! Oh Yes! This city lets you indulge into everything that is not so legal in the other parts of the world!",
                    "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever"
                };
                $scope.getActivity = [{
                    "image": "img/custom_dest/norway/norway1.jpg"
                }, {
                    "image": "img/custom_dest/norway/norway2.jpg"
                }, {
                    "image": "img/custom_dest/norway/norway3.jpg"
                }, {
                    "image": "img/custom_dest/norway/norway4.jpg"
                }, {
                    "image": "img/custom_dest/norway/norway5.jpg"
                }, {
                    "image": "img/custom_dest/norway/norway6.jpg"
                }];
                break;
            case 'Peru':
                $scope.getDestination = {
                    "image": "img/banner_images/peru.jpg",
                    "description": "Hash brownies... Hot Girls... Unlimited Alcohol... Ultimate Nightlife... World famous Red Light District! Oh Yes! This city lets you indulge into everything that is not so legal in the other parts of the world!",
                    "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever"
                };
                $scope.getActivity = [{
                    "image": "img/custom_dest/peru/peru1.jpg"
                }, {
                    "image": "img/custom_dest/peru/peru2.jpg"
                }, {
                    "image": "img/custom_dest/peru/peru3.jpg"
                }, {
                    "image": "img/custom_dest/peru/peru4.jpg"
                }];
                break;
            case 'Philippines':
                $scope.getDestination = {
                    "image": "img/banner_images/phillippines.jpg",
                    "description": "Hash brownies... Hot Girls... Unlimited Alcohol... Ultimate Nightlife... World famous Red Light District! Oh Yes! This city lets you indulge into everything that is not so legal in the other parts of the world!",
                    "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever"
                };
                $scope.getActivity = [{
                    "image": "img/custom_dest/phillippines/phillippines1.jpg"
                }, {
                    "image": "img/custom_dest/phillippines/phillippines2.jpg"
                }, {
                    "image": "img/custom_dest/phillippines/phillippines3.jpg"
                }, {
                    "image": "img/custom_dest/phillippines/phillippines4.jpg"
                }, {
                    "image": "img/custom_dest/phillippines/phillippines5.jpg"
                }, {
                    "image": "img/custom_dest/phillippines/phillippines6.jpg"
                }, {
                    "image": "img/custom_dest/phillippines/phillippines7.jpg"
                }];
                break;
            case 'Poland':
                $scope.getDestination = {
                    "image": "img/banner_images/poland.jpg",
                    "description": "Hash brownies... Hot Girls... Unlimited Alcohol... Ultimate Nightlife... World famous Red Light District! Oh Yes! This city lets you indulge into everything that is not so legal in the other parts of the world!",
                    "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever"
                };
                $scope.getActivity = [{
                    "image": "img/custom_dest/poland/poland1.jpg"
                }, {
                    "image": "img/custom_dest/poland/poland2.jpg"
                }, {
                    "image": "img/custom_dest/poland/poland3.jpg"
                }, {
                    "image": "img/custom_dest/poland/poland4.jpg"
                }, {
                    "image": "img/custom_dest/poland/poland5.jpg"
                }, {
                    "image": "img/custom_dest/poland/poland6.jpg"
                }, {
                    "image": "img/custom_dest/poland/poland7.jpg"
                }];
                break;
            case 'Portugal':
                $scope.getDestination = {
                    "image": "img/banner_images/portugal.jpg",
                    "description": "Hash brownies... Hot Girls... Unlimited Alcohol... Ultimate Nightlife... World famous Red Light District! Oh Yes! This city lets you indulge into everything that is not so legal in the other parts of the world!",
                    "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever"
                };
                $scope.getActivity = [{
                    "image": "img/custom_dest/portugal/portugal1.jpg"
                }, {
                    "image": "img/custom_dest/portugal/portugal2.jpg"
                }, {
                    "image": "img/custom_dest/portugal/portugal3.jpg"
                }, {
                    "image": "img/custom_dest/portugal/portugal4.jpg"
                }, {
                    "image": "img/custom_dest/portugal/portugal5.jpg"
                }, {
                    "image": "img/custom_dest/portugal/portugal6.jpg"
                }, {
                    "image": "img/custom_dest/portugal/portugal7.jpg"
                }, {
                    "image": "img/custom_dest/portugal/portugal8.jpg"
                }, {
                    "image": "img/custom_dest/portugal/portugal9.jpg"
                }, {
                    "image": "img/custom_dest/portugal/portugal10.jpg"
                }, {
                    "image": "img/custom_dest/portugal/portugal11.jpg"
                }, {
                    "image": "img/custom_dest/portugal/portugal12.jpg"
                }, {
                    "image": "img/custom_dest/portugal/portugal13.jpg"
                }, {
                    "image": "img/custom_dest/portugal/portugal14.jpg"
                }, {
                    "image": "img/custom_dest/portugal/portugal15.jpg"
                }, {
                    "image": "img/custom_dest/portugal/portugal16.jpg"
                }, {
                    "image": "img/custom_dest/portugal/portugal17.jpg"
                }, {
                    "image": "img/custom_dest/portugal/portugal18.jpg"
                }, {
                    "image": "img/custom_dest/portugal/portugal19.jpg"
                }, {
                    "image": "img/custom_dest/portugal/portugal20.jpg"
                }];
                break;
            case 'Puerto Rico':
                $scope.getDestination = {
                    "image": "img/banner_images/puerto rico.jpg",
                    "description": "Hash brownies... Hot Girls... Unlimited Alcohol... Ultimate Nightlife... World famous Red Light District! Oh Yes! This city lets you indulge into everything that is not so legal in the other parts of the world!",
                    "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever"
                };
                $scope.getActivity = [{
                    "image": "img/custom_dest/puerto rico/puerto rico1.jpg"
                }, {
                    "image": "img/custom_dest/puerto rico/puerto rico2.jpg"
                }, {
                    "image": "img/custom_dest/puerto rico/puerto rico3.jpg"
                }, {
                    "image": "img/custom_dest/puerto rico/puerto rico4.jpg"
                }, {
                    "image": "img/custom_dest/puerto rico/puerto rico5.jpg"
                }, {
                    "image": "img/custom_dest/puerto rico/puerto rico6.jpg"
                }, {
                    "image": "img/custom_dest/puerto rico/puerto rico7.jpg"
                }];
                break;
            case 'River Cruise':
                $scope.getDestination = {
                    "image": "img/banner_images/river cruises.jpg",
                    "description": "Hash brownies... Hot Girls... Unlimited Alcohol... Ultimate Nightlife... World famous Red Light District! Oh Yes! This city lets you indulge into everything that is not so legal in the other parts of the world!",
                    "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever"
                };
                $scope.getActivity = [{
                    "image": "img/custom_dest/river cruises/river cruises1.jpg"
                }, {
                    "image": "img/custom_dest/river cruises/river cruises2.jpg"
                }, {
                    "image": "img/custom_dest/river cruises/river cruises3.jpg"
                }, {
                    "image": "img/custom_dest/river cruises/river cruises4.jpg"
                }, {
                    "image": "img/custom_dest/river cruises/river cruises5.jpg"
                }, {
                    "image": "img/custom_dest/river cruises/river cruises6.jpg"
                }];
                break;
            case 'Rwanda':
                $scope.getDestination = {
                    "image": "img/banner_images/rwanda.jpg",
                    "description": "Hash brownies... Hot Girls... Unlimited Alcohol... Ultimate Nightlife... World famous Red Light District! Oh Yes! This city lets you indulge into everything that is not so legal in the other parts of the world!",
                    "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever"
                };
                $scope.getActivity = [{
                    "image": "img/custom_dest/rwanda/rwanda1.jpg"
                }, {
                    "image": "img/custom_dest/rwanda/rwanda2.jpg"
                }, {
                    "image": "img/custom_dest/rwanda/rwanda3.jpg"
                }, {
                    "image": "img/custom_dest/rwanda/rwanda4.jpg"
                }];
                break;
            case 'Seychelles':
                $scope.getDestination = {
                    "image": "img/banner_images/seychelles.jpg",
                    "description": "Hash brownies... Hot Girls... Unlimited Alcohol... Ultimate Nightlife... World famous Red Light District! Oh Yes! This city lets you indulge into everything that is not so legal in the other parts of the world!",
                    "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever"
                };
                $scope.getActivity = [{
                    "image": "img/custom_dest/seychelles/seychelles1.jpg"
                }, {
                    "image": "img/custom_dest/seychelles/seychelles2.jpg"
                }, {
                    "image": "img/custom_dest/seychelles/seychelles3.jpg"
                }, {
                    "image": "img/custom_dest/seychelles/seychelles4.jpg"
                }, {
                    "image": "img/custom_dest/seychelles/seychelles5.jpg"
                }, {
                    "image": "img/custom_dest/seychelles/seychelles6.jpg"
                }];
                break;
            case 'Singapore':
                $scope.getDestination = {
                    "image": "img/banner_images/singapore.jpg",
                    "description": "Hash brownies... Hot Girls... Unlimited Alcohol... Ultimate Nightlife... World famous Red Light District! Oh Yes! This city lets you indulge into everything that is not so legal in the other parts of the world!",
                    "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever"
                };
                $scope.getActivity = [{
                    "image": "img/custom_dest/singapore/singapore1.jpg"
                }, {
                    "image": "img/custom_dest/singapore/singapore2.jpg"
                }, {
                    "image": "img/custom_dest/singapore/singapore3.jpg"
                }, {
                    "image": "img/custom_dest/singapore/singapore4.jpg"
                }, {
                    "image": "img/custom_dest/singapore/singapore5.jpg"
                }, {
                    "image": "img/custom_dest/singapore/singapore6.jpg"
                }, {
                    "image": "img/custom_dest/singapore/singapore7.jpg"
                }];
                break;
            case 'Sri Lanka':
                $scope.getDestination = {
                    "image": "img/banner_images/sirlanka.jpg",
                    "description": "Hash brownies... Hot Girls... Unlimited Alcohol... Ultimate Nightlife... World famous Red Light District! Oh Yes! This city lets you indulge into everything that is not so legal in the other parts of the world!",
                    "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever"
                };
                $scope.getActivity = [{
                    "image": "img/custom_dest/srilanka/srilanka1.jpg"
                }, {
                    "image": "img/custom_dest/srilanka/srilanka2.jpg"
                }, {
                    "image": "img/custom_dest/srilanka/srilanka3.jpg"
                }, {
                    "image": "img/custom_dest/srilanka/srilanka4.jpg"
                }, {
                    "image": "img/custom_dest/srilanka/srilanka5.jpg"
                }];
                break;
            case 'Slovakia':
                $scope.getDestination = {
                    "image": "img/banner_images/slovakia.jpg",
                    "description": "Hash brownies... Hot Girls... Unlimited Alcohol... Ultimate Nightlife... World famous Red Light District! Oh Yes! This city lets you indulge into everything that is not so legal in the other parts of the world!",
                    "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever"
                };
                $scope.getActivity = [{
                    "image": "img/custom_dest/slovakia/slovakia1.jpg"
                }, {
                    "image": "img/custom_dest/slovakia/slovakia2.jpg"
                }, {
                    "image": "img/custom_dest/slovakia/slovakia3.jpg"
                }, {
                    "image": "img/custom_dest/slovakia/slovakia4.jpg"
                }, {
                    "image": "img/custom_dest/slovakia/slovakia5.jpg"
                }, {
                    "image": "img/custom_dest/slovakia/slovakia6.jpg"
                }];
                break;
            case 'Slovenia':
                $scope.getDestination = {
                    "image": "img/banner_images/slovenia.jpg",
                    "description": "Hash brownies... Hot Girls... Unlimited Alcohol... Ultimate Nightlife... World famous Red Light District! Oh Yes! This city lets you indulge into everything that is not so legal in the other parts of the world!",
                    "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever"
                };
                $scope.getActivity = [{
                    "image": "img/custom_dest/slovenia/slovenia1.jpg"
                }, {
                    "image": "img/custom_dest/slovenia/slovenia2.jpg"
                }, {
                    "image": "img/custom_dest/slovenia/slovenia3.jpg"
                }, {
                    "image": "img/custom_dest/slovenia/slovenia4.jpg"
                }, {
                    "image": "img/custom_dest/slovenia/slovenia5.jpg"
                }, {
                    "image": "img/custom_dest/slovenia/slovenia6.jpg"
                }];
                break;
            case 'South Africa':
                $scope.getDestination = {
                    "image": "img/banner_images/south africa.jpg",
                    "description": "Hash brownies... Hot Girls... Unlimited Alcohol... Ultimate Nightlife... World famous Red Light District! Oh Yes! This city lets you indulge into everything that is not so legal in the other parts of the world!",
                    "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever"
                };
                $scope.getActivity = [{
                    "image": "img/custom_dest/south africa/south africa1.jpg"
                }, {
                    "image": "img/custom_dest/south africa/south africa2.jpg"
                }, {
                    "image": "img/custom_dest/south africa/south africa3.jpg"
                }, {
                    "image": "img/custom_dest/south africa/south africa4.jpg"
                }, {
                    "image": "img/custom_dest/south africa/south africa5.jpg"
                }, {
                    "image": "img/custom_dest/south africa/south africa6.jpg"
                }, {
                    "image": "img/custom_dest/south africa/south africa7.jpg"
                }, {
                    "image": "img/custom_dest/south africa/south africa8.jpg"
                }];
                break;
            case 'St.Petersburg':
                $scope.getDestination = {
                    "image": "img/banner_images/st.petersburg.jpg",
                    "description": "Hash brownies... Hot Girls... Unlimited Alcohol... Ultimate Nightlife... World famous Red Light District! Oh Yes! This city lets you indulge into everything that is not so legal in the other parts of the world!",
                    "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever"
                };
                $scope.getActivity = [{
                    "image": "img/custom_dest/st.petersburg/st.petersburg1.jpg"
                }, {
                    "image": "img/custom_dest/st.petersburg/st.petersburg2.jpg"
                }, {
                    "image": "img/custom_dest/st.petersburg/st.petersburg3.jpg"
                }, {
                    "image": "img/custom_dest/st.petersburg/st.petersburg4.jpg"
                }, {
                    "image": "img/custom_dest/st.petersburg/st.petersburg5.jpg"
                }, {
                    "image": "img/custom_dest/st.petersburg/st.petersburg6.jpg"
                }, {
                    "image": "img/custom_dest/st.petersburg/st.petersburg7.jpg"
                }, {
                    "image": "img/custom_dest/st.petersburg/st.petersburg8.jpg"
                }, {
                    "image": "img/custom_dest/st.petersburg/st.petersburg9.jpg"
                }, {
                    "image": "img/custom_dest/st.petersburg/st.petersburg10.jpg"
                }, {
                    "image": "img/custom_dest/st.petersburg/st.petersburg11.jpg"
                }, ];
                break;
            case 'Sweden':
                $scope.getDestination = {
                    "image": "img/banner_images/sweden.jpg",
                    "description": "Hash brownies... Hot Girls... Unlimited Alcohol... Ultimate Nightlife... World famous Red Light District! Oh Yes! This city lets you indulge into everything that is not so legal in the other parts of the world!",
                    "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever"
                };
                $scope.getActivity = [{
                    "image": "img/custom_dest/sweden/sweden1.jpg"
                }, {
                    "image": "img/custom_dest/sweden/sweden2.jpg"
                }, {
                    "image": "img/custom_dest/sweden/sweden3.jpg"
                }, {
                    "image": "img/custom_dest/sweden/sweden4.jpg"
                }, {
                    "image": "img/custom_dest/sweden/sweden5.jpg"
                }];
                break;
            case 'Switzerland':
                $scope.getDestination = {
                    "image": "img/banner_images/switzerland.jpg",
                    "description": "Hash brownies... Hot Girls... Unlimited Alcohol... Ultimate Nightlife... World famous Red Light District! Oh Yes! This city lets you indulge into everything that is not so legal in the other parts of the world!",
                    "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever"
                };
                $scope.getActivity = [{
                    "image": "img/custom_dest/switzerland/switzerland1.jpg"
                }, {
                    "image": "img/custom_dest/switzerland/switzerland2.jpg"
                }, {
                    "image": "img/custom_dest/switzerland/switzerland3.jpg"
                }, {
                    "image": "img/custom_dest/switzerland/switzerland4.jpg"
                }, {
                    "image": "img/custom_dest/switzerland/switzerland5.jpg"
                }, {
                    "image": "img/custom_dest/switzerland/switzerland6.jpg"
                }, {
                    "image": "img/custom_dest/switzerland/switzerland7.jpg"
                }, {
                    "image": "img/custom_dest/switzerland/switzerland8.jpg"
                }, {
                    "image": "img/custom_dest/switzerland/switzerland9.jpg"
                }, {
                    "image": "img/custom_dest/switzerland/switzerland10.jpg"
                }, {
                    "image": "img/custom_dest/switzerland/switzerland11.jpg"
                }, {
                    "image": "img/custom_dest/switzerland/switzerland12.jpg"
                }];
                break;
            case 'Tanzania':
                $scope.getDestination = {
                    "image": "img/banner_images/tanzania.jpg",
                    "description": "Hash brownies... Hot Girls... Unlimited Alcohol... Ultimate Nightlife... World famous Red Light District! Oh Yes! This city lets you indulge into everything that is not so legal in the other parts of the world!",
                    "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever"
                };
                $scope.getActivity = [{
                    "image": "img/custom_dest/tanzania/tanzania1.jpg"
                }, {
                    "image": "img/custom_dest/tanzania/tanzania2.jpg"
                }, {
                    "image": "img/custom_dest/tanzania/tanzania3.jpg"
                }, {
                    "image": "img/custom_dest/tanzania/tanzania4.jpg"
                }, {
                    "image": "img/custom_dest/tanzania/tanzania5.jpg"
                }];
                break;
            case 'Thailand':
                $scope.getDestination = {
                    "image": "img/banner_images/thailand.jpg",
                    "description": "Hash brownies... Hot Girls... Unlimited Alcohol... Ultimate Nightlife... World famous Red Light District! Oh Yes! This city lets you indulge into everything that is not so legal in the other parts of the world!",
                    "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever"
                };
                $scope.getActivity = [{
                    "image": "img/custom_dest/thailand/thailand1.jpg"
                }, {
                    "image": "img/custom_dest/thailand/thailand2.jpg"
                }, {
                    "image": "img/custom_dest/thailand/thailand3.jpg"
                }, {
                    "image": "img/custom_dest/thailand/thailand4.jpg"
                }, {
                    "image": "img/custom_dest/thailand/thailand5.jpg"
                }, {
                    "image": "img/custom_dest/thailand/thailand6.jpg"
                }, {
                    "image": "img/custom_dest/thailand/thailand7.jpg"
                }, {
                    "image": "img/custom_dest/thailand/thailand8.jpg"
                }];
                break;
            case 'United Arab Emirates':
                $scope.getDestination = {
                    "image": "img/banner_images/united arab of emirates.jpg",
                    "description": "Hash brownies... Hot Girls... Unlimited Alcohol... Ultimate Nightlife... World famous Red Light District! Oh Yes! This city lets you indulge into everything that is not so legal in the other parts of the world!",
                    "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever"
                };
                $scope.getActivity = [{
                    "image": "img/custom_dest/uae/uae1.jpg"
                }, {
                    "image": "img/custom_dest/uae/uae2.jpg"
                }, {
                    "image": "img/custom_dest/uae/uae3.jpg"
                }, {
                    "image": "img/custom_dest/uae/uae4.jpg"
                }, {
                    "image": "img/custom_dest/uae/uae5.jpg"
                }, {
                    "image": "img/custom_dest/uae/uae6.jpg"
                }, {
                    "image": "img/custom_dest/uae/uae7.jpg"
                }, {
                    "image": "img/custom_dest/uae/uae8.jpg"
                }, {
                    "image": "img/custom_dest/uae/uae9.jpg"
                }];
                break;
            case 'United Kingdom':
                $scope.getDestination = {
                    "image": "img/banner_images/united kingdom.jpg",
                    "description": "Hash brownies... Hot Girls... Unlimited Alcohol... Ultimate Nightlife... World famous Red Light District! Oh Yes! This city lets you indulge into everything that is not so legal in the other parts of the world!",
                    "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever"
                };
                $scope.getActivity = [{
                    "image": "img/custom_dest/uk/uk1.jpg"
                }, {
                    "image": "img/custom_dest/uk/uk2.jpg"
                }, {
                    "image": "img/custom_dest/uk/uk3.jpg"
                }, {
                    "image": "img/custom_dest/uk/uk4.jpg"
                }, {
                    "image": "img/custom_dest/uk/uk5.jpg"
                }, {
                    "image": "img/custom_dest/uk/uk6.jpg"
                }, {
                    "image": "img/custom_dest/uk/uk7.jpg"
                }, {
                    "image": "img/custom_dest/uk/uk8.jpg"
                }, {
                    "image": "img/custom_dest/uk/uk9.jpg"
                }, {
                    "image": "img/custom_dest/uk/uk10.jpg"
                }];
                break;
            case 'United States of America':
                $scope.getDestination = {
                    "image": "img/banner_images/usa.jpg",
                    "description": "Hash brownies... Hot Girls... Unlimited Alcohol... Ultimate Nightlife... World famous Red Light District! Oh Yes! This city lets you indulge into everything that is not so legal in the other parts of the world!",
                    "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever"
                };
                $scope.getActivity = [{
                    "image": "img/custom_dest/usa/usa1.jpg"
                }, {
                    "image": "img/custom_dest/usa/usa2.jpg"
                }, {
                    "image": "img/custom_dest/usa/usa3.jpg"
                }, {
                    "image": "img/custom_dest/usa/usa4.jpg"
                }, {
                    "image": "img/custom_dest/usa/usa5.jpg"
                }, {
                    "image": "img/custom_dest/usa/usa6.jpg"
                }, {
                    "image": "img/custom_dest/usa/usa7.jpg"
                }, {
                    "image": "img/custom_dest/usa/usa8.jpg"
                }, {
                    "image": "img/custom_dest/usa/usa9.jpg"
                }, {
                    "image": "img/custom_dest/usa/usa10.jpg"
                }, {
                    "image": "img/custom_dest/usa/usa11.jpg"
                }, {
                    "image": "img/custom_dest/usa/usa12.jpg"
                }, {
                    "image": "img/custom_dest/usa/usa13.jpg"
                }];
                break;
            case 'Zimbabwe':
                $scope.getDestination = {
                    "image": "img/banner_images/zimbabwe.jpg",
                    "description": "Hash brownies... Hot Girls... Unlimited Alcohol... Ultimate Nightlife... World famous Red Light District! Oh Yes! This city lets you indulge into everything that is not so legal in the other parts of the world!",
                    "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever"
                };
                $scope.getActivity = [{
                    "image": "img/custom_dest/zimbabwe/zimbabwe1.jpg"
                }, {
                    "image": "img/custom_dest/zimbabwe/zimbabwe2.jpg"
                }, {
                    "image": "img/custom_dest/zimbabwe/zimbabwe3.jpg"
                }, {
                    "image": "img/custom_dest/zimbabwe/zimbabwe4.jpg"
                }, {
                    "image": "img/custom_dest/zimbabwe/zimbabwe5.jpg"
                }, {
                    "image": "img/custom_dest/zimbabwe/zimbabwe6.jpg"
                }];
                break;
            default:
                break;
        }
        $scope.getTitle = [{
            "name": "Explore our Ready Packages made by our EXPERTS!!",
            "name1": "abc",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }, {
            "name": "Explore our Ready Packages made by our EXPERTS!!Explore our Ready Packages made by our EXPERTS!!Explore our Ready Packages made by our EXPERTS!!Explore our Ready Packages made by our EXPERTS!!Explore our Ready Packages made by our EXPERTS!!Explore our Ready Packages made by our EXPERTS!!Explore our Ready Packages made by our EXPERTS!!Explore our Ready Packages made by our EXPERTS!!Explore our Ready Packages made by our EXPERTS!!Explore our Ready Packages made by our EXPERTS!!Explore our Ready Packages made by our EXPERTS!!Explore our Ready Packages made by our EXPERTS!!Explore our Ready Packages made by our EXPERTS!!Explore our Ready Packages made by our EXPERTS!!",
            "name1": "abc",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }, {
            "name": "Explore our Ready Packages made by our EXPERTS!!Explore our Ready Packages made by our EXPERTS!!Explore our Ready Packages made by our EXPERTS!!",
            "name1": "abc",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }];
    })

    .controller('ActivityCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $http) {
        $scope.template = TemplateService.getHTML("content/activity.html");
        TemplateService.title = "Activity"; // This is the Title of the Website
        $scope.navigation = NavigationService.getNavigation();
        $scope.getActivity = [{
            "name": "BICYCLE TOUR",
            "image": "img/activities/bicycle_tour.jpg"
        }, {
            "name": "FOOTBALL",
            "image": "img/activities/football.jpg"
        }, {
            "name": "ROULETTE",
            "image": "img/activities/roulette.jpg"
        }, {
            "name": "NIGHT CLUB/DISCO",
            "image": "img/activities/nightclub.jpg"
        }, {
            "name": "PARAGLIDING",
            "image": "img/activities/parasailing.jpg"
        }, {
            "name": "SCUBA DIVING",
            "image": "img/activities/scuba_diving.jpg"
        }, {
            "name": "SKY DIVING",
            "image": "img/activities/sky_diving.jpg"
        }, {
            "name": "TRECKING",
            "image": "img/activities/trecking.jpg"
        }, {
            "name": "SNOW SKIING",
            "image": "img/activities/skiing.jpg"
        }];
        // $scope.loadLessActivities();
        // $scope.loadMoreActivities = function () {
        //     $scope.viewMore = false;
        //     $scope.viewLess = true;
        //     var images = [];
        //     images.smallImage = $scope.smallImageArray;
        //     images.bigImage = $scope.bigImageArray;
        //     $scope.activityLand = images;
        //     if (images.bigImage.length >= images.smallImage.length) {
        //         $scope.activityLoop = _.times(images.bigImage.length, Number);
        //         console.log('if $scope.activityLoop', $scope.activityLoop);
        //     } else {
        //         $scope.activityLoop = _.times(images.smallImage.length, Number);
        //         console.log('else $scope.activityLoop', $scope.activityLoop);
        //     }
        //     // TemplateService.removeLoader;
        // }
    })

    .controller('WhatsHotCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $http) {
        $scope.template = TemplateService.getHTML("content/whats-hot.html");
        TemplateService.title = "Activity"; // This is the Title of the Website
        $scope.navigation = NavigationService.getNavigation();
        $scope.allDestination = [{
            "name": "Hat Rin Full Moon Party",
            "fromDate": "03-04 November 2017",
            "image": "img/bachelor/img.jpg",
            "location": "Koh Phangan"
        }, {
            "name": "Armenia",
            "fromDate": "03-04 November 2017",
            "image": "img/bachelor/img1.jpg",
            "location": "Koh Phangan"
        }, {
            "name": "Australia",
            "fromDate": "03-04 November 2017",
            "image": "img/bachelor/img2.jpg",
            "location": "Koh Phangan"
        }, {
            "name": "Austria",
            "fromDate": "03-04 November 2017",
            "image": "img/bachelor/img3.jpg",
            "location": "Koh Phangan"
        }, {
            "name": "Austria",
            "fromDate": "03-04 November 2017",
            "image": "img/bachelor/img4.jpg",
            "location": "Koh Phangan"
        }, {
            "name": "Austria",
            "fromDate": "03-04 November 2017",
            "image": "img/bachelor/img5.jpg",
            "location": "Koh Phangan"
        }]
        $scope.allDestination1 = [{
            "name": "Hat Rin Full Moon Party",
            "fromDate": "03-04 November 2017",
            "image": "img/bachelorette/img.jpg",
            "location": "Koh Phangan"
        }, {
            "name": "Armenia",
            "fromDate": "03-04 November 2017",
            "image": "img/bachelorette/img1.jpg",
            "location": "Koh Phangan"
        }, {
            "name": "Australia",
            "fromDate": "03-04 November 2017",
            "image": "img/bachelorette/img2.jpg",
            "location": "Koh Phangan"
        }, {
            "name": "Austria",
            "fromDate": "03-04 November 2017",
            "image": "img/bachelorette/img3.jpg",
            "location": "Koh Phangan"
        }, {
            "name": "Austria",
            "fromDate": "03-04 November 2017",
            "image": "img/bachelorette/img4.jpg",
            "location": "Koh Phangan"
        }, {
            "name": "Austria",
            "fromDate": "03-04 November 2017",
            "image": "img/bachelorette/img5.jpg",
            "location": "Koh Phangan"
        }]
        $scope.mySlidesss = [{
            "banner": "img/bachelor.jpg",
            "banner": "img/bachelorette.jpg"
        }]
    })

    // Example API Controller
    .controller('DemoAPICtrl', function ($scope, TemplateService, apiService, NavigationService, $timeout) {
        apiService.getDemo($scope.formData, function (data) {
            console.log(data);
        });
    });