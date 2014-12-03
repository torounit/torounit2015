module.exports = (grunt) ->

  # ==================================
  #
  # Load Tasks.
  #
  # ==================================
  pkg = grunt.file.readJSON('package.json')

  for taskName of pkg.devDependencies
    grunt.loadNpmTasks taskName  if taskName.substring(0, 6) is 'grunt-'



  # ==================================
  #
  # Grunt Initalize.
  #
  # ==================================

  grunt.initConfig

    # ==================================
    #
    # Directory Setting.
    #
    # ==================================
    dir:
      assets: 'assets'
      coffee: '<%= dir.assets %>/src/scripts'
      javascripts: '<%= dir.assets %>/dist/scripts'
      vendor: 'vendor/assets/bower_components/'
      stylesheets: '<%= dir.assets %>/dist/styles'
      sass: '<%= dir.assets %>/src/styles'
      img: '<%= dir.assets %>/src/images'


    # ==================================
    #
    # Watch file.
    #
    # ==================================
    esteWatch: {
      options:
        dirs:[
          "./"
          '<%= dir.sass %>/**'
          '<%= dir.coffee %>/**'
          '!vendor/assets/**/**'
        ]
        extensions: ['scss','coffee','php']
        livereload:
          extensions: ['coffee','php',"scss"]
          enabled: true

      scss: (filepath) ->
        return ["sass:dev","autoprefixer"]

      coffee: (filepath) ->
        return ["browserify"]

    }

    # ==================================
    #
    # ftpush
    #
    # ==================================

    ftpush: {
      build: {
        auth: {
          host: 'torounit.com',
          port: 21,
          authKey: 'pass'
        },
        src: '',
        dest: '/wp-content/themes/torounit2015',
        exclusions: ['.*','node_modules/*','.sass-cache/']
        keep: [],
        simple: true,
        useList: false
      }
    }


    # ==================================
    #
    # grunt-githooks.
    #
    # ==================================

    githooks: {
      options: {
        dest: '.git/hooks',
        hashbang: '#!/bin/bash',
        template: './shell.hb',
        startMarker: '## GRUNT-GRUNTHOOKS START',
        endMarker: '## GRUNT-GRUNTHOOKS END'
      },
      setup: {
        'pre-push': 'deploy'
      }
    }



    # ==================================
    #
    # Sass
    #
    # ==================================


    sass: {
        options:
            sourceMap: true
            includePaths: [
              '<%= dir.vendor %>/compass-mixins/lib'
              '<%= dir.vendor %>/normalize-scss'

            ]
        dev:
            files:
                '<%= dir.assets %>/dist/styles/all.css': '<%= dir.assets %>/src/styles/all.scss'
            options:
              imagePath:  '../../src/images'


        dist:
            files:
                '<%= dir.assets %>/dist/styles/all.css': '<%= dir.assets %>/src/styles/all.scss'
            options:
              imagePath:  '../../dist/images'

    }

    autoprefixer:
      sourcemap:
          options: {
              map: true
          },
          src: '<%= dir.assets %>/dist/styles/all.css'


    # ==================================
    #
    # minify css.
    #
    # ==================================

    cssmin: {
      minify: {
        expand: true,
        cwd: '<%= dir.stylesheets %>',
        src: ['*.css', '!*.min.css'],
        dest: '<%= dir.stylesheets %>',
        ext: '.min.css'
      }
    }

    # ==================================
    #
    # browserify
    #
    # ==================================

    browserify:
      dist:
        files:
          '<%= dir.javascripts %>/all.js': ['<%= dir.coffee %>/all.coffee']
        options:
          transform: ['coffeeify', "browserify-shim", "debowerify" ]
          browserifyOptions:
            extensions: ['.coffee']
            debug: true


    # ==================================
    #
    # grunt-imagemin
    #
    # ==================================

    imagemin:
      dynamic:
        options:

          svgoPlugins: [{ removeViewBox: false }],

        files: [
          expand: true
          cwd: "<%= dir.assets %>/src/images/"
          src: ["**/*.{png,jpg,gif,svg}"]
          dest: "<%= dir.assets %>/dist/images/"
        ]

    # ==================================
    #
    # minify javascripts.
    #
    # ==================================
    uglify:
      compress:
        files:
          '<%= dir.javascripts %>/all.min.js': ['<%= dir.javascripts %>/all.js']


  # ==================================
  #
  # Register Task.
  #
  # grunt           - watch and Compile.
  # grunt build     - compile scss and javascript
  # grunt build:dist - complie assets for dist
  #
  # ==================================

  grunt.registerTask 'default', ['esteWatch']
  grunt.registerTask 'build', ["sass:dev","autoprefixer",'browserify']
  grunt.registerTask 'build:dist', ["sass:dist","autoprefixer", 'cssmin','browserify', "uglify", "imagemin"]
  grunt.registerTask 'deploy', ["build:dist","ftpush"]
