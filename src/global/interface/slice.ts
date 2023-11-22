import { IUser } from "./users.interface";

export interface UserSlice {
    users:Array<IUser>;
    loading:boolean;
    error:null|string;
    tableLoading:boolean;
    appLoading:boolean;
}