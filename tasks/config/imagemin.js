module.exports = function(grunt) {

    grunt.config.set('imagemin', {
        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'assets/images',
                    src: ['*.{png,jpg,gif}', '**/*.{png,jpg,gif}'],
                    dest: '.tmp/public/images'
                }]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-imagemin');
};
