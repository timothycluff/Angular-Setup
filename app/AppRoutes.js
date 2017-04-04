/**
 * Created by tim.cluff on 4/4/2017.
 */

app.config(function($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: 'home.html',
            controller: HomeCtrl
        })
        .when('/item', {
            templateUrl: 'item.html',
            controller: ItemCtrl
        })
});