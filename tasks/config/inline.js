/**
 * `coffee`
 *
 * ---------------------------------------------------------------
 *
 * Compile CoffeeScript files located in `assets/js` into Javascript
 * and generate new `.js` files in `.tmp/public/js`.
 *
 * For usage docs see:
 *   https://github.com/gruntjs/grunt-contrib-coffee
 *
 */
module.exports = function(grunt) {

    grunt.config.set('inline', {
        dist: {
            options: {
                cssmin: true,
                uglify: true
            },
            src: '.tmp/public/index.html'
        }
    });

    grunt.loadNpmTasks('grunt-inline');
};
