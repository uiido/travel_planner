const router = require('express').Router();
const { Location, Traveller, Trip } = require('../../models');

router.get('/', async (req, res) => {
    try {
        const travellerData = await Traveller.findAll();
        res.json(travellerData);
    } catch (err) {
        console.error(err);
        res.json(err);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const travellerData = await Traveller.findByPk(req.params.id, {
            include: [{
                model: Location,
                through: Trip
            }]
        });
        res.json(travellerData);
    } catch (err) {
        console.error(err);
        res.json(err);
    }
});

router.post('/', async (req, res) => {
    try {
        const travellerData = await Traveller.create(req.body);
        res.json(travellerData);
    } catch (err) {
        console.error(err);
        res.json(err);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const travellerData = await Traveller.destroy({ where: { id: req.params.id } });
        res.json(travellerData);
    } catch (err) {
        console.error(err);
        res.json(err);
    }
});

module.exports = router;