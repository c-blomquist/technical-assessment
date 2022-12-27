import { supertestSetup } from "../../test/SupertestSetup";

//
const request = supertestSetup(undefined);
let ID = '';
let heroID = '';
let heroID_Two = '';

describe('Quests Module', () => {
    beforeAll(async () => {
        //get a hero ID and a quest ID to use for getting/updating/deleting
        await request.post('/heroes')
            .send({
                name: 'He Man',
                class: 'Barbarian',
                level: 50,
            });
        await request.post('/heroes')
            .send({
                name: 'Test Hero',
                class: 'Test Class',
                level: 10,
            });
        const res = await request.get('/heroes');
        heroID = res.body[0].id;
        heroID_Two = res.body[1].id;

        await request.post(`/heroes/${heroID}/quests`)
            .send({
                name: 'Quest 1',
                desciption: 'First Quest',
            });
        const resTwo = await request.get(`/heroes/${heroID}/quests`)
        ID = resTwo.body[0].id;

    });

    describe('GET /quests', () => {
        it('should return 200 for all quests', done => {
            request.get('/quests')
                .expect(200, done);
        });
    });

    describe('GET /heroes/:id/quests', () => {
        it('should return a 200 for all quests assigned to a hero', done => {
            request.get(`/heroes/${heroID}/quests`)
                .expect(200, done);
        });
        it('should return a 404 for not found hero', done => {
            request.get('/heroes/fakeID/quests')
                .expect(404, done)
        });
    });

    describe('POST /heroes/:id/quests', () => {
        it('should return a 201 adding in a quest', done => {
            request.post(`/heroes/${heroID}/quests`)
                .send({
                    name: 'Quest Test',
                    desciption: 'This is a test quest',
                })
                .expect(201, done);
        });
        it('should return a 404 if the hero ID does not exist', done => {
            request.post('/heroes/fakeID/quests')
                .send({
                    name: 'Quest Test',
                    description: 'This is a test'
                })
                .expect(404, done);
        });
    });

    describe(`PATCH /heroes/:heroId/quests/:questsId`, () => {
        it('should return a 204 for an updated quest', done => {
            request.patch(`/heroes/${heroID}/quests/${ID}`)
                .send({
                    name: 'Test Quest'
                })
                .expect(204, done);
        });
        it('should return a 404 for a not found hero', done => {
            request.patch(`/heroes/fakeID/quests/${ID}`)
                .send({
                    name: 'Testing not found Hero'
                })
                .expect(404, done);
        });
        it('should return a 404 for a not found quest', done => {
            request.patch(`/heroes/${heroID}/quests/fakeID`)
                .send({
                    name: 'Testing not found quest'
                })
                .expect(404, done);
        });
        it('should return a 400 for heroID not matching questID', done => {
            request.patch(`/heroes/${heroID_Two}/quests/${ID}`)
                .send({
                    name: 'Testing heroID and questID not matching'
                })
                .expect(400, done);
        });
    });

    describe(`DELETE /heroes/:heroId/quests/:questsId`, () => {
        it('should return a 400 for heroID not matching questID', done => {
            request.delete(`/heroes/${heroID_Two}/quests/${ID}`)
                .send({
                    name: 'Testing heroID and questID not matching'
                })
                .expect(400, done);
        });
        it('should return a 404 for a not found hero', done => {
            request.delete(`/heroes/fakeID/quests/${ID}`)
                .send({
                    name: 'Testing not found Hero'
                })
                .expect(404, done);
        });
        it('should return a 404 for a not found quest', done => {
            request.delete(`/heroes/${heroID}/quests/fakeID`)
                .send({
                    name: 'Testing not found quest'
                })
                .expect(404, done);
        });
        it('should return a 204 for an deleted quest', done => {
            request.delete(`/heroes/${heroID}/quests/${ID}`)
                .send({
                    name: 'Test Quest'
                })
                .expect(204, done);
        });
    });
});