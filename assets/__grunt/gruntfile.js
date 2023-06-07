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
            " * <%= pkg.name %> v<%= pkg.version %>\n" +
            " * <%= pkg.description %>\n\n" +
            " * Package    <%= pkg.package %>\n" +
            " * Version    <%= pkg.version %>\n" +
            " * Author     <%= pkg.author.name %> <<%= pkg.author.email %>>\n" +
            " * Copyright  <%= pkg.copyright %>\n" +
            " * License    <%= pkg.license %> License\n" +
            " * Link       <%= pkg.homepage %>\n" +
            " */\n",


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
                    window: true,
                    document: true,
                    $: false,
                    jQuery: false
                },
                validthis: true
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
                    sourceMap: false,
                    outputStyle: "compressed"
                },
                files: {
                    "../css/styles.css": "../styles/styles.scss"
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
                    src: [ "../css/styles.css", "../scripts/scripts.js" ]
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
                tasks: [ "dart-sass" ]
            },

            scripts: {
                files: [ "../scripts/scripts.js" ],
                tasks: [ "jshint" ]
            },

            banner: {
                files: [ "../css/styles.css", "../scripts/scripts.js" ],
                tasks: [ "usebanner" ]
            },
        }
    });


    /**
     * Load NPM task modules.
     */
    grunt.loadNpmTasks("grunt-banner");
    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-dart-sass");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-notify");


    /**
     * Register task(s).
     */
    grunt.registerTask("default", [ "watch" ]);
};

/* <> */
