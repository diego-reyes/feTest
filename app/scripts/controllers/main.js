define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc function
   * @name feAsigApp.controller:MainCtrl
   * @description
   * # MainCtrl
   * Controller of the feAsigApp
   */
  angular.module('feAsigApp.controllers.MainCtrl', [])
    .controller('MainCtrl', function ($scope,CustomerServices) {
	  $scope.maxResultsPerPage = 10;
	  $scope.page = 0;
	  $scope.pageCount = 0;
	  $scope.count = 11;
	  $scope.orderBy = '';
	  $scope.orderDirection = 'asc';
	  $scope.searchText = '';

	  
	  $scope.update = function (){
	    var params = {'$top':$scope.maxResultsPerPage,'$skip':($scope.page*$scope.maxResultsPerPage)};
		if ($scope.orderBy){
		  params.$orderby = $scope.orderBy + '\u0020' + $scope.orderDirection;
		} 
		if ($scope.searchText){
		  params.$filter = 'substringof(\''+$scope.searchText+'\',FirstName)\u0020or\u0020' +
		                   'substringof(\''+$scope.searchText+'\',LastName)\u0020or\u0020' +
						   'substringof(\''+$scope.searchText+'\',Address)\u0020or\u0020' +
						   'substringof(\''+$scope.searchText+'\',City)\u0020or\u0020' +
						   'substringof(\''+$scope.searchText+'\',EmailAddress)\u0020or\u0020' +
						   'substringof(\''+$scope.searchText+'\',PhoneNumber)\u0020or\u0020' +
						   'substringof(\''+$scope.searchText+'\',State)\u0020or\u0020' +
						   'substringof(\''+$scope.searchText+'\',ZipCode)';
		}
		$scope.customers = CustomerServices.get(params);
	    $scope.pageCount = Math.ceil($scope.count/$scope.maxResultsPerPage);
	  };
	  
	  $scope.classIfSelected = function (property){
	     if($scope.orderBy === property){
		   return $scope.orderDirection === 'asc' ? 'glyphicon glyphicon-triangle-top' : 'glyphicon glyphicon-triangle-bottom';
		 } else {
		   return '';
		 }
	  };
	  
	  $scope.changeOrder = function (property){
	    if($scope.orderBy === property){
		  if($scope.orderDirection === 'asc'){
		    $scope.orderDirection = 'desc';
	      } else {
		    $scope.orderDirection = 'asc';
		  }
		} else {
		  $scope.orderDirection = 'asc';
		}
		$scope.orderBy = property;
		return $scope.update();
	  };
	  
	  $scope.isFirstPage = function (){
	    return $scope.page < 1;
	  };
	  
	  $scope.isLastPage = function (){
	    return ($scope.page+1)*$scope.maxResultsPerPage >= $scope.count;
	  };
	  
	  $scope.previousPage = function (){
	    $scope.page--;
		return $scope.update();
	  };
	  
	  $scope.nextPage = function (){
	    $scope.page++;
		return $scope.update();
	  };
	  
	  $scope.update();
	  
    });
});
