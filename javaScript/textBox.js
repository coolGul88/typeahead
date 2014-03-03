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

        var selectedIndex = [];
        selectedIndex = $scope.selected;

        for (var counter = 0; counter < selectedIndex.length; ++counter) {
            var index = $scope.diets.indexOf(selectedIndex[counter]);
            $scope.selectedDiet.push(selectedIndex[counter]);
            $scope.diets.splice(index, 1)

        }
    }

    $scope.removeDiet = function (diet) {
        var index = $scope.selectedDiet.indexOf(diet);
        $scope.selectedDiet.splice(index, 1);
        $scope.diets.push(diet);

    }
}


