/// <reference path="../node_modules/vineyard-metahub/metahub.d.ts"/>
/// <reference path="../node_modules/vineyard-ground/ground.d.ts"/>
/// <reference path="../node_modules/vineyard/vineyard.d.ts"/>

var MetaHub = require('vineyard-metahub')
var Ground = require('vineyard-ground')
var when = require('when')
var Lawn = require('vineyard-lawn')
var pipeline:any = require('when/pipeline')
import Vineyard = require('vineyard')

class Custom extends Vineyard.Bulb {
  lawn

  grow() {

  }
}

export = Custom