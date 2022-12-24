import express from 'express';
import { HeroesDB } from '../../database/HeroesDB.js';
import { QuestsDB } from '../../database/QuestsDB.js';
import { Quest } from '../../types/Quests.js';

export function questsRouter() {
    const router = express.Router();

    /**
     * Gets all Quests
     */
    router.get('/quests', (req, res) =>{
        res.send(QuestsDB.getInstance().getQuests());
    });



    // TODO: Task 1
    //getting quests for a hero


    /** 
     * Task 2
     * Checks to see if hero exists, then creates a quest assigned to that specific heroID
     */
    router.post('/heroes/:id/quests', (req, res) => {
        const heroID = req.params.id;
        if(!HeroesDB.getInstance().getHero(heroID)){
            res.sendStatus(404);
        }
        else{
            const body = req.body;
            body.heroID = heroID;

            const quest = new Quest(body);
            QuestsDB.getInstance().createQuest(quest);
            res.sendStatus(201);
        }
    });

    // TODO: Task 3
    //Updating a quest

    // TODO: Task 4
    //Deleting a quest

    return router;
}