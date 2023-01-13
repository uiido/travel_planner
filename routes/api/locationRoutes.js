const router = require('express').Router();
const { Location, Traveller, Trip } = require('../../models');

router.get('/', async (req, res) => {
    try {
        const locationData = await Location.findAll();
        res.json(locationData);
    } catch (err) {
        console.error(err);
        res.json(err);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const locationData = await Location.findByPk(req.params.id, {
            include: [{
                model: Traveller,
                through: Trip
            }]
        });
        res.json(locationData);
    } catch (err) {
        console.error(err);
        res.json(err);
    }
});

router.post('/', async (req, res) => {
    try {
        const locationData = await Location.create(req.body);
        res.json(locationData);
    } catch (err) {
        console.error(err);
        res.json(err);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const locationData = await Location.destroy({ where: { id: req.params.id } });
        res.json(locationData);
    } catch (err) {
        console.error(err);
        res.json(err);
    }
});

module.exports = router;