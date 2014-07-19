/*
 * qqfn
 * a project
 * Copyright (c) 2013 who are you
 */

'use strict';

module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        //connect
        connect: {
            options: {
                port: 9000,
                // change this to '0.0.0.0' to access the server from outside
                hostname: 'localhost',
                base: '.'
            },
            livereload: {
                options: {
                    middleware: function (connect, options) {
                        return [
                            require('connect-livereload')({
								port:35729
					     	}),
                            // Serve static files.
                            connect.static('.'),
                            // Make empty directories browsable.
                            connect.directory('.')
                        ];
                    }
                }
            },
        },
        watch: {
            allfiles: {
                files: ['*.html','css/**','js/**'],
                tasks: ['less:development','cssmin'],
				options:{
                    livereload: 35729
				}
            }
        },
		cssmin: {
            combine:{
                files:{
				    'goline/main.css' : ['css/main.css']
				}
			}
		},
		less : {
            development:{
                files:{
                    "css/main.css" : "css/main.less"
				}
			}
            
		},
		uglify:{
			my_target: {
			  files: {
				'goline/main.combo.js': ['test/dist/js/main.combo.js']
			  }
			},
			jquery:{
                files:{
                   'goline/jquery.js':['js/jquery.js']
			  }
			}
		}
    });
    // These plugins provide necessary tasks.
	grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('connect-livereload');
    grunt.loadNpmTasks('grunt-contrib-livereload');
    grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    
    grunt.registerTask('default', function () {
        grunt.task.run([ 'connect', 'watch']);
    });
    grunt.registerTask('goline', function () {
        grunt.task.run(['cssmin','uglify']);
    });
};
