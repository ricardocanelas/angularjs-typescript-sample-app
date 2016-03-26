module CompanyManagerApp {

    export class Office {
        
        constructor(
            public address: string,
            public city: string,
            public country: string)  {   
        }
        
        
        static fromCreate(office: Office): Office {
            return office;
        }
        
    }
   
}