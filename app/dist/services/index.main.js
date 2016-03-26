/// <reference path="../../typings/main.d.ts" />
var CompanyManagerApp;
(function (CompanyManagerApp) {
    angular.module('companyManagerApp', ['ngMaterial', 'ngMdIcons'])
        .controller('mainController', CompanyManagerApp.MainController)
        .config(CompanyManagerApp.ConfigMaterial);
})(CompanyManagerApp || (CompanyManagerApp = {}));
//# sourceMappingURL=index.main.js.map