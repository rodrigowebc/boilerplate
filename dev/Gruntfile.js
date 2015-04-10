module.exports = function(grunt) {
	
	grunt.initConfig({

	sass: {
	  dist: {
	    files: {
        '../css/style.css': 'scss/style.scss'
      }
    }
  },

  cssmin: {
    target: {
      files: {
        '../css/style.min.css': ['scss/style.scss']
      }
    }
  },

  watch: {
	  scripts: {
	    files: ['**/*.scss'],
	    tasks: ['sass', 'cssmin'],
	  },
	},

	});

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-watch');
	
	grunt.registerTask('default', ['watch']);
};