var CompanyManagerApp;
(function (CompanyManagerApp) {
    var Office = (function () {
        function Office(address, city, country) {
            this.address = address;
            this.city = city;
            this.country = country;
        }
        Office.fromCreate = function (office) {
            return office;
        };
        return Office;
    }());
    CompanyManagerApp.Office = Office;
})(CompanyManagerApp || (CompanyManagerApp = {}));
//# sourceMappingURL=office.js.map