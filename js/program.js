/* jshint strict: true */
/* global jQuery */

var DEMO = DEMO || {};

(function($) {
    "use strict";

    /**
     * Program Object
     * @param {Object} user DEMO.User
     * @constructor
     */
    function Program(user) {
        if (!user || !(user instanceof DEMO.User)) {
            throw new Error("Program constructor error: Program has a dependency on DEMO.User!");
        }

        this._user = user;
        this._data = {};
    }

    /**
     * load data
     * @param {int} stationId
     */
    Program.prototype.load = function(stationId) {
        var id = parseInt(stationId, 10),
            that = this;

        if (this._user.getStationIds().indexOf(id) === -1) {
            throw new Error("Program.load error: stationId not in users stations!", 403);
        }

        $.ajax({
            type: "GET",
            url: "/api/program.json",
            success: function(data) {
                that._onLoadSuccess(data);
            },
            error: function() {
                that._onLoadError();
            }
        });
    };

    /**
     * get loaded data
     * @returns {}
     */
    Program.prototype.getData = function() {
        return this._data;
    };

    /**
     * called on load success
     * @param {string} data
     * @private
     */
    Program.prototype._onLoadSuccess = function(data) {
        if (data.statusCode === 201 && data.success === true) {
            this._data = data.details;
        }
    };

    /**
     * called on load error
     * @private
     */
    Program.prototype._onLoadError = function() {
        throw new Error("Program.load error: internal server error!", 500);
    };

    DEMO.Program = Program;
}(jQuery));