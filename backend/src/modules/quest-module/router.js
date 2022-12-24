import express from 'express';
import { QuestsDB } from '../../database/QuestsDB';
import { Quest } from '../../types/Quests';

export function questsRouter() {
    const router = express.Router();

    // TODO: Task 1
    //getting quests for a hero

    // TODO: Task 2
    //creating a quest for a hero
    router.post('quests/:id/quests', (req, res) => {
        const body = req.body;
        const quest = new Quest(body);
        QuestsDB.getInstance.createHero(quest);
        res.sendStatus(201)
    });

    // TODO: Task 3
    //Updating a quest

    // TODO: Task 4
    //Deleting a quest

    return router;
}