myApp.controller('HomeCtrl', function ($scope, TemplateService, NavigationService, $timeout, $state,$uibModal) {
        $scope.template = TemplateService.getHTML("content/home.html");
        TemplateService.title = "Home"; //This is the Title of the Website
        $scope.navigation = NavigationService.getNavigation();
        $scope.formData = {};

        $('#loader').show();
        setTimeout(function(){$('#loader').hide();}, 2000);
        // setTimeout(function(){ alert("Hello"); }, 0);

        $scope.gotoFun = function () {
            $state.go('customdestination', {
                id: $scope.goTo
            })
        }
        $scope.search = function (name) {
            $scope.goTo = name;
        }

        $scope.mySlides = [{
            "img": "img/bg1.jpg",
            "name":"France"
        }, {
            "img": "img/bg2.jpg",
            "name":"Japan"
        }, {
            "img": "img/bg3.jpg",
            "name":"United States of America"
        }, {
            "img": "img/bg4.jpg",
            "name":"Malaysia"
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
        $('#loader').show();
        setTimeout(function(){$('#loader').hide();}, 2000);
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
        $('#loader').show();
        setTimeout(function(){$('#loader').hide();}, 2000);
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
                    "description": "It's apparent why Argentina has long held travelers in awe: tango, beef, gauchos, fútbol, Patagonia, the Andes. The classics alone make a formidable wanderlust cocktail. From mighty Iguazú Falls in the subtropical north to the thunderous, crackling advance of the Glaciar Perito Moreno in the south, Argentina is a vast natural wonderland. The country boasts some of the Andes’ highest peaks. It’s home to rich wetlands that rival Brazil’s famous Pantanal, mountains painted in rustic colors, deserts dotted with cacti, massive ice fields and arid steppes in Patagonia, cool lichen-clad Valdivian forests, Andean salt flats, a spectacular Lake District, penguins, flamingos, capybaras and more. All are stunning sights and adventures just waiting to be experienced. Arriving in Buenos Aires is like jumping aboard a moving train. Outside the taxi window, a blurred mosaic of a modern metropolis whizzes by, and then the street life appears – the cafes, the purple jacaranda flowers draped over the sidewalks and porteños. And it’s not just Buenos Aires that’s a stunner – Córdoba, Salta, Mendoza and Bariloche each have their unique personalities and unforgettable attractions, so don't miss them.",
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
                    "description": "Visit Armenia, it is beautiful! Country of old legends and biblical stories, Hidden lakes, valleys, highlands and rich forests. This is a destination where you will be intrigued by history, awed by monuments, amazed by the landscape and charmed by down-to-earth locals. Few nations have histories as ancient, complex and laced with tragedy as Armenia. The simply extraordinary collection of medieval monasteries scattered across the country is the number-one attraction, closely followed by a dramatically beautiful landscape that is perfectly suited to hiking and other outdoor activities. And then there's the unexpected delight of Yerevan – one of Europe's most exuberant and endearing cities. Put together, they offer an enticing and hugely enjoyable travel experience.",
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
                    "description": "Experience sun kissed beaches of gold coast to the spiritual heart of the red centre. Australia is marine wildlife. Australia is iconic road trips. Australia is a wild and beautiful place, a land whose colour palette of red outback sands and Technicolor reefs frames sophisticated cities and soulful Indigenous stories. It follows that cities here are a lot of fun. Sydney is the glamorous poster child with world-class beaches and an otherwise glorious setting. Melbourne is all arts, alleyways and a stellar food scene. Brisbane is a subtropical town on the way up, Adelaide has festive grace and pubby poise. Boomtown Perth breathes West Coast optimism and Canberra showcases so many cultural treasures, while the tropical northern frontier town of Darwin, and the chilly southern sandstone city of Hobart, couldn't be more different.",
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
                    "description": "Arrive and revive!! Europe's meeting place, bridge-builder and venue for cultural exchange. No country waltzes so effortlessly between the urban and the outdoors as Austria. One day you’re cresting alpine summits, the next you’re swanning around imperial Vienna. Austria is famously beautiful. Austria is the stuff of fairy tales. Austria is majestic mountainscapes. The journey really is the destination in Austria. Perhaps yours will be a meandering one through deeply carved valleys, on railways that unzip the Alps to thread improbably along sheer mountain flanks, past glaciers and through flower-freckled meadows. Chances are, however, that such lyrical landscapes will have you itching to leap onto a bicycle saddle or lace up hiking boots to reach those enticingly off-the-radar corners of the country. In winter, the slopes hum with skiers and boarders, while summer beckons white-water rafters and canyoners to glacial rivers and lakes that sparkle like gemstones. Der Berg ruft – the mountain calls!",
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
                    "description": "East meets west in diverse Azerbaijan. ‘Feel the diversity’!! Breathtaking mountain scenery, Untouched nature, mineral springs!! Selling itself as the 'Land of Fire', Azerbaijan (Azərbaycan) is a tangle of contradictions and contrasts. Neither Europe nor Asia, it's a nexus of ancient historical empires, but also a ‘new’ nation rapidly transforming itself with a super-charged gust of petro-spending. Azerbaijan is thriving cosmopolitan cities. It is triumphant architecture. It is breathtaking landscapes.",
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
                    "description": "Happiness is a place! Bhutan is no ordinary place. It is the last great Himalayan kingdom, shrouded in mystery and magic, where a traditional Buddhist culture carefully embraces global developments. Bhutan holds many surprises. This is a country where the rice is red and where chillies aren't just a seasoning but the main dish. Yet while it visibly protects its Buddhist traditions, Bhutan is not a museum. You will find the Bhutanese well educated, fun loving and well informed about the world around them. It's this blending of the ancient and modern that makes Bhutan endlessly fascinating.",
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
                    "description": "One of the world's most captivating places, Brazil is a country of powdery white-sand beaches, verdant rainforests and wild, rhythm-filled metropolises. Brazil's attractions extend from frozen-in-time colonial towns to otherworldly landscapes of red-rock canyons, thundering waterfalls and coral-fringed tropical islands. Then there's Brazil's biodiversity: legendary in scope, its diverse ecosystems boast the greatest collection of plant and animal species found anywhere on earth. There are countless places where you can spot iconic species in Brazil, including toucans, scarlet macaws, howler monkeys, capybara, pink dolphins, sea turtles and thousands of other living species.",
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
                    "description": " A discovery to share! Famous for wines and spirits!! Boasts sublime beaches, lovely churches, winter sport opportunities and great hiking. A Country in the balkans. Soul-stirring mountains rival golden beaches, while cities hum with nightlife and art. Within Bulgaria’s beguiling blend of nature and history, unforgettable adventures are guaranteed. Bulgaria is laid- back town havens. It is hike in misty mountains. It is history captured in stone. ",
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
                    "description": "Keep exploring!! Canada is more than its hulking-mountain, craggy-coast good looks: it also cooks extraordinary meals, rocks cool culture and unfurls wild, moose-spotting road trips. Canada is a trip of a lifetime. Canada is evening walks along the harbor. Canada is glory of nature. The globe's second-biggest country has an endless variety of landscapes. Sky-high mountains, glinting glaciers, spectral rainforests and remote beaches are all here, spread across six times zones. It's the backdrop for plenty of ah-inspiring moments – and for a big cast of local characters. That's big as in polar bears, grizzly bears, whales and, everyone's favorite, moose. The terrain also makes for a fantastic playground.                    ",
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
                    "description": "All are welcome! From the far north and the altiplano to the far south of chile, someone is always waiting to receive you with open arms. A place where you will feel at peace. Chile is nature on a colossal scale, but travel here is surprisingly easy if you don't rush it. Preposterously thin and unreasonably long, Chile stretches from the belly of South America to its foot, reaching from the driest desert on earth to vast southern glacial fields. Diverse landscapes unfurl over a 4300 km stretch: parched dunes, fertile valleys, volcanoes, ancient forests, massive glaciers and fjords. There's wonder in every detail and nature on a symphonic scale. For the traveler, it's boggling how so much has stayed intact for so long.",
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
                    "description": "Full of life!! If your Mediterranean fantasies feature balmy days by sapphire waters in the shade of ancient walled towns, Croatia is the place to turn them into reality. Croatia is glittering waters. Croatia's extraordinary island-speckled coastline is indisputably its main attraction. The first thing that strikes you is the clarity of the water. When it's set against a dazzling white pebbly beach, it sparkles with a jewel-like intensity in shades of emerald and sapphire. There are long sandy and shingly stretches too – perfect for lazy days spent lounging and devouring trashy holiday novels. If that all sounds too relaxing, there are myriad water-based activities at hand to lure you off your sun-lounger – snorkelling, diving, kayaking, windsurfing and sailing, just for starters.",
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
                    "description": "Whether you are looking for adventure on the high seas in the Caribbean, or a culture-enriching experience through Europe, a cruise vacation offers something for everyone. From couples to families to friends to groups, cruising allows every member of your party to choose their favorite combination of activities, entertainment and relaxation. Unpack just once and then relax, unwind, and enjoy the onboard activities and the variety of new destinations. Visit exciting ports of call and awake to a new location each day. Or enjoy a day at sea on the wide-open ocean. On larger cruise ships, there are countless onboard activities, with fantastic options for entertainment, education, action and pampering. Cruising with friends or family is a great way to have both social and alone time, as there is a variety of things to do both on board the ship and in port.",
                    "content": "A glimpse of the popular places to visit in Cruise Vacations"
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
                    "description": " Land of stories!! Everyone who visits the Czech Republic starts with Prague, the cradle of Czech culture and one of Europe’s most fascinating cities. Where Beer Is God! But the city is not just about history; it’s a vital urban centre with a rich array of cultural offerings, and a newly emerging foodie scene. Everywhere you look there seems to be a many-turreted fortress perched above a town, or a romantic summer palace lazing peacefully amid manicured parkland. The number and variety of Czech castles is simply awe-inspiring – everything from grim Gothic ruins clinging to a dizzy pinnacle of rock, to majestic, baroque mansions filled with the finest furniture that Europe’s artisans could provide.",
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
                    "description": "Chart-topping contentment and quality of life, blockbuster dining and design, and a cheerful emphasis on hygge (cosiness) – explore (and envy) what makes Denmark tick. It’s heart-warming to know there’s still a country where the term ‘fairy tale’ can be used freely – from its most enduring literary legacy to its textbook castles. In a nutshell, Denmark gets it right: old-fashioned charm embraces the most avowedly forward-looking design and social developments. The country wins a regular place on lists of both the most liveable and the happiest nations on earth. You won’t have to search hard to find much-prized hygge, a uniquely Danish trait that has a profound influence on the locals’ inestimable happiness. Hygge is social nirvana in Denmark: a sense of cosiness, camaraderie and contentment.",
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
                    "description": "Estonia is where secrets are uncovered. Estonia doesn’t have to struggle to find a point of difference: it’s completely unique. It shares a similar geography and history with Latvia and Lithuania, but culturally it’s distinct. Its closest ethnic and linguistic buddy is Finland, and although they may love to get naked together in the sauna, 50 years of Soviet rule in Estonia have separated the two. For the last 300 years Estonia’s been linked to Russia, but the two states have as much in common as a barn swallow and a bear (their respective national symbols). Europe has fallen head-over-heels for the charms of Tallinn and its Unesco-protected Old Town. Put simply, Tallinn is now one of the continent’s most captivating cities. And in overcrowded Europe, Estonia’s sparsely populated countryside and extensive swathes of forest provide spiritual sustenance for nature-lovers.",
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
                    "description": "Fiji is exploring under the sea. Fiji is living on island time. Fiji is palm tree framed ocean views. Set your internal clock to ‘Fiji time’: exploring the archipelago’s exquisite beaches, undersea marvels, lush interiors and fascinating culture shouldn’t be rushed. Dazzling sands, perfect palm trees and waters so blue they glow – Fiji’s beaches look airbrushed. While stunning stretches abound, it’s on the islands of the Mamanucas and Yasawas that you’ll find heavenly heavyweights. These beaches are the poster-child for paradise, luring thousands of visitors keen to discover their own South Sea idyll. The appeal of the islands stretches beyond holiday snaps; the reefs, bays and sublime sands have provided cinematic eye candy to films including Cast Away with Tom Hanks and 1980 teen-dream classic The Blue Lagoon.",
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
                    "description": "Inspired design, technology and epicurean scenes meet epic stretches of wilderness here in Europe's deep north, where summer's endless light balances winter’s eerie frozen magic. The Finland you encounter will depend on the season of your visit, but whatever the month, there’s something pure in the Finnish air and spirit that’s vital and exciting. With towering forests speckled by picture-perfect lakes, as if an artist had flicked a blue-dipped paintbrush at the map, Suomi offers some of Europe’s best hiking, kayaking and canoeing. A fabulous network of national parks has well-marked routes and regularly spaced huts for overnighting, and you can observe bears and elk deep in the forests on nature-watching trips.",
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
                    "description": "France seduces travellers with its unfalteringly familiar culture, woven around cafe terraces, village-square markets and lace-curtained bistros with their plat du jour chalked on the board. France is about world-class art and architecture. It seduces with iconic landmarks known the world over and rising stars yet to be discovered. This country's cultural repertoire is staggering – in volume and diversity. And this is where the beauty of la belle France lies: when superstars such as Mademoiselle Eiffel, royal Versailles and the celebrity-ridden French Riviera have been ticked off, there’s ample more to thrill. France is, after all, the world's top destination with some 85 million visitors each year who flock to the land of the Gauls to feast on its extraordinary wealth of museums, galleries, ateliers (artist workshops) and hands-on cultural experiences.",
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
                    "description": "From its green valleys spread with vineyards to its old churches and watchtowers perched in fantastic mountain scenery, Georgia is one of the most beautiful countries on earth and a marvellous canvas for walkers, horse riders, cyclists, skiers, rafters and travellers of every kind. Equally special are its proud, high-spirited, cultured people: Georgia claims to be the birthplace of wine, and this is a place where guests are considered blessings and hospitality is the very stuff of life.",
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
                    "description": "Prepare for a roller coaster of feasts, treats and temptations as you take in Germany's soul-stirring scenery, spirit-lifting culture, big-city beauties, romantic palaces and half-timbered towns.There's something undeniably artistic in the way Germany's scenery unfolds – the corrugated, dune-fringed coasts of the north; the moody forests, romantic river valleys and vast vineyards of the centre, and the off-the-charts splendour of the Alps, carved into rugged glory by glaciers and the elements. All are integral parts of a magical natural matrix that's bound to give your camera batteries a workout. Get off the highway and into the great outdoors to soak up the epic landscapes that makes each delicious, slow, winding mile so precious.",
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
                    "description": " Ancient sun-bleached ruins pierce blue skies as the Aegean laps at the endless coastline. And Greek culture is alive with passionate music, inspired cuisine and thrill-seeking activities. Greece is romantic islands sunsets!! Standing in the shadow of the Acropolis feels other-worldly. Greece is full of such moments. Step into the ring where Olympians first competed. Climb steps hewn out of stone to Meteora’s monasteries, perched atop towering rocks. Contemplate the oracle’s insights from the grandeur of Delphi, take in a starlit drama at an ancient outdoor theatre and be stunned by massive marble sculptures dredged up from the Aegean. But then you’ll encounter bold modern art, the melancholic throb of rembetika (blues songs) and artisans creating new work from traditional techniques. Greece has endless cultural pursuits and a calendar bursting with festivals, holidays and exhibits.",
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
                    "description": "Hong Kong welcomes with an iconic skyline, a legendary kitchen, and lush, protected nature where rare birds and colourful traditions thrive. Hong Kong's enchanting neighbourhoods and islands offer a sensory feast. You may find yourself swaying along on a historic double-decker tram, cheering with the hordes at the city-centre horse races, or simply gazing out at the glorious harbour. Over 70% of Hong Kong is mountains and sprawling country parks, some also home to geological and historical gems. Escape the city limits on one of the world’s smoothest transport systems and spend your day wandering in a Song-dynasty village, hiking on a deserted island or kayaking among volcanic sea arches.",
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
                    "description": "Stunning architecture, vital folk art, thermal spas and Europe's most exciting capital after dark are Hungary's major drawing cards. Hungary’s scenery is more gentle than striking. Architecturally Hungary is a treasure trove, with everything from Roman ruins and medieval townhouses to baroque churches, neoclassical public buildings and art nouveau bathhouses and schools. And we're not just talking about its capital, Budapest. Walk through Szeged or Kecskemét, Debrecen or Sopron and you’ll discover an architectural gem at virtually every turn. Indeed, some people go out of their way for another glimpse of their favourites, such as the Reök Palace in Szeged or the Mosque Church in Pécs.",
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
                    "description": "Hitting headlines, topping bucket lists, wooing nature lovers and dazzling increasing numbers of visitors – there seems no end to the talents of this breathtaking northern destination. An underpopulated island marooned near the top of the globe, Iceland is, literally, a country in the making. It's a vast volcanic laboratory where mighty forces shape the earth: geysers gush, mudpots gloop, ice-covered volcanoes rumble and glaciers cut great pathways through the mountains. Its supercharged splendour seems designed to remind visitors of their utter insignificance in the greater scheme of things. And it works a treat: some crisp clean air, an eyeful of the cinematic landscapes, and everyone is transfixed.",
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
                    "description": " Indonesia's numbers astound: more than 17,000 islands, of which 8000 are inhabited, and over 300 languages spoken across them. It's a beguiling country offering myriad adventures. It’s a Land of fire!! The world’s fourth most populous country is a sultry kaleidoscope draped along the equator for 5000 km. From Sumatra's western tip to Papua's eastern edge, Indonesia defies homogenisation. It's a land of so many cultures, peoples, animals, customs, plants, sights, artworks and foods that it's like 100 countries melded into one. The people are as radically different from each other as if they came from different continents, with every island a unique blend of the people who live there. Over time, deep and rich cultures have evolved, from the mysteries of the spiritual Balinese to the utterly non-Western belief system of the Asmat people of Papua.",
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
                    "description": "Few places on earth stir up passion the way that Israel does: the breathtaking beauty of its hills and valleys, the eerie stillness of the Dead Sea, the multi-coloured canyon of Makhtesh Ramon, and the ancient walls and pathways of Nazareth and Jerusalem. The call of the muezzin and the quiet prayers of Orthodox Jews at the Western Wall reflect how the religious devotion of the Muslims, Christians and Jews who live here runs through every facet of life. As, of course, does the political – and visitors will rarely leave without encountering the country’s complex politics. But there are also plenty of ways to relax: the bars and beaches of Tel Aviv and Haifa, the wineries of the Galilee and tables loaded with mezze. For the curious visitor, Israel never fails to challenge and confound, excite and surprise, leaving an imprint that lingers long after the return flight home.",
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
                    "description": "Home to many of the world's greatest works of art, architecture and gastronomy, Italy elates, inspires and moves like no other. Italy has more Unesco World Heritage cultural sites than any other country on Earth. Should you walk in the footsteps of ancient Romans in Pompeii, revel in Ravenna's glittering Byzantine treasures or get breathless over Giotto's revolutionary frescoes in Padua? It's a cultural conundrum as thrilling as it is overwhelming. In few places do art and life intermingle so effortlessly. This may be the land of Dante, Titian and Verdi, but it's also the home of Prada, Massimo Bottura and Renzo Piano. Beauty, style and flair furnish every aspect of daily life, from those immaculately knotted ties and seamless espressos to the flirtatious smiles of striking strangers. The root of Italian psychology is a dedication to living life well, and effortless as it may seem, driving that dedication is a reverence for the finer things. So slow down, style up and indulge in a little vita all'italiana (life, Italian style).",
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
                    "description": "Jamaica is the Caribbean country that comes with its own soundtrack. Groove to its singular rhythm as you explore beyond the beaches and all-inclusives. Even in a region as crammed with jewels as the Caribbean, Jamaica is a powerfully beautiful island. Jamaica begins with crystalline waters flowing over gardens of coral, lapping onto soft sandy beaches, then rises past red soil and lush banana groves into sheer mountains. Rushing waterfalls seem to erupt out of nowhere. Jamaican culture can be a daunting subject for foreigners to understand, but ultimately it’s a matter of appreciating this great green garden of a land and how its cyclical rhythms set the pace of so much island life.",
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
                    "description": "Japan is truly timeless, a place where ancient traditions are fused with modern life as if it were the most natural thing in the world. It is a walk in mysterious places!! Japan is a long and slender, highly volcanic archipelago. It's over two-thirds mountains, with bubbling hot springs at every turn. In the warmer months there is excellent hiking, through cedar groves and fields of wildflowers, up to soaring peaks and ancient shrines (the latter founded by wandering ascetics). In the winter, all this is covered with snow and the skiing is world class. (And if you've never paired hiking or skiing with soaking in onsen, you don't know what you've been missing.) Meanwhile in the southern reaches, there are tropical beaches for sunning, snorkeling, diving and surfing.",
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
                    "description": "A safe haven in a region of conflict, Jordan has delighted visitors for centuries with its World Heritage sites, friendly towns and inspiring desert landscapes. Petra, the ancient Nabataean city locked in the heart of Jordan’s sandstone escarpments, is the jewel in the crown of the country’s many antiquities. Take a ride through Wadi Rum at sunset, and it's easy to see why TE Lawrence (Lawrence of Arabia) was so drawn to this land of weathered sandstone and reddened dunes. But Jordan's desert landscapes are not confined to the southeast: they encompass a salt sea at the lowest point on earth, canyons flowing with seasonal water, oases of palm trees and explosions of springtime flowers scattered across arid hills. Minimal planning and only a modest budget is required for an adventure.",
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
                    "description": "Vast savannahs peppered with immense herds of wildlife. Snow-capped mountains on the equator. Traditional peoples who bring soul and colour to the earth. Welcome to Kenya. When you think of Africa, you’re probably thinking of Kenya. It’s the lone acacia silhouetted on the savannah against a horizon stretching into eternity. It’s the snow-capped mountain almost on the equator and within sight of harsh deserts. It’s the lush, palm-fringed coastline of the Indian Ocean, it’s the Great Rift Valley that once threatened to tear the continent asunder, and it’s the dense forests reminiscent of the continent’s heart. In short, Kenya is a country of epic landforms that stir our deepest longings for this very special continent.",
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
                    "description": "Split by a fearsome border, the Korean Peninsula offers the traveller a dazzling range of experiences, beautiful landscapes and 5000 years of culture and history. Korea might be known as the Land of the Morning Calm, but dive into its capital Seoul, the powerhouse of Asia’s third-largest economy, and serenity is the last thing you’ll feel. This round-the-clock city is constantly on the move, with its work-hard, play-hard population the epitome of the nation’s indefatigable, can-do spirit. You can hardly turn a corner without stumbling across a tourist information booth, a subway station or a taxi in this multifaceted metropolis where meticulously reconstructed palaces rub shoulders with teeming night markets and the latest technological marvel.",
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
                    "description": "A tapestry of sea, lakes and woods, Latvia is best described as a vast unspoilt parkland with just one real city – its cosmopolitan capital, Rīga. The country might be small, but the amount of personal space it provides is enormous. You can always secure a chunk of pristine nature all for yourself, be it for trekking, cycling or dreaming away on a white-sand beach amid pine-covered dunes. Having been invaded by every regional power, Latvia has more cultural layers and a less homogenous population than its neighbours. People here fancy themselves to be the least pragmatic and the most artistic of the Baltic lot. They prove the point with myriad festivals and a merry, devil-may-care attitude – well, a subdued Nordic version of it.",
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
                    "description": "A land of wood and water, proud, independent Lithuania (Lietuva) is fast being recognised as one of Europe's gems. Southernmost of the Baltic states, it's a pocket-sized republic that's a nature-lover's delight, yet lacks nothing in urban excitement. Lithuania's foremost attraction is its stunning Baltic coastline, especially the unique sliver of white sand known as Curonian Spit. Lonely coastal wetlands lure migrating birds by the tens of thousands while inland, lush forests watch over burnished lakes. The capital, Vilnius, is a beguiling artists’ enclave, its timeworn courtyards, cobbled streets and baroque churches animated by the vibrant, optimistic culture of today.",
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
                    "description": "Best known globally as the 'Vegas of China', the Macau Special Administrative Region is indeed a mecca of gambling and glitz. But the city is so much more than that. A Portuguese colony for more than 300 years, it is a city of blended cultures. Ancient Chinese temples sit on streets paved with traditional Portuguese tiles. The Macau Peninsula holds the old city centre, where colonial ruins sit next to arty new boutiques. Further south are the conjoined islands of Taipa, Cotai and Coloane. Taipa has gloriously preserved Macanese architecture, Cotai is home to the new mega casinos and Coloane is lined with colonial villages and pretty beaches.",
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
                    "description": "Malaysia is like two countries in one, cleaved in half by the South China Sea. While peninsula flaunts bustling cities, colonial architecture, misty tea plantations and chill-out islands, Malaysian Borneo hosts wild jungles of orangutans, granite peaks and remote tribes, along with some pretty spectacular diving.Throughout these two regions is an impressive variety of microcosms ranging from the space-age high-rises of Kuala Lumpur to the traditional longhouse villages of Sarawak. If there was one thing that unites all its pockets of ethnicities, religions and landscapes, it’s food. Between the Chinese-Malay ‘Nonya’ fare, Indian curries, Chinese buﬀets, Malay food stalls and Dayak specialties, with some impressive Western-style food thrown in for good measure, travellers will never go hungry here.",
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
                    "description": "Unrivalled luxury, stunning white-sand beaches and an amazing underwater world make the Maldives an obvious choice for a true holiday of a lifetime. The Maldives is home to perhaps the best beaches in the world; they’re on almost every one of the country’s nearly 1200 islands and are so consistently perfect that it’s hard not to become blasé about them. While some beaches may boast softer granules than others, the basic fact remains: you’ll find consistently whiter-than-white powder sand and luminous cyan-blue water like this almost nowhere else on earth. This fact alone is enough to bring over a million people a year to this tiny, remote and otherwise little-known Indian Ocean paradise.",
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
                    "description": "Malta packs glorious variety into its small archipelago. You'll find prehistoric temples, fossil-studded cliffs, hidden coves, thrilling scuba diving and a history of remarkable intensity. Malta's landscape contrasts rocky stretches of coast that end in dizzying limestone cliffs with sheltered bays that hide gin-clear water and red-gold beaches. The islands' many marinas jostle with boats, and you can take to the water in sky-blue traditional craft, stately yachts or speedboats. Snorkelers and divers have much to explore underwater as well, a world of caves, crags and wrecks.",
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
                    "description": "Mark Twain once wrote, 'Mauritius was made first and then heaven, heaven being copied after Mauritius'. He was right. Mauritius is rightly famed for its sapphire-blue waters, powder-white beaches and, yes, luxury resorts that provide a front-row seat onto some of the most beautiful views in the Indian Ocean. These are places of the utmost refinement, of impeccable service, of facilities that range from pampering spas, designer rooms and extensive watersports options to dreamy swimming pools, expansive palm-strewn grounds and world-class restaurants. Your stay will live long in the memory and will have you dreaming of a return. Partly that’s because of the supreme levels of comfort and luxury. But it’s also thanks to the resort's’ discretion and warmth, and the unmistakable sense of being treated like royalty.",
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
                    "description": "Palm-fringed beaches, chili-spiced cuisine; steamy jungles, teeming cities; fiesta fireworks, Frida’s angst: Mexico conjures up diverse, vivid dreams. And the reality lives up to the imagining. With steaming jungles, smoking, snowcapped volcanoes, cactus-strewn deserts and 10,000km of coast strung with sandy beaches and wildlife-rich lagoons, Mexico is an endless adventure for the senses and a place where life is lived largely in the open air. Take it easy dining al fresco beside a Pacific beach or strolling Guanajuato's colonial streets. Or get out and hike Oaxaca's mountain cloud forests or snorkel warm Caribbean reefs.",
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
                    "description": "Monaco is glamour by the sea!! Monaco is living the good life!! A magnet for high-rollers and hedonists since the early 20th century, it's also one of the world's most notorious tax havens (residents pay no income tax). It's also famous for its annual Formula 1 Grand Prix, held every year in May since 1929. Despite its prodigious wealth, Monaco itself is a long way from the prettiest town on the French Riviera: it's basically an ode to concrete and glass, dominated by high-rise hotels and apartment blocks that rise into the hills like ranks of dominos, not to mention an utterly bewildering street layout that seems solely designed to confound lowly pedestrians.",
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
                    "description": "During any season, at any hour of the day, Moscow thrills visitors with its artistry, history and majesty. Moscow is illuminating reflections!! At nearly every turn in Moscow, you'll see golden domes peeking out over the rooftops and hear church bells peeling through the streets, which are dotted with some 600 churches – many of which are glittering after recent renovations. There are colourful hidden gems, historic fortresses and gargantuan cathedrals. The exteriors are adorned with stone carvings and glittering domes; interiors are packed with ancient icons, swirling incense and faithful worshippers. For more than a millennium, Orthodoxy has helped to define the Russian nation, a significance that is palpable in these atmospheric spiritual places.",
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
                    "description": "Tradition and innovation intertwine here: artistic masterpieces, windmills, tulips and candlelit cafés coexist with groundbreaking architecture, cutting-edge design and phenomenal nightlife. The Dutch influence on construction spans more than a millennia, from Romanesque and Gothic medieval magnum opuses to Dutch Renaissance creations, revolutionary, Golden Age gabled houses and engineering endeavours including canals, neoclassicism, Berlage and the Amsterdam School, Functionalism, modernism, structuralism, neorationalism, postmodernism and neomodernism, with trailblazing structures making their mark on the cityscapes. The flat, fabulously scenic landscapes make cycling in the Netherlands a pleasure. When the Dutch say café they mean a pub, and there are thousands of them. In a country that values socialising and conversation more than drinking, cafés are places for contemplation and camaraderie. Many cafés have outdoor terraces, which are glorious in summer and sometimes covered and heated in winter. ",
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
                    "description": "As the planet heats up environmentally and politically, it’s good to know that New Zealand exists. This uncrowded, green, peaceful and accepting country is the ultimate escape. There are just 4.6 million New Zealanders, scattered across 268,021 sq km: bigger than the UK with one-fourteenth the population. Filling in the gaps are the sublime forests, mountains, lakes, beaches and fiords that have made NZ one of the best hiking (locals call it 'tramping') destinations on earth. Tackle one of nine epic 'Great Walks' – you've probably heard of the Heaphy and Milford Tracks – or just spend a few hours wandering along a beach, paddling a canoe or mountain biking through some easily accessible wilderness. ",
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
                    "description": "Norway is a once-in-a-lifetime destination and the essence of its appeal is remarkably simple: this is one of the most beautiful countries on earth. Impossibly steep-sided Norwegian fjords of extraordinary beauty cut gashes from a jagged coastline deep into the interior. Glaciers, grand and glorious, snake down from icefields that rank among Europe's largest. Elsewhere, the mountainous terrain of Norway's interior resembles the ramparts of so many natural fortresses, and yields to rocky coastal islands that rise improbably from the waters like apparitions. Then, of course, there's the primeval appeal, the spare and staggering beauty of the Arctic. And wherever you find yourself in this most extraordinary country, these landscapes serve as backdrop for some of Europe's prettiest villages.",
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
                    "description": "Peru is as complex as its most intricate and exquisite weavings. Festivals mark ancient rites, the urban vanguard beams innovation and nature brims with splendid diversity. Visitors pilgrimage to the glorious Inca citadel of Machu Picchu, yet this feted site is just a flash in a 5000-year history of peoples. Explore the dusted remnants of Chan Chan, the largest pre-Columbian ruins in all the Americas. Fly over the puzzling geoglyphs etched into the arid earth at Nazca. Or venture into the rugged wilds that hem the stalwart fortress of Kuelap. Lima’s great museums reveal in full detail the sophistication, skill and passion of these lost civilizations. Visit remote communities and see how old ways live on. Immerse yourself, and you will leave Peru a little closer to the past.",
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
                    "description": "The Philippines is defined by its emerald rice fields, teeming mega-cities, graffiti-splashed jeepneys, smouldering volcanoes, bug-eyed tarsiers, fuzzy water buffalo and smiling, happy-go-lucky people. The Philippines is justifiably famous for its beaches, but sporty types need not feel left out. While surfers are just catching on to the tasty (if fickle) waves that form on both coasts, divers have long been enamoured of the country’s underwater charms. Northern Palawan is perfect for sea kayakers, and Boracay and Pagudpud (North Luzon) are world-class kiteboarding destinations. Back on terra firma, trekking can be done just about anywhere, while mountain-bike and canyoneering tours are gaining popularity. And the Philippines is also, unofficially, the zipline capital of the world.",
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
                    "description": "Chic medieval hot spots like Kraków and Gdańsk vie with energetic Warsaw for your urban attention. Outside the cities, woods, rivers, lakes and hills beckon for some fresh-air fun. Fabulous medieval castles and evocative ruins dot hilltops around the country, and the fantastic red-brick fortresses of the Teutonic Knights stand proudly in the north along the Vistula. Simple but finely crafted wooden churches hide amid the Carpathian hills, and the ample skills of the highlanders are on display at the many skansens (open-air ethnographic museums).",
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
                    "description": "Medieval castles, cobblestone villages, captivating cities and golden beaches: the Portugal experience can be many things. History, great food and idyllic scenery are just the beginning…Outside the cities, Portugal’s beauty unfolds in all its startling variety. You can go hiking amid the granite peaks of Parque Nacional da Peneda-Gerês or take in the pristine scenery and historic villages of the little-explored Beiras. Over 800 km of coast offers more places to soak up the splendour. Gaze out over dramatic end-of-the-world cliffs, surf stellar breaks off dune-covered beaches or laze peacefully on sandy islands fronting calm blue seas. You’ll find dolphin watching in the lush Sado Estuary, boating and kayaking along the meandering Rio Guadiana, and memorable walks and bike rides all across the country.",
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
                    "description": "Scented by slow-roasted pork and sea breezes, and colored by swashbuckling history, this sun-washed medley of Spanish and American influences is a paradise-seeker's pleasure dome. The island's culture is of the visceral kind. You'll need to search for it beyond the condo towers and congested roads, and sometimes it seems Puerto Rico does not wish to show outsiders its cultural magnitude. Then, suddenly, you'll smell it in the smoke arising from lechoneras (eateries specializing in suckling pig), or hear it in the intoxicating patterns of salsa beats. You'll glimpse it as sunlight sparkles across coffee plantations, or in museums celebrating everything from failed revolution to classical European painting. Puerto Rican traditions have been shaped by generations of cultural synthesis, celebration and setback, and it emerges today as vivid and indomitable.",
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
                    "description": "Explore the great rivers for Europe : Danube River Cruises, Rhine River Cruises, Main River Cruises, Moselle River Cruises,Rhône River Cruises, Seine River Cruises !! When you step onto Avalon European river cruises, your breath will be taken away by the magic that separates you from everyday life on dry land. You'll glide past imposing medieval castles, lush riverbank vineyards, and remarkable ancient wonders on your European river cruise. Every gentle bend of the river reveals another fascinating sight as your luxurious river cruise ship winds its way through scenic landscapes, delivering you right to where many of Europe's most celebrated cities were born.",
                    "content": "A glimpse of the popular places to visit during River Cruises"
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
                    "description": "Rwanda is known as Le Pays des Mille Collines (Land of a Thousand Hills) thanks to the endless mountains in this scenically stunning little country. Nowhere are the mountains more majestic than the Virunga volcanoes in the northwest, and hidden among the bamboo forests are some of the world's last remaining mountain gorillas. For a change of scene, the shores of Lake Kivu conceal some of the best inland beaches on the continent, while Nyungwe Forest National Park protects extensive tracts of montane rainforest, and is home to many primates. But it's not all monkey business – Kigali, the capital, is safe and sophisticated.",
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
                    "description": "Talcum-powder beaches lapped by topaz waters, lush hills, a sublime laid-back tempo; these dreams of a tropical paradise become reality in the Seychelles. Diving and snorkelling are the most popular activities in the Seychelles, and rightly so. Healthy reefs, canyon-like terrain, shallow shelves, exciting shipwrecks, impressive granite outcrops and splendid coral gardens give divers and snorkelers almost instant access to a variety of environments. The water is warm and clear, and teeming with life from the tiniest juvenile tropical to the largest pelagic creature, including whale sharks. Whether you're an experienced diver or slapping on fins for the first time, there are sites for all levels. And you'll be welcomed by qualified, multilingual instructors in state-of-the-art dive centres.",
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
                    "description": "Capitalising on its melting pot of cultures, Singapore is finally getting some spark, and is fast becoming one of Asia’s hit-list destinations. The concrete jungles that once dominated Singapore’s skyline are slowly giving way to green skyscrapers, which look more like living ecosystems than business hubs. Fervently working towards its ‘City in a Garden’ dream, the nation is ploughing money into becoming more sustainable and well, green. Head out of town a little and you’ll find plenty of walking trails, treetop jungle bridges, wildlife galore. Food in Singapore is taken very seriously. From cheap hawker fare to Michelin-starred fine dining, food-enamoured Singaporeans will line up for it, Instagram the hell out of it.",
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
                    "description": "Endless beaches, timeless ruins, welcoming people, oodles of elephants, rolling surf, cheap prices, fun trains, famous tea and flavourful food make Sri Lanka irresistible. When you’re ready to escape the tropical climate of the coast and lowlands, head for the hills, with their temperate, achingly green charms. Verdant tea plantations and rain forested peaks beckon walkers, trekkers and those who just want to see them from a spectacular train ride. And then there are the beaches. Dazzlingly white and often untrodden, they ring the island so that no matter where you go, you’ll be near a sandy gem. Should you beat the inevitable languor, you can surf and dive world-class sites without world-class crowds. And you're always just a short hop from something utterly new.",
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
                    "description": "Right in the heart of Europe, Slovakia is a land of castles and mountains, occasionally interrupted by concrete sprawl. Capital city Bratislava draws the most visitors, thanks to its excellent nightlife, resplendent old town and sheer ease of access from around Europe. Beyond Bratislava are countless gingerbread-style villages, a clear sign that modern Slovakia still reveres its folk traditions.",
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
                    "description": "An earthly paradise of snow-capped peaks, turquoise-green rivers and Venetian-style coastline, Slovenia enriches its natural treasures with harmonious architecture, charming rustic culture and sophisticated cuisine. From the soaring peaks of the Julian Alps and the subterranean magic of Postojna and Škocjan Caves, to sparkling emerald-green lakes and rivers and the short but sweet Adriatic coast, Slovenia has it all. An incredible mixture of climates brings warm Mediterranean breezes up to the foothills of the Alps, where it can snow even in summer. And with more than half of its total surface covered in forest, Slovenia really is one of the greenest countries in the world.",
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
                    "description": "Black-maned lions framed against Kalahari dunes; powdery beaches lapped by two oceans; star-studded desert skies; jagged, lush mountains – this truly is a country of astounding diversity. South Africa is one of the continent's best safari destinations, offering the Big Five (lion, leopard, buffalo, elephant and rhino) and more in accessible parks and reserves. You can drive right into the epic wilderness at Kruger, Kgalagadi and other parks, or join khaki-clad rangers on guided drives and walks. But it's not all about big game sightings – wildlife watching here also teaches you to enjoy the little things: a leopard tortoise ambling alongside the road, a go-away bird chirping its distinctive chant in the trees, or on the coast, an encounter with seals, whales or a great white shark.",
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
                    "description": "The sheer grandeur and history of Russia's imperial capital never fail to amaze, but this is also a city with a revolutionary spirit. Whether you’re cruising along the elegant canals, crossing one of the 342 bridges in the city, or just watching them being raised in summer over the mighty Neva River at night to allow ships to pass through, you’re never far from water in St Petersburg. This has earned the city unsurprising comparisons to Venice, but the similarities don’t stop there: walking around the historic centre will reveal canals lined by Italianate mansions and broken up by striking plazas adorned with baroque and neoclassical palaces. North of the city centre there are also pristine beaches fringing the Gulf of Finland.",
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
                    "description": "Frozen wastelands, cosy cottages, virgin forest, rocky islands, reindeer herders and Viking lore – Sweden has all that plus impeccable style and to-die-for dining. Truth be told, the best thing about Sweden is its natural beauty. To really appreciate this country’s charms, you have to leave the city behind. Whether that means sailing across an archipelago to visit a lonely island or trekking along a kingly trail through the northern wilderness just depends on your preferences – why not try both? Hiking, camping, cycling, skiing, skating, boating, fishing and foraging for mushrooms and berries are all major Swedish pastimes, and it’s easy to get in on the action from just about anywhere in the country.",
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
                    "description": "Look beyond the chocolate, cuckoo clocks and yodelling – contemporary Switzerland, land of four languages, is all about once-in-a-lifetime journeys, heart-racing Alpine pursuits and urban culture. Switzerland's ravishing landscapes demand immediate action – grab boots, leap on board, toot bike bell and let spirits rip. Skiing and snowboarding in Graubünden, Bernese Oberland and Central Switzerland are winter choices. When pastures turn green, hiking and biking trails abound in glacier-encrusted mountain areas and lower down along lost valleys, glittering lake shores and pea-green vineyards. View the grandeur from a hot-air balloon or parachute, or afloat a white-water raft. Then there's those must-do-before-death moments like encountering Eiger's chiselled north face up close or reaching crevassed ice on Jungfraujoch. Most extraordinary of all, you don’t need to be a mountaineer to do it.",
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
                    "description": "Wildlife, beaches, friendly people, fascinating cultures, Serengeti, Ngorongoro, Mt Kilimanjaro, Zanzibar Archipelago – Tanzania has all these and more wrapped up in one adventurous, welcoming package. More than almost any other destination, Tanzania is the land of safaris. Wildebeest stampede across the plains. Hippos jostle for space in muddy waterways. Elephants wander along seasonal migration routes and chimpanzees swing through the treetops. Throughout the country there are unparalleled opportunities to experience this natural wealth. Tanzania’s Indian Ocean coastline is magical, with tranquil islands and sleepy coastal villages steeped in centuries of Swahili culture. Relax on powdery beaches backed by palm trees and massive baobabs; take in magnificent, pastel-hued sunrises; immerse yourself in languid coastal rhythms; and sit beneath the billowing sails of a wooden dhow, listening to the creaking of its rigging and the gentle slap of the sea against its prow.",
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
                    "description": "Friendly and fun loving, exotic and tropical, cultured and historic, Thailand radiates a golden hue from its glittering temples and tropical beaches through to the ever-comforting Thai smile. In between the cluttered cities and towns is the rural heartland, which is a mix of rice paddies, tropical forests and squat villages tied to the agricultural clock. In the north, the forests and fields bump up against toothy blue mountains decorated with silvery waterfalls. With a long coastline (actually, two coastlines) and jungle-topped islands anchored in azure waters, Thailand is a tropical getaway for the hedonist and the hermit, the prince and the pauper. This paradise offers a varied menu: playing in the gentle surf of Ko Lipe, diving with whale sharks off Ko Tao, scaling the sea cliffs of Krabi, kiteboarding in Hua Hin, partying on Ko Phi Phi, recuperating at a health resort on Ko Samui and feasting on the beach wherever sand meets sea.",
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
                    "description": "For most people, the United Arab Emirates means just one place: Dubai, the sci-fi-esque city of iconic skyscrapers, palm-shaped islands, city-sized malls, indoor ski slopes and palatial beach resorts. But beyond the glitter awaits a diverse mosaic of six more emirates, each with its own character and allure. An hour's drive south, oil-rich Abu Dhabi, the UAE capital, is positioning itself as a hub of culture, sport and leisure. Beyond looms the vast Al Gharbia region, which is dominated by the northern reaches of the Rub' Al Khali desert. Its magical silence is interrupted only by the whisper of shifting dunes rolling towards Saudi Arabia.",
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
                    "description": "Made up of Great Britain and Northern Ireland, yet this historic country is packed with appeal for the visitor, from pulsing cities to stunning countryside. England, Scotland, Wales and Northern Ireland are fine destinations in their own right, and travels between these countries reveal both the shared culture and distinct local flavours that contribute to the UK. The United Kingdom is the world's 8th biggest tourist destination. The UK has been known for being one of the most beautiful and cultural countries in the world. Not only does its great architectural value attract tourists the warm English hospitality will keep you longing for more. The country's principal tourist destinations are in London, with the Tower of London being one of the most visited attraction in the country. The great monuments and lovely people along with versatile food are great reasons for you to avail your United Kingdom holiday packages today. ",
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
                    "description": "Bright Lights, Big Cities !! The great American experience is about so many things: bluegrass and beaches, snow-covered peaks and redwood forests, restaurant-loving cities and big open skies. America is the birthplace of LA, Las Vegas, Chicago, Miami, Boston and New York City – each a brimming metropolis whose name alone conjures a million different notions of culture, cuisine and entertainment. Those who enjoy life's finer details flock to Vegas to lap up the luxuries of the world's biggest and boldest high-end hotels. Look more closely, and the American quilt unfurls in all its surprising variety: the eclectic music scene of Austin, the easygoing charms of antebellum Savannah, the eco-consciousness of free-spirited Portland, the magnificent waterfront of San Francisco and the captivating French Quarter of jazz-loving New Orleans. Each city adds its unique style to the grand patchwork that is America. This is a country of road trips and great open skies, where four million miles of highways lead past red-rock deserts, below towering mountain peaks, and through fertile wheat fields that roll off toward the horizon.  It's easy to see why Hawaii has become synonymous with paradise. Just look at the sugary beaches, technicolor coral reefs and volcanoes beckoning adventurous spirits.",
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
                    "description": "Hands down it’s one of the safest, friendliest and most spectacular countries in Africa. A journey here will take you through an attractive patchwork of landscapes, from highveld, balancing boulders and flaming msasa trees, to laidback towns, lush mountains and lifeblood rivers up north. Here you can spot the Big Five in its national parks, discover World Heritage–listed archaeological sites and stand in awe of one of the natural wonders of the world, Victoria Falls. Along the way you’ll receive a friendly welcome from locals, famous for their politeness.",
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
            
        };
        $scope.closeModal = function () { // to close modals for ALL OTP
            $scope.galleryImage.close();
        };



    })

    .controller('ActivityCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $http) {
        $scope.template = TemplateService.getHTML("content/activity.html");
        TemplateService.title = "Activity"; // This is the Title of the Website
        $scope.navigation = NavigationService.getNavigation();
        $('#loader').show();
        setTimeout(function(){$('#loader').hide();}, 2000);
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
        $('#loader').show();
        setTimeout(function(){$('#loader').hide();}, 2000);
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