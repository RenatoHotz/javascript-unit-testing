/* jshint strict: true */

var DEMO = DEMO || {};

(function() {
    "use strict";

    /**
     * User Object
     * @constructor
     */
    function User() {
        this._name = 'Anonymous';
        this._stationIds = [];
    }

    /**
     * set the users name
     * @param {string} name
     */
    User.prototype.setName = function(name) {
        this._name = name;
    };

    /**
     * get the users name
     * @returns {string}
     */
    User.prototype.getName = function() {
        return this._name;
    };

    /**
     * set the users stationIds
     * @param {array} stationIds
     */
    User.prototype.setStationIds = function(stationIds) {
        this._stationIds = stationIds;
    };

    /**
     * get the users stationIds
     * @returns {array}
     */
    User.prototype.getStationIds = function() {
        return this._stationIds;
    };

    DEMO.User = User;
}());