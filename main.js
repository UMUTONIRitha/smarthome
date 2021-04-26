var smk_sensor = A0;
var grgDoor = 5;
var bWindow = 4;
var frtDoor = 3;
var livgFan = 2;


function setup() {
	pinMode(grgDoor, OUTPUT);
	pinMode(frtDoor, OUTPUT);
	pinMode(bWindow, OUTPUT);
	pinMode(livgFan, OUTPUT);
}

function loop() {
	// read from sensor
	var newValue = analogRead(smk_sensor);
	newValue = newValue/10;
	
	// map it from 1023 to 255
	//newValue = Math.floor(map(newValue, 0, 1023, 0, 255));
	
	if (newValue > 10) {
		// analog write to pins
		customWrite(grgDoor, 1);
		customWrite(frtDoor, 1);
		customWrite(bWindow, 1);
		customWrite(livgFan, 2);
		//digitalWrite(livgFan, HIGH);
		
	} else {
		if (newValue < 2) {
		  customWrite(grgDoor, 0);
		  customWrite(frtDoor, 0);
		  customWrite(bWindow, 0);
		  customWrite(livgFan, 0);
		}
	}
	Serial.println("Smoke level: " + newValue);
}
