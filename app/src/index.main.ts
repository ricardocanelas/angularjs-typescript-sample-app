/// <reference path="../../typings/main.d.ts" />

module CompanyManagerApp {
    
    angular.module('companyManagerApp', ['ngMaterial', 'ngMdIcons', 'ngSanitize', 'ngMessages'])
        .controller('mainController', MainController)
        .service('companyService', CompanyService)
        .config(ConfigMaterial);
    
}

console.log('by RicardoCanelas.com');