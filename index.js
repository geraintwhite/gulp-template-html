var through = require('through2'),
    gutil = require('gulp-util'),
    Templator = require('template-html'),
    PluginError = gutil.PluginError;


const PLUGIN_NAME = 'gulp-template-html';

function gulpTemplator (options) {

  var templator = new Templator(options);

  function process (file, enc, cb) {
    if (file.isStream()) {
      this.emit('error', new PluginError(PLUGIN_NAME, 'Streams aren\'t supported'));
    }

    if (file.isBuffer()) {
      content = templator.processContent(file.contents.toString(enc));
      file.contents = new Buffer(content, enc);
    }

    cb(null, file);
  }

  return through.obj(process);
}

module.exports = gulpTemplator;