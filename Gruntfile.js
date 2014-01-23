module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      libs: {
        files: {
          'lib/js/backbone-amd/backbone.min.js': ['lib/js/backbone-amd/backbone.js'],
          'lib/js/jquery/jquery.min.js': ['lib/js/jquery/jquery.js'],
          'lib/js/requirejs/require.min.js': ['lib/js/requirejs/require.js'],
          'lib/js/underscore-amd/underscore.min.js': ['lib/js/underscore-amd/underscore.js']
        }
      }
    },
    bower: {
   	  install: {

      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-bower-task');

  // Default task(s).
  grunt.registerTask('default', [ 'bower', 'uglify']);

};