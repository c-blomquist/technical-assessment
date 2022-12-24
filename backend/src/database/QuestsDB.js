import { Quest } from "../types/Quests";

export class QuestsDB {
    static instance = undefined;
    quests = []; //Database array for storing quest objects

    //Gets an instance of the database for quests
    static getInstance() {
        if(!this.instance){
            this.instance = new QuestsDB();
        }
        return this.instance;
    }

    //Gets all the quests currently in the database
    getQuests(){
        return this.quests;
    }

    //Adds a new quest to the database
    createQuest(quest){
        this.quests.push(quest);
    }


}