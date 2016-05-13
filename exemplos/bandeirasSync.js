'use strict';

var fs = require('fs');
var https = require('https');

var BASE_URL = ('https://upload.wikimedia.org/wikipedia/commons/thumb/');
var DESTINATION_FOLDER = './bandeiras/';

var pathsToFlags = [
    '8/88/Bandeira_de_Alagoas.svg/600px-Bandeira_de_Alagoas.svg.png',
    '4/4c/Bandeira_do_Acre.svg/500px-Bandeira_do_Acre.svg.png',
    '0/0c/Bandeira_do_Amapá.svg/1000px-Bandeira_do_Amapá.svg.png',
    '6/6b/Bandeira_do_Amazonas.svg/700px-Bandeira_do_Amazonas.svg.png',
    '2/28/Bandeira_da_Bahia.svg/1024px-Bandeira_da_Bahia.svg.png',
    '2/2e/Bandeira_do_Ceará.svg/720px-Bandeira_do_Ceará.svg.png',
    '4/43/Bandeira_do_Espírito_Santo.svg/1024px-Bandeira_do_Espírito_Santo.svg.png',
    '0/0e/Bandeira_de_Goiás.svg/1024px-Bandeira_de_Goiás.svg.png',
    '4/45/Bandeira_do_Maranhão.svg/1024px-Bandeira_do_Maranhão.svg.png',
    '0/0b/Bandeira_de_Mato_Grosso.svg/1024px-Bandeira_de_Mato_Grosso.svg.png',
    '6/64/Bandeira_de_Mato_Grosso_do_Sul.svg/1000px-Bandeira_de_Mato_Grosso_do_Sul.svg.png',
    'f/f4/Bandeira_de_Minas_Gerais.svg/600px-Bandeira_de_Minas_Gerais.svg.png',
    '0/02/Bandeira_do_Pará.svg/900px-Bandeira_do_Pará.svg.png',
    'b/bb/Bandeira_da_Paraíba.svg/1024px-Bandeira_da_Paraíba.svg.png',
    '9/93/Bandeira_do_Paraná.svg/1024px-Bandeira_do_Paraná.svg.png',
    '5/59/Bandeira_de_Pernambuco.svg/1000px-Bandeira_de_Pernambuco.svg.png',
    '3/33/Bandeira_do_Piauí.svg/1024px-Bandeira_do_Piauí.svg.png',
    '7/73/Bandeira_do_estado_do_Rio_de_Janeiro.svg/1000px-Bandeira_do_estado_do_Rio_de_Janeiro.svg.png',
    '3/30/Bandeira_do_Rio_Grande_do_Norte.svg/900px-Bandeira_do_Rio_Grande_do_Norte.svg.png',
    '6/63/Bandeira_do_Rio_Grande_do_Sul.svg/1000px-Bandeira_do_Rio_Grande_do_Sul.svg.png',
    'f/fa/Bandeira_de_Rondônia.svg/1024px-Bandeira_de_Rondônia.svg.png',
    '9/98/Bandeira_de_Roraima.svg/900px-Bandeira_de_Roraima.svg.png',
    '1/1a/Bandeira_de_Santa_Catarina.svg/595px-Bandeira_de_Santa_Catarina.svg.png',
    '2/2b/Bandeira_do_estado_de_São_Paulo.svg/780px-Bandeira_do_estado_de_São_Paulo.svg.png',
    'b/be/Bandeira_de_Sergipe.svg/1000px-Bandeira_de_Sergipe.svg.png',
    'f/ff/Bandeira_do_Tocantins.svg/1024px-Bandeira_do_Tocantins.svg.png',
    '3/3c/Bandeira_do_Distrito_Federal_%28Brasil%29.svg/1024px-Bandeira_do_Distrito_Federal_%28Brasil%29.svg.png'
];

function download(url) {
    var fileName = url.split('/').pop();
    var file = fs.createWriteStream(DESTINATION_FOLDER + fileName);
    (function (index) {
        console.log(index + ': ' + fileName + ' requested');
        https.get(url, function (response) {
            response.pipe(file);
            file.on('finish', function () {
                console.log('\t' + index + ': ' + fileName + ' saved');
                if ((index + 1) < pathsToFlags.length) {
                    var seqControl = {i: index + 1};
                    var newDownload = download.bind(seqControl);
                    newDownload(BASE_URL + pathsToFlags[seqControl.i]);
                }
            });
        });
    }(this.i))
};

if (!fs.existsSync(DESTINATION_FOLDER)) {
    fs.mkdirSync(DESTINATION_FOLDER);
}

console.time('timeElapsed');

var seqControl = {i: 0};
var newDownload = download.bind(seqControl);
newDownload(BASE_URL + pathsToFlags[seqControl.i]);


process.on('exit', function () {
    console.timeEnd('timeElapsed');
});