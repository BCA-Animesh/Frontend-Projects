import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import Conf from './Conf'

export class Authentication{
    app;
    auth;
    constructor(){
        this.app = initializeApp(Conf);
        this.auth = getAuth(this.app);
    }
    async createAccount({email, password}){
        try {
            const userAccount= await createUserWithEmailAndPassword(this.auth, email, password)
            return userAccount
        } catch (error) {
            console.log(error);
            throw error
        }
    }
    async signIn({email, password}){
        try {
            return await signInWithEmailAndPassword(this.auth, email, password)
        } catch (error) {
            throw error
        }
    }
    async signout(){
        try {
            await signOut(this.auth)
        } catch (error) {
            throw error
        }
    }
    getUser(){
        return this.auth.currentUser
    }
}
const authentication=new Authentication()

export default authentication