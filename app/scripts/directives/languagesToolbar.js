'use strict';

angular.module('pguPlayApp').controller('languagesToolbarCtrl', //
    ['$scope', 'LanguagesSrv', //
        function($scope, LanguagesSrv) { //

    var languages = LanguagesSrv.getLanguages();

    $scope.underscore = _;
    $scope.nbCellsByRow = 2;
    $scope.languageLevels = [];

    var Option = function(lgNode, idx) {
        this.getOption = function() { return lgNode; };
        this.getIdx = function() { return idx; };
        this.isSelected = false;
    };

    var convertToOptions = function(lgNodes, idx) {
        return _.map(lgNodes, function(lgNode) {
            return new Option(lgNode, idx);
        });
    };

    var initLanguages = function() {
        var roots = _.filter(languages, function(lg) {
            return !_.contains(lg.getKey(), '|');
        });

        var rootOptions = convertToOptions(roots, $scope.languageLevels.length);
        $scope.languageLevels.push(rootOptions);
    };

    initLanguages();

    $scope.selectLanguage = function(languageOption) { // option is an item of a level

        //
        // clean other selection
        //
        // - clean sub-sub-levels <=> keep first levels only
        $scope.languageLevels = _.first($scope.languageLevels, languageOption.getIdx ()+ 1);

        // - deselect adjacent level
        _.each($scope.languageLevels[languageOption.getIdx()], function(option) {
           option.isSelected = false;
        });

        //
        // select
        //
        languageOption.isSelected = true;

        // get the sub-level
        var baseKey = languageOption.getOption().getKey() + '|';

        var directSubLanguages = _.filter(languages, function(lg) {
            if (lg.getKey().indexOf(baseKey) !== -1) { // <!> _.contains does not work with 'xxx|' <!>

                var isDirectSubLanguage = lg.getKey().replace(baseKey, '').indexOf('|') === -1;
                return isDirectSubLanguage;
            }
            return false;
        });

        if (_.isEmpty(directSubLanguages)) { // it's a leaf
            $scope.selectedLanguage = languageOption.getOption();

        } else { // new level
            $scope.selectedLanguage = null;

            var languageSubLevel = convertToOptions(directSubLanguages, $scope.languageLevels.length);
            $scope.languageLevels.push(languageSubLevel);

            if (_.size(languageSubLevel) === 1) { // there is only one option, let's select it automatically
                $scope.selectLanguage(languageSubLevel[0]);
            }
        }

    };

}]);

angular.module('pguPlayApp').directive('languagesToolbar', function() {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'views/directives/languagesToolbar.html',
        scope: {
            selectedLanguage: '='
        },
        controller: 'languagesToolbarCtrl'
    };
});
