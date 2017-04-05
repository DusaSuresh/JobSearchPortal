(function() {
  'use strict';

  angular
    .module('jobPortal')
    .controller('SearchresultController', SearchresultController);

 

  /** @ngInject */
  function SearchresultController($scope,SearchService,$http,$rootScope,$window) {
  
  var vm = this;
  $scope.currentPage = 1;
    $scope.pageSize = 10;

  activate();

   $scope.pageChangeHandler = function(pageNumber){
        
        $http.jsonp("http://api.indeed.com/ads/apisearch?", {params: {
                    "publisher": 5396176379454272,
                    "v": "2",
                    "format": "json",
                    "callback": "mysuccess",
                    "q": SearchService.getJobType(),
                    "l": SearchService.getState(),
                    "sort": "",
                    "radius": "",
                    "st": "",
                    "jt": SearchService.getCategory(),
                    "start": pageNumber,
                    "limit": "",
                    "fromage": "",
                    "highlight": "1",
                    "filter": "1",
                    "userip": "1.2.3.4"
                }});
    }

    $window.mysuccess = function(response){
    //vm.searchData = response;
    $rootScope.$broadcast('refreshData', response);
    }

     $scope.$on('refreshData', function(event, data){
        vm.searchData = data;
      });

  function activate() {
     vm.searchData = SearchService.getSearchData();
     }
  }
})();
