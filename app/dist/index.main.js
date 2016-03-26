/// <reference path="../../typings/main.d.ts" />
var CompanyManagerApp;
(function (CompanyManagerApp) {
    angular.module('companyManagerApp', ['ngMaterial', 'ngMdIcons', 'ngSanitize', 'ngMessages'])
        .controller('mainController', CompanyManagerApp.MainController)
        .service('companyService', CompanyManagerApp.CompanyService)
        .config(CompanyManagerApp.ConfigMaterial);
})(CompanyManagerApp || (CompanyManagerApp = {}));
console.log('by RicardoCanelas.com');
//# sourceMappingURL=index.main.js.map