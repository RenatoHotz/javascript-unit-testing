/* jshint strict: false */
/* global $, DEMO, sinon */

TestCase("programTest", {
    setUp: function() {},

    tearDown: function() {},

    "test should throw an error when no user-object is passed to the constructor":
        function() {
            var program;

            assertException(
                function() {
                    program = new DEMO.Program();
                }
            );
        },

    "test throw an error when user param is not type of User":
        function() {
            var program,
                user = {id: 123};

            assertException(
                function() {
                    program = new DEMO.Program(user);
                }
            );
        },

    "test should create a DEMO.Program instance when correct User is passed to the constructor":
        function() {
            var program,
                user = new DEMO.User();

            assertInstanceOf(
                DEMO.Program,
                program = new DEMO.Program(user)
            );
        },

    "test should throw an error when wrong stationId is passed to the load function":
        function() {
            var user = new DEMO.User(),
                program = new DEMO.Program(user);

            user.setStationIds([1, 2, 3]);

            assertException(
                function() {
                    program.load(4);
                }
            );
        },

    "test should load data and update html":
        function() {
            /*:DOC += <section><h1></h1></section> */

            expectAsserts(3);

            var user = new DEMO.User().setStationIds([1, 2, 3]),
                program = new DEMO.Program(user),
                clock = sinon.useFakeTimers();

            sinon.stub($, "ajax")
                 .yieldsTo("success",
                     {
                         "success": true,
                         "statusCode": 201,
                         "details": {
                             stationId: 1,
                             stationName: "SRF1"
                         }
                     }
                 );

            program.load(1);

            assertEquals('SRF1', program.getData().stationName);
            assertEquals(1, program.getData().stationId);
            clock.tick(3000);
            assertEquals('SRF1', $('h1').html());

            $.ajax.restore();
            clock.restore();
        }
});