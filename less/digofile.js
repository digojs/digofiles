var digo = require("digo");

exports.build = function() {
    digo.src("*.less").pipe("digo-less").dest(".");
};

exports.default = function() {
    digo.watch(exports.build);
};