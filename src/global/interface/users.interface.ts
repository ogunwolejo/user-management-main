export interface IUser {
    id:number;
    name:string;
    username:string;
    email:string;
    phone:string;
    website:string;
    company:company;
    address:address
}

interface company {
    name:string;
    catchPhrase:string;
    bs:string;
}

interface address {
    street:string;
    suite:string;
    city:string;
    zipcode:string;
    geo:{
        lat:string;
        lng:string;
    }
}

export interface ICreateUser {
    id:number;
    name:string;
    website:string;
    phoneNumber:string;
    address:string;
    email:string;
    username:string;
}