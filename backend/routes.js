const { tryy } = require("./controllers/pages");

module.exports = function(app) {
    app.get('/', tryy);
    app.get('/product', tryy);
    app.get('/about', tryy);
}