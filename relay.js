  GNU nano 2.2.6                                    File: relay.js                                                                                

var Cylon = require("cylon");

Cylon.robot({

	connections:{
                galileo: { adaptor: "intel-iot" }
        },
        devices:{
                relay1:{driver:"direct-pin", pin:4, connection: "galileo"},
                relay2:{driver:"direct-pin", pin:5, connection: "galileo"},
                relay3:{driver:"direct-pin", pin:6, connection: "galileo"},
                relay4:{driver:"direct-pin", pin:7, connection: "galileo"}
        },

        work: function(my){

                var state = 1;

                every((3).second(),function(){
                        state = 1 - state;

                        my.relay1.digitalWrite(state);
                        my.relay2.digitalWrite(state);
                        my.relay3.digitalWrite(state);
                        my.relay4.digitalWrite(state);
                });
        }
}).start();

