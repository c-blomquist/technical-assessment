import { Quest } from "../types/Quests.js";

export class QuestsDB {
    static instance = undefined;
    quests = []; //Database array for storing quest objects

    /**
     * Gets an instance of the database for quests
     * @returns {QuestsDB} This is an instance of QuestsDB
     */
    static getInstance() {
        if(!this.instance){
            this.instance = new QuestsDB();
        }
        return this.instance;
    }

    /**
     * Gets all the quests currently in the database
     * 
     * @returns {Quest[]} This is an array of Quests
     */
    getQuests(){
        return this.quests;
    }

    /**
     * Adds a quest to the database
     * 
     * @param {Quest} quest The quest to add to the database
     */
    createQuest(quest){
        this.quests.push(quest);
    }


}