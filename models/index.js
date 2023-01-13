const Location = require('./Location');
const Traveller = require('./Traveller');
const Trip = require('./Trip');

// ASSOCIATIONS
Location.belongsToMany(Traveller, {
    through: {
        model: Trip,
        unique: false,
    },
});

Traveller.belongsToMany(Location, {
    through: {
        model: Trip,
        unique: false,
    },
});

module.exports = { Location, Traveller, Trip };