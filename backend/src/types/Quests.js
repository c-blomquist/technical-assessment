import {v4 as uuid} from 'uuid';

export class Quest{
    
    
    // Creates a new quest Object.
    // @param {*} args An object with the Quest properties
    constructor(args) {
        this.id = uuid();
        this.name = args.name || 'Starter Quest';
        this.description = args.description || 'Basic Quest for a Hero';
        
        //This needs changing as the Hero ID is not wanted in the json body
        this.hero_id = args.hero_id;
    }

}