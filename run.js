global.SERVER_ROOT_PATH = __dirname
var Vineyard = require('vineyard')
require('when/monitor/console')
var vineyard = new Vineyard('config/server.json')
vineyard.load_all_bulbs()
vineyard.start()
