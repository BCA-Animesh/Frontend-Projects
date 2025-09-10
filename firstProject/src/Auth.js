import Conf from "./Conf";
import { Client, Account, ID } from "appwrite";

export class Authentication {
    clint= new Client()
    account
    constructor() {
        this.clint
                .setEndpoint(Conf.appwriteUrl)
                .setProject(Conf.appwriteProjectId)
        this.account=new Account(this.clint)
    }
    async creatAccount({email, password, name}) {
        try {
            const useraccount= await this.account.create(ID.unique(), email, password, name)
            return useraccount ?  this.login({email, password}) :  useraccount
        } catch (error) {
            throw error
        }
    }
    async login({email, password}) {
        try {
            return await this.account.createEmailPasswordSession(email, password)
        } catch (error) {
            throw error
        }
    }
    async getAccount(){
       try {
            return await this.account.get();
        } catch (error) {
            console.log(error);
        }
        return null;
    }
    async logout(){
        try {
            await this.account.deleteSessions()
        } catch (error) {
            throw error
        }
    }
}
const authentication=new Authentication()

export default authentication