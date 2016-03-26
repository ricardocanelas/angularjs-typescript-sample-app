module CompanyManagerApp {

    export class ContactCompanyController {
        static $inject = ['companyService', '$mdBottomSheet'];
        
        constructor(
            private companyService: ICompanyService,
            private $mdBottomSheet: angular.material.IBottomSheetService) {
                this.company = companyService.selectedCompany;
            }
        
        company: Company;
        
        actions = [
            { name: 'Phone', icon: 'phone'},
            { name: 'Twitter', icon: 'twitter'},
            { name: 'Google+', icon: 'google_plus'},
            { name: 'Hangout', icon: 'hangouts'},
        ]
        
        submitContact(action) : void {
            this.$mdBottomSheet.hide(action);
        }
    }

}