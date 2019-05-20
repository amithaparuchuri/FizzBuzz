var Fizzapp = angular.module('Fizzapp', ['ui.router'])

        .config(function($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/home');
            $stateProvider
                    .state('home', {
                        url: '/home',
                        templateUrl: 'views/home.html'
                    })
        })
Fizzapp.directive('fizz', function() {
    var directive = {};
    directive.restrict = 'E';
    directive.template = "Fizz: <b>{{fizz.name}}</b> , Mobile Number: <b>{{fizz.Mobile}}</b>";
    directive.scope = {
        fizz: "=name"
    }
    directive.compile = function(element, attributes) {
        var linkFunction = function($scope, element, attributes) {
            element.html("Fizz: <b>" + $scope.fizz.name + "</b> , Mobile Number: <b>" + $scope.fizz.Mobile + "</b><br/>");
            element.css("background-color", "#ffbf00");
        }
        return linkFunction;
    }
    return directive;
});