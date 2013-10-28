'use strict';

angular.module('pguPlayApp').factory('lunrSrv',
    [ 'hlp',
        function (hlp) {

    var indices = {};

    return {
        isAvailable: function(key) {
            return _.has(indices, key);
        },
        addIndex: function(data, cfg, key) {

            if (_.has(indices, key)) {
                return;
            }

            var wrap = hlp.newItemWrapper(cfg);

            var index = lunr(function() {
                this.field('body');
                this.ref('id');
            });

            _.each(data, function(entry, idx) {
                var words = []
                            .concat(wrap.getKey(entry))
                            .concat(wrap.getValues(entry));

                var body = words.join(' ');

                index.add({
                   id: idx,
                   body: body
                });
            });

            indices[key] = {
                lunrIdx: index,
                data: data,
                cfg: cfg
            };
        },
        search: function(key, query) {

            if (!_.has(indices, key)) {
                return [];
            }

            if (!query) {
                return indices[key].data;
            }

            var lunrIdx = indices[key].lunrIdx;
            var results = lunrIdx.search(query);

            var data = indices[key].data;

            return _.map(results, function(r) {
                        return data[r.ref];
                    });
        }
    };

}]);