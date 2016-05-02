var test = require('tape'),
    gulp = require('gulp'),
    fs = require('fs'),
    through = require('through2'),
    template = require('./');


test('template process', function(t) {
  var expected = fs.readFileSync('examples/output.html').toString();

  gulp.src('examples/index.html')
    .pipe(template('examples/template.html'))
    .pipe(through.obj(function(file, enc) {

    var output = file.contents.toString(enc);

    t.equal(output, expected, 'processed content should match expected');
    t.end();
  }));
});
