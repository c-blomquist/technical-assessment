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
    getQuestsAll(){
        return this.quests;
    }

    /**
     * Gets a specific quest by quest ID
     *
     * @param {string} id  
     * @returns {Quest} A quest object with specified id
     */
    getQuest(id){
        return this.quests.find(quest => quest.id === id);
    }

    /**
     * Gets quests for a specified Hero
     * @param {string} heroID The ID for hero to get quests from
     * @returns {Quest[]} Array of all quests assigned to a hero by using "filter"
     */
    getQuests(heroID){
        return this.quests.filter(quest => quest.heroID === heroID);
    }

    /**
     * Adds a quest to the database
     * 
     * @param {Quest} quest The quest to add to the database
     */
    createQuest(quest){
        this.quests.push(quest);
    }

    /**
     * Updates a quest by heroID and questID
     * @param {string} id The id of the quest to update
     * @param {Partial<Quest>} questUpdates The quest object for updates
     */
    updateQuest(id, questUpdates){
        const quest = this.getQuest(id);
        this.deleteQuest(id);
        quest.updateQuest(questUpdates);
        this.createQuest(quest);
    }

    /**
     * Deletes a quest by id
     * 
     * @param {string} id The id of the quest to delete
     */
    deleteQuest(id){
        const index = this.quests.findIndex(quest => quest.id === id);
        if(index >= 0){
            this.quests.splice(index, 1);
        }
    }



}