const { src, dest } = require('gulp');

function copyIcons() {
  return src('nodes/**/*.svg')
    .pipe(dest('dist'));
}

function copyNodeIcons() {
  return src('nodes/MightyCall/*.svg')
    .pipe(dest('dist/nodes/MightyCall'));
}

function copyOnPrintShopIcons() {
  return src('nodes/OnPrintShop/*.svg')
    .pipe(dest('dist/nodes/OnPrintShop'));
}

function copyXPSShipIcons() {
  return src('nodes/XPSShip/*.svg')
    .pipe(dest('dist/nodes/XPSShip'));
}

function copyCredentialIcons() {
  return src('credentials/*.svg')
    .pipe(dest('dist/credentials'));
}

exports['build:icons'] = copyIcons;
exports['build:node-icons'] = copyNodeIcons;
exports['build:onprintshop-icons'] = copyOnPrintShopIcons;
exports['build:xps-icons'] = copyXPSShipIcons;
exports['build:credential-icons'] = copyCredentialIcons;
exports.default = copyIcons;

