var mozjpeg = require('imagemin-mozjpeg');

module.exports = function(grunt) {

    grunt.config.set('imagemin', {
        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'assets/images/', // Src matches are relative to this path
                    src: ['**/*.{png,jpg,gif}'], // Actual patterns to match
                    dest: '.tmp/public/images' // Destination path prefix
                }]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-imagemin');
};
