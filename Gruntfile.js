module.exports = function(grunt) {

  grunt.initConfig({
    uglify: {
      my_target: {
        files: {
          'dist/js/output.min.js': ['src/js/bootstrap.min.js']
        }
      }
    },

    cssmin: {
      options: {
        mergeIntoShorthands: false,
        roundingPrecision: -1
      },
      target: {
        files: {
          'dist/css/style-min.css': ['src/css/bootstrap.min.css',
          'src/css/style.css'
          ]
        }
      }
    },

    responsive_images: {
      dev: {
        options: {
          engine: 'gm',
          sizes: [{
            name: '450w',
            width: 500,
            quality: 30
          }]
        },
        files: [{
          expand: true,
          src: ['*.{gif,jpg,png,jpeg}'],
          cwd: 'src/images/',
          dest: 'dist/images/'
        }]
      }
    },


    clean: ['dist/images/*']

  });
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.registerTask('image', ['clean', 'responsive_images']);
  grunt.registerTask('default', ['cssmin', 'uglify', 'clean', 'image']);
}
