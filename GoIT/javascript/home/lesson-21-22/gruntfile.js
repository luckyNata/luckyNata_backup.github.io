module.exports = function(grunt) {

require('load-grunt-tasks')(grunt); 

grunt.initConfig({
  babel: {
    options: {
      sourceMap: false,
      presets: ['babel-preset-es2015']
    },
    dist: {
      files: [{
        expand: true,
        cwd: 'js/src',//родительский путь, где ищем
        src: ['*.js'],//какие файлы
        dest: 'js/dist',//куда сохраняем
        ext: '.js',
        extDot: 'first'
      }]
    }
  },

  watch: {
    babel:{
       files: ['js/src/*.js'],
       tasks: ['babel'],
    },
  }
});

grunt.loadNpmTasks('grunt-contrib-watch');
grunt.registerTask('default', ['babel']);

};