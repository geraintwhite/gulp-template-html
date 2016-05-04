# gulp-template-html

[![NPM Version](https://img.shields.io/npm/v/gulp-template-html.svg)](https://www.npmjs.com/package/gulp-template-html)
[![Build Status](https://img.shields.io/travis/grit96/gulp-template-html.svg)](https://travis-ci.org/grit96/gulp-template-html)
[![Dependency Status](https://img.shields.io/david/grit96/gulp-template-html.svg)](https://david-dm.org/grit96/gulp-template-html)

Gulp plugin uses [template-html](https://github.com/grit96/template-html) to generate static HTML files from templates and content files.


## Installation

```sh
$ npm install gulp-template-html
```


## Gulpfile

```javascript
var gulp = require('gulp'),
    template = require('gulp-template-html');

gulp.task('default', function () {
    return gulp.src('content/*.html')
      .pipe(template('templates/template.html'))
      .pipe(gulp.dest('dist'));
});
```


## Example Usage

See the [examples](./examples) directory for an example of how to generate static HTML files from a template.


## How to contribute

1. File an issue in the repository, using the bug tracker, describing the
   contribution you'd like to make. This will help us to get you started on the
   right foot.
2. Fork the project in your account and create a new branch:
   `your-great-feature`.
3. Commit your changes in that branch.
4. Open a pull request, and reference the initial issue in the pull request
   message.


## License
See the [LICENSE](./LICENSE) file.
