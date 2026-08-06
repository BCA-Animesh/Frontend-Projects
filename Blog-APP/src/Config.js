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
    
    // async createId(userId){
    //     const postRef=DBRef(this.database, `users/${userId}/posts`)
    //     return push(postRef)
    // }
    async createPost(userId,{slug, title, content, featuredimage}){
        try {
            const postRef=push(DBRef(this.database, `users/${userId}/posts`))
            await set(postRef,{
                slug:slug,
                title:title,
                content:content,
                featuredimage:featuredimage,
                uid:userId,
                id:postRef.key
            })
            return postRef.key
        } catch (error) {
            throw error   
        }
    }
    async updatePost(userId, updatedPost, postId){
        try {
            await update(DBRef(this.database, `users/${userId}/posts/${postId}`), updatedPost)
            return true
        } catch (error) {
            throw error
        }
    }
    async getPosts(userId){
        try {
            const snapshot= await get(DBRef(this.database, `users/${userId}/posts`))
            return Object.values(snapshot.val())
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
    async uploadFile(file){
        try {
            const formData=new FormData()
            formData.append("file", file)
            formData.append("upload_preset", Conf.uploadPreset)
            const response=await fetch(`https://api.cloudinary.com/v1_1/${Conf.cloudName}/image/upload`,{
                method:"post",
                body:formData
            })
            return response.json()
        } catch (error) {
            console.log(error);
            return false
        }
    }
    // async deleteFile(file){
    //     try {
    //        const formData=new FormData()
    //         formData.append("file", file)
    //         formData.append("upload_preset", Conf.uploadPreset)
    //         const response=await fetch(`https://api.cloudinary.com/v1_1/${Conf.cloudName}/image/delete`,{
    //             method:"DELETE",
    //             body:formData
    //         })
    //         return true
    //     } catch (error) {
    //         console.log(error);
    //         return false
    //     }
    // }
    // async getFile(userId, postId){
    //     try {
    //         const fileRef=storageRef(this.storage, `users/${userId}/${postId}`)
    //         return await getDownloadURL(fileRef)
    //     } catch (error) {
    //         console.log(error);
    //         return false
    //     }
    // }
}
const survice= new Survice()

export default survice