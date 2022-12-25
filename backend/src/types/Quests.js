import {v4 as uuid} from 'uuid';

export class Quest{
    
    
    /**
     * Creates a new quest Object.
     * 
     * @param {*} args An object with the Quest properties
     */
    constructor(args) {
        this.id = uuid();
        this.name = args.name || 'Starter Quest';
        this.description = args.description || 'Basic Quest for a Hero';
        this.heroID = args.heroID;
    }

    /**
     * Updates the quest class with the new values
     * 
     * @param {Partial<Quest>} args Partial quest object
     */
    updateQuest(args){
        if(args.name){
            this.name = args.name;
        }
        if (args.description){
            this.description = args.description;
        }
    }
}