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
        res.send(QuestsDB.getInstance().getQuestsAll());
    });


    /**
     * Task 1
     * Gets all quests for a specified heroID
     */
    router.get('/heroes/:id/quests', (req, res) =>{
        const heroID = req.params.id;
        if(!HeroesDB.getInstance().getHero(heroID)){
            res.sendStatus(404);
        } else {
            res.send(QuestsDB.getInstance().getQuests(heroID));
        }
    });


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
    /**
     * Updating a quest by heroID and questID
     * Checks if Hero and quest exists, and that their ids match
     */
    router.patch('/heroes/:heroId/quests/:questId', (req, res) => {
        const heroID = req.params.heroId;
        const questID = req.params.questId;
        const body = req.body;

        const hero = HeroesDB.getInstance().getHero(heroID);
        const quest = QuestsDB.getInstance().getQuest(questID);

        if(!hero || !quest){
            res.sendStatus(404);
        } else if(hero.id != quest.heroID){
            res.sendStatus(400);
        } else{
            QuestsDB.getInstance().updateQuest(questID, body);
            res.sendStatus(204);
        }
    });

    // TODO: Task 4
    //Deleting a quest

    return router;
}