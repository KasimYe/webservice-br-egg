// This file is created by egg-ts-helper@1.25.7
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportChangDian = require('../../../app/controller/chang_dian');
import ExportHome = require('../../../app/controller/home');
import ExportWebserviceOutdated = require('../../../app/controller/webservice_outdated');

declare module 'egg' {
  interface IController {
    changDian: ExportChangDian;
    home: ExportHome;
    webserviceOutdated: ExportWebserviceOutdated;
  }
}
