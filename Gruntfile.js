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
            baseUrl: grunt.option('baseUrl') || '',
            apiUrl: grunt.option('apiUrl') || 'https://wips-be.herokuapp.com'
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
    },
    relativeRoot: {
      build: {
        options: {
          root: 'build/'
        },
        files: [{
          expand: true,
          cwd: 'build/',
          src: ['**/*.html', '**/*.css'],
          dest: 'build/'
        }]
      }
    }
  });

  grunt.loadNpmTasks('grunt-bake');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-relative-root');

  // Default task(s).
  grunt.registerTask('default', ['clean', 'copy', 'bake', 'relativeRoot']);
};
