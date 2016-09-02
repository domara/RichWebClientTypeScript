/// <reference path='../typings/globals/angular/index.d.ts' />
import * as angular from "angular";
import {IndexCtrl} from "./index.controller";
import {IndexService} from "./index.service";

angular.module('app', [])
  .controller('IndexCtrl', IndexCtrl)
  .service('indexService', IndexService);
