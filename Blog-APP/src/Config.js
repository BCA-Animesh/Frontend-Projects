import { initializeApp } from "firebase/app";
import { getDatabase, ref as DBRef, set, update, child, get, remove, push} from "firebase/database";
import {getStorage, uploadBytes, deleteObject, getDownloadURL, ref as storageRef} from "firebase/storage"
import Conf from './Conf'

export class Survice{
    app;
    database;
    storage;
    constructor(){
        this.app=initializeApp(Conf)
        this.database=getDatabase(this.app)
        this.storage=getStorage(this.app)
    }
    async createPost({userId, name, email, imageUrl}){
        try {
            const postRef=DBRef(this.database, `users/${userId}/posts`)
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
            await update(DBRef(this.database, `users/${userId}/posts/${postId}`), updatedPost)
        } catch (error) {
            throw error
        }
    }
    async getPosts(userId){
        try {
            const snapshot= await get(DBRef(this.database, `users/${userId}/posts`))
            return snapshot.val()
        } catch (error) {
            console.log(error);
            return false
        }
    }
    async getPost(userId, postId){
        try {
            const snapshot= await get(DBRef(this.database, `users/${userId}/posts/${postId}`))
            return snapshot.val()
        } catch (error) {
            console.log(error);
            return false
        }
    }
    async deletePost(userId, postId){
        try {
            const postRef=DBRef(this.database, `users/${userId}/posts/${postId}`)
            await remove(postRef)
            return true
        } catch (error) {
            console.log(error);
            return false
        }
    }
    // storage
    async uploadFile(userId, file, postId){
        try {
            const fileRef=storageRef(this.storage, `users/${userId}/${postId}`)
            return await uploadBytes(fileRef, file)
        } catch (error) {
            console.log(error);
            return false
        }
    }
    async deleteFile(userId, postId){
        try {
            const fileRef=storageRef(this.storage, `users/${userId}/${postId}`)
            await deleteObject(fileRef)
            return true
        } catch (error) {
            console.log(error);
            return false
        }
    }
    async getFile(userId, postId){
        try {
            const fileRef=storageRef(this.storage, `users/${userId}/${postId}`)
            return await getDownloadURL(fileRef)
        } catch (error) {
            console.log(error);
            return false
        }
    }
}
const survice= new Survice()

export default survice