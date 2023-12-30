const fs = require('fs-extra');
const path = require('path');

// ビルドディレクトリへのパス
const buildPath = path.join(__dirname, 'build');

// ファイルをコピーする
fs.copySync(path.join(__dirname, 'resource', 'deck.json'), path.join(buildPath, 'deck.json'));
