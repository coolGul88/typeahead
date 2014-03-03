/**
 * Created by GXH1146 on 2/26/14.
 */

function typeAheadCtrl($scope) {
    $scope.selectedDiet = [];
    $scope.diets = [
        {name: 'Low Fat'},
        {name: 'High Protein'},
        {name: 'High Fiber'}
    ];

    $scope.onchange = function () {
        var index = $scope.diets.indexOf($scope.selected[0]);
        $scope.selectedDiet.push($scope.selected[0]);
        $scope.diets.splice(index, 1);
    }

    $scope.removeDiet = function (diet) {
        var index = $scope.selectedDiet.indexOf(diet);
        $scope.selectedDiet.splice(index, 1);
        $scope.diets.push(diet);

    }
}


