global.SERVER_ROOT_PATH = __dirname
var Vineyard = require('vineyard')
var vineyard = new Vineyard('config/local.json')
vineyard.load_all_bulbs()

vineyard.start()
