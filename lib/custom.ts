/// <reference path="../node_modules/vineyard-metahub/metahub.d.ts"/>
/// <reference path="../node_modules/vineyard-ground/ground.d.ts"/>
/// <reference path="../node_modules/vineyard/vineyard.d.ts"/>

var MetaHub = require('vineyard-metahub')
var Ground = require('vineyard-ground')
import Vineyard = require('vineyard')
var when = require('when')
var Lawn = require('vineyard-lawn')
var pipeline:any = require('when/pipeline')

class Rowing extends Vineyard.Bulb {
  lawn

  grow() {

  }
}