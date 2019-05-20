Fizzapp
        .controller('mainCtrl', function($scope, $http) {
            $scope.Test1 = {};
            $scope.Test1.name = "Helloo this is Test1";
            $scope.Test1.Mobile = 1234567890;

            $scope.Test2 = {};
            $scope.Test2.name = "Helloo this is Test2";
            $scope.Test2.Mobile = 0987654321;
            $http.get("js/data.json")
                    .then(function(resdata) {
                        $scope.num = resdata.data;
                        var list = document.getElementById("list");
                        var listItems = "";
                        var i;
                        for (i = 1; i < 61; i = i + 1) {
                            listItems += "<li>";
                            if ((i % 4 === 0) && (i % 7 === 0)) {
                                listItems += "fizzbuzz";
                            }
                            else if (i % 4 === 0) {
                                listItems += "fizz";
                            }
                            else if (i % 7 === 0) {
                                listItems += "buzz";
                            }
                            else {
                                listItems += i;
                            }
                            listItems += "</li>";
                        }
                        list.innerHTML += listItems;
                        console.log($scope.num);
                    });
        })
         