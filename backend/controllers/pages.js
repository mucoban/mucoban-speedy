const { query } = require('../db');
const path = require('path');
const fs = require('fs');

async function tryy(req, res, next) {
    renderPage(res, `${req.path}/index.html`)
}


async function renderPage(res ,page) {
        
    const dbContent = await query(`SELECT * FROM ttable limit 1`);

    const  filePath = path.join(__dirname, `../public/${page}`);

    fs.readFile(filePath, {encoding: 'utf-8'}, function(err, fileContent){
    if (!err) {
        // console.log('received data: ' + fileContent);
        
        const addToHeader = `<title>${dbContent?.[0].text}</title>`;
        const updatedFileContent = fileContent.replace('<head>', `<head>${addToHeader}`);

        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(updatedFileContent);
        res.end();
    } else {
        console.log(err);
        res.status(500).json('Error');
    }
    });
}

module.exports = {
    tryy
}

