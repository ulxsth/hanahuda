const fs = require('fs-extra');
const path = require('path');

// ビルドディレクトリへのパス
const buildPath = path.join(__dirname, 'build');

// フォルダをコピーする
fs.copySync(path.join(__dirname, 'resource'), path.join(buildPath, 'resource'));
