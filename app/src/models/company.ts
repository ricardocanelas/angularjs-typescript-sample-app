module CompanyManagerApp {

    export class Company {
        
        constructor(
            public avatar: string,
            public name: string,
            public founded: number, 
            public category_id: number, 
            public description: string,
            public offices: Office[])  {      
        }
        
        
        static fromCreate(company: Company): Company {
            return company;
        }
        
    }
   
}