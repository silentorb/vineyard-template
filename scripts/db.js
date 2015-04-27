var when = require("when")

var PlantLab = require('vineyard-plantlab')
var Fixture = require('../test/Fixture.js')

var lab = new PlantLab('config/local.json', ['lawn'])
var ground = lab.ground
var fixture = new Fixture.Fixture(lab)

fixture.prepare_database()
  .then(function() { return fixture.populate() })
  .then(function() {
    console.log('done')
    process.exit()
  })
