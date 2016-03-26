var CompanyManagerApp;
(function (CompanyManagerApp) {
    var Company = (function () {
        function Company(avatar, name, founded, category_id, description, offices) {
            this.avatar = avatar;
            this.name = name;
            this.founded = founded;
            this.category_id = category_id;
            this.description = description;
            this.offices = offices;
        }
        Company.fromCreate = function (company) {
            return company;
        };
        return Company;
    }());
    CompanyManagerApp.Company = Company;
})(CompanyManagerApp || (CompanyManagerApp = {}));
//# sourceMappingURL=company.js.map