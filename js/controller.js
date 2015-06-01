var app = angular.module('myApp');

app.controller('mainController', function ($scope) {
	$scope.friends = ['Jordyn', 'Ryan', 'Chelsey'];


	$scope.addFriend = function () {
		if ($scope.newFriend) {
			$scope.friends.push($scope.newFriend);
			$scope.newFriend = '';
			$('#friend-input').focus();
		}
	}

	$scope.deleteFriend = function (friendToDelete) {
		index = $scope.friends.indexOf(friendToDelete);

		if (index > -1) {
			$scope.friends.splice(index, 1);
		}
	}
})