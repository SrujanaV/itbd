myApp.controller('HomeCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.getHTML("content/home.html");
        TemplateService.title = "Home"; //This is the Title of the Website
        $scope.navigation = NavigationService.getNavigation();
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
            "name": "AUSTRALIA"
        }, {
            "image": "img/brazil.jpg",
            "name": "BRAZIL"
        }, {
            "image": "img/canada.jpg",
            "name": "CANADA"
        }, {
            "image": "img/france.jpg",
            "name": "FRANCE"
        }];
        $scope.popularAttraction = [{
            "image1": "img/italy.jpg",
            "name": "ITALY"
        }, {
            "image1": "img/cruise.jpg",
            "name": "CRUISE"
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
        switch ($stateParams.id) {
            //3//
            case 'Argentina':
                $scope.getDestination = {
                    "image": "img/banner_images/argentina.jpg",
                    "description": "Hash brownies... Hot Girls... Unlimited Alcohol... Ultimate Nightlife... World famous Red Light District! Oh Yes! This city lets you indulge into everything that is not so legal in the other parts of the world!"
                };
                break;
            case 'Armenia':
                $scope.getDestination = {
                    "image": "img/banner_images/armenia.jpg",
                    "description": "Hash brownies... Hot Girls... Unlimited Alcohol... Ultimate Nightlife... World famous Red Light District! Oh Yes! This city lets you indulge into everything that is not so legal in the other parts of the world!"
                };
                break;
            case 'Australia':
                $scope.getDestination = {
                    "image": "img/banner_images/australia.jpg",
                    "description": "Hash brownies... Hot Girls... Unlimited Alcohol... Ultimate Nightlife... World famous Red Light District! Oh Yes! This city lets you indulge into everything that is not so legal in the other parts of the world!"
                };
                break;
            case 'Austria':
                $scope.getDestination = {
                    "image": "img/banner_images/austria.jpg",
                    "description": "Hash brownies... Hot Girls... Unlimited Alcohol... Ultimate Nightlife... World famous Red Light District! Oh Yes! This city lets you indulge into everything that is not so legal in the other parts of the world!"
                };
                break;
            case 'Azerbaijan':
                $scope.getDestination = {
                    "image": "img/banner_images/azerbaijan.jpg",
                    "description": "Hash brownies... Hot Girls... Unlimited Alcohol... Ultimate Nightlife... World famous Red Light District! Oh Yes! This city lets you indulge into everything that is not so legal in the other parts of the world!"
                };
                break;
            case 'Bhutan':
                $scope.getDestination = {
                    "image": "img/banner_images/bhutan.jpg",
                    "description": "Hash brownies... Hot Girls... Unlimited Alcohol... Ultimate Nightlife... World famous Red Light District! Oh Yes! This city lets you indulge into everything that is not so legal in the other parts of the world!"
                };
                break;
            case 'Brazil':
                $scope.getDestination = {
                    "image": "img/banner_images/brazil.jpg",
                    "description": "Hash brownies... Hot Girls... Unlimited Alcohol... Ultimate Nightlife... World famous Red Light District! Oh Yes! This city lets you indulge into everything that is not so legal in the other parts of the world!"
                };
                break;
            case 'Bulgaria':
                $scope.getDestination = {
                    "image": "img/banner_images/bulgaria.jpg",
                    "description": "Hash brownies... Hot Girls... Unlimited Alcohol... Ultimate Nightlife... World famous Red Light District! Oh Yes! This city lets you indulge into everything that is not so legal in the other parts of the world!"
                };
                break;
            case 'Canada':
                $scope.getDestination = {
                    "image": "img/banner_images/canada.jpg",
                    "description": "Hash brownies... Hot Girls... Unlimited Alcohol... Ultimate Nightlife... World famous Red Light District! Oh Yes! This city lets you indulge into everything that is not so legal in the other parts of the world!"
                };
                break;
            case 'Chile':
                $scope.getDestination = {
                    "image": "img/banner_images/chile.jpg",
                    "description": "Hash brownies... Hot Girls... Unlimited Alcohol... Ultimate Nightlife... World famous Red Light District! Oh Yes! This city lets you indulge into everything that is not so legal in the other parts of the world!"
                };
                break;
            case 'Croatia':
                $scope.getDestination = {
                    "image": "img/banner_images/croatia.jpg",
                    "description": "Hash brownies... Hot Girls... Unlimited Alcohol... Ultimate Nightlife... World famous Red Light District! Oh Yes! This city lets you indulge into everything that is not so legal in the other parts of the world!"
                };
                break;
            case 'Cruise Vacations ':
                $scope.getDestination = {
                    "image": "img/banner_images/cruise vacations.jpg",
                    "description": "Hash brownies... Hot Girls... Unlimited Alcohol... Ultimate Nightlife... World famous Red Light District! Oh Yes! This city lets you indulge into everything that is not so legal in the other parts of the world!"
                };
                break;
            case 'Czech Republic':
                $scope.getDestination = {
                    "image": "img/banner_images/czech republic.jpg",
                    "description": "Hash brownies... Hot Girls... Unlimited Alcohol... Ultimate Nightlife... World famous Red Light District! Oh Yes! This city lets you indulge into everything that is not so legal in the other parts of the world!"
                };
                break;
            case 'Denmark':
                $scope.getDestination = {
                    "image": "img/banner_images/denmark.jpg",
                    "description": "Hash brownies... Hot Girls... Unlimited Alcohol... Ultimate Nightlife... World famous Red Light District! Oh Yes! This city lets you indulge into everything that is not so legal in the other parts of the world!"
                };
                break;
            case 'Estonia':
                $scope.getDestination = {
                    "image": "img/banner_images/estonia.jpg",
                    "description": "Hash brownies... Hot Girls... Unlimited Alcohol... Ultimate Nightlife... World famous Red Light District! Oh Yes! This city lets you indulge into everything that is not so legal in the other parts of the world!"
                };
                break;
            case 'Fiji Islands':
                $scope.getDestination = {
                    "image": "img/banner_images/fiji islands.jpg",
                    "description": "Hash brownies... Hot Girls... Unlimited Alcohol... Ultimate Nightlife... World famous Red Light District! Oh Yes! This city lets you indulge into everything that is not so legal in the other parts of the world!"
                };
                break;
            case 'Finland':
                $scope.getDestination = {
                    "image": "img/banner_images/finland.jpg",
                    "description": "Hash brownies... Hot Girls... Unlimited Alcohol... Ultimate Nightlife... World famous Red Light District! Oh Yes! This city lets you indulge into everything that is not so legal in the other parts of the world!"
                };
                break;
            case 'France':
                $scope.getDestination = {
                    "image": "img/banner_images/france.jpg",
                    "description": "Hash brownies... Hot Girls... Unlimited Alcohol... Ultimate Nightlife... World famous Red Light District! Oh Yes! This city lets you indulge into everything that is not so legal in the other parts of the world!"
                };
                break;
            case 'Georgia':
                $scope.getDestination = {
                    "image": "img/banner_images/georgia.jpg",
                    "description": "Hash brownies... Hot Girls... Unlimited Alcohol... Ultimate Nightlife... World famous Red Light District! Oh Yes! This city lets you indulge into everything that is not so legal in the other parts of the world!"
                };
                break;
            case 'Germany':
                $scope.getDestination = {
                    "image": "img/banner_images/germany.jpg",
                    "description": "Hash brownies... Hot Girls... Unlimited Alcohol... Ultimate Nightlife... World famous Red Light District! Oh Yes! This city lets you indulge into everything that is not so legal in the other parts of the world!"
                };
                break;
            case 'Greece':
                $scope.getDestination = {
                    "image": "img/banner_images/greece.jpg",
                    "description": "Hash brownies... Hot Girls... Unlimited Alcohol... Ultimate Nightlife... World famous Red Light District! Oh Yes! This city lets you indulge into everything that is not so legal in the other parts of the world!"
                };
                break;
            case 'Hong Kong':
                $scope.getDestination = {
                    "image": "img/banner_images/hongkong.jpg",
                    "description": "Hash brownies... Hot Girls... Unlimited Alcohol... Ultimate Nightlife... World famous Red Light District! Oh Yes! This city lets you indulge into everything that is not so legal in the other parts of the world!"
                };
                break;
            case 'Hungary':
                $scope.getDestination = {
                    "image": "img/banner_images/hungary.jpg",
                    "description": "Hash brownies... Hot Girls... Unlimited Alcohol... Ultimate Nightlife... World famous Red Light District! Oh Yes! This city lets you indulge into everything that is not so legal in the other parts of the world!"
                };
                break;
            case 'Iceland':
                $scope.getDestination = {
                    "image": "img/banner_images/iceland.jpg",
                    "description": "Hash brownies... Hot Girls... Unlimited Alcohol... Ultimate Nightlife... World famous Red Light District! Oh Yes! This city lets you indulge into everything that is not so legal in the other parts of the world!"
                };
                break;



            case 'Indonesia':
                $scope.getDestination = {
                    "image": "img/banner_images/indonesia.jpg",
                    "description": "Hash brownies... Hot Girls... Unlimited Alcohol... Ultimate Nightlife... World famous Red Light District! Oh Yes! This city lets you indulge into everything that is not so legal in the other parts of the world!"
                };
                break;
            case 'Israel':
                $scope.getDestination = {
                    "image": "img/banner_images/israel.jpg",
                    "description": "Hash brownies... Hot Girls... Unlimited Alcohol... Ultimate Nightlife... World famous Red Light District! Oh Yes! This city lets you indulge into everything that is not so legal in the other parts of the world!"
                };
                break;
            case 'Italy':
                $scope.getDestination = {
                    "image": "img/banner_images/italy.jpg",
                    "description": "Hash brownies... Hot Girls... Unlimited Alcohol... Ultimate Nightlife... World famous Red Light District! Oh Yes! This city lets you indulge into everything that is not so legal in the other parts of the world!"
                };
                break;
            case 'Jamaica':
                $scope.getDestination = {
                    "image": "img/banner_images/jamaica.jpg",
                    "description": "Hash brownies... Hot Girls... Unlimited Alcohol... Ultimate Nightlife... World famous Red Light District! Oh Yes! This city lets you indulge into everything that is not so legal in the other parts of the world!"
                };
                break;
            case 'Japan':
                $scope.getDestination = {
                    "image": "img/banner_images/japan.jpg",
                    "description": "Hash brownies... Hot Girls... Unlimited Alcohol... Ultimate Nightlife... World famous Red Light District! Oh Yes! This city lets you indulge into everything that is not so legal in the other parts of the world!"
                };
                break;
            case 'Jordan':
                $scope.getDestination = {
                    "image": "img/banner_images/jordan.jpg",
                    "description": "Hash brownies... Hot Girls... Unlimited Alcohol... Ultimate Nightlife... World famous Red Light District! Oh Yes! This city lets you indulge into everything that is not so legal in the other parts of the world!"
                };
                break;
            case 'Kenya':
                $scope.getDestination = {
                    "image": "img/banner_images/kenya.jpg",
                    "description": "Hash brownies... Hot Girls... Unlimited Alcohol... Ultimate Nightlife... World famous Red Light District! Oh Yes! This city lets you indulge into everything that is not so legal in the other parts of the world!"
                };
                break;
            case 'Korea':
                $scope.getDestination = {
                    "image": "img/banner_images/korea.jpg",
                    "description": "Hash brownies... Hot Girls... Unlimited Alcohol... Ultimate Nightlife... World famous Red Light District! Oh Yes! This city lets you indulge into everything that is not so legal in the other parts of the world!"
                };
                break;
            case 'Latvia':
                $scope.getDestination = {
                    "image": "img/banner_images/latvia.jpg",
                    "description": "Hash brownies... Hot Girls... Unlimited Alcohol... Ultimate Nightlife... World famous Red Light District! Oh Yes! This city lets you indulge into everything that is not so legal in the other parts of the world!"
                };
                break;
            case 'Lithuania':
                $scope.getDestination = {
                    "image": "img/banner_images/lithuania.jpg",
                    "description": "Hash brownies... Hot Girls... Unlimited Alcohol... Ultimate Nightlife... World famous Red Light District! Oh Yes! This city lets you indulge into everything that is not so legal in the other parts of the world!"
                };
                break;
            case 'Macau':
                $scope.getDestination = {
                    "image": "img/banner_images/macau.jpg",
                    "description": "Hash brownies... Hot Girls... Unlimited Alcohol... Ultimate Nightlife... World famous Red Light District! Oh Yes! This city lets you indulge into everything that is not so legal in the other parts of the world!"
                };
                break;
            case 'Malaysia':
                $scope.getDestination = {
                    "image": "img/banner_images/malaysia.jpg",
                    "description": "Hash brownies... Hot Girls... Unlimited Alcohol... Ultimate Nightlife... World famous Red Light District! Oh Yes! This city lets you indulge into everything that is not so legal in the other parts of the world!"
                };
                break;
            case 'Maldives':
                $scope.getDestination = {
                    "image": "img/banner_images/maldives.jpg",
                    "description": "Hash brownies... Hot Girls... Unlimited Alcohol... Ultimate Nightlife... World famous Red Light District! Oh Yes! This city lets you indulge into everything that is not so legal in the other parts of the world!"
                };
                break;
            case 'Malta':
                $scope.getDestination = {
                    "image": "img/banner_images/malta.jpg",
                    "description": "Hash brownies... Hot Girls... Unlimited Alcohol... Ultimate Nightlife... World famous Red Light District! Oh Yes! This city lets you indulge into everything that is not so legal in the other parts of the world!"
                };
                break;
            case 'Mauritius':
                $scope.getDestination = {
                    "image": "img/banner_images/mauritius.jpg",
                    "description": "Hash brownies... Hot Girls... Unlimited Alcohol... Ultimate Nightlife... World famous Red Light District! Oh Yes! This city lets you indulge into everything that is not so legal in the other parts of the world!"
                };
                break;
            case 'Mexico':
                $scope.getDestination = {
                    "image": "img/banner_images/mexico.jpg",
                    "description": "Hash brownies... Hot Girls... Unlimited Alcohol... Ultimate Nightlife... World famous Red Light District! Oh Yes! This city lets you indulge into everything that is not so legal in the other parts of the world!"
                };
                break;
            case 'Monaco':
                $scope.getDestination = {
                    "image": "img/banner_images/monaco.jpg",
                    "description": "Hash brownies... Hot Girls... Unlimited Alcohol... Ultimate Nightlife... World famous Red Light District! Oh Yes! This city lets you indulge into everything that is not so legal in the other parts of the world!"
                };
                break;
            case 'Moscow':
                $scope.getDestination = {
                    "image": "img/banner_images/moscow.jpg",
                    "description": "Hash brownies... Hot Girls... Unlimited Alcohol... Ultimate Nightlife... World famous Red Light District! Oh Yes! This city lets you indulge into everything that is not so legal in the other parts of the world!"
                };
                break;
            case 'Netherlands':
                $scope.getDestination = {
                    "image": "img/banner_images/netherlands.jpg",
                    "description": "Hash brownies... Hot Girls... Unlimited Alcohol... Ultimate Nightlife... World famous Red Light District! Oh Yes! This city lets you indulge into everything that is not so legal in the other parts of the world!"
                };
                break;
            case 'New Zealand':
                $scope.getDestination = {
                    "image": "img/banner_images/new zealand.jpg",
                    "description": "Hash brownies... Hot Girls... Unlimited Alcohol... Ultimate Nightlife... World famous Red Light District! Oh Yes! This city lets you indulge into everything that is not so legal in the other parts of the world!"
                };
                break;
            case 'Norway':
                $scope.getDestination = {
                    "image": "img/banner_images/norway.jpg",
                    "description": "Hash brownies... Hot Girls... Unlimited Alcohol... Ultimate Nightlife... World famous Red Light District! Oh Yes! This city lets you indulge into everything that is not so legal in the other parts of the world!"
                };
                break;
            case 'Peru':
                $scope.getDestination = {
                    "image": "img/banner_images/peru.jpg",
                    "description": "Hash brownies... Hot Girls... Unlimited Alcohol... Ultimate Nightlife... World famous Red Light District! Oh Yes! This city lets you indulge into everything that is not so legal in the other parts of the world!"
                };
                break;
            case 'Phillippines':
                $scope.getDestination = {
                    "image": "img/banner_images/phillippines.jpg",
                    "description": "Hash brownies... Hot Girls... Unlimited Alcohol... Ultimate Nightlife... World famous Red Light District! Oh Yes! This city lets you indulge into everything that is not so legal in the other parts of the world!"
                };
                break;
            case 'Poland':
                $scope.getDestination = {
                    "image": "img/banner_images/poland.jpg",
                    "description": "Hash brownies... Hot Girls... Unlimited Alcohol... Ultimate Nightlife... World famous Red Light District! Oh Yes! This city lets you indulge into everything that is not so legal in the other parts of the world!"
                };
                break;


            case 'Portugal':
                $scope.getDestination = {
                    "image": "img/banner_images/portugal.jpg",
                    "description": "Hash brownies... Hot Girls... Unlimited Alcohol... Ultimate Nightlife... World famous Red Light District! Oh Yes! This city lets you indulge into everything that is not so legal in the other parts of the world!"
                };
                break;
            case 'Puerto Rico':
                $scope.getDestination = {
                    "image": "img/banner_images/puerto rico.jpg",
                    "description": "Hash brownies... Hot Girls... Unlimited Alcohol... Ultimate Nightlife... World famous Red Light District! Oh Yes! This city lets you indulge into everything that is not so legal in the other parts of the world!"
                };
                break;
            case 'River Cruises':
                $scope.getDestination = {
                    "image": "img/banner_images/river cruises.jpg",
                    "description": "Hash brownies... Hot Girls... Unlimited Alcohol... Ultimate Nightlife... World famous Red Light District! Oh Yes! This city lets you indulge into everything that is not so legal in the other parts of the world!"
                };
                break;
            case 'Rwanda':
                $scope.getDestination = {
                    "image": "img/banner_images/rwanda.jpg",
                    "description": "Hash brownies... Hot Girls... Unlimited Alcohol... Ultimate Nightlife... World famous Red Light District! Oh Yes! This city lets you indulge into everything that is not so legal in the other parts of the world!"
                };
                break;
            case 'Seychelles':
                $scope.getDestination = {
                    "image": "img/banner_images/seychelles.jpg",
                    "description": "Hash brownies... Hot Girls... Unlimited Alcohol... Ultimate Nightlife... World famous Red Light District! Oh Yes! This city lets you indulge into everything that is not so legal in the other parts of the world!"
                };
                break;
            case 'Singapore':
                $scope.getDestination = {
                    "image": "img/banner_images/singapore.jpg",
                    "description": "Hash brownies... Hot Girls... Unlimited Alcohol... Ultimate Nightlife... World famous Red Light District! Oh Yes! This city lets you indulge into everything that is not so legal in the other parts of the world!"
                };
                break;
            case 'Srilanka':
                $scope.getDestination = {
                    "image": "img/banner_images/sirlanka.jpg",
                    "description": "Hash brownies... Hot Girls... Unlimited Alcohol... Ultimate Nightlife... World famous Red Light District! Oh Yes! This city lets you indulge into everything that is not so legal in the other parts of the world!"
                };
                break;
            case 'Slovakia':
                $scope.getDestination = {
                    "image": "img/banner_images/slovakia.jpg",
                    "description": "Hash brownies... Hot Girls... Unlimited Alcohol... Ultimate Nightlife... World famous Red Light District! Oh Yes! This city lets you indulge into everything that is not so legal in the other parts of the world!"
                };
                break;
            case 'Slovenia':
                $scope.getDestination = {
                    "image": "img/banner_images/slovenia.jpg",
                    "description": "Hash brownies... Hot Girls... Unlimited Alcohol... Ultimate Nightlife... World famous Red Light District! Oh Yes! This city lets you indulge into everything that is not so legal in the other parts of the world!"
                };
                break;



            case 'South Africa':
                $scope.getDestination = {
                    "image": "img/banner_images/south africa.jpg",
                    "description": "Hash brownies... Hot Girls... Unlimited Alcohol... Ultimate Nightlife... World famous Red Light District! Oh Yes! This city lets you indulge into everything that is not so legal in the other parts of the world!"
                };
                break;
            case 'St.Petersburg':
                $scope.getDestination = {
                    "image": "img/banner_images/st.petersburg.jpg",
                    "description": "Hash brownies... Hot Girls... Unlimited Alcohol... Ultimate Nightlife... World famous Red Light District! Oh Yes! This city lets you indulge into everything that is not so legal in the other parts of the world!"
                };
                break;
            case 'Sweden':
                $scope.getDestination = {
                    "image": "img/banner_images/sweden.jpg",
                    "description": "Hash brownies... Hot Girls... Unlimited Alcohol... Ultimate Nightlife... World famous Red Light District! Oh Yes! This city lets you indulge into everything that is not so legal in the other parts of the world!"
                };
                break;
            case 'Switzerland':
                $scope.getDestination = {
                    "image": "img/banner_images/switzerland.jpg",
                    "description": "Hash brownies... Hot Girls... Unlimited Alcohol... Ultimate Nightlife... World famous Red Light District! Oh Yes! This city lets you indulge into everything that is not so legal in the other parts of the world!"
                };
                break;
            case 'Tanzania':
                $scope.getDestination = {
                    "image": "img/banner_images/tanzania.jpg",
                    "description": "Hash brownies... Hot Girls... Unlimited Alcohol... Ultimate Nightlife... World famous Red Light District! Oh Yes! This city lets you indulge into everything that is not so legal in the other parts of the world!"
                };
                break;
            case 'Thailand':
                $scope.getDestination = {
                    "image": "img/banner_images/thailand.jpg",
                    "description": "Hash brownies... Hot Girls... Unlimited Alcohol... Ultimate Nightlife... World famous Red Light District! Oh Yes! This city lets you indulge into everything that is not so legal in the other parts of the world!"
                };
                break;
            case 'United Arab of Emirates':
                $scope.getDestination = {
                    "image": "img/banner_images/united arab of emirates.jpg",
                    "description": "Hash brownies... Hot Girls... Unlimited Alcohol... Ultimate Nightlife... World famous Red Light District! Oh Yes! This city lets you indulge into everything that is not so legal in the other parts of the world!"
                };
                break;
            case 'United Kingdom':
                $scope.getDestination = {
                    "image": "img/banner_images/united kingdom.jpg",
                    "description": "Hash brownies... Hot Girls... Unlimited Alcohol... Ultimate Nightlife... World famous Red Light District! Oh Yes! This city lets you indulge into everything that is not so legal in the other parts of the world!"
                };
                break;
            case 'United States of Emirates':
                $scope.getDestination = {
                    "image": "img/banner_images/united states of emirates.jpg",
                    "description": "Hash brownies... Hot Girls... Unlimited Alcohol... Ultimate Nightlife... World famous Red Light District! Oh Yes! This city lets you indulge into everything that is not so legal in the other parts of the world!"
                };
                break;
            case 'USA':
                $scope.getDestination = {
                    "image": "img/banner_images/usa.jpg",
                    "description": "Hash brownies... Hot Girls... Unlimited Alcohol... Ultimate Nightlife... World famous Red Light District! Oh Yes! This city lets you indulge into everything that is not so legal in the other parts of the world!"
                };
                break;
            case 'Zimbabwe':
                $scope.getDestination = {
                    "image": "img/banner_images/zimbabwe.jpg",
                    "description": "Hash brownies... Hot Girls... Unlimited Alcohol... Ultimate Nightlife... World famous Red Light District! Oh Yes! This city lets you indulge into everything that is not so legal in the other parts of the world!"
                };
                break;
            default:
                $scope.getDestination = {
                    "image": "img/customDes/armenia.jpg",
                    "description": "Hash brownies... Hot Girls... Unlimited Alcohol... Ultimate Nightlife... World famous Red Light District! Oh Yes! This city lets you indulge into everything that is not so legal in the other parts of the world!"
                };
        }
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
            "name": "PARASAILING",
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
        }];
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
            "name": "PARASAILING",
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
        }];
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