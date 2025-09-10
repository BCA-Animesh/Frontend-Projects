import Conf from "./Conf";
import { Client, Databases, ID, Storage, Query } from "appwrite";

export class Survice {
    clint= new Client()
    database
    bucket
    constructor() {
        this.clint
                .setEndpoint(Conf.appwriteUrl)
                .setProject(Conf. appwriteProjectId)
        this.database=new Databases(this.clint)
        this.bucket= new Storage(this.clint)
    }
    async createPost({title, slug, content, featuredimage, status, userid}){
        try {
             return await this.database.createDocument(Conf.appwriteDatabaseId, Conf.appwriteCollectionId, slug, {title, content, featuredimage, status, userid})
        } catch (error) {
            throw error
        }
    }
    async updatePost(slug, {title, content, status, featuredimage}){
        try {
            return await this.database.updateDocument(Conf.appwriteDatabaseId, Conf.appwriteCollectionId, slug, {title, content, status, featuredimage})
        } catch (error) {
            throw error
        }
    }
    async deletePost(slug){
        try {
            await this.database.deleteDocument(Conf.appwriteDatabaseId, Conf.appwriteCollectionId, slug)
            return true
        } catch (error) {
            console.log(error);
            return false
        }
    }
    async getPost(slug){
        try {
            return await this.database.getDocument(Conf.appwriteDatabaseId, Conf.appwriteCollectionId, slug)
        } catch (error) {
            console.log(error);
            return false
        }
    }
    async getPosts(query=[Query.equal("status", ["active"])]){
        try {
            return await this.database.listDocuments(Conf.appwriteDatabaseId, Conf.appwriteCollectionId, query)
        } catch (error) {
            console.log(error);
            return false
        }
    }
// STORAGE
    async createFile(file){
        try {
            return await this.bucket.createFile(Conf.appwriteBucketId, ID.unique(), file)
        } catch (error) {
            console.log(error);
            return false
        }
    }
    getFile(fileId){
         return this.bucket.getFilePreview(Conf.appwriteBucketId, fileId)
    }
    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(Conf.appwriteBucketId, fileId)
            return true
        } catch (error) {
            console.log(error);
            return false
        }
    }
}
const survice=new Survice()

export default survice