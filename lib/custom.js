/// <reference path="../node_modules/vineyard-metahub/metahub.d.ts"/>
/// <reference path="../node_modules/vineyard-ground/ground.d.ts"/>
/// <reference path="../node_modules/vineyard/vineyard.d.ts"/>
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var MetaHub = require('vineyard-metahub');
var Ground = require('vineyard-ground');
var when = require('when');
var Lawn = require('vineyard-lawn');
var pipeline = require('when/pipeline');
var Vineyard = require('vineyard');
var Custom = (function (_super) {
    __extends(Custom, _super);
    function Custom() {
        _super.apply(this, arguments);
    }
    Custom.prototype.grow = function () {
    };
    return Custom;
})(Vineyard.Bulb);
module.exports = Custom;
//# sourceMappingURL=custom.js.map