/**
 * Created by dx.yang on 15/3/15.
 */


var express = require('express');

function devServer() {
    var app = express();

    app.get('/api/test', function(req, res) {
        res.send(200, 1)
    });


    return app;
}

module.exports = devServer;
