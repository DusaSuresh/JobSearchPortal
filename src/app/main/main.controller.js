(function() {
  'use strict';

  angular
    .module('jobPortal')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout,SearchService,$scope, $http, $window, $state, $document) {
     var vm = this;
     var publicInterface;

    // Fetching dropdown box data from serviceses. 
    vm.statecodes = SearchService.getStateCode();
    vm.jobCategories = SearchService.getJobCategory();
    vm.jobClasstypes = SearchService.getJobClasstype();

    //Google map

    $window.initMap = function() {
        var uluru = {lat: 42.407211, lng: -71.382439};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 10,
          center: uluru
        });
        setMarkers(map);
        var contentString = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
            '<div id="bodyContent">'+
            '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
            'rock caves and ancient paintings. Uluru is listed as a World '+
            'Heritage Site.</p>'+
            '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
            'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
            '(last visited June 22, 2009).</p>'+
            '</div>'+
            '</div>';

        var infowindow = new google.maps.InfoWindow({
          content: contentString
        });

        var marker = new google.maps.Marker({
          position: uluru,
          map: map,
          title: 'Uluru (Ayers Rock)'
        });
        marker.addListener('click', function() {
          infowindow.open(map, marker);
        });
      }

var beaches = [
        ['Boston city', 42.332221, -71.016432, 4],
        ['Brookline', 42.324269, -71.140803, 5],
        ['Framingham', 42.308536, -71.436754, 3],
        ['Malden city', 42.430474, -71.057637, 2],
        ['Waltham city', 42.38892, -71.242325, 1]
      ];


      function setMarkers(map) {
        // Adds markers to the map.

        // Marker sizes are expressed as a Size of X,Y where the origin of the image
        // (0,0) is located in the top left of the image.

        // Origins, anchor positions and coordinates of the marker increase in the X
        // direction to the right and in the Y direction down.
        var image = {
          url: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
          // This marker is 20 pixels wide by 32 pixels high.
          size: new google.maps.Size(20, 32),
          // The origin for this image is (0, 0).
          origin: new google.maps.Point(0, 0),
          // The anchor for this image is the base of the flagpole at (0, 32).
          anchor: new google.maps.Point(0, 32)
        };
        // Shapes define the clickable region of the icon. The type defines an HTML
        // <area> element 'poly' which traces out a polygon as a series of X,Y points.
        // The final coordinate closes the poly by connecting to the first coordinate.
        var shape = {
          coords: [1, 1, 1, 20, 18, 20, 18, 1],
          type: 'poly'
        };
        for (var i = 0; i < beaches.length; i++) {
          var beach = beaches[i];
          var marker = new google.maps.Marker({
            position: {lat: beach[1], lng: beach[2]},
            map: map,
            icon: image,
            shape: shape,
            title: beach[0],
            zIndex: beach[3]
          });
          
          marker.addListener('click', function() {
            var infowindow = new google.maps.InfoWindow({
          content: "suresh"
        });
          infowindow.open(map, marker);
        });
        }
      }
  // Displaying map on landing page using Datamap api and setting configuration of map
  /*var election = new Datamap({
  scope: 'usa',
  element: $document[0].querySelector('#container'),
  done: function(datamap) {
            datamap.svg.selectAll('.datamaps-subunit').on('click', function(geography) {
                jobClass(geography.id);
            });
        },
  geographyConfig: {
    highlightBorderColor: '#bada55',
   popupTemplate: function(geography, data) {
      return '<div class="hoverinfo">' + geography.properties.name + '--Jobs:' +  data.electoralVotes + ' '    },
    highlightBorderWidth: 3
  },

  fills: {
  'Republican': '#CC4731',
  'Democrat': '#306596',
  'Heavy Democrat': '#667FAF',
  'Light Democrat': '#A9C0DE',
  'Heavy Republican': '#CA5E5B',
  'Light Republican': '#EAA9A8',
  defaultFill: '#EDDC4E'
},
data:{
  "AZ": {
      "fillKey": "Republican",
      "electoralVotes": 5
  },
  "CO": {
      "fillKey": "Light Democrat",
      "electoralVotes": 5
  },
  "DE": {
      "fillKey": "Democrat",
      "electoralVotes": 32
  },
  "FL": {
      "fillKey": "UNDECIDED",
      "electoralVotes": 29
  },
  "GA": {
      "fillKey": "Republican",
      "electoralVotes": 32
  },
  "HI": {
      "fillKey": "Democrat",
      "electoralVotes": 32
  },
  "ID": {
      "fillKey": "Republican",
      "electoralVotes": 32
  },
  "IL": {
      "fillKey": "Democrat",
      "electoralVotes": 32
  },
  "IN": {
      "fillKey": "Republican",
      "electoralVotes": 11
  },
  "IA": {
      "fillKey": "Light Democrat",
      "electoralVotes": 11
  },
  "KS": {
      "fillKey": "Republican",
      "electoralVotes": 32
  },
  "KY": {
      "fillKey": "Republican",
      "electoralVotes": 32
  },
  "LA": {
      "fillKey": "Republican",
      "electoralVotes": 32
  },
  "MD": {
      "fillKey": "Democrat",
      "electoralVotes": 32
  },
  "ME": {
      "fillKey": "Democrat",
      "electoralVotes": 32
  },
  "MA": {
      "fillKey": "Democrat",
      "electoralVotes": 32
  },
  "MN": {
      "fillKey": "Democrat",
      "electoralVotes": 32
  },
  "MI": {
      "fillKey": "Democrat",
      "electoralVotes": 32
  },
  "MS": {
      "fillKey": "Republican",
      "electoralVotes": 32
  },
  "MO": {
      "fillKey": "Republican",
      "electoralVotes": 13
  },
  "MT": {
      "fillKey": "Republican",
      "electoralVotes": 32
  },
  "NC": {
      "fillKey": "Light Republican",
      "electoralVotes": 32
  },
  "NE": {
      "fillKey": "Republican",
      "electoralVotes": 32
  },
  "NV": {
      "fillKey": "Heavy Democrat",
      "electoralVotes": 32
  },
  "NH": {
      "fillKey": "Light Democrat",
      "electoralVotes": 32
  },
  "NJ": {
      "fillKey": "Democrat",
      "electoralVotes": 32
  },
  "NY": {
      "fillKey": "Democrat",
      "electoralVotes": 32
  },
  "ND": {
      "fillKey": "Republican",
      "electoralVotes": 32
  },
  "NM": {
      "fillKey": "Democrat",
      "electoralVotes": 32
  },
  "OH": {
      "fillKey": "UNDECIDED",
      "electoralVotes": 32
  },
  "OK": {
      "fillKey": "Republican",
      "electoralVotes": 32
  },
  "OR": {
      "fillKey": "Democrat",
      "electoralVotes": 32
  },
  "PA": {
      "fillKey": "Democrat",
      "electoralVotes": 32
  },
  "RI": {
      "fillKey": "Democrat",
      "electoralVotes": 32
  },
  "SC": {
      "fillKey": "Republican",
      "electoralVotes": 32
  },
  "SD": {
      "fillKey": "Republican",
      "electoralVotes": 32
  },
  "TN": {
      "fillKey": "Republican",
      "electoralVotes": 32
  },
  "TX": {
      "fillKey": "Republican",
      "electoralVotes": 32
  },
  "UT": {
      "fillKey": "Republican",
      "electoralVotes": 32
  },
  "WI": {
      "fillKey": "Democrat",
      "electoralVotes": 32
  },
  "VA": {
      "fillKey": "Light Democrat",
      "electoralVotes": 32
  },
  "VT": {
      "fillKey": "Democrat",
      "electoralVotes": 32
  },
  "WA": {
      "fillKey": "Democrat",
      "electoralVotes": 32
  },
  "WV": {
      "fillKey": "Republican",
      "electoralVotes": 32
  },
  "WY": {
      "fillKey": "Republican",
      "electoralVotes": 32
  },
  "CA": {
      "fillKey": "Democrat",
      "electoralVotes": 32
  },
  "CT": {
      "fillKey": "Democrat",
      "electoralVotes": 32
  },
  "AK": {
      "fillKey": "Republican",
      "electoralVotes": 32
  },
  "AR": {
      "fillKey": "Republican",
      "electoralVotes": 32
  },
  "AL": {
      "fillKey": "Republican",
      "electoralVotes": 32
  }
}
});
election.labels();
  */        
    activate();


  // This method will be called on click of any "GO" button in landing page
  // In this method "Indeed" api called to get the search related data.
    function jobClass(state,category,jobType){
      
    SearchService.setState(state);
    SearchService.setCategory(category);
    SearchService.setJobType(jobType);
    $http.jsonp("http://api.indeed.com/ads/apisearch?", {params: {
                    "publisher": 5396176379454272,
                    "v": "2",
                    "format": "json",
                    "callback": "mysuccess",
                    "q": jobType,
                    "l": state,
                    "sort": "",
                    "radius": "",
                    "st": "",
                    "jt": category,
                    "start": "1",
                    "limit": "",
                    "fromage": "",
                    "highlight": "1",
                    "filter": "1",
                    "userip": "1.2.3.4"
                }});
  }

  // Callback method of above called service and response will be stored in service.
  $window.mysuccess = function(response){
    SearchService.setSearchData(response);
    $state.go('searchresult');
  }

    function activate() {
     
    }

     publicInterface = {
        jobClass: jobClass
      };
      angular.extend($scope, publicInterface);
  }
})();
