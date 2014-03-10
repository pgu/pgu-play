exports.config = {

    baseUrl: 'http://localhost:9000/',

    seleniumAddress: 'http://localhost:4444/wd/hub',

    specs: ['e2e/**.js'],

    capabilities: {
        'browserName': 'chrome'
    },

//    https://github.com/angular/protractor/blob/master/referenceConf.js
    jasmineNodeOpts: {
        showColors: true // Use colors in the command line report.
    }

    // https://github.com/angular/protractor/blob/master/docs/api.md
    // https://github.com/angular/protractor/blob/master/docs/getting-started.md
    // https://github.com/angular/protractor/blob/master/spec/basic/findelements_spec.js
    // http://www.ng-newsletter.com/posts/practical-protractor.html

    // http://stackoverflow.com/questions/19066747/integrating-protractor-for-e2e-testing-with-yeoman-in-grunt-file-for-angular-j

};
