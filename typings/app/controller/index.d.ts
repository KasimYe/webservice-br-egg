// This file is created by egg-ts-helper@1.25.7
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportHome = require('../../../app/controller/home');
import ExportWebserviceOutdated = require('../../../app/controller/webservice_outdated');

declare module 'egg' {
  interface IController {
    home: ExportHome;
    webserviceOutdated: ExportWebserviceOutdated;
  }
}
