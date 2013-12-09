TestCase("userTest", {
    setUp: function() {},

    tearDown: function() {},

    "test should create an instance of DEMO.User object":
        function() {
            var user = new DEMO.User();

            assertInstanceOf(DEMO.User, user);
        },

    "test should create an instance of DEMO.User object and set the users name to 'Anonymous'":
        function() {
            var user = new DEMO.User();

            assertEquals('Anonymous', user.getName());
        },

    "test should create an instance of DEMO.User object and set the users stations to an empty array":
        function() {
            var user = new DEMO.User();

            assertEquals([], user.getStationIds());
        },

    "test should set the user instance name":
        function() {
            var user = new DEMO.User();
            user.setName('dummy');

            assertEquals('dummy', user.getName());
        },

    "test should set the users stations":
        function() {
            var user = new DEMO.User();
            user.setStationIds([1, 2, 3, 5, 77]);

            assertEquals([1, 2, 3, 5, 77], user.getStationIds());
        }
});