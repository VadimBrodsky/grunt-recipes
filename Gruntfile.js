module.exports = function(grunt) {
  grunt.initConfig({
    postcss: {
      options: {
        map: true, // inline sourcemaps

        // or
        map: {
            inline: false, // save all sourcemaps as separate files...
            annotation: 'build/css' // ...to the specified directory
        },

        processors: [
          require('pixrem')(), // add fallbacks for rem units
          require('autoprefixer-core')({
            // add vendor prefixes
            // https://github.com/ai/browserslist#queries
            // browsers: 'last 2 versions'
            // browsers: 'last 5 versions'
            // browsers: '> 5%'
            // browsers: 'IE 8'
            browsers: '> 1%, last 2 versions, Firefox ESR, Opera 12.1'
          }),
          // require('cssnano')() // minify the result
        ]
      },
      dist: {
        src: 'build/css/*.css'
      }
    },
    sass: {                              // Task
      dist: {                            // Target
        options: {                       // Target options
          style: 'expanded'
        },
        files: {                         // Dictionary of files
          'build/css/style.css': 'src/sass/style.sass',       // 'destination': 'source'
        }
      }
    },
    watch: {
      styles: {
        files: ['src/sass/style.css'],
        tasks: ['sass', 'postcss']
      }
    }
  });

  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');

  grunt.registerTask('speak', function() {
    console.log("I'm speaking");
  });

  grunt.registerTask('default', ['speak']);
};
