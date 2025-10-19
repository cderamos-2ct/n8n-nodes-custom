const { src, dest } = require('gulp');

function copyIcons() {
  return src('nodes/**/*.svg')
    .pipe(dest('dist'));
}

function copyCredentialIcons() {
  return src('credentials/*.svg')
    .pipe(dest('dist/credentials'));
}

exports['build:icons'] = copyIcons;
exports['build:credential-icons'] = copyCredentialIcons;
exports.default = copyIcons;

