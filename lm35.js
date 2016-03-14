var cylon = require("cylon");

cylon.robot({
  connections: {
    galileo: { adaptor: "intel-iot" }
  },
  devices: {
    sensor:   { driver: "analogSensor", pin: 1, connection: "galileo" }
  },
  work: function(my) {

        var analogValue = 0;

    every((1).second(), function() {
        analogValue = my.sensor.analogRead(1);
        temperature = analogValue * 0.48826125;
        console.log(temperature);
    });
  }
}).start();

