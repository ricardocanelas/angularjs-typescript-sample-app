var CompanyManagerApp;
(function (CompanyManagerApp) {
    var FormCompanyDialogController = (function () {
        function FormCompanyDialogController($mdDialog) {
            this.$mdDialog = $mdDialog;
            this.avatars = [
                'svg-1', 'svg-2', 'svg-3', 'svg-4'
            ];
        }
        FormCompanyDialogController.prototype.cancel = function () {
            console.log('Cancel this dialog');
            this.$mdDialog.cancel();
        };
        FormCompanyDialogController.prototype.save = function () {
            this.$mdDialog.hide(this.company);
        };
        FormCompanyDialogController.$inject = ['$mdDialog'];
        return FormCompanyDialogController;
    }());
    CompanyManagerApp.FormCompanyDialogController = FormCompanyDialogController;
})(CompanyManagerApp || (CompanyManagerApp = {}));
//# sourceMappingURL=formCompanyDialogController.js.map