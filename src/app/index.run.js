(function() {
  'use strict';

  angular
    .module('serviceOrder')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
