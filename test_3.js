//----------------------------------------------- 3
const imagen_QR = new Jimp('file');
imagen_QR.getBuffer('MIME_PNG', (err, buffer) => {return buffer});


function funcionCompleta (funcionQueHaceAlgoConElBuffer) {
    const buffer = //??????????
    funcionQueHaceAlgoConElBuffer(buffer);
}


// can you define a function that allows us to await the buffer?
// can you handle the err correctly?




