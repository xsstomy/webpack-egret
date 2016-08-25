const imagemin = require('imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminPngquant = require('imagemin-pngquant');
var path = require('path');

/* 压缩资源*/
imagemin([`resource/**/*.{jpg,png}`], `build/resource`, {
    plugins: [
        imageminMozjpeg(),
        imageminPngquant({quality: '65-80'})
    ]
}).then(files => {
    // console.log(files);
    //=> [{data: <Buffer 89 50 4e …>, path: 'build/images/foo.jpg'}, …]
});