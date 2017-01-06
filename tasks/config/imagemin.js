module.exports = function(grunt) {

    grunt.config.set('imagemin', {
        dynamic: { // Another target
            files: [{
                expand: true, // Enable dynamic expansion
                cwd: 'assets/images', // Src matches are relative to this path
                src: ['**/*.{png,jpg,gif}'], // Actual patterns to match
                dest: '.tmp/public/images' // Destination path prefix
            }]
        }
    });

    grunt.loadNpmTasks('grunt-contrib-imagemin');
};
