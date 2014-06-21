var hyperspace = require('hyperspace');
var fs = require('fs');
var html = fs.readFileSync(__dirname + '/msg.html', 'utf8');

module.exports = function () {
    return hyperspace(html, function (row) {
        return {
            '.time': row.key.split('!')[1],
            '.who': row.value.who,
            '.body': row.value.message
        };
    });
};
