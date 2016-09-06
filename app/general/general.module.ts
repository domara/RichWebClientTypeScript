import {appNavDirecrive} from './navigation/app-nav.directive';
let generalModule:ng.IModule = angular.module('general', [])
  .directive('appNav', appNavDirecrive);
export default generalModule.name;
