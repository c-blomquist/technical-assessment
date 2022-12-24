import {v4 as uuid} from 'uuid';

export class Quest{
    
    
    /**
     * Creates a new quest Object.
     * 
     * @param {*} args An object with the Quest properties name and description
     * @param {string} heroID The hero id to assign the quest to
     */
    constructor(args, heroID) {
        this.id = uuid();
        this.name = args.name || 'Starter Quest';
        this.description = args.description || 'Basic Quest for a Hero';
        this.heroID = heroID;
    }

}