(function() {

    "use strict";

    angular
        .module("alumni")
        // Inject necessary modules here
        .controller("modalCTRL", function($scope, $http, githubFactory, stackoverflowFactory, $uibModal, $log) {
            // this is pointing to functions so we don't use 'this' multiple times

            $scope.open = function(account) {

                var modalInstance = $uibModal.open({
                    templateUrl: '../views/modal-test.html',
                    controller: ModalInstanceCtrl,
                    resolve: {
                        accountIndex: function() {
                            return $scope.userAccounts.indexOf(account)
                        },
                        userAccounts: function() {
                            return $scope.userAccounts
                        }
                    }
                });

                modalInstance.result.then(function(slecetedAccounts) {
                    $scope.selected = slecetedAccounts;
                }, function() {
                    $log.info('Modal dismissed at: ' + new Date());
                });
            };
        });

    var ModalInstanceCtrl = function($scope, $uibModalInstance, userAccounts, accountIndex) {

        $scope.userAccounts = userAccounts;
        $scope.selected = {
            account: $scope.userAccounts[accountIndex]
        };

        $scope.ok = function() {
            $uibModalInstance.close($scope.selected.account);
        };

        $scope.cancel = function() {
            $uibModalInstance.dismiss('cancel');
        }
    }
})();
