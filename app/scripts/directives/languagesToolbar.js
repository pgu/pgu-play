'use strict';

angular.module('pguPlayApp').controller('languagesToolbarCtrl', //
    ['$scope', 'LanguagesSrv', 'hlp', //
        function($scope, LanguagesSrv, hlp) { //

    var languages = LanguagesSrv.getLanguages();

    $scope.underscore = _;
    $scope.nbCellsByRow = 2;
    $scope.languageLevels = [];
    $scope.hasSelectedLanguage = false;

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

    $scope.selectOption = function(languageOption) { // option is an item of a level

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
        var language = languageOption.getOption();

        $scope.onSetInfo({ info: language.getInfo() });

        // get the sub-level
        var baseKey = language.getKey() + '|';

        var directSubLanguages = _.filter(languages, function(lg) {
            if (lg.getKey().indexOf(baseKey) !== -1) { // <!> _.contains does not work with 'xxx|' <!>

                var isDirectSubLanguage = lg.getKey().replace(baseKey, '').indexOf('|') === -1;
                return isDirectSubLanguage;
            }
            return false;
        });

        if (_.isEmpty(directSubLanguages)) { // it's a leaf
            selectLanguage(language);

        } else { // new level
            selectLanguage(null);

            var languageSubLevel = convertToOptions(directSubLanguages, $scope.languageLevels.length);
            $scope.languageLevels.push(languageSubLevel);

            if (_.size(languageSubLevel) === 1) { // there is only one option, let's select it automatically
                $scope.selectOption(languageSubLevel[0]);

            } else {
                hlp.scrollToBottom();
            }
        }

    };

    function selectLanguage(language) {
        $scope.hasSelectedLanguage = !!language;
        $scope.onSelectLanguage({ language: language });
    }

}]);

angular.module('pguPlayApp').directive('languagesToolbar', function() {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'views/directives/languagesToolbar.html',
        scope: {
            selectedLanguage: '=', // TODO to remove
            onSelectLanguage: '&?',
            onSetInfo: '&?'
        },
        controller: 'languagesToolbarCtrl'
    };
});
