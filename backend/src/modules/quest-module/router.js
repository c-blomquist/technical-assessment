import express from 'express';
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


    // TODO: Task 2
    /** 
     * Creating a quest assigned to a specific heroID
     */
    //Updated to not need heroID in the json. However this does not check if the hero actually exists or not
    router.post('/heroes/:id/quests', (req, res) => {
        const heroID = req.params.id;
        const body = req.body;
        const quest = new Quest(body);
        QuestsDB.getInstance().createQuest(quest, heroID);
        res.sendStatus(201);
    });

    // TODO: Task 3
    //Updating a quest

    // TODO: Task 4
    //Deleting a quest

    return router;
}