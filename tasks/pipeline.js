/**
 * grunt/pipeline.js
 *
 * The order in which your css, javascript, and template files should be
 * compiled and linked from your views and static HTML files.
 *
 * (Note that you can take advantage of Grunt-style wildcard/glob/splat expressions
 * for matching multiple files, and ! in front of an expression to ignore files.)
 *
 * For more information see:
 *   https://github.com/balderdashy/sails-docs/blob/master/anatomy/myApp/tasks/pipeline.js.md
 */


// CSS files to inject in order
//
// (if you're using LESS with the built-in default config, you'll want
//  to change `assets/styles/importer.less` instead.)
var cssFilesToInject = [
    'bootstrap/css/bootstrap.min.css',
    'styles/linea.css',
    'styles/ionicons.min.css',
    'styles/waves.min.css',
    'styles/owl.carousel.css',
    'styles/aos.css',
    'styles/style.css',
];


// Client-side javascript files to inject in order
// (uses Grunt-style wildcard/glob/splat expressions)
var jsFilesToInject = [

    // Load sails.io before everything else
    // 'js/dependencies/sails.io.js',
    'js/dependencies/jquery.min.js',
    'js/dependencies/smooth-scroll.min.js',
    'js/dependencies/jquery.shuffle.min.js',
    'js/dependencies/waves.min.js',
    'js/dependencies/owl.carousel.min.js',
    'js/dependencies/validator.min.js',
    'js/dependencies/aos.js',

    // All of the rest of your client-side js files
    // will be injected here in no particular order.
    'js/script.js',
];


// Client-side HTML templates are injected using the sources below
// The ordering of these templates shouldn't matter.
// (uses Grunt-style wildcard/glob/splat expressions)
//
// By default, Sails uses JST templates and precompiles them into
// functions for you.  If you want to use jade, handlebars, dust, etc.,
// with the linker, no problem-- you'll just want to make sure the precompiled
// templates get spit out to the same file.  Be sure and check out `tasks/README.md`
// for information on customizing and installing new tasks.
var templateFilesToInject = [
    'templates/**/*.html'
];







// Default path for public folder (see documentation for more information)
var tmpPath = '.tmp/public/';

// Prefix relative paths to source files so they point to the proper locations
// (i.e. where the other Grunt tasks spit them out, or in some cases, where
// they reside in the first place)
module.exports.cssFilesToInject = cssFilesToInject.map(function(cssPath) {
    // If we're ignoring the file, make sure the ! is at the beginning of the path
    if (cssPath[0] === '!') {
        return require('path').join('!.tmp/public/', cssPath.substr(1));
    }
    return require('path').join('.tmp/public/', cssPath);
});
module.exports.jsFilesToInject = jsFilesToInject.map(function(jsPath) {
    // If we're ignoring the file, make sure the ! is at the beginning of the path
    if (jsPath[0] === '!') {
        return require('path').join('!.tmp/public/', jsPath.substr(1));
    }
    return require('path').join('.tmp/public/', jsPath);
});
module.exports.templateFilesToInject = templateFilesToInject.map(function(tplPath) {
    // If we're ignoring the file, make sure the ! is at the beginning of the path
    if (tplPath[0] === '!') {
        return require('path').join('!assets/', tplPath.substr(1));
    }
    return require('path').join('assets/', tplPath);
});
