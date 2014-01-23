require.config({
  enforceDefine: true,
  paths: {
    jquery: '../lib/js/jquery/jquery.min',
    backbone: '../lib/js/backbone-amd/backbone.min',
    underscore: '../lib/js/underscore-amd/underscore.min'
  },
  shim: {
    "underscore": {
      deps: [],
      exports: "_"
    },
    "backbone": {
      deps: ["jquery", "underscore"],
      exports: "Backbone"
    }
  }
});

define(["app"], function(app){
});