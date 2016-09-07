'use strict';
const deployer = require('thingssdk-deployer')();

const espruinoStrategy = require('thingssdk-espruino-strategy');

const iotPackageJson = require('../package.json');
const devices = require('../devices.json').devices;

deployer.build('espruino', espruinoStrategy.build(iotPackageJson.main));

deployer.upload('espruino', espruinoStrategy.upload(devices));
