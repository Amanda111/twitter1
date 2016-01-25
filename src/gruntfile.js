 module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
   
    sass: {                              // Task
      dist: {                            // Target
        options: {                       // Target options
          style: 'expanded'
        },
        files: {                         // Dictionary of files
          '../static/css/twitter.css': './sass/twitter.scss'       // 'destination': 'source'
        }
      }
    },
    watch: {
      files: ['./sass/twitter.scss','./package.json'],
      //tasks: ['sass']
    },
    jshint: {
      files: ['Gruntfile.js', 'src/js/twitter.js', 'test/js/twitter.js'],
      options: {
        globals: {
          jQuery: true
        }
      }
    },
    // watch: {
    //   files: ['<%= jshint.files %>'],
    //   tasks: ['jshint']
    // }
 });


    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks( 'grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.registerTask('default', ['sass','watch']);

};

