var CompanyManagerApp;
(function (CompanyManagerApp) {
    var ContactCompanyController = (function () {
        function ContactCompanyController(companyService, $mdBottomSheet) {
            this.companyService = companyService;
            this.$mdBottomSheet = $mdBottomSheet;
            this.actions = [
                { name: 'Phone', icon: 'phone' },
                { name: 'Twitter', icon: 'twitter' },
                { name: 'Google+', icon: 'google_plus' },
                { name: 'Hangout', icon: 'hangouts' },
            ];
            this.company = companyService.selectedCompany;
        }
        ContactCompanyController.prototype.submitContact = function (action) {
            this.$mdBottomSheet.hide(action);
        };
        ContactCompanyController.$inject = ['companyService', '$mdBottomSheet'];
        return ContactCompanyController;
    }());
    CompanyManagerApp.ContactCompanyController = ContactCompanyController;
})(CompanyManagerApp || (CompanyManagerApp = {}));
//# sourceMappingURL=contactCompanyController.js.map