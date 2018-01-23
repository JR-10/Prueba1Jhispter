(function() {
    'use strict';

    angular
        .module('prueba1JhispterApp')
        .factory('CountrySearch', CountrySearch);

    CountrySearch.$inject = ['$resource'];

    function CountrySearch($resource) {
        var resourceUrl =  'api/_search/countries/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true}
        });
    }
})();
