var CompanyManagerApp;
(function (CompanyManagerApp) {
    var MainController = (function () {
        function MainController(companyService, $mdSidenav, $mdToast, $mdDialog, $mdMedia, $mdBottomSheet) {
            this.companyService = companyService;
            this.$mdSidenav = $mdSidenav;
            this.$mdToast = $mdToast;
            this.$mdDialog = $mdDialog;
            this.$mdMedia = $mdMedia;
            this.$mdBottomSheet = $mdBottomSheet;
            this.message = 'Hello World';
            this.companies = null;
            this.selectedCompany = null;
            this.tabIndex = 0;
            this.searchText = '';
            this.newOffice = new CompanyManagerApp.Office('', '', '');
            var self = this;
            this.companyService
                .loadAllCompanies()
                .then(function (companies) {
                self.companies = companies;
                self.selectedCompany = companies[0];
                self.companyService.selectedCompany = companies[0];
            });
        }
        MainController.prototype.selectCompany = function (company) {
            this.selectedCompany = company;
            this.companyService.selectedCompany = company;
            var sidenav = this.$mdSidenav('left');
            if (sidenav.isOpen()) {
                sidenav.close();
            }
            this.tabIndex = 0;
        };
        MainController.prototype.addCompany = function ($event) {
            var self = this;
            var useFullScreen = (this.$mdMedia('sm') || this.$mdMedia('xs'));
            this.$mdDialog.show({
                templateUrl: './dist/views/company-dialog-form.html',
                parent: angular.element(document.body),
                targetEvent: $event,
                controller: CompanyManagerApp.FormCompanyDialogController,
                controllerAs: 'ctrl',
                clickOutsideToClose: true,
                fullscreen: useFullScreen
            }).then(function (company) {
                company.offices = [];
                var newCompany = CompanyManagerApp.Company.fromCreate(company);
                self.companies.push(newCompany);
                self.selectCompany(newCompany);
                self.openToast('Company added');
            }, function () {
                console.log('You cancelled the dialog.');
            });
        };
        MainController.prototype.openToast = function (message) {
            var config = this.$mdToast.simple()
                .textContent(message)
                .position('top right')
                .hideDelay(2000);
            this.$mdToast.show(config);
        };
        MainController.prototype.showContactOptions = function ($event) {
            this.$mdBottomSheet.show({
                parent: angular.element(document.getElementById('wrapper')),
                templateUrl: './dist/views/company-sheet-contact.html',
                controller: CompanyManagerApp.ContactCompanyController,
                controllerAs: 'cp',
                bindToController: true,
                targetEvent: $event
            }).then(function (clickedItem) {
                clickedItem && console.log(clickedItem.name + ' clicked!');
            });
        };
        MainController.prototype.toggleSideNav = function () {
            this.$mdSidenav('left').toggle();
        };
        MainController.prototype.setFormScope = function (scope) {
            this.formScope = scope;
        };
        MainController.prototype.addOffice = function () {
            this.selectedCompany.offices.push(this.newOffice);
            this.newOffice = new CompanyManagerApp.Office('', '', '');
            this.formScope.officeForm.$setUntouched();
            this.formScope.officeForm.$setPristine();
            this.openToast("Office added");
        };
        MainController.prototype.removeOffice = function (office) {
            var foundIndex = this.selectedCompany.offices.indexOf(office);
            this.selectedCompany.offices.splice(foundIndex, 1);
            this.openToast('Office was removed.');
        };
        MainController.$inject = [
            'companyService',
            '$mdSidenav',
            '$mdToast',
            '$mdDialog',
            '$mdMedia',
            '$mdBottomSheet'
        ];
        return MainController;
    }());
    CompanyManagerApp.MainController = MainController;
})(CompanyManagerApp || (CompanyManagerApp = {}));
//# sourceMappingURL=mainController.js.map