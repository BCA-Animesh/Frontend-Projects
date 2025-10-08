import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, update } from "firebase/database";
import Conf from './Conf'

export class Survice{
    app;
    database;
    constructor(){
        this.app=initializeApp(Conf)
        this.database=getDatabase(this.app)
    }
    async createPost({userId, name, email, imageUrl}){
        try {
            await set(ref(this.database, `users/${userId}`),{
                username:name,
                email:email,
                profile_picture:imageUrl
            })
        } catch (error) {
            throw error   
        }
    }
    async updatePost(userId, updatedPost){
        try {
            await update(ref(this.database, `users/${userId}`), updatedPost)
        } catch (error) {
            throw error
        }
    }
}
const survice= new Survice()

export default survice