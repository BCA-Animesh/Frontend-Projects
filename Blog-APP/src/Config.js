import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, update, child, get, remove, push } from "firebase/database";
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
            const postRef=ref(this.database, `users/${userId}/posts`)
            const newRef=push(postRef)
            await set(newRef,{
                username:name,
                email:email,
                profile_picture:imageUrl
            })
        } catch (error) {
            throw error   
        }
    }
    async updatePost(userId, updatedPost, postId){
        try {
            await update(ref(this.database, `users/${userId}/posts/${postId}`), updatedPost)
        } catch (error) {
            throw error
        }
    }
    async getPosts(userId){
        try {
            const snapshot= await get(ref(this.database, `users/${userId}/posts`))
            return snapshot.val()
        } catch (error) {
            console.log(error);
            return false
        }
    }
    async getPost(userId, postId){
        try {
            const snapshot= await get(ref(this.database, `users/${userId}/posts/${postId}`))
            return snapshot.val()
        } catch (error) {
            console.log(error);
            return false
        }
    }
    async deletePost(userId, postId){
        try {
            const postRef=ref(this.database, `users/${userId}/posts/${postId}`)
            await remove(postRef)
            return true
        } catch (error) {
            console.log(error);
            return false
        }
    }
}
const survice= new Survice()

export default survice