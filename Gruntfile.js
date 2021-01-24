module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: ['build'],
    copy: {
      build: {
        files: [{
          expand: true,
          cwd: 'app',
          src: ['img/*', 'css/*'],
          dest: 'build/'
        }]
      }
    },
    bake: {
      build: {
        options: {
          content: {
            // api: 'http://localhost:3000'
            api: 'https://wips-be.herokuapp.com'
          },
          removeUndefined: false
        },
        files: [{
          expand: true,
          cwd: 'app',
          src: ['**/*.html', '**/*.js'],
          dest: 'build/'
        }]
      }
    }
  });

  grunt.loadNpmTasks('grunt-bake');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');

  // Default task(s).
  grunt.registerTask('default', ['clean', 'copy', 'bake']);
};
