global.jsSourceFiles = [
  'src/js/util.js',
  'src/js/grid.js',
  'src/js/builder.js',
  'src/js/table.js',
  'src/js/plugin.js'
];

module.exports = function(grunt) {
  require('load-grunt-config')(grunt);
  require('time-grunt')(grunt);
};
