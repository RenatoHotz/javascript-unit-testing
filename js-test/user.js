TestCase("userTest", {
    setUp: function() {},

    tearDown: function() {},

    "test should create an instance of DEMO.User object":
    function() {
        var user = new DEMO.User();

        assertInstanceOf(DEMO.User, user);
    }
});