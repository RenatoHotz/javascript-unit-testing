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
     * @param {String} name
     * @returns {User}
     */
    User.prototype.setName = function(name) {
        this._name = name;

        return this;
    };

    /**
     * get the users name
     * @returns {String}
     */
    User.prototype.getName = function() {
        return this._name;
    };

    /**
     * set the users stationIds
     * @param {Array} stationIds
     * @returns {User}
     */
    User.prototype.setStationIds = function(stationIds) {
        this._stationIds = stationIds;

        return this;
    };

    /**
     * get the users stationIds
     * @returns {Array}
     */
    User.prototype.getStationIds = function() {
        return this._stationIds;
    };

    DEMO.User = User;
}());