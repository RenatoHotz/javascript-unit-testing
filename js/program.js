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
        if (!user || !user instanceof DEMO.User) {
            throw new Error("Program constructor error: Program has a dependency on DEMO.User!");
        }

        this._user = user;
    }

    /**
     * load data
     * @param {int} stationId
     */
    Program.prototype.load = function(stationId) {
        var id = parseInt(stationId, 10);

        if (this._user.getStationIds().indexOf(id) === -1) {
            throw new Error("Program.load error: stationId not in users stations!", 403);
        }

        $.ajax({
            type: "GET",
            url: "/api/program.json",
            context: this,
            success: function(data) {
                this._onLoadSuccess(data);
            },
            error: this._onLoadError()
        });
    };

    /**
     * called on load success
     * @param {string} data
     * @private
     */
    Program.prototype._onLoadSuccess = function(data) {
        $('body').html(data);
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