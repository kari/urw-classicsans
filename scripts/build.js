var fs = require('node:fs');

var bent = require('bent');
var ttf2woff2 = require('ttf2woff2');
const getBuffer = bent('buffer');

var sources = [
    'https://git.ghostscript.com/?p=ghostpdl.git;a=blob;f=pcl/urwfonts/URWClassicSans-Bold.ttf;h=2bf500f36f6a45370ad9fcf58c35b0b650ac1b53;hb=6f1da3c990ab7de4c3218bf8beff21f19449b284',
    'https://git.ghostscript.com/?p=ghostpdl.git;a=blob;f=pcl/urwfonts/URWClassicSans-BoldItalic.ttf;h=619cc9fde71b84c44bb8fc4beec45a4f256668ce;hb=6f1da3c990ab7de4c3218bf8beff21f19449b284',
    'https://git.ghostscript.com/?p=ghostpdl.git;a=blob;f=pcl/urwfonts/URWClassicSans-Regular.ttf;h=c25062f7ca5c295533e9e3acff41e5d605c796d4;hb=6f1da3c990ab7de4c3218bf8beff21f19449b284',
    'https://git.ghostscript.com/?p=ghostpdl.git;a=blob;f=pcl/urwfonts/URWClassicSans-RegularIt.ttf;h=a3644a98a54ed622119d191e0b71f9d8a42fcafc;hb=6f1da3c990ab7de4c3218bf8beff21f19449b284'
];

var files = [
    './files/URWClassicSans-Bold.ttf',
    './files/URWClassicSans-BoldItalic.ttf',
    './files/URWClassicSans-Regular.ttf',
    './files/URWClassicSans-RegularIt.ttf',
];


(async function main() {
for (let i = 0; i < sources.length; i++) {
    let f = files[i];
    let s = sources[i];
    
    let ttf = await getBuffer(s);

    fs.writeFileSync(f, ttf)
    fs.writeFileSync(f.replace("ttf", "woff2"), ttf2woff2(ttf));
}
})();