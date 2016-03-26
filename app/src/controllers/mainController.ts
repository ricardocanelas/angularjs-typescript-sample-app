module CompanyManagerApp {

    export class MainController {
        static $inject = [
          'companyService',
          '$mdSidenav',
          '$mdToast', 
          '$mdDialog', 
          '$mdMedia',
          '$mdBottomSheet'
        ];
        
        constructor(
            private companyService: ICompanyService,
            private $mdSidenav: angular.material.ISidenavService,
            private $mdToast: angular.material.IToastService,
            private $mdDialog: angular.material.IDialogService,
            private $mdMedia: angular.material.IMedia,
            private $mdBottomSheet: angular.material.IBottomSheetService){            
            var self = this;            
            this.companyService
                    .loadAllCompanies()
                    .then((companies: Company[]) => {
                      self.companies = companies;
                      self.selectedCompany = companies[0];
                      self.companyService.selectedCompany = companies[0];
                    });
        }
        
        message: string = 'Hello World';
        formScope: any;
        companies: Company[] = null;
        selectedCompany: Company = null;
        tabIndex: number = 0;
        searchText: string = '';
        newOffice: Office = new Office('', '', '');
        
        
        selectCompany (company: Company) : void {
            this.selectedCompany = company;
            this.companyService.selectedCompany = company;
            var sidenav = this.$mdSidenav('left');
            if(sidenav.isOpen()) {
                sidenav.close();
            }
            
            this.tabIndex = 0;
        }
        
        
        addCompany($event) {
            var self = this;
            var useFullScreen = (this.$mdMedia('sm') || this.$mdMedia('xs'));
            
            this.$mdDialog.show({
                templateUrl: './dist/views/company-dialog-form.html',
                parent: angular.element(document.body),
                targetEvent: $event,
                controller: FormCompanyDialogController,
                controllerAs: 'ctrl',
                clickOutsideToClose: true,
                fullscreen: useFullScreen
            }).then((company: Company) => {
                company.offices = [];
                var newCompany: Company = Company.fromCreate(company);
                self.companies.push(newCompany);
                self.selectCompany(newCompany);
                self.openToast('Company added');
            }, () => {
                console.log('You cancelled the dialog.')
            })
        }
        
        
        openToast(message:string) : void {
            var config = this.$mdToast.simple()
                                .textContent(message)
                                .position('top right')
                                .hideDelay(2000);
            this.$mdToast.show(config);
        }
        
        showContactOptions($event) {
            this.$mdBottomSheet.show({
                parent: angular.element(document.getElementById('wrapper')),
                templateUrl: './dist/views/company-sheet-contact.html',
                controller: ContactCompanyController,
                controllerAs: 'cp',
                bindToController: true,
                targetEvent: $event 
            }).then((clickedItem) => {
               clickedItem && console.log( clickedItem.name + ' clicked!'); 
            });    
        }
        
        
        toggleSideNav() : void {
            this.$mdSidenav('left').toggle();
        }
        
        setFormScope(scope) {
            this.formScope = scope;
        }
        
        addOffice() {
            this.selectedCompany.offices.push(this.newOffice);      
            this.newOffice = new Office('', '', '');

            this.formScope.officeForm.$setUntouched();
            this.formScope.officeForm.$setPristine();
            
            this.openToast("Office added");
        }
        
        removeOffice(office: Office) : void {
            var foundIndex = this.selectedCompany.offices.indexOf(office);
            this.selectedCompany.offices.splice(foundIndex, 1);
            this.openToast('Office was removed.');
        }
        
        
    }
   
}