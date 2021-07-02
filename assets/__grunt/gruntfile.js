// jshint esversion: 9

/**
 * Grunt tasks configuration file.
 *
 * @link http://gruntjs.com/
 */

module.exports = (grunt) => {
    grunt.initConfig({

        /**
         * Package definitions.
         */
        pkg: grunt.file.readJSON("package.json"),


        /**
         * Banner to be printed to all processed files.
         */
        fileBanner:
            "/**\n" +
            " * <%= pkg.name %> v<%= pkg.version %> [<%= grunt.template.today(\"yyyy-mm-dd\") %>]\n" +
            " *\n" +
            " * <%= pkg.description %>\n" +
            " *\n" +
            " * Package    <%= pkg.package %>\n" +
            " * Subpackage <%= pkg.subPackage %>\n" +
            " * Version    <%= pkg.version %>\n" +
            " * Author     <%= pkg.author.name %> <<%= pkg.author.email %>>\n" +
            " * Copyright  <%= pkg.copyright %>\n" +
            " * License    <%= pkg.license %> License\n" +
            " * Link       <%= pkg.homepage %>\n" +
            " */\n\n",


        /**
         * Script files validation.
         *
         * @link https://github.com/gruntjs/grunt-contrib-jshint
         */
        jshint: {
            files: [ "gruntfile.js", "../scripts/**/*.js" ],
            options: {
                jshintrc: true,
                globals: {
                    window: false,
                    document: false,
                    $: false,
                    jQuery: false
                },
                validthis: true
            }
        },


        /**
         * Script files validation/minification.
         *
         * @link https://github.com/gruntjs/grunt-contrib-uglify
         */
        uglify: {
            options: {
                mangle: false,
                compress: true,
                sourceMap: true,
                sourceMapName: "../min/jdmlabs.js.map",
                output: {
                    comments: false,
                    quote_style: 2
                }
            },

            public: {
                files: {
                    "../min/scripts.js": [
                        // "../scripts/methods.js",
                        // "../scripts/vendor/*.js",
                        // "../scripts/component/*.js",
                        "../scripts/scripts.js"
                    ]
                }
            }
        },


        /**
         * Dart Sass.
         *
         * @link https://www.npmjs.com/package/grunt-dart-sass
         */
        "dart-sass": {
            public: {
                options: {
                    sourceMap: true,
                    outputStyle: "compressed"
                },
                files: {
                    "../min/styles.css": "../styles/styles.scss"
                }
            }
        },


        /**
         * Add custom banner to processed files.
         *  - postion: "bottom", "top", "replace"
         *
         * @link https://github.com/mattstyles/grunt-banner
         */
        usebanner: {
            dist: {
                options: {
                    position: "replace",
                    replace: true,
                    banner: "<%= fileBanner %>" /* Defined above ^ */,
                    linebreak: true
                },
                files: {
                    src: [ "../min/*.css", "../min/*.js" ]
                }
            }
        },


        /**
         * Run tasks whenever watched files change.
         *
         * @link https://github.com/gruntjs/grunt-contrib-watch
         */
        watch: {
            options: {
                reload: true,
                spawn: false
            },

            grunt: {
                files: [ "gruntfile.js" ]
            },

            scss: {
                files: [ "../styles/**/*.scss" ],
                tasks: [ "dart-sass", "usebanner" ]
            },

            scripts: {
                files: [ "../scripts/**/*.js" ],
                tasks: [ "jshint", "uglify", "usebanner" ]
            }
        }
    });


    /**
     * Load NPM task modules.
     */
    grunt.loadNpmTasks("grunt-banner");
    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-dart-sass");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-notify");


    /**
     * Register task(s).
     */
    grunt.registerTask("default", [ "watch" ]);
};

/* <> */
