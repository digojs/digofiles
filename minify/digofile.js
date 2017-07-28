var digo = require("digo");

exports.build = function() {
	var list = digo.src("*", "!.*", "!digofile.js");
    list.src("*.js").pipe("digo-uglify-js");
	list.src("*.css").pipe("digo-clean-css");
	list.dest("_build");
};

exports.default = function() {
    digo.watch(exports.build);
};