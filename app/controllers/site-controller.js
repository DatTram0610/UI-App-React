const path = require('path');

module.exports = siteController;

function siteController() {

    return {
        getSite: getSite
    }

    function getSite(req, res) {
        res.sendFile('public/index.html', {
            root: path.join(__dirname, '../..')
        });
    };
}