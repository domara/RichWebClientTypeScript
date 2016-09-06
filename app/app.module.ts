/// <reference path='../typings/globals/angular/index.d.ts' />
import * as angular from 'angular';
import 'angular-ui-router';
import 'templates';
import bookMgmtModuleName from './book-mgmt/book-mgmt.module';
import generalModuleName from './general/general.module';

angular.module('app', [bookMgmtModuleName, generalModuleName])
  .config(function ($urlRouterProvider:angular.ui.IUrlRouterProvider, $locationProvider:ng.ILocationProvider) {
    $urlRouterProvider.when('', '/book-mgmt/books');
    $locationProvider.html5Mode(false);
  });
