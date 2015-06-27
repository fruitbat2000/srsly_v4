module.exports = function(grunt) {
  var path = require("path");
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    //jshint config
    jshint: {
      files: ['public/js/**/*.js', '!public/js/libs/*.js'],
      options: {
        ignores: ['public/js/bundle.js'],
        globals: {
          jQuery: true,
          console:true
        }
      }
    },

    webpack: {
      build: {
        entry: './public/js/app.js',
        output: {
          path: './public/js/',
          filename: 'bundle.js'
        },
        debug: true,
        stats: {
          colors: true,
          reasons: true
        },
        module: {
          loaders: [
            { test: /\.jsx$/, loader: "jsx-loader?harmony"},
            { test: /\.json$/, loader: "json-loader"}
          ]
        },
        resolve: {
          extensions: ["", ".js", ".jsx"],
          root: [path.join(__dirname, "public", "js")],
          modulesDirectories: ["node_modules"]
        },
        resolveLoader: {
          root: path.join(__dirname, "node_modules")
        }
      }
    },

    //less
    less: {
      development: {
        options: {
          compress: true,
          yuicompress: true,
          optimization: 2,
          plugins: [
            new (require('less-plugin-autoprefix'))({browsers: ["last 2 versions"]}),
            new (require('less-plugin-clean-css'))({advanced: true})
          ]
        },
        files: {
          "public/css/main.css": "public/less/main.less"
        }
      }
    },

    //watch
    watch: {
      styles: {
        files: ['public/less/**/*.less'],
        tasks: ['less']
      },
      scripts: {
        files: ['public/js/**/*.js'],
        tasks: ['jshint']
      },
      webpack: {
        files: ['public/js/**/*'],
        tasks: ['webpack'],
        options: {
          spawn: false
        }
      }
    }
  });

  //load modules
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-webpack');


  //default task
  grunt.registerTask('default', ['jshint', 'less', 'webpack']);

  //other tasks
  grunt.registerTask('styles', 'less');
  grunt.registerTask('test', 'jshint');
};