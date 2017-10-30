myApp.controller('HomeCtrl', function ($scope, TemplateService, NavigationService, $timeout, $state) {
        $scope.template = TemplateService.getHTML("content/home.html");
        TemplateService.title = "Home"; //This is the Title of the Website
        $scope.navigation = NavigationService.getNavigation();
        $scope.formData = {};

        $scope.gotoFun = function () {
            $state.go('customdestination', {
                id: $scope.goTo
            })
        }
        $scope.search = function (name) {
            $scope.goTo = name;
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
        }, {
            "name": "Peru"
        }, {
            "name": "Philippines"
        }, {
            "name": "Poland"
        }, {
            "name": "Portugal"
        }, {
            "name": "Puerto Rico"
        }, {
            "name": "River Cruise"
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
            "name": "Sri Lanka"
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
            "name": "United Arab Emirates"
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
            "name": "Fiji Islands",
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
            "name": "Cruise Vacations",
            "image": "img/dest/cruise.jpg",
        }, {
            "name": "Czech Republic",
            "image": "img/dest/czech.jpg",
        }, {
            "name": "Denmark",
            "image": "img/dest/denmark.jpg",
        }, {
            "name": "Estonia",
            "image": "img/dest/estonia.jpg",
        }, {
            "name": "Fiji Islands",
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
    .controller('CustomDestinationCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $http, $stateParams, $uibModal) {
        $scope.template = TemplateService.getHTML("content/customdestination.html");
        TemplateService.title = "Grid"; // This is the Title of the Website
        $scope.navigation = NavigationService.getNavigation();
        $scope.id = $stateParams.id;
        // $scope.getDestination = {
        //     "image": "img/customDes/argentina.jpg",
        //     "description": "Hash brownies... Hot Girls... Unlimited Alcohol... Ultimate Nightlife... World famous Red Light District! Oh Yes! This city lets you indulge into everything that is not so legal in the other parts of the world!"
        // };
        console.log($stateParams.id);


// $scope.cartSubmit = function (cartData, detailForm) {
//             console.log("submiting...")
//             console.log(cartData)
//             if (cartData) {
//                 if (detailForm.$valid == true) {
//                     NavigationService.submitEnquiry(cartData, function (data) {
//                         if (data.data.value) {
//                             console.log("all data")
//                         }
//                         console.log(data)
//                     });
//                 }
//             }
//         };





        switch ($stateParams.id) {
            //3//
            case 'Argentina':
                $scope.getDestination = {
                    "image": "img/banner_images/argentina.jpg",
                    "description": "Hash brownies... Hot Girls... Unlimited Alcohol... Ultimate Nightlife... World famous Red Light District! Oh Yes! This city lets you indulge into everything that is not so legal in the other parts of the world!",
                    "content": "A glimpse of the popular places to visit in Argentina"
                };
                $scope.getActivity = [{
                    "number": 0,
                    "image": "img/custom_dest/argentina/ar1.jpg"
                }, {
                    "number": 1,
                    "image": "img/custom_dest/argentina/ar2.jpg"
                }, {
                    "number": 2,
                    "image": "img/custom_dest/argentina/ar3.jpg"
                }, {
                    "number": 3,
                    "image": "img/custom_dest/argentina/ar4.jpg"
                }, {
                    "number": 4,
                    "image": "img/custom_dest/argentina/ar5.jpg"
                }, {
                    "number": 5,
                    "image": "img/custom_dest/argentina/ar6.jpg"
                }, {
                    "number": 6,
                    "image": "img/custom_dest/argentina/ar7.jpg"
                }, {
                    "number": 7,
                    "image": "img/custom_dest/argentina/ar8.jpg"
                }];
                break;
            case 'Armenia':
                $scope.getDestination = {
                    "image": "img/banner_images/armenia.jpg",
                    "description": "Visit Armenia, it is beautiful! Country of old legends and biblical stories, hidden lakes, valleys, highlands and rich forests. This is a destination where you will be intrigued by history, awed by monuments, amazed by the landscape and charmed by down-to-earth locals!!",
                    "content": "A glimpse of the popular places to visit in Armenia"
                };
                $scope.getActivity = [{
                    "number": 0,
                    "image": "img/custom_dest/armenia/arm1.jpg"
                }, {
                    "number": 1,
                    "image": "img/custom_dest/armenia/arm2.jpg"
                }, {
                    "number": 2,
                    "image": "img/custom_dest/armenia/arm3.jpg"
                }, {
                    "number": 3,
                    "image": "img/custom_dest/armenia/arm4.jpg"
                }, {
                    "number": 4,
                    "image": "img/custom_dest/armenia/arm5.jpg"
                }, {
                    "number": 5,
                    "image": "img/custom_dest/armenia/arm6.jpg"
                }, {
                    "number": 6,
                    "image": "img/custom_dest/armenia/arm7.jpg"
                }, {
                    "number": 7,
                    "image": "img/custom_dest/armenia/arm8.jpg"
                }, {
                    "number": 8,
                    "image": "img/custom_dest/armenia/arm9.jpg"
                }];
                break;
            case 'Australia':
                $scope.getDestination = {
                    "image": "img/banner_images/australia.jpg",
                    "description": "Experience sun kissed beaches of gold coast to the spiritual heart of the red centre. Australia is a wild and beautiful place, a land whose colour palette of red outback sands and Technicolor reefs frames sophisticated cities and soulful Indigenous stories!! ",
                    "content": "A glimpse of the popular places to visit in Australia"
                };
                $scope.getActivity = [{
                    "number": 0,
                    "image": "img/custom_dest/australia/australia1.jpg"
                }, {
                    "number": 1,
                    "image": "img/custom_dest/australia/australia2.jpg"
                }, {
                    "number": 2,
                    "image": "img/custom_dest/australia/australia3.jpg"
                }, {
                    "number": 3,
                    "image": "img/custom_dest/australia/australia4.jpg"
                }, {
                    "number": 4,
                    "image": "img/custom_dest/australia/australia5.jpg"
                }, {
                    "number": 5,
                    "image": "img/custom_dest/australia/australia6.jpg"
                }, {
                    "number": 6,
                    "image": "img/custom_dest/australia/australia7.jpg"
                }, {
                    "number": 7,
                    "image": "img/custom_dest/australia/australia8.jpg"
                }, {
                    "number": 8,
                    "image": "img/custom_dest/australia/australia9.jpg"
                }];
                break;
            case 'Austria':
                $scope.getDestination = {
                    "image": "img/banner_images/austria.jpg",
                    "description": "Arrive and revive!! Europe's meeting place, bridge-builder and venue for cultural exchange. No country waltzes so effortlessly between the urban and the outdoors as Austria. One day you’re cresting alpine summits, the next you’re swanning around imperial Vienna. ",
                    "content": "A glimpse of the popular places to visit in Austria"
                };
                $scope.getActivity = [{
                    "number": 0,
                    "image": "img/custom_dest/austria/austria1.jpg"
                }, {
                    "number": 1,
                    "image": "img/custom_dest/austria/austria2.jpg"
                }, {
                    "number": 2,
                    "image": "img/custom_dest/austria/austria3.jpg"
                }, {
                    "number": 3,
                    "image": "img/custom_dest/austria/austria4.jpg"
                }, {
                    "number": 4,
                    "image": "img/custom_dest/austria/austria5.jpg"
                }, {
                    "number": 5,
                    "image": "img/custom_dest/austria/austria6.jpg"
                }, {
                    "number": 6,
                    "image": "img/custom_dest/austria/austria7.jpg"
                }, {
                    "number": 7,
                    "image": "img/custom_dest/austria/austria8.jpg"
                }, {
                    "number": 8,
                    "image": "img/custom_dest/austria/austria9.jpg"
                }, {
                    "number": 9,
                    "image": "img/custom_dest/austria/austria10.jpg"
                }, {
                    "number": 10,
                    "image": "img/custom_dest/austria/austria11.jpg"
                }];
                break;
            case 'Azerbaijan':
                $scope.getDestination = {
                    "image": "img/banner_images/azerbaijan.jpg",
                    "description": "East meets west in diverse Azerbaijan. ‘Feel the diversity’!! Breathtaking mountain scenery, Untouched nature, mineral springs!!",
                    "content": "A glimpse of the popular places to visit in Azerbaijan"
                };
                $scope.getActivity = [{
                    "number": 0,
                    "image": "img/custom_dest/azerbaijan/azerbaijan1.jpg"
                }, {
                    "number": 1,
                    "image": "img/custom_dest/azerbaijan/azerbaijan2.jpg"
                }, {
                    "number": 2,
                    "image": "img/custom_dest/azerbaijan/azerbaijan3.jpg"
                }, {
                    "number": 3,
                    "image": "img/custom_dest/azerbaijan/azerbaijan4.jpg"
                }, {
                    "number": 4,
                    "image": "img/custom_dest/azerbaijan/azerbaijan5.jpg"
                }, {
                    "number": 5,
                    "image": "img/custom_dest/azerbaijan/azerbaijan6.jpg"
                }, {
                    "number": 6,
                    "image": "img/custom_dest/azerbaijan/azerbaijan7.jpg"
                }, {
                    "number": 7,
                    "image": "img/custom_dest/azerbaijan/azerbaijan8.jpg"
                }];
                break;
            case 'Bhutan':
                $scope.getDestination = {
                    "image": "img/banner_images/bhutan.jpg",
                    "description": "Happiness is a place! Bhutan is no ordinary place. It is the last great Himalayan kingdom, shrouded in mystery and magic, where a traditional Buddhist culture carefully embraces global developments.",
                    "content": "A glimpse of the popular places to visit in Bhutan"
                };
                $scope.getActivity = [{
                    "number": 0,
                    "image": "img/custom_dest/bhutan/bhutan1.jpg"
                }, {
                    "number": 1,
                    "image": "img/custom_dest/bhutan/bhutan2.jpg"
                }, {
                    "number": 2,
                    "image": "img/custom_dest/bhutan/bhutan3.jpg"
                }, {
                    "number": 3,
                    "image": "img/custom_dest/bhutan/bhutan4.jpg"
                }, {
                    "number": 4,
                    "image": "img/custom_dest/bhutan/bhutan5.jpg"
                }, {
                    "number": 5,
                    "image": "img/custom_dest/bhutan/bhutan6.jpg"
                }];
                break;
            case 'Brazil':
                $scope.getDestination = {
                    "image": "img/banner_images/brazil.jpg",
                    "description": " One of the world's most captivating places, Brazil is a country of powdery white-sand beaches, verdant rainforests and wild, rhythm-filled metropolises. Brazil's attractions extend from frozen-in-time colonial towns to otherworldly landscapes of red-rock canyons, thundering waterfalls and coral-fringed tropical islands.",
                    "content": "A glimpse of the popular places to visit in Brazil"
                };
                $scope.getActivity = [{
                    "number": 0,
                    "image": "img/custom_dest/brazil/brazil1.jpg"
                }, {
                    "number": 1,
                    "image": "img/custom_dest/brazil/brazil2.jpg"
                }, {
                    "number": 2,
                    "image": "img/custom_dest/brazil/brazil3.jpg"
                }, {
                    "number": 3,
                    "image": "img/custom_dest/brazil/brazil4.jpg"
                }, {
                    "number": 4,
                    "image": "img/custom_dest/brazil/brazil5.jpg"
                }, {
                    "number": 5,
                    "image": "img/custom_dest/brazil/brazil6.jpg"
                }, {
                    "number": 6,
                    "image": "img/custom_dest/brazil/brazil7.jpg"
                }];
                break;
            case 'Bulgaria':
                $scope.getDestination = {
                    "image": "img/banner_images/bulgaria.jpg",
                    "description": "A discovery to share! Famous for wines and spirits!! Boasts sublime beaches, lovely churches, winter sport opportunities and great hiking. A Country in the balkans.",
                    "content": "A glimpse of the popular places to visit in Bulgaria"
                };
                $scope.getActivity = [{
                    "number": 0,
                    "image": "img/custom_dest/bulgaria/bulgaria1.jpg"
                }, {
                    "number": 1,
                    "image": "img/custom_dest/bulgaria/bulgaria2.jpg"
                }, {
                    "number": 2,
                    "image": "img/custom_dest/bulgaria/bulgaria3.jpg"
                }, {
                    "number": 3,
                    "image": "img/custom_dest/bulgaria/bulgaria4.jpg"
                }, {
                    "number": 4,
                    "image": "img/custom_dest/bulgaria/bulgaria5.jpg"
                }, {
                    "number": 5,
                    "image": "img/custom_dest/bulgaria/bulgaria6.jpg"
                }];
                break;
            case 'Canada':
                $scope.getDestination = {
                    "image": "img/banner_images/canada.jpg",
                    "description": " Keep exploring!! Canada is more than its hulking-mountain, craggy-coast good looks: it also cooks extraordinary meals, rocks cool culture and unfurls wild, moose-spotting road trips.",
                    "content": "A glimpse of the popular places to visit in Canada"
                };
                $scope.getActivity = [{
                    "number": 0,
                    "image": "img/custom_dest/canada/canada1.jpg"
                }, {
                    "number": 1,
                    "image": "img/custom_dest/canada/canada2.jpg"
                }, {
                    "number": 2,
                    "image": "img/custom_dest/canada/canada3.jpg"
                }, {
                    "number": 3,
                    "image": "img/custom_dest/canada/canada4.jpg"
                }, {
                    "number": 4,
                    "image": "img/custom_dest/canada/canada5.jpg"
                }, {
                    "number": 5,
                    "image": "img/custom_dest/canada/canada6.jpg"
                }, {
                    "number": 6,
                    "image": "img/custom_dest/canada/canada7.jpg"
                }, {
                    "number": 7,
                    "image": "img/custom_dest/canada/canada8.jpg"
                }, {
                    "number": 8,
                    "image": "img/custom_dest/canada/canada9.jpg"
                }, {
                    "number": 9,
                    "image": "img/custom_dest/canada/canada10.jpg"
                }];
                break;
            case 'Chile':
                $scope.getDestination = {
                    "image": "img/banner_images/chile.jpg",
                    "description": "All are welcome! From the far north and the altiplano to the far south of chile, someone is always waiting to receive you with open arms! A place where you will feel at peace. Chile is nature on a colossal scale, but travel here is surprisingly easy if you don't rush it!",
                    "content": "A glimpse of the popular places to visit in Chile"
                };
                $scope.getActivity = [{
                    "number": 0,
                    "image": "img/custom_dest/chile/chile1.jpg"
                }, {
                    "number": 1,
                    "image": "img/custom_dest/chile/chile2.jpg"
                }, {
                    "number": 2,
                    "image": "img/custom_dest/chile/chile3.jpg"
                }, {
                    "number": 3,
                    "image": "img/custom_dest/chile/chile4.jpg"
                }, {
                    "number": 4,
                    "image": "img/custom_dest/chile/chile5.jpg"
                }, {
                    "number": 5,
                    "image": "img/custom_dest/chile/chile6.jpg"
                }, {
                    "number": 6,
                    "image": "img/custom_dest/chile/chile7.jpg"
                }, {
                    "number": 7,
                    "image": "img/custom_dest/chile/chile8.jpg"
                }, {
                    "number": 8,
                    "image": "img/custom_dest/chile/chile9.jpg"
                }];
                break;
            case 'Croatia':
                $scope.getDestination = {
                    "image": "img/banner_images/croatia.jpg",
                    "description": " Full of life!! If your Mediterranean fantasies feature balmy days by sapphire waters in the shade of ancient walled towns, Croatia is the place to turn them into reality.  ",
                    "content": "A glimpse of the popular places to visit in Croatia"
                };
                $scope.getActivity = [{
                    "number": 0,
                    "image": "img/custom_dest/croatia/croatia1.jpg"
                }, {
                    "number": 1,
                    "image": "img/custom_dest/croatia/croatia2.jpg"
                }, {
                    "number": 2,
                    "image": "img/custom_dest/croatia/croatia3.jpg"
                }, {
                    "number": 3,
                    "image": "img/custom_dest/croatia/croatia4.jpg"
                }, {
                    "number": 4,
                    "image": "img/custom_dest/croatia/croatia5.jpg"
                }, {
                    "number": 5,
                    "image": "img/custom_dest/croatia/croatia6.jpg"
                }, {
                    "number": 6,
                    "image": "img/custom_dest/croatia/croatia7.jpg"
                }, {
                    "number": 7,
                    "image": "img/custom_dest/croatia/croatia8.jpg"
                }, {
                    "number": 8,
                    "image": "img/custom_dest/croatia/croatia9.jpg"
                }];
                break;
            case 'Cruise Vacations':
                $scope.getDestination = {
                    "image": "img/banner_images/cruise vacations.jpg",
                    "description": "Hash brownies... Hot Girls... Unlimited Alcohol... Ultimate Nightlife... World famous Red Light District! Oh Yes! This city lets you indulge into everything that is not so legal in the other parts of the world!",
                    "content": "A glimpse of the things you can do in Cruise Vacations"
                };
                $scope.getActivity = [{
                    "number": 0,
                    "image": "img/custom_dest/cruise_vacations/cruise_vacations1.jpg"
                }, {
                    "number": 1,
                    "image": "img/custom_dest/cruise_vacations/cruise_vacations2.jpg"
                }, {
                    "number": 2,
                    "image": "img/custom_dest/cruise_vacations/cruise_vacations3.jpg"
                }, {
                    "number": 3,
                    "image": "img/custom_dest/cruise_vacations/cruise_vacations4.jpg"
                }, {
                    "number": 4,
                    "image": "img/custom_dest/cruise_vacations/cruise_vacations5.jpg"
                }, {
                    "number": 5,
                    "image": "img/custom_dest/cruise_vacations/cruise_vacations6.jpg"
                }, {
                    "number": 6,
                    "image": "img/custom_dest/cruise_vacations/cruise_vacations7.jpg"
                }, {
                    "number": 7,
                    "image": "img/custom_dest/cruise_vacations/cruise_vacations8.jpg"
                }, {
                    "number": 8,
                    "image": "img/custom_dest/cruise_vacations/cruise_vacations9.jpg"
                }, {
                    "number": 8,
                    "image": "img/custom_dest/cruise_vacations/cruise_vacations10.jpg"
                }, {
                    "number": 10,
                    "image": "img/custom_dest/cruise_vacations/cruise_vacations11.jpg"
                }];
                break;
            case 'Czech Republic':
                $scope.getDestination = {
                    "image": "img/banner_images/czech republic.jpg",
                    "description": "Land of stories!! Everyone who visits the Czech Republic starts with Prague, the cradle of Czech culture and one of Europe’s most fascinating cities. Where Beer Is God! ",
                    "content": "A glimpse of the popular places to visit in Czech Republic"
                };
                $scope.getActivity = [{
                    "number": 0,
                    "image": "img/custom_dest/czech republic/czech republic1.jpg"
                }, {
                    "number": 1,
                    "image": "img/custom_dest/czech republic/czech republic2.jpg"
                }, {
                    "number": 2,
                    "image": "img/custom_dest/czech republic/czech republic3.jpg"
                }, {
                    "number": 3,
                    "image": "img/custom_dest/czech republic/czech republic4.jpg"
                }, {
                    "number": 4,
                    "image": "img/custom_dest/czech republic/czech republic5.jpg"
                }];
                break;
            case 'Denmark':
                $scope.getDestination = {
                    "image": "img/banner_images/denmark.jpg",
                    "description": "Chart-topping contentment and quality of life, blockbuster dining and design, and a cheerful emphasis on hygge (cosiness) – explore (and envy) what makes Denmark tick! ",
                    "content": "A glimpse of the popular places to visit in Denmark"
                };
                $scope.getActivity = [{
                    "number": 0,
                    "image": "img/custom_dest/denmark/denmark1.jpg"
                }, {
                    "number": 1,
                    "image": "img/custom_dest/denmark/denmark2.jpg"
                }, {
                    "number": 2,
                    "image": "img/custom_dest/denmark/denmark3.jpg"
                }, {
                    "number": 3,
                    "image": "img/custom_dest/denmark/denmark4.jpg"
                }, {
                    "number": 4,
                    "image": "img/custom_dest/denmark/denmark5.jpg"
                }, {
                    "number": 5,
                    "image": "img/custom_dest/denmark/denmark6.jpg"
                }, {
                    "number": 6,
                    "image": "img/custom_dest/denmark/denmark7.jpg"
                }, {
                    "number": 7,
                    "image": "img/custom_dest/denmark/denmark8.jpg"
                }];
                break;
            case 'Estonia':
                $scope.getDestination = {
                    "image": "img/banner_images/estonia.jpg",
                    "description": "Estonia is where secrets are uncovered! Estonia doesn’t have to struggle to find a point of difference: it’s completely unique! ",
                    "content": "A glimpse of the popular places to visit in Estonia"
                };
                $scope.getActivity = [{
                    "number": 0,
                    "image": "img/custom_dest/estonia/estonia1.jpg"
                }, {
                    "number": 1,
                    "image": "img/custom_dest/estonia/estonia2.jpg"
                }, {
                    "number": 2,
                    "image": "img/custom_dest/estonia/estonia3.jpg"
                }, {
                    "number": 3,
                    "image": "img/custom_dest/estonia/estonia4.jpg"
                }, {
                    "number": 4,
                    "image": "img/custom_dest/estonia/estonia5.jpg"
                }, {
                    "number": 5,
                    "image": "img/custom_dest/estonia/estonia6.jpg"
                }, {
                    "number": 6,
                    "image": "img/custom_dest/estonia/estonia7.jpg"
                }];
                break;
            case 'Fiji Islands':
                $scope.getDestination = {
                    "image": "img/banner_images/fiji islands.jpg",
                    "description": "Fiji is exploring under the sea! Fiji is living on island time!  Fiji is palm tree framed ocean views!",
                    "content": "A glimpse of the popular places to visit in Fiji Islands"
                };
                $scope.getActivity = [{
                    "number": 0,
                    "image": "img/custom_dest/fiji islands/fiji islands1.jpg"
                }, {
                    "number": 1,
                    "image": "img/custom_dest/fiji islands/fiji islands2.jpg"
                }, {
                    "number": 2,
                    "image": "img/custom_dest/fiji islands/fiji islands3.jpg"
                }, {
                    "number": 3,
                    "image": "img/custom_dest/fiji islands/fiji islands4.jpg"
                }, {
                    "number": 4,
                    "image": "img/custom_dest/fiji islands/fiji islands5.jpg"
                }];
                break;
            case 'Finland':
                $scope.getDestination = {
                    "image": "img/banner_images/finland.jpg",
                    "description": "Inspired design, technology and epicurean scenes meet epic stretches of wilderness here in Europe's deep north, where summer's endless light balances winter’s eerie frozen magic!",
                    "content": "A glimpse of the popular places to visit in Finland"
                };
                $scope.getActivity = [{
                    "number": 0,
                    "image": "img/custom_dest/finland/finland1.jpg"
                }, {
                    "number": 1,
                    "image": "img/custom_dest/finland/finland2.jpg"
                }, {
                    "number": 2,
                    "image": "img/custom_dest/finland/finland3.jpg"
                }, {
                    "number": 3,
                    "image": "img/custom_dest/finland/finland4.jpg"
                }, {
                    "number": 4,
                    "image": "img/custom_dest/finland/finland5.jpg"
                }, {
                    "number": 5,
                    "image": "img/custom_dest/finland/finland6.jpg"
                }];
                break;
            case 'France':
                $scope.getDestination = {
                    "image": "img/banner_images/france.jpg",
                    "description": "France seduces travellers with its unfalteringly familiar culture, woven around cafe terraces, village-square markets and lace-curtained bistros with their plat du jour chalked on the board!",
                    "content": "A glimpse of the popular places to visit in France"
                };
                $scope.getActivity = [{
                    "number": 0,
                    "image": "img/custom_dest/france/france1.jpg"
                }, {
                    "number": 1,
                    "image": "img/custom_dest/france/france2.jpg"
                }, {
                    "number": 2,
                    "image": "img/custom_dest/france/france3.jpg"
                }, {
                    "number": 3,
                    "image": "img/custom_dest/france/france4.jpg"
                }, {
                    "number": 4,
                    "image": "img/custom_dest/france/france5.jpg"
                }, {
                    "number": 5,
                    "image": "img/custom_dest/france/france6.jpg"
                }, {
                    "number": 6,
                    "image": "img/custom_dest/france/france7.jpg"
                }, {
                    "number": 7,
                    "image": "img/custom_dest/france/france8.jpg"
                }, {
                    "number": 8,
                    "image": "img/custom_dest/france/france9.jpg"
                }, {
                    "number": 9,
                    "image": "img/custom_dest/france/france10.jpg"
                }];
                break;
            case 'Georgia':
                $scope.getDestination = {
                    "image": "img/banner_images/georgia.jpg",
                    "description": " From its green valleys spread with vineyards to its old churches and watchtowers perched in fantastic mountain scenery, Georgia is one of the most beautiful countries on earth and a marvellous canvas for walkers, horse riders, cyclists, skiers, rafters and travellers of every kind!",
                    "content": "A glimpse of the popular places to visit in Georgia"
                };
                $scope.getActivity = [{
                    "number": 0,
                    "image": "img/custom_dest/georgia/georgia1.jpg"
                }, {
                    "number": 1,
                    "image": "img/custom_dest/georgia/georgia2.jpg"
                }, {
                    "number": 2,
                    "image": "img/custom_dest/georgia/georgia3.jpg"
                }, {
                    "number": 3,
                    "image": "img/custom_dest/georgia/georgia4.jpg"
                }, {
                    "number": 4,
                    "image": "img/custom_dest/georgia/georgia5.jpg"
                }, {
                    "number": 5,
                    "image": "img/custom_dest/georgia/georgia6.jpg"
                }, {
                    "number": 6,
                    "image": "img/custom_dest/georgia/georgia7.jpg"
                }, {
                    "number": 7,
                    "image": "img/custom_dest/georgia/georgia8.jpg"
                }, {
                    "number": 8,
                    "image": "img/custom_dest/georgia/georgia9.jpg"
                }, {
                    "number": 9,
                    "image": "img/custom_dest/georgia/georgia10.jpg"
                }];
                break;
            case 'Germany':
                $scope.getDestination = {
                    "image": "img/banner_images/germany.jpg",
                    "description": "Prepare for a roller coaster of feasts, treats and temptations as you take in Germany's soul-stirring scenery, spirit-lifting culture, big-city beauties, romantic palaces and half-timbered towns!",
                    "content": "A glimpse of the popular places to visit in Germany"
                };
                $scope.getActivity = [{
                    "number": 0,
                    "image": "img/custom_dest/germany/germany1.jpg"
                }, {
                    "number": 1,
                    "image": "img/custom_dest/germany/germany2.jpg"
                }, {
                    "number": 2,
                    "image": "img/custom_dest/germany/germany3.jpg"
                }, {
                    "number": 3,
                    "image": "img/custom_dest/germany/germany4.jpg"
                }, {
                    "number": 4,
                    "image": "img/custom_dest/germany/germany5.jpg"
                }, {
                    "number": 5,
                    "image": "img/custom_dest/germany/germany6.jpg"
                }, {
                    "number": 6,
                    "image": "img/custom_dest/germany/germany7.jpg"
                }, {
                    "number": 7,
                    "image": "img/custom_dest/germany/germany8.jpg"
                }, {
                    "number": 8,
                    "image": "img/custom_dest/germany/germany9.jpg"
                }, {
                    "number": 9,
                    "image": "img/custom_dest/germany/germany10.jpg"
                }, {
                    "number": 10,
                    "image": "img/custom_dest/germany/germany11.jpg"
                }, {
                    "number": 11,
                    "image": "img/custom_dest/germany/germany12.jpg"
                }, {
                    "number": 12,
                    "image": "img/custom_dest/germany/germany13.jpg"
                }];
                break;
            case 'Greece':
                $scope.getDestination = {
                    "image": "img/banner_images/greece.jpg",
                    "description": "Ancient sun-bleached ruins pierce blue skies as the Aegean laps at the endless coastline. And Greek culture is alive with passionate music, inspired cuisine and thrill-seeking activities. Greece is romantic islands sunsets!!  ",
                    "content": "A glimpse of the popular places to visit in Greece"
                };
                $scope.getActivity = [{
                    "number": 0,
                    "image": "img/custom_dest/greece/greece1.jpg"
                }, {
                    "number": 1,
                    "image": "img/custom_dest/greece/greece2.jpg"
                }, {
                    "number": 2,
                    "image": "img/custom_dest/greece/greece3.jpg"
                }, {
                    "number": 3,
                    "image": "img/custom_dest/greece/greece4.jpg"
                }, {
                    "number": 4,
                    "image": "img/custom_dest/greece/greece5.jpg"
                }, {
                    "number": 5,
                    "image": "img/custom_dest/greece/greece6.jpg"
                }, {
                    "number": 6,
                    "image": "img/custom_dest/greece/greece7.jpg"
                }, {
                    "number": 7,
                    "image": "img/custom_dest/greece/greece8.jpg"
                }, {
                    "number": 8,
                    "image": "img/custom_dest/greece/greece9.jpg"
                }, {
                    "number": 9,
                    "image": "img/custom_dest/greece/greece10.jpg"
                }];
                break;
            case 'Hong Kong':
                $scope.getDestination = {
                    "image": "img/banner_images/hongkong.jpg",
                    "description": "Hong Kong welcomes with an iconic skyline, a legendary kitchen, and lush, protected nature where rare birds and colourful traditions thrive.",
                    "content": "A glimpse of the popular places to visit in Hong Kong"
                };
                $scope.getActivity = [{
                    "number": 0,
                    "image": "img/custom_dest/hongkong/hongkong1.jpg"
                }, {
                    "number": 1,
                    "image": "img/custom_dest/hongkong/hongkong2.jpg"
                }, {
                    "number": 2,
                    "image": "img/custom_dest/hongkong/hongkong3.jpg"
                }, {
                    "number": 3,
                    "image": "img/custom_dest/hongkong/hongkong4.jpg"
                }, {
                    "number": 4,
                    "image": "img/custom_dest/hongkong/hongkong5.jpg"
                }, {
                    "number": 5,
                    "image": "img/custom_dest/hongkong/hongkong6.jpg"
                }];
                break;
            case 'Hungary':
                $scope.getDestination = {
                    "image": "img/banner_images/hungary.jpg",
                    "description": "Stunning architecture, vital folk art, thermal spas and Europe's most exciting capital after dark are Hungary's major drawing cards!  ",
                    "content": "A glimpse of the popular places to visit in Hungary"
                };
                $scope.getActivity = [{
                    "number": 0,
                    "image": "img/custom_dest/hungary/hungary1.jpg"
                }, {
                    "number": 1,
                    "image": "img/custom_dest/hungary/hungary2.jpg"
                }, {
                    "number": 2,
                    "image": "img/custom_dest/hungary/hungary3.jpg"
                }, {
                    "number": 3,
                    "image": "img/custom_dest/hungary/hungary4.jpg"
                }, {
                    "number": 4,
                    "image": "img/custom_dest/hungary/hungary5.jpg"
                }, {
                    "number": 5,
                    "image": "img/custom_dest/hungary/hungary6.jpg"
                }, {
                    "number": 6,
                    "image": "img/custom_dest/hungary/hungary7.jpg"
                }, {
                    "number": 7,
                    "image": "img/custom_dest/hungary/hungary8.jpg"
                }];
                break;
            case 'Iceland':
                $scope.getDestination = {
                    "image": "img/banner_images/iceland.jpg",
                    "description": "Hitting headlines, topping bucket lists, wooing nature lovers and dazzling increasing numbers of visitors – there seems no end to the talents of this breathtaking northern destination.",
                    "content": "A glimpse of the popular places to visit in Iceland"
                };
                $scope.getActivity = [{
                    "number": 0,
                    "image": "img/custom_dest/iceland/iceland1.jpg"
                }, {
                    "number": 1,
                    "image": "img/custom_dest/iceland/iceland2.jpg"
                }, {
                    "number": 2,
                    "image": "img/custom_dest/iceland/iceland3.jpg"
                }, {
                    "number": 3,
                    "image": "img/custom_dest/iceland/iceland4.jpg"
                }, {
                    "number": 4,
                    "image": "img/custom_dest/iceland/iceland5.jpg"
                }];
                break;
            case 'Indonesia':
                $scope.getDestination = {
                    "image": "img/banner_images/indonesia.jpg",
                    "description": "Indonesia's numbers astound: more than 17,000 islands, of which 8000 are inhabited, and over 300 languages spoken across them. It's a beguiling country offering myriad adventures. It’s a Land of fire!! ",
                    "content": "A glimpse of the popular places to visit in Indonesia"
                };
                $scope.getActivity = [{
                    "number": 0,
                    "image": "img/custom_dest/indonesia/indonesia1.jpg"
                }, {
                    "number": 1,
                    "image": "img/custom_dest/indonesia/indonesia2.jpg"
                }, {
                    "number": 2,
                    "image": "img/custom_dest/indonesia/indonesia3.jpg"
                }, {
                    "number": 3,
                    "image": "img/custom_dest/indonesia/indonesia4.jpg"
                }, {
                    "number": 4,
                    "image": "img/custom_dest/indonesia/indonesia5.jpg"
                }, {
                    "number": 5,
                    "image": "img/custom_dest/indonesia/indonesia6.jpg"
                }, {
                    "number": 6,
                    "image": "img/custom_dest/indonesia/indonesia7.jpg"
                }, {
                    "number": 7,
                    "image": "img/custom_dest/indonesia/indonesia8.jpg"
                }, {
                    "number": 8,
                    "image": "img/custom_dest/indonesia/indonesia9.jpg"
                }, {
                    "number": 9,
                    "image": "img/custom_dest/indonesia/indonesia10.jpg"
                }, {
                    "number": 10,
                    "image": "img/custom_dest/indonesia/indonesia11.jpg"
                }, {
                    "number": 11,
                    "image": "img/custom_dest/indonesia/indonesia12.jpg"
                }];
                break;
            case 'Israel':
                $scope.getDestination = {
                    "image": "img/banner_images/israel.jpg",
                    "description": "Few places on earth stir up passion the way that Israel does: the breathtaking beauty of its hills and valleys, the eerie stillness of the Dead Sea, the multi-coloured canyon of Makhtesh Ramon, and the ancient walls and pathways of Nazareth and Jerusalem. The call of the muezzin and the quiet prayers of Orthodox Jews at the Western Wall reflect how the religious devotion of the Muslims, Christians and Jews who live here runs through every facet of life. ",
                    "content": "A glimpse of the popular places to visit in Israel"
                };
                $scope.getActivity = [{
                    "number": 0,
                    "image": "img/custom_dest/israel/israel1.jpg"
                }, {
                    "number": 1,
                    "image": "img/custom_dest/israel/israel2.jpg"
                }, {
                    "number": 2,
                    "image": "img/custom_dest/israel/israel3.jpg"
                }, {
                    "number": 3,
                    "image": "img/custom_dest/israel/israel4.jpg"
                }, {
                    "number": 4,
                    "image": "img/custom_dest/israel/israel5.jpg"
                }, {
                    "number": 5,
                    "image": "img/custom_dest/israel/israel6.jpg"
                }, {
                    "number": 6,
                    "image": "img/custom_dest/israel/israel7.jpg"
                }, {
                    "number": 7,
                    "image": "img/custom_dest/israel/israel8.jpg"
                }, {
                    "number": 8,
                    "image": "img/custom_dest/israel/israel9.jpg"
                }, {
                    "number": 9,
                    "image": "img/custom_dest/israel/israel10.jpg"
                }];
                break;
            case 'Italy':
                $scope.getDestination = {
                    "image": "img/banner_images/italy.jpg",
                    "description": "Home to many of the world's greatest works of art, architecture and gastronomy, Italy elates, inspires and moves like no other.  ",
                    "content": "A glimpse of the popular places to visit in Italy"
                };
                $scope.getActivity = [{
                    "number": 0,
                    "image": "img/custom_dest/italy/italy1.jpg"
                }, {
                    "number": 1,
                    "image": "img/custom_dest/italy/italy2.jpg"
                }, {
                    "number": 2,
                    "image": "img/custom_dest/italy/italy3.jpg"
                }, {
                    "number": 3,
                    "image": "img/custom_dest/italy/italy4.jpg"
                }, {
                    "number": 4,
                    "image": "img/custom_dest/italy/italy5.jpg"
                }, {
                    "number": 5,
                    "image": "img/custom_dest/italy/italy6.jpg"
                }, {
                    "number": 6,
                    "image": "img/custom_dest/italy/italy7.jpg"
                }, {
                    "number": 7,
                    "image": "img/custom_dest/italy/italy9.jpg"
                }, {
                    "number": 8,
                    "image": "img/custom_dest/italy/italy10.jpg"
                }, {
                    "number": 9,
                    "image": "img/custom_dest/italy/italy11.jpg"
                }];
                break;
            case 'Jamaica':
                $scope.getDestination = {
                    "image": "img/banner_images/jamaica.jpg",
                    "description": "Jamaica is the Caribbean country that comes with its own soundtrack. Groove to its singular rhythm as you explore beyond the beaches and all-inclusives.",
                    "content": "A glimpse of the popular places to visit in Jamaica"
                };
                $scope.getActivity = [{
                    "number": 0,
                    "image": "img/custom_dest/jamaica/jamaica1.jpg"
                }, {
                    "number": 1,
                    "image": "img/custom_dest/jamaica/jamaica2.jpg"
                }, {
                    "number": 2,
                    "image": "img/custom_dest/jamaica/jamaica3.jpg"
                }, {
                    "number": 3,
                    "image": "img/custom_dest/jamaica/jamaica4.jpg"
                }, {
                    "number": 4,
                    "image": "img/custom_dest/jamaica/jamaica5.jpg"
                }];
                break;
            case 'Japan':
                $scope.getDestination = {
                    "image": "img/banner_images/japan.jpg",
                    "description": "Japan is truly timeless, a place where ancient traditions are fused with modern life as if it were the most natural thing in the world. It is a walk in mysterious places!!  ",
                    "content": "A glimpse of the popular places to visit in Japan"
                };
                $scope.getActivity = [{
                    "number": 0,
                    "image": "img/custom_dest/japan/japan1.jpg"
                }, {
                    "number": 1,
                    "image": "img/custom_dest/japan/japan2.jpg"
                }, {
                    "number": 2,
                    "image": "img/custom_dest/japan/japan3.jpg"
                }, {
                    "number": 3,
                    "image": "img/custom_dest/japan/japan4.jpg"
                }, {
                    "number": 4,
                    "image": "img/custom_dest/japan/japan5.jpg"
                }, {
                    "number": 5,
                    "image": "img/custom_dest/japan/japan6.jpg"
                }, {
                    "number": 6,
                    "image": "img/custom_dest/japan/japan7.jpg"
                }, {
                    "number": 7,
                    "image": "img/custom_dest/japan/japan8.jpg"
                }, {
                    "number": 8,
                    "image": "img/custom_dest/japan/japan9.jpg"
                }];
                break;
            case 'Jordan':
                $scope.getDestination = {
                    "image": "img/banner_images/jordan.jpg",
                    "description": "A safe haven in a region of conflict, Jordan has delighted visitors for centuries with its World Heritage sites, friendly towns and inspiring desert landscapes.  ",
                    "content": "A glimpse of the popular places to visit in Jordan"
                };
                $scope.getActivity = [{
                    "number": 0,
                    "image": "img/custom_dest/jordan/jordan1.jpg"
                }, {
                    "number": 1,
                    "image": "img/custom_dest/jordan/jordan2.jpg"
                }, {
                    "number": 2,
                    "image": "img/custom_dest/jordan/jordan3.jpg"
                }, {
                    "number": 3,
                    "image": "img/custom_dest/jordan/jordan4.jpg"
                }, {
                    "number": 4,
                    "image": "img/custom_dest/jordan/jordan5.jpg"
                }, {
                    "number": 5,
                    "image": "img/custom_dest/jordan/jordan6.jpg"
                }, {
                    "number": 6,
                    "image": "img/custom_dest/jordan/jordan7.jpg"
                }];
                break;
            case 'Kenya':
                $scope.getDestination = {
                    "image": "img/banner_images/kenya.jpg",
                    "description": "Vast savannahs peppered with immense herds of wildlife. Snow-capped mountains on the equator. Traditional peoples who bring soul and colour to the earth. Welcome to Kenya. ",
                    "content": "A glimpse of the popular places to visit in Kenya"
                };
                $scope.getActivity = [{
                    "number": 0,
                    "image": "img/custom_dest/kenya/kenya1.jpg"
                }, {
                    "number": 1,
                    "image": "img/custom_dest/kenya/kenya2.jpg"
                }, {
                    "number": 2,
                    "image": "img/custom_dest/kenya/kenya3.jpg"
                }, {
                    "number": 3,
                    "image": "img/custom_dest/kenya/kenya4.jpg"
                }, {
                    "number": 4,
                    "image": "img/custom_dest/kenya/kenya5.jpg"
                }];
                break;
            case 'Korea':
                $scope.getDestination = {
                    "image": "img/banner_images/korea.jpg",
                    "description": " Split by a fearsome border, the Korean Peninsula offers the traveller a dazzling range of experiences, beautiful landscapes and 5000 years of culture and history.",
                    "content": "A glimpse of the popular places to visit in Korea"
                };
                $scope.getActivity = [{
                    "number": 0,
                    "image": "img/custom_dest/korea/korea1.jpg"
                }, {
                    "number": 1,
                    "image": "img/custom_dest/korea/korea2.jpg"
                }, {
                    "number": 2,
                    "image": "img/custom_dest/korea/korea3.jpg"
                }, {
                    "number": 3,
                    "image": "img/custom_dest/korea/korea4.jpg"
                }, {
                    "number": 4,
                    "image": "img/custom_dest/korea/korea5.jpg"
                }, {
                    "number": 5,
                    "image": "img/custom_dest/korea/korea6.jpg"
                }, {
                    "number": 6,
                    "image": "img/custom_dest/korea/korea7.jpg"
                }, {
                    "number": 7,
                    "image": "img/custom_dest/korea/korea8.jpg"
                }, {
                    "number": 8,
                    "image": "img/custom_dest/korea/korea9.jpg"
                }];
                break;
            case 'Latvia':
                $scope.getDestination = {
                    "image": "img/banner_images/latvia.jpg",
                    "description": "A tapestry of sea, lakes and woods, Latvia is best described as a vast unspoilt parkland with just one real city – its cosmopolitan capital, Rīga. The country might be small, but the amount of personal space it provides is enormous. You can always secure a chunk of pristine nature all for yourself, be it for trekking, cycling or dreaming away on a white-sand beach amid pine-covered dunes ",
                    "content": "A glimpse of the popular places to visit in Latvia"
                };
                $scope.getActivity = [{
                    "number": 0,
                    "image": "img/custom_dest/latvia/latvia1.jpg"
                }, {
                    "number": 1,
                    "image": "img/custom_dest/latvia/latvia2.jpg"
                }, {
                    "number": 2,
                    "image": "img/custom_dest/latvia/latvia3.jpg"
                }, {
                    "number": 3,
                    "image": "img/custom_dest/latvia/latvia4.jpg"
                }, {
                    "number": 4,
                    "image": "img/custom_dest/latvia/latvia5.jpg"
                }, {
                    "number": 5,
                    "image": "img/custom_dest/latvia/latvia6.jpg"
                }, {
                    "number": 6,
                    "image": "img/custom_dest/latvia/latvia7.jpg"
                }, {
                    "number": 7,
                    "image": "img/custom_dest/latvia/latvia8.jpg"
                }];
                break;
            case 'Lithuania':
                $scope.getDestination = {
                    "image": "img/banner_images/lithuania.jpg",
                    "description": "A land of wood and water, proud, independent Lithuania (Lietuva) is fast being recognised as one of Europe's gems. Southernmost of the Baltic states, it's a pocket-sized republic that's a nature-lover's delight, yet lacks nothing in urban excitement.",
                    "content": "A glimpse of the popular places to visit in Lithuania"
                };
                $scope.getActivity = [{
                    "number": 0,
                    "image": "img/custom_dest/lithuania/lithuania1.jpg"
                }, {
                    "number": 1,
                    "image": "img/custom_dest/lithuania/lithuania2.jpg"
                }, {
                    "number": 2,
                    "image": "img/custom_dest/lithuania/lithuania3.jpg"
                }, {
                    "number": 3,
                    "image": "img/custom_dest/lithuania/lithuania4.jpg"
                }, {
                    "number": 4,
                    "image": "img/custom_dest/lithuania/lithuania5.jpg"
                }];
                break;
            case 'Macau':
                $scope.getDestination = {
                    "image": "img/banner_images/macau.jpg",
                    "description": "Best known globally as the 'Vegas of China', the Macau Special Administrative Region is indeed a mecca of gambling and glitz. But the city is so much more than that. A Portuguese colony for more than 300 years, it is a city of blended cultures. Ancient Chinese temples sit on streets paved with traditional Portuguese tiles. ",
                    "content": "A glimpse of the popular places to visit in Macau"
                };
                $scope.getActivity = [{
                    "number": 0,
                    "image": "img/custom_dest/macao/macao1.jpg"
                }, {
                    "number": 1,
                    "image": "img/custom_dest/macao/macao2.jpg"
                }, {
                    "number": 2,
                    "image": "img/custom_dest/macao/macao3.jpg"
                }, {
                    "number": 3,
                    "image": "img/custom_dest/macao/macao4.jpg"
                }, {
                    "number": 4,
                    "image": "img/custom_dest/macao/macao5.jpg"
                }, {
                    "number": 5,
                    "image": "img/custom_dest/macao/macao6.jpg"
                }, {
                    "number": 6,
                    "image": "img/custom_dest/macao/macao7.jpg"
                }];
                break;
            case 'Malaysia':
                $scope.getDestination = {
                    "image": "img/banner_images/malaysia.jpg",
                    "description": "Malaysia is like two countries in one, cleaved in half by the South China Sea. While peninsula flaunts bustling cities, colonial architecture, misty tea plantations and chill-out islands, Malaysian Borneo hosts wild jungles of orangutans, granite peaks and remote tribes, along with some pretty spectacular diving.  ",
                    "content": "A glimpse of the popular places to visit in Malaysia"
                };
                $scope.getActivity = [{
                    "number": 0,
                    "image": "img/custom_dest/malaysia/malaysia1.jpg"
                }, {
                    "number": 1,
                    "image": "img/custom_dest/malaysia/malaysia2.jpg"
                }, {
                    "number": 2,
                    "image": "img/custom_dest/malaysia/malaysia3.jpg"
                }, {
                    "number": 3,
                    "image": "img/custom_dest/malaysia/malaysia4.jpg"
                }, {
                    "number": 4,
                    "image": "img/custom_dest/malaysia/malaysia5.jpg"
                }, {
                    "number": 5,
                    "image": "img/custom_dest/malaysia/malaysia6.jpg"
                }, {
                    "number": 6,
                    "image": "img/custom_dest/malaysia/malaysia7.jpg"
                }];
                break;
            case 'Maldives':
                $scope.getDestination = {
                    "image": "img/banner_images/maldives.jpg",
                    "description": " Unrivalled luxury, stunning white-sand beaches and an amazing underwater world make the Maldives an obvious choice for a true holiday of a lifetime.",
                    "content": "A glimpse of the popular places to visit in Maldives"
                };
                $scope.getActivity = [{
                    "number": 0,
                    "image": "img/custom_dest/maldives/maldives1.jpg"
                }, {
                    "number": 1,
                    "image": "img/custom_dest/maldives/maldives2.jpg"
                }, {
                    "number": 2,
                    "image": "img/custom_dest/maldives/maldives3.jpg"
                }, {
                    "number": 3,
                    "image": "img/custom_dest/maldives/maldives4.jpg"
                }, {
                    "number": 4,
                    "image": "img/custom_dest/maldives/maldives5.jpg"
                }, {
                    "number": 5,
                    "image": "img/custom_dest/maldives/maldives6.jpg"
                }];
                break;
            case 'Malta':
                $scope.getDestination = {
                    "image": "img/banner_images/malta.jpg",
                    "description": "Malta packs glorious variety into its small archipelago. You'll find prehistoric temples, fossil-studded cliffs, hidden coves, thrilling scuba diving and a history of remarkable intensity.  ",
                    "content": "A glimpse of the popular places to visit in Malta"
                };
                $scope.getActivity = [{
                    "number": 0,
                    "image": "img/custom_dest/malta/malta1.jpg"
                }, {
                    "number": 1,
                    "image": "img/custom_dest/malta/malta2.jpg"
                }, {
                    "number": 2,
                    "image": "img/custom_dest/malta/malta3.jpg"
                }, {
                    "number": 3,
                    "image": "img/custom_dest/malta/malta4.jpg"
                }, {
                    "number": 4,
                    "image": "img/custom_dest/malta/malta5.jpg"
                }, {
                    "number": 5,
                    "image": "img/custom_dest/malta/malta6.jpg"
                }];
                break;
            case 'Mauritius':
                $scope.getDestination = {
                    "image": "img/banner_images/mauritius.jpg",
                    "description": "Mark Twain once wrote, 'Mauritius was made first and then heaven, heaven being copied after Mauritius'. He was right!",
                    "content": "A glimpse of the popular places to visit in Mauritius"
                };
                $scope.getActivity = [{
                    "number": 0,
                    "image": "img/custom_dest/mauritius/mauritius1.jpg"
                }, {
                    "number": 1,
                    "image": "img/custom_dest/mauritius/mauritius2.jpg"
                }, {
                    "number": 2,
                    "image": "img/custom_dest/mauritius/mauritius3.jpg"
                }, {
                    "number": 3,
                    "image": "img/custom_dest/mauritius/mauritius4.jpg"
                }, {
                    "number": 4,
                    "image": "img/custom_dest/mauritius/mauritius5.jpg"
                }];
                break;
            case 'Mexico':
                $scope.getDestination = {
                    "image": "img/banner_images/mexico.jpg",
                    "description": "Palm-fringed beaches, chili-spiced cuisine; steamy jungles, teeming cities; fiesta fireworks, Frida’s angst: Mexico conjures up diverse, vivid dreams. And the reality lives up to the imagining! ",
                    "content": "A glimpse of the popular places to visit in Mexico"
                };
                $scope.getActivity = [{
                    "number": 0,
                    "image": "img/custom_dest/mexico/mexico1.jpg"
                }, {
                    "number": 1,
                    "image": "img/custom_dest/mexico/mexico2.jpg"
                }, {
                    "number": 2,
                    "image": "img/custom_dest/mexico/mexico3.jpg"
                }, {
                    "number": 3,
                    "image": "img/custom_dest/mexico/mexico4.jpg"
                }, {
                    "number": 4,
                    "image": "img/custom_dest/mexico/mexico5.jpg"
                }, {
                    "number": 5,
                    "image": "img/custom_dest/mexico/mexico6.jpg"
                }];
                break;
            case 'Monaco':
                $scope.getDestination = {
                    "image": "img/banner_images/monaco.jpg",
                    "description": "Monaco is glamour by the sea!! Monaco is living the good life!! A magnet for high-rollers and hedonists since the early 20th century, it's also one of the world's most notorious tax havens (residents pay no income tax). It's also famous for its annual Formula 1 Grand Prix, held every year in May since 1929.  ",
                    "content": "A glimpse of the popular places to visit in Monaco"
                };
                $scope.getActivity = [{
                    "number": 0,
                    "image": "img/custom_dest/monaco/monaco1.jpg"
                }, {
                    "number": 1,
                    "image": "img/custom_dest/monaco/monaco2.jpg"
                }, {
                    "number": 2,
                    "image": "img/custom_dest/monaco/monaco3.jpg"
                }, {
                    "number": 3,
                    "image": "img/custom_dest/monaco/monaco4.jpg"
                }, {
                    "number": 4,
                    "image": "img/custom_dest/monaco/monaco5.jpg"
                }, {
                    "number": 5,
                    "image": "img/custom_dest/monaco/monaco6.jpg"
                }, {
                    "number": 6,
                    "image": "img/custom_dest/monaco/monaco7.jpg"
                }];
                break;
            case 'Moscow':
                $scope.getDestination = {
                    "image": "img/banner_images/moscow.jpg",
                    "description": "During any season, at any hour of the day, Moscow thrills visitors with its artistry, history and majesty. Moscow is illuminating reflections!!   ",
                    "content": "A glimpse of the popular places to visit in Moscow"
                };
                $scope.getActivity = [{
                    "number": 0,
                    "image": "img/custom_dest/moscow/moscow1.jpg"
                }, {
                    "number": 1,
                    "image": "img/custom_dest/moscow/moscow2.jpg"
                }, {
                    "number": 2,
                    "image": "img/custom_dest/moscow/moscow3.jpg"
                }, {
                    "number": 3,
                    "image": "img/custom_dest/moscow/moscow5.jpg"
                }, {
                    "number": 4,
                    "image": "img/custom_dest/moscow/moscow6.jpg"
                }, {
                    "number": 5,
                    "image": "img/custom_dest/moscow/moscow7.jpg"
                }, {
                    "number": 6,
                    "image": "img/custom_dest/moscow/moscow8.jpg"
                }, {
                    "number": 7,
                    "image": "img/custom_dest/moscow/moscow9.jpg"
                }, {
                    "number": 8,
                    "image": "img/custom_dest/moscow/moscow10.jpg"
                }, {
                    "number": 9,
                    "image": "img/custom_dest/moscow/moscow11.jpg"
                }];
                break;
            case 'Netherlands':
                $scope.getDestination = {
                    "image": "img/banner_images/netherlands.jpg",
                    "description": "Tradition and innovation intertwine here: artistic masterpieces, windmills, tulips and candlelit cafés coexist with groundbreaking architecture, cutting-edge design and phenomenal nightlife.",
                    "content": "A glimpse of the popular places to visit in Netherlands"
                };
                $scope.getActivity = [{
                    "number": 0,
                    "image": "img/custom_dest/netherlands/netherlands1.jpg"
                }, {
                    "number": 1,
                    "image": "img/custom_dest/netherlands/netherlands2.jpg"
                }, {
                    "number": 2,
                    "image": "img/custom_dest/netherlands/netherlands3.jpg"
                }, {
                    "number": 3,
                    "image": "img/custom_dest/netherlands/netherlands4.jpg"
                }, {
                    "number": 4,
                    "image": "img/custom_dest/netherlands/netherlands5.jpg"
                }, {
                    "number": 5,
                    "image": "img/custom_dest/netherlands/netherlands6.jpg"
                }];
                break;
            case 'New Zealand':
                $scope.getDestination = {
                    "image": "img/banner_images/new zealand.jpg",
                    "description": "As the planet heats up environmentally and politically, it’s good to know that New Zealand exists. This uncrowded, green, peaceful and accepting country is the ultimate escape.  ",
                    "content": "A glimpse of the popular places to visit in New Zealand"
                };
                $scope.getActivity = [{
                    "number": 0,
                    "image": "img/custom_dest/new zealand/new zealand1.jpg"
                }, {
                    "number": 1,
                    "image": "img/custom_dest/new zealand/new zealand2.jpg"
                }, {
                    "number": 2,
                    "image": "img/custom_dest/new zealand/new zealand3.jpg"
                }, {
                    "number": 3,
                    "image": "img/custom_dest/new zealand/new zealand4.jpg"
                }, {
                    "number": 4,
                    "image": "img/custom_dest/new zealand/new zealand5.jpg"
                }, {
                    "number": 5,
                    "image": "img/custom_dest/new zealand/new zealand6.jpg"
                }, {
                    "number": 6,
                    "image": "img/custom_dest/new zealand/new zealand7.jpg"
                }, {
                    "number": 7,
                    "image": "img/custom_dest/new zealand/new zealand8.jpg"
                }, {
                    "number": 8,
                    "image": "img/custom_dest/new zealand/new zealand9.jpg"
                }, {
                    "number": 9,
                    "image": "img/custom_dest/new zealand/new zealand10.jpg"
                }];
                break;
            case 'Norway':
                $scope.getDestination = {
                    "image": "img/banner_images/norway.jpg",
                    "description": "Norway is a once-in-a-lifetime destination and the essence of its appeal is remarkably simple: this is one of the most beautiful countries on earth. ",
                    "content": "A glimpse of the popular places to visit in Norway"
                };
                $scope.getActivity = [{
                    "number": 0,
                    "image": "img/custom_dest/norway/norway1.jpg"
                }, {
                    "number": 1,
                    "image": "img/custom_dest/norway/norway2.jpg"
                }, {
                    "number": 2,
                    "image": "img/custom_dest/norway/norway3.jpg"
                }, {
                    "number": 3,
                    "image": "img/custom_dest/norway/norway4.jpg"
                }, {
                    "number": 4,
                    "image": "img/custom_dest/norway/norway5.jpg"
                }, {
                    "number": 5,
                    "image": "img/custom_dest/norway/norway6.jpg"
                }];
                break;
            case 'Peru':
                $scope.getDestination = {
                    "image": "img/banner_images/peru.jpg",
                    "description": "Peru is as complex as its most intricate and exquisite weavings. Festivals mark ancient rites, the urban vanguard beams innovation and nature brims with splendid diversity. ",
                    "content": "A glimpse of the popular places to visit in Peru"
                };
                $scope.getActivity = [{
                    "number": 0,
                    "image": "img/custom_dest/peru/peru1.jpg"
                }, {
                    "number": 1,
                    "image": "img/custom_dest/peru/peru2.jpg"
                }, {
                    "number": 2,
                    "image": "img/custom_dest/peru/peru3.jpg"
                }, {
                    "number": 3,
                    "image": "img/custom_dest/peru/peru4.jpg"
                }];
                break;
            case 'Philippines':
                $scope.getDestination = {
                    "image": "img/banner_images/phillippines.jpg",
                    "description": "The Philippines is defined by its emerald rice fields, teeming mega-cities, graffiti-splashed jeepneys, smouldering volcanoes, bug-eyed tarsiers, fuzzy water buffalo and smiling, happy-go-lucky people.  ",
                    "content": "A glimpse of the popular places to visit in Philippines"
                };
                $scope.getActivity = [{
                    "number": 0,
                    "image": "img/custom_dest/phillippines/phillippines1.jpg"
                }, {
                    "number": 1,
                    "image": "img/custom_dest/phillippines/phillippines2.jpg"
                }, {
                    "number": 2,
                    "image": "img/custom_dest/phillippines/phillippines3.jpg"
                }, {
                    "number": 3,
                    "image": "img/custom_dest/phillippines/phillippines4.jpg"
                }, {
                    "number": 4,
                    "image": "img/custom_dest/phillippines/phillippines5.jpg"
                }, {
                    "number": 5,
                    "image": "img/custom_dest/phillippines/phillippines6.jpg"
                }, {
                    "number": 6,
                    "image": "img/custom_dest/phillippines/phillippines7.jpg"
                }];
                break;
            case 'Poland':
                $scope.getDestination = {
                    "image": "img/banner_images/poland.jpg",
                    "description": "Chic medieval hot spots like Kraków and Gdańsk vie with energetic Warsaw for your urban attention. Outside the cities, woods, rivers, lakes and hills beckon for some fresh-air fun.",
                    "content": "A glimpse of the popular places to visit in Poland"
                };
                $scope.getActivity = [{
                    "number": 0,
                    "image": "img/custom_dest/poland/poland1.jpg"
                }, {
                    "number": 1,
                    "image": "img/custom_dest/poland/poland2.jpg"
                }, {
                    "number": 2,
                    "image": "img/custom_dest/poland/poland3.jpg"
                }, {
                    "number": 3,
                    "image": "img/custom_dest/poland/poland4.jpg"
                }, {
                    "number": 4,
                    "image": "img/custom_dest/poland/poland5.jpg"
                }, {
                    "number": 5,
                    "image": "img/custom_dest/poland/poland6.jpg"
                }, {
                    "number": 6,
                    "image": "img/custom_dest/poland/poland7.jpg"
                }];
                break;
            case 'Portugal':
                $scope.getDestination = {
                    "image": "img/banner_images/portugal.jpg",
                    "description": "Medieval castles, cobblestone villages, captivating cities and golden beaches: the Portugal experience can be many things. History, great food and idyllic scenery are just the beginning…",
                    "content": "A glimpse of the popular places to visit in Portugal"
                };
                $scope.getActivity = [{
                    "number": 0,
                    "image": "img/custom_dest/portugal/portugal1.jpg"
                }, {
                    "number": 1,
                    "image": "img/custom_dest/portugal/portugal2.jpg"
                }, {
                    "number": 2,
                    "image": "img/custom_dest/portugal/portugal3.jpg"
                }, {
                    "number": 3,
                    "image": "img/custom_dest/portugal/portugal4.jpg"
                }, {
                    "number": 4,
                    "image": "img/custom_dest/portugal/portugal5.jpg"
                }, {
                    "number": 5,
                    "image": "img/custom_dest/portugal/portugal6.jpg"
                }, {
                    "number": 6,
                    "image": "img/custom_dest/portugal/portugal7.jpg"
                }, {
                    "number": 7,
                    "image": "img/custom_dest/portugal/portugal8.jpg"
                }, {
                    "number": 8,
                    "image": "img/custom_dest/portugal/portugal9.jpg"
                }, {
                    "number": 9,
                    "image": "img/custom_dest/portugal/portugal10.jpg"
                }, {
                    "number": 10,
                    "image": "img/custom_dest/portugal/portugal11.jpg"
                }, {
                    "number": 11,
                    "image": "img/custom_dest/portugal/portugal12.jpg"
                }, {
                    "number": 12,
                    "image": "img/custom_dest/portugal/portugal13.jpg"
                }, {
                    "number": 13,
                    "image": "img/custom_dest/portugal/portugal14.jpg"
                }, {
                    "number": 14,
                    "image": "img/custom_dest/portugal/portugal15.jpg"
                }, {
                    "number": 15,
                    "image": "img/custom_dest/portugal/portugal16.jpg"
                }, {
                    "number": 16,
                    "image": "img/custom_dest/portugal/portugal17.jpg"
                }, {
                    "number": 17,
                    "image": "img/custom_dest/portugal/portugal18.jpg"
                }, {
                    "number": 18,
                    "image": "img/custom_dest/portugal/portugal19.jpg"
                }, {
                    "number": 19,
                    "image": "img/custom_dest/portugal/portugal20.jpg"
                }];
                break;
            case 'Puerto Rico':
                $scope.getDestination = {
                    "image": "img/banner_images/puerto rico.jpg",
                    "description": "Scented by slow-roasted pork and sea breezes, and colored by swashbuckling history, this sun-washed medley of Spanish and American influences is a paradise-seeker's pleasure dome.  ",
                    "content": "A glimpse of the popular places to visit in Puerto Rico"
                };
                $scope.getActivity = [{
                    "number": 0,
                    "image": "img/custom_dest/puerto rico/puerto rico1.jpg"
                }, {
                    "number": 1,
                    "image": "img/custom_dest/puerto rico/puerto rico2.jpg"
                }, {
                    "number": 2,
                    "image": "img/custom_dest/puerto rico/puerto rico3.jpg"
                }, {
                    "number": 3,
                    "image": "img/custom_dest/puerto rico/puerto rico4.jpg"
                }, {
                    "number": 4,
                    "image": "img/custom_dest/puerto rico/puerto rico5.jpg"
                }, {
                    "number": 5,
                    "image": "img/custom_dest/puerto rico/puerto rico6.jpg"
                }, {
                    "number": 6,
                    "image": "img/custom_dest/puerto rico/puerto rico7.jpg"
                }];
                break;
            case 'River Cruise':
                $scope.getDestination = {
                    "image": "img/banner_images/river cruises.jpg",
                    "description": "Hash brownies... Hot Girls... Unlimited Alcohol... Ultimate Nightlife... World famous Red Light District! Oh Yes! This city lets you indulge into everything that is not so legal in the other parts of the world!",
                    "content": "A glimpse of the popular places to visit in River Cruise"
                };
                $scope.getActivity = [{
                    "number": 0,
                    "image": "img/custom_dest/river cruises/river cruises1.jpg"
                }, {
                    "number": 1,
                    "image": "img/custom_dest/river cruises/river cruises2.jpg"
                }, {
                    "number": 2,
                    "image": "img/custom_dest/river cruises/river cruises3.jpg"
                }, {
                    "number": 3,
                    "image": "img/custom_dest/river cruises/river cruises4.jpg"
                }, {
                    "number": 4,
                    "image": "img/custom_dest/river cruises/river cruises5.jpg"
                }, {
                    "number": 5,
                    "image": "img/custom_dest/river cruises/river cruises6.jpg"
                }];
                break;
            case 'Rwanda':
                $scope.getDestination = {
                    "image": "img/banner_images/rwanda.jpg",
                    "description": "Rwanda is known as Le Pays des Mille Collines (Land of a Thousand Hills) thanks to the endless mountains in this scenically stunning little country. Nowhere are the mountains more majestic than the Virunga volcanoes in the northwest, and hidden among the bamboo forests are some of the world's last remaining mountain gorillas. For a change of scene, the shores of Lake Kivu conceal some of the best inland beaches on the continent, while Nyungwe Forest National Park protects extensive tracts of montane rainforest, and is home to many primates.  ",
                    "content": "A glimpse of the popular places to visit in Rwanda"
                };
                $scope.getActivity = [{
                    "number": 0,
                    "image": "img/custom_dest/rwanda/rwanda1.jpg"
                }, {
                    "number": 1,
                    "image": "img/custom_dest/rwanda/rwanda2.jpg"
                }, {
                    "number": 2,
                    "image": "img/custom_dest/rwanda/rwanda3.jpg"
                }, {
                    "number": 3,
                    "image": "img/custom_dest/rwanda/rwanda4.jpg"
                }];
                break;
            case 'Seychelles':
                $scope.getDestination = {
                    "image": "img/banner_images/seychelles.jpg",
                    "description": "Talcum-powder beaches lapped by topaz waters, lush hills, a sublime laid-back tempo; these dreams of a tropical paradise become reality in the Seychelles.  ",
                    "content": "A glimpse of the popular places to visit in Seychelles"
                };
                $scope.getActivity = [{
                    "number": 0,
                    "image": "img/custom_dest/seychelles/seychelles1.jpg"
                }, {
                    "number": 1,
                    "image": "img/custom_dest/seychelles/seychelles2.jpg"
                }, {
                    "number": 2,
                    "image": "img/custom_dest/seychelles/seychelles3.jpg"
                }, {
                    "number": 3,
                    "image": "img/custom_dest/seychelles/seychelles4.jpg"
                }, {
                    "number": 4,
                    "image": "img/custom_dest/seychelles/seychelles5.jpg"
                }, {
                    "number": 5,
                    "image": "img/custom_dest/seychelles/seychelles6.jpg"
                }];
                break;
            case 'Singapore':
                $scope.getDestination = {
                    "image": "img/banner_images/singapore.jpg",
                    "description": " Capitalising on its melting pot of cultures, Singapore is finally getting some spark, and is fast becoming one of Asia’s hit-list destinations.   ",
                    "content": "A glimpse of the popular places to visit in Singapore"
                };
                $scope.getActivity = [{
                    "number": 0,
                    "image": "img/custom_dest/singapore/singapore1.jpg"
                }, {
                    "number": 1,
                    "image": "img/custom_dest/singapore/singapore2.jpg"
                }, {
                    "number": 2,
                    "image": "img/custom_dest/singapore/singapore3.jpg"
                }, {
                    "number": 3,
                    "image": "img/custom_dest/singapore/singapore4.jpg"
                }, {
                    "number": 4,
                    "image": "img/custom_dest/singapore/singapore5.jpg"
                }, {
                    "number": 5,
                    "image": "img/custom_dest/singapore/singapore6.jpg"
                }, {
                    "number": 6,
                    "image": "img/custom_dest/singapore/singapore7.jpg"
                }];
                break;
            case 'Sri Lanka':
                $scope.getDestination = {
                    "image": "img/banner_images/sirlanka.jpg",
                    "description": "Endless beaches, timeless ruins, welcoming people, oodles of elephants, rolling surf, cheap prices, fun trains, famous tea and flavourful food make Sri Lanka irresistible.",
                    "content": "A glimpse of the popular places to visit in Sri Lanka"
                };
                $scope.getActivity = [{
                    "number": 0,
                    "image": "img/custom_dest/srilanka/srilanka1.jpg"
                }, {
                    "number": 1,
                    "image": "img/custom_dest/srilanka/srilanka2.jpg"
                }, {
                    "number": 2,
                    "image": "img/custom_dest/srilanka/srilanka3.jpg"
                }, {
                    "number": 3,
                    "image": "img/custom_dest/srilanka/srilanka4.jpg"
                }, {
                    "number": 4,
                    "image": "img/custom_dest/srilanka/srilanka5.jpg"
                }];
                break;
            case 'Slovakia':
                $scope.getDestination = {
                    "image": "img/banner_images/slovakia.jpg",
                    "description": "Right in the heart of Europe, Slovakia is a land of castles and mountains, occasionally interrupted by concrete sprawl.Capital city Bratislava draws the most visitors, thanks to its excellent nightlife, resplendent old town and sheer ease of access from around Europe. Beyond Bratislava are countless gingerbread-style villages, a clear sign that modern Slovakia still reveres its folk traditions.  ",
                    "content": "A glimpse of the popular places to visit in Slovakia"
                };
                $scope.getActivity = [{
                    "number": 0,
                    "image": "img/custom_dest/slovakia/slovakia1.jpg"
                }, {
                    "number": 1,
                    "image": "img/custom_dest/slovakia/slovakia2.jpg"
                }, {
                    "number": 2,
                    "image": "img/custom_dest/slovakia/slovakia3.jpg"
                }, {
                    "number": 3,
                    "image": "img/custom_dest/slovakia/slovakia4.jpg"
                }, {
                    "number": 4,
                    "image": "img/custom_dest/slovakia/slovakia5.jpg"
                }, {
                    "number": 5,
                    "image": "img/custom_dest/slovakia/slovakia6.jpg"
                }];
                break;
            case 'Slovenia':
                $scope.getDestination = {
                    "image": "img/banner_images/slovenia.jpg",
                    "description": "An earthly paradise of snow-capped peaks, turquoise-green rivers and Venetian-style coastline, Slovenia enriches its natural treasures with harmonious architecture, charming rustic culture and sophisticated cuisine.",
                    "content": "A glimpse of the popular places to visit in Slovenia"
                };
                $scope.getActivity = [{
                    "number": 0,
                    "image": "img/custom_dest/slovenia/slovenia1.jpg"
                }, {
                    "number": 1,
                    "image": "img/custom_dest/slovenia/slovenia2.jpg"
                }, {
                    "number": 2,
                    "image": "img/custom_dest/slovenia/slovenia3.jpg"
                }, {
                    "number": 3,
                    "image": "img/custom_dest/slovenia/slovenia4.jpg"
                }, {
                    "number": 4,
                    "image": "img/custom_dest/slovenia/slovenia5.jpg"
                }, {
                    "number": 5,
                    "image": "img/custom_dest/slovenia/slovenia6.jpg"
                }];
                break;
            case 'South Africa':
                $scope.getDestination = {
                    "image": "img/banner_images/south africa.jpg",
                    "description": " Black-maned lions framed against Kalahari dunes; powdery beaches lapped by two oceans; star-studded desert skies; jagged, lush mountains – this truly is a country of astounding diversity.",
                    "content": "A glimpse of the popular places to visit in South Africa"
                };
                $scope.getActivity = [{
                    "number": 0,
                    "image": "img/custom_dest/south africa/south africa1.jpg"
                }, {
                    "number": 1,
                    "image": "img/custom_dest/south africa/south africa2.jpg"
                }, {
                    "number": 2,
                    "image": "img/custom_dest/south africa/south africa3.jpg"
                }, {
                    "number": 3,
                    "image": "img/custom_dest/south africa/south africa4.jpg"
                }, {
                    "number": 4,
                    "image": "img/custom_dest/south africa/south africa5.jpg"
                }, {
                    "number": 5,
                    "image": "img/custom_dest/south africa/south africa6.jpg"
                }, {
                    "number": 6,
                    "image": "img/custom_dest/south africa/south africa7.jpg"
                }, {
                    "number": 7,
                    "image": "img/custom_dest/south africa/south africa8.jpg"
                }];
                break;
            case 'St.Petersburg':
                $scope.getDestination = {
                    "image": "img/banner_images/st.petersburg.jpg",
                    "description": "The sheer grandeur and history of Russia's imperial capital never fail to amaze, but this is also a city with a revolutionary spirit. ",
                    "content": "A glimpse of the popular places to visit in St.Petersburg"
                };
                $scope.getActivity = [{
                    "number": 0,
                    "image": "img/custom_dest/st.petersburg/st.petersburg1.jpg"
                }, {
                    "number": 1,
                    "image": "img/custom_dest/st.petersburg/st.petersburg2.jpg"
                }, {
                    "number": 2,
                    "image": "img/custom_dest/st.petersburg/st.petersburg3.jpg"
                }, {
                    "number": 3,
                    "image": "img/custom_dest/st.petersburg/st.petersburg4.jpg"
                }, {
                    "number": 4,
                    "image": "img/custom_dest/st.petersburg/st.petersburg5.jpg"
                }, {
                    "number": 5,
                    "image": "img/custom_dest/st.petersburg/st.petersburg6.jpg"
                }, {
                    "number": 6,
                    "image": "img/custom_dest/st.petersburg/st.petersburg7.jpg"
                }, {
                    "number": 7,
                    "image": "img/custom_dest/st.petersburg/st.petersburg8.jpg"
                }, {
                    "number": 8,
                    "image": "img/custom_dest/st.petersburg/st.petersburg9.jpg"
                }, {
                    "number": 9,
                    "image": "img/custom_dest/st.petersburg/st.petersburg10.jpg"
                }, {
                    "number": 10,
                    "image": "img/custom_dest/st.petersburg/st.petersburg11.jpg"
                }, ];
                break;
            case 'Sweden':
                $scope.getDestination = {
                    "image": "img/banner_images/sweden.jpg",
                    "description": "Frozen wastelands, cosy cottages, virgin forest, rocky islands, reindeer herders and Viking lore – Sweden has all that plus impeccable style and to-die-for dining.  ",
                    "content": "A glimpse of the popular places to visit in Sweden"
                };
                $scope.getActivity = [{
                    "number": 0,
                    "image": "img/custom_dest/sweden/sweden1.jpg"
                }, {
                    "number": 1,
                    "image": "img/custom_dest/sweden/sweden2.jpg"
                }, {
                    "number": 2,
                    "image": "img/custom_dest/sweden/sweden3.jpg"
                }, {
                    "number": 3,
                    "image": "img/custom_dest/sweden/sweden4.jpg"
                }, {
                    "number": 4,
                    "image": "img/custom_dest/sweden/sweden5.jpg"
                }];
                break;
            case 'Switzerland':
                $scope.getDestination = {
                    "image": "img/banner_images/switzerland.jpg",
                    "description": "Look beyond the chocolate, cuckoo clocks and yodelling – contemporary Switzerland, land of four languages, is all about once-in-a-lifetime journeys, heart-racing Alpine pursuits and urban culture. ",
                    "content": "A glimpse of the popular places to visit in Switzerland"
                };
                $scope.getActivity = [{
                    "number": 0,
                    "image": "img/custom_dest/switzerland/switzerland1.jpg"
                }, {
                    "number": 1,
                    "image": "img/custom_dest/switzerland/switzerland2.jpg"
                }, {
                    "number": 2,
                    "image": "img/custom_dest/switzerland/switzerland3.jpg"
                }, {
                    "number": 3,
                    "image": "img/custom_dest/switzerland/switzerland4.jpg"
                }, {
                    "number": 4,
                    "image": "img/custom_dest/switzerland/switzerland5.jpg"
                }, {
                    "number": 5,
                    "image": "img/custom_dest/switzerland/switzerland6.jpg"
                }, {
                    "number": 6,
                    "image": "img/custom_dest/switzerland/switzerland7.jpg"
                }, {
                    "number": 7,
                    "image": "img/custom_dest/switzerland/switzerland8.jpg"
                }, {
                    "number": 8,
                    "image": "img/custom_dest/switzerland/switzerland9.jpg"
                }, {
                    "number": 9,
                    "image": "img/custom_dest/switzerland/switzerland10.jpg"
                }, {
                    "number": 10,
                    "image": "img/custom_dest/switzerland/switzerland11.jpg"
                }, {
                    "number": 11,
                    "image": "img/custom_dest/switzerland/switzerland12.jpg"
                }];
                break;
            case 'Tanzania':
                $scope.getDestination = {
                    "image": "img/banner_images/tanzania.jpg",
                    "description": "Wildlife, beaches, friendly people, fascinating cultures, Serengeti, Ngorongoro, Mt Kilimanjaro, Zanzibar Archipelago – Tanzania has all these and more wrapped up in one adventurous, welcoming package. ",
                    "content": "A glimpse of the popular places to visit in Tanzania"
                };
                $scope.getActivity = [{
                    "number": 0,
                    "image": "img/custom_dest/tanzania/tanzania1.jpg"
                }, {
                    "number": 1,
                    "image": "img/custom_dest/tanzania/tanzania2.jpg"
                }, {
                    "number": 2,
                    "image": "img/custom_dest/tanzania/tanzania3.jpg"
                }, {
                    "number": 3,
                    "image": "img/custom_dest/tanzania/tanzania4.jpg"
                }, {
                    "number": 4,
                    "image": "img/custom_dest/tanzania/tanzania5.jpg"
                }];
                break;
            case 'Thailand':
                $scope.getDestination = {
                    "image": "img/banner_images/thailand.jpg",
                    "description": "Friendly and fun loving, exotic and tropical, cultured and historic, Thailand radiates a golden hue from its glittering temples and tropical beaches through to the ever-comforting Thai smile. ",
                    "content": "A glimpse of the popular places to visit in Thailand"
                };
                $scope.getActivity = [{
                    "number": 0,
                    "image": "img/custom_dest/thailand/thailand1.jpg"
                }, {
                    "number": 1,
                    "image": "img/custom_dest/thailand/thailand2.jpg"
                }, {
                    "number": 2,
                    "image": "img/custom_dest/thailand/thailand3.jpg"
                }, {
                    "number": 3,
                    "image": "img/custom_dest/thailand/thailand4.jpg"
                }, {
                    "number": 4,
                    "image": "img/custom_dest/thailand/thailand5.jpg"
                }, {
                    "number": 5,
                    "image": "img/custom_dest/thailand/thailand6.jpg"
                }, {
                    "number": 6,
                    "image": "img/custom_dest/thailand/thailand7.jpg"
                }, {
                    "number": 7,
                    "image": "img/custom_dest/thailand/thailand8.jpg"
                }];
                break;
            case 'United Arab Emirates':
                $scope.getDestination = {
                    "image": "img/banner_images/united arab of emirates.jpg",
                    "description": " For most people, the United Arab Emirates means just one place: Dubai, the sci-fi-esque city of iconic skyscrapers, palm-shaped islands, city-sized malls, indoor ski slopes and palatial beach resorts. But beyond the glitter awaits a diverse mosaic of six more emirates, each with its own character and allure.        ",
                    "content": "A glimpse of the popular places to visit in United Arab Emirates"
                };
                $scope.getActivity = [{
                    "number": 0,
                    "image": "img/custom_dest/uae/uae1.jpg"
                }, {
                    "number": 1,
                    "image": "img/custom_dest/uae/uae2.jpg"
                }, {
                    "number": 2,
                    "image": "img/custom_dest/uae/uae3.jpg"
                }, {
                    "number": 3,
                    "image": "img/custom_dest/uae/uae4.jpg"
                }, {
                    "number": 4,
                    "image": "img/custom_dest/uae/uae5.jpg"
                }, {
                    "number": 5,
                    "image": "img/custom_dest/uae/uae6.jpg"
                }, {
                    "number": 6,
                    "image": "img/custom_dest/uae/uae7.jpg"
                }, {
                    "number": 7,
                    "image": "img/custom_dest/uae/uae8.jpg"
                }, {
                    "number": 8,
                    "image": "img/custom_dest/uae/uae9.jpg"
                }];
                break;
            case 'United Kingdom':
                $scope.getDestination = {
                    "image": "img/banner_images/united kingdom.jpg",
                    "description": "Buckingham Palace, Stonehenge, Manchester United, The Beatles – Britain does icons like nowhere else, and travel here is a fascinating mix of famous names and hidden gems.  ",
                    "content": "A glimpse of the popular places to visit in United Kingdom"
                };
                $scope.getActivity = [{
                    "number": 0,
                    "image": "img/custom_dest/uk/uk1.jpg"
                }, {
                    "number": 1,
                    "image": "img/custom_dest/uk/uk2.jpg"
                }, {
                    "number": 2,
                    "image": "img/custom_dest/uk/uk3.jpg"
                }, {
                    "number": 3,
                    "image": "img/custom_dest/uk/uk4.jpg"
                }, {
                    "number": 4,
                    "image": "img/custom_dest/uk/uk5.jpg"
                }, {
                    "number": 5,
                    "image": "img/custom_dest/uk/uk6.jpg"
                }, {
                    "number": 6,
                    "image": "img/custom_dest/uk/uk7.jpg"
                }, {
                    "number": 7,
                    "image": "img/custom_dest/uk/uk8.jpg"
                }, {
                    "number": 8,
                    "image": "img/custom_dest/uk/uk9.jpg"
                }, {
                    "number": 9,
                    "image": "img/custom_dest/uk/uk10.jpg"
                }];
                break;
            case 'United States of America':
                $scope.getDestination = {
                    "image": "img/banner_images/usa.jpg",
                    "description": " The great American experience is about so many things: bluegrass and beaches, snow-covered peaks and redwood forests, restaurant-loving cities and big open skies.  ",
                    "content": "A glimpse of the popular places to visit in United States of America"
                };
                $scope.getActivity = [{
                    "number": 0,
                    "image": "img/custom_dest/usa/usa1.jpg"
                }, {
                    "number": 1,
                    "image": "img/custom_dest/usa/usa2.jpg"
                }, {
                    "number": 2,
                    "image": "img/custom_dest/usa/usa3.jpg"
                }, {
                    "number": 3,
                    "image": "img/custom_dest/usa/usa4.jpg"
                }, {
                    "number": 4,
                    "image": "img/custom_dest/usa/usa5.jpg"
                }, {
                    "number": 5,
                    "image": "img/custom_dest/usa/usa6.jpg"
                }, {
                    "number": 6,
                    "image": "img/custom_dest/usa/usa7.jpg"
                }, {
                    "number": 7,
                    "image": "img/custom_dest/usa/usa8.jpg"
                }, {
                    "number": 8,
                    "image": "img/custom_dest/usa/usa9.jpg"
                }, {
                    "number": 9,
                    "image": "img/custom_dest/usa/usa10.jpg"
                }, {
                    "number": 10,
                    "image": "img/custom_dest/usa/usa11.jpg"
                }, {
                    "number": 11,
                    "image": "img/custom_dest/usa/usa12.jpg"
                }, {
                    "number": 12,
                    "image": "img/custom_dest/usa/usa13.jpg"
                }];
                break;
            case 'Zimbabwe':
                $scope.getDestination = {
                    "image": "img/banner_images/zimbabwe.jpg",
                    "description": " While from afar Zimbabwe's plight doesn't paint a rosy picture, the reality is different on the ground for tourists – most insist it's hands down one of the safest, friendliest and most spectacular countries in Africa.  ",
                    "content": "A glimpse of the popular places to visit in Zimbabwe"
                };
                $scope.getActivity = [{
                    "number": 0,
                    "image": "img/custom_dest/zimbabwe/zimbabwe1.jpg"
                }, {
                    "number": 1,
                    "image": "img/custom_dest/zimbabwe/zimbabwe2.jpg"
                }, {
                    "number": 2,
                    "image": "img/custom_dest/zimbabwe/zimbabwe3.jpg"
                }, {
                    "number": 3,
                    "image": "img/custom_dest/zimbabwe/zimbabwe4.jpg"
                }, {
                    "number": 4,
                    "image": "img/custom_dest/zimbabwe/zimbabwe5.jpg"
                }, {
                    "number": 5,
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
        $scope.Image = function (number) {
            $scope.number = number;
            $scope.galleryImage = $uibModal.open({
                animation: true,
                templateUrl: "views/modal/gallery.html",
                scope: $scope,
                // windowClass: 'modalWidth',
                backdropClass: 'black-drop'
            });
            $scope.closeModal = function () { // to close modals for ALL OTP
                $scope.galleryImage.close();
            };
        };




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
    })
    .controller('WhatsHotCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $http) {
        $scope.template = TemplateService.getHTML("content/whats-hot.html");
        TemplateService.title = "Whats Hot"; // This is the Title of the Website
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