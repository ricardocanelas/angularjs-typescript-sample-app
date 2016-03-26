var CompanyManagerApp;
(function (CompanyManagerApp) {
    var CompanyService = (function () {
        function CompanyService($q) {
            this.$q = $q;
            this.selectedCompany = null;
            this.companies = [
                {
                    name: 'Guidewire',
                    founded: 2001,
                    category_id: 4,
                    avatar: 'svg-1',
                    description: '<p>Guidewire Software Inc., commonly Guidewire, is a software publisher based in Foster City, California. It offers core back-end software for property and casualty (P&C) insurance carriers in the U.S. and worldwide, as well as the Guidewire Live suite of online analytics services for P&C insurers.</p><p>In September 2011, Guidewire filed with the SEC to raise up to $100 million in an initial public offering (IPO) and first publicly traded on the NYSE in January 2012. Guidewire was later cited as being one of the top IPOs of 2012, even #1. The company has been cited as being among the 50 most desirable mid-size Bay Area companies (101 to 500 employees) to work for 2010-2012, and was in the "Top 50 Large Companies" in the Glassdoor Best places to work for both 2015 and 2016. Guidewire develops the Gosu programming language, it released as open source in 2010.</p>',
                    offices: [
                        { address: 'Blanchardstown, Co. Dublin', city: 'Dublin', country: 'Ireland' },
                        { address: '1001 E. Hillsdale Blvd., Suite 800', city: 'Foster City', country: 'U.S.' },
                        { address: '5600 Explorer Drive, Suite 202', city: 'Mississauga', country: 'Canada' },
                        { address: '4th Floor, 9 Cloak Lane', city: 'London', country: 'United Kingdom' },
                        { address: '19 Boulevard Malesherbes', city: 'Paris', country: 'France' }
                    ]
                },
                {
                    name: 'IBM',
                    founded: 1911,
                    category_id: 3,
                    avatar: 'svg-2',
                    description: '<p>International Business Machines Corporation (commonly referred to as IBM) is an American multinational technology and consulting corporation, with corporate headquarters in Armonk, New York. IBM manufactures and markets computer hardware, middleware and software, and offers infrastructure, hosting and consulting services in areas ranging from mainframe computers to nanotechnology.</p><p>The company originated in 1911 as the Computing-Tabulating-Recording Company (CTR) through the consolidation of The Tabulating Machine Company, the International Time Recording Company, the Computing Scale Company and the Bundy Manufacturing Company. CTR was renamed "International Business Machines" in 1924, a name which Thomas J. Watson first used for a CTR Canadian subsidiary. The initialism IBM followed. Securities analysts nicknamed the company Big Blue for its size and common use of the color in products, packaging and its logo.</p>',
                    offices: [
                        { address: 'Armonk', city: 'New York', country: 'U.S.' }
                    ]
                },
                {
                    name: 'Hewlett-Packard Company',
                    founded: 1934,
                    category_id: 3,
                    avatar: 'svg-3',
                    description: '<p>The Hewlett-Packard Company (commonly referred to as HP) was an American multinational information technology company headquartered in Palo Alto, California. It developed and provided a wide variety of hardware components as well as software and related services to consumers, small- and medium-sized businesses (SMBs) and large enterprises, including customers in the government, health and education sectors.</p><p>The company was founded in a one-car garage in Palo Alto by William "Bill" Redington Hewlett and David "Dave" Packard starting with a line of electronic test equipment. HP was the world\'s leading PC manufacturer from 2007 to Q2 2013, after which Lenovo remained ranked ahead of HP.It specialized in developing and manufacturing computing, data storage, and networking hardware, designing software and delivering services. Major product lines included personal computing devices, enterprise and industry standard servers, related storage devices, networking products, software and a diverse range of printers and other imaging products. HP marketed its products to households, small- to medium-sized businesses and enterprises directly as well as via online distribution, consumer-electronics and office-supply retailers, software partners and major technology vendors. HP also had services and consulting business around its products and partner products.</p>',
                    offices: []
                },
                {
                    name: 'Amazon',
                    founded: 1994,
                    category_id: 3,
                    avatar: 'svg-4',
                    description: '<p>Amazon.com, Inc., often referred to as simply Amazon, is an American electronic commerce and cloud computing company with headquarters in Seattle, Washington. It is the largest Internet-based retailer in the United States.</p><p>Amazon has separate retail websites for United States, United Kingdom and Ireland, France, Canada, Germany, Italy, Spain, Netherlands, Australia, Brazil, Japan, China, India and Mexico. Amazon also offers international shipping to certain other countries for some of its products. In 2011, it professed an intention to launch its websites in Polandand Sweden.</p>',
                    offices: []
                },
            ];
        }
        CompanyService.prototype.loadAllCompanies = function () {
            return this.$q.when(this.companies);
        };
        CompanyService.$inject = ['$q'];
        return CompanyService;
    }());
    CompanyManagerApp.CompanyService = CompanyService;
})(CompanyManagerApp || (CompanyManagerApp = {}));
//# sourceMappingURL=companyService.js.map