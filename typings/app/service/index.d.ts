// This file is created by egg-ts-helper@1.25.7
// Do not modify this file!!!!!!!!!

import 'egg';
type AnyClass = new (...args: any[]) => any;
type AnyFunc<T = any> = (...args: any[]) => T;
type CanExportFunc = AnyFunc<Promise<any>> | AnyFunc<IterableIterator<any>>;
type AutoInstanceType<T, U = T extends CanExportFunc ? T : T extends AnyFunc ? ReturnType<T> : T> = U extends AnyClass ? InstanceType<U> : U;
import ExportChangDian = require('../../../app/service/chang_dian');
import ExportWebserviceOutdated = require('../../../app/service/webservice_outdated');

declare module 'egg' {
  interface IService {
    changDian: AutoInstanceType<typeof ExportChangDian>;
    webserviceOutdated: AutoInstanceType<typeof ExportWebserviceOutdated>;
  }
}
