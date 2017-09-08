(function () {
    'use strict';

    angular
        .module('prueba1JhispterApp')
        .factory('Register', Register);

    Register.$inject = ['$resource'];

    function Register ($resource) {
        return $resource('api/register', {}, {});
    }
})();
