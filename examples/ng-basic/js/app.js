var app = angular.module('hGraph', []);

app.directive('hGraph', ['$http', function($http) {
    var opts = {
        container: null,
        userdata: {
            hoverevents : true,
            factors: null
        },
        showLabels : true
    };

    function loadGraph() {
        console.log(opts);        //TODO(gb): Remove trace!!!
        graph = new HGraph(opts);
        graph.width = 760;
        graph.height = 602;
        graph.initialize();
    }

    return {
        restrict: 'E',
        link: function(scope, element, attrs) {
            console.log('hGraph');        //TODO(gb): Remove trace!!!
            var metrics_url = attrs.metrics;

            $http.get(metrics_url).then(
                function(response) {
                    console.log('SUCCESS');        //TODO(gb): Remove trace!!!
                    opts.userdata.factors = response.data[0].metrics;
                    opts.container = element[0];
                    loadGraph();
                },
                function(response) {
                    console.log('ERROR');        //TODO(gb): Remove trace!!!
                    console.log(response);        //TODO(gb): Remove trace!!!
                }
            )
        }
    }
}]);

