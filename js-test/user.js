/* jshint strict: false */
/* global DEMO */

TestCase("userTest", {
    setUp: function() {},

    tearDown: function() {},

    "test should create an instance of DEMO.User object":
        function() {
            var user = new DEMO.User();

            assertInstanceOf(DEMO.User, user);
        },

    "test should create an instance of DEMO.User object and set the default user name to 'Anonymous'":
        function() {
            var user = new DEMO.User();

            assertEquals('Anonymous', user.getName());
        },

    "test should create an instance of DEMO.User object and set the default users stations to an empty array":
        function() {
            var user = new DEMO.User();

            assertEquals([], user.getStationIds());
        },

    "test should set the users name and return 'this'":
        function() {
            var user = new DEMO.User(),
                chainingTest = user.setName('dummy');

            assertEquals('dummy', user.getName());
            assertEquals(user, chainingTest);
        },

    "test should set the users stations and return 'this'":
        function() {
            var user = new DEMO.User(),
                chainingTest = user.setStationIds([1, 2, 3, 5, 77]);

            assertEquals([1, 2, 3, 5, 77], user.getStationIds());
            assertEquals(user, chainingTest);
        }
});