module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: ['build'],
    bake: {
      build: {
        files: [{
          expand: true,
          cwd: 'app',
          src: '**/*.html',
          dest: 'build/'
        }]
      }
    }
  });

  grunt.loadNpmTasks('grunt-bake');
  grunt.loadNpmTasks('grunt-contrib-clean');

  // Default task(s).
  grunt.registerTask('default', ['clean', 'bake']);
};
