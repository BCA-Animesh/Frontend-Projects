import { initializeApp } from "firebase/app";
import { getDatabase, ref } from "firebase/database";
import Conf from './Conf'

export class Survice{
    app;
    database;
    constructor(){
        this.app=initializeApp(Conf)
        this.database=getDatabase(this.app)
    }
    
}
const survice= new Survice()

export default survice