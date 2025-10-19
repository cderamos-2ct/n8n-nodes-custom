const { src, dest } = require('gulp');

function copyIcons() {
  return src('*.svg')
    .pipe(dest('dist'));
}

exports['build:icons'] = copyIcons;
exports.default = copyIcons;

