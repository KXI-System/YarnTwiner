const fs = require('fs');

const infoFile = fs.readFileSync('twine/template.json', 'utf8');
const info = JSON.parse(infoFile);

const templateFile = fs.readFileSync('dist/index.html', 'utf8');
info.source = templateFile;

let versionString = process.argv.find(x => x.includes('v='));
if (versionString != null) {
    info.version = versionString.slice(2);
}

let format = `window.storyFormat(${JSON.stringify(info)});`;
let filenamedir = `docs/release/yarntwiner_${info.version}.js`;
fs.writeFileSync(filenamedir, format);
console.log('build complete at ' + filenamedir);
