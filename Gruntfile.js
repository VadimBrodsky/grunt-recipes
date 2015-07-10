module.exports = function(grunt) {
  grunt.registerTask('speak', function() {
    console.log("I'm speaking");
  });

  grunt.registerTask('default', ['speak']);
};
