module CompanyManagerApp {

    export class FormCompanyDialogController {
        static $inject = ['$mdDialog'];
    
        constructor(private $mdDialog) {}
        
        company: Company;
        avatars = [
            'svg-1','svg-2','svg-3','svg-4'
        ];
        
        cancel(): void {
            console.log('Cancel this dialog');
            this.$mdDialog.cancel();
        }

        save(): void {
            this.$mdDialog.hide(this.company);
        }
        
        
    }

}