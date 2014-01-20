module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      // build: {
      //   src: 'src/<%= pkg.name %>.js',
      //   dest: 'build/<%= pkg.name %>.min.js'
      // },
      libs: {
        files: {
          'lib/js/backbone/backbone.min.js': ['lib/js/backbone/backbone.js'],
          'lib/js/jquery/jquery.min.js': ['lib/js/jquery/jquery.js'],
          'lib/js/requirejs/require.min.js': ['lib/js/requirejs/require.js'],
          'lib/js/underscore/underscore.min.js': ['lib/js/underscore/underscore.js'],
          'lib/js/commonjs/common.min.js': ['lib/js/commonjs/common.js']
        }
        // files: [{
        //   expand: true,
        //   cwd: 'src/js',
        //   src: 'lib/js/**/*.js',
        //   dest: 'lib/min'
        // }]
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