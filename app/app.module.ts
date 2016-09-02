/// <reference path="../typings/globals/angular/index.d.ts" />
import * as angular from "angular";
import {IndexCtrl} from "./index.controller";
angular.module('app', [])
  .controller('IndexCtrl', IndexCtrl);
