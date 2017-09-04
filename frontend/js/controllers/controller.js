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
    .controller('CustomDestinationCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $http) {
        $scope.template = TemplateService.getHTML("content/customdestination.html");
        TemplateService.title = "Grid"; // This is the Title of the Website
        $scope.navigation = NavigationService.getNavigation();
        $scope.getDestination = [{
            "image": "img/customDes/argentina.jpg",
            "description": "Hash brownies... Hot Girls... Unlimited Alcohol... Ultimate Nightlife... World famous Red Light District! Oh Yes! This city lets you indulge into everything that is not so legal in the other parts of the world!"
        }];
        // $scope.getPackage = [{
        //     "title1": "hello",
        //     "title2": "hello1",
        //     "image": "img/dest/srilanka.jpg"
        // }, {
        //     "title1": "hello",
        //     "title2": "hello1",
        //     "image": "img/dest/srilanka.jpg"
        // }, {
        //     "title1": "hello",
        //     "title2": "hello1",
        //     "image": "img/dest/srilanka.jpg"
        // }];
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
        $scope.myDropdown = [{
            "name": "Portugal"
        }, {
            "name": "Portugal"
        }, {
            "name": "Portugal"
        }, {
            "name": "Portugal"
        }];
        $scope.activityLand = [{
            "image1": "img/dest/srilanka.jpg",
            "name": "hello1",
            "description": "The Array parameter is a list of strings or integers. When you specify a single numeric parameter with the Array constructor, you specify the initial length of the array.",
            "smallImage": ["img/dest/srilanka.jpg", "img/dest/srilanka.jpg", "img/dest/srilanka.jpg"]
        }, {
            "title1": "hello",
            "title2": "hello1",
            "image": "img/dest/srilanka.jpg"
        }, {
            "title1": "hello",
            "title2": "hello1",
            "image": "img/dest/srilanka.jpg"
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
            "banner": "img/wh1.jpg",
            "banner": "img/wh2.jpg",
            "banner": "img/wh1.jpg",
            "banner": "img/wh2.jpg"
        }]
    })

    // Example API Controller
    .controller('DemoAPICtrl', function ($scope, TemplateService, apiService, NavigationService, $timeout) {
        apiService.getDemo($scope.formData, function (data) {
            console.log(data);
        });
    });