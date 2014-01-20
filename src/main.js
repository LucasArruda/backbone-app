require.config({
  paths: {
    jquery: '../lib/js/jquery/jquery-min',
    backbone: '../lib/js/backbone/backbone-min',
    underscore: '../lib/js/underscore/underscore-min',
    commonjs: '../lib/js/commonjs/common-min'
  },
    shim: {
        "underscore": {
            deps: [],
            exports: "_"
        },
        "backbone": {
            deps: ["jquery", "underscore"],
            exports: "Backbone"
        },
    }
});
require(['jquery', 'backbone', 'underscore', 'commonjs'], function (app, $) {
  'use strict';
  function ($, _, Backbone) {
    console.log("Test output");
    console.log("$: " + typeof $);
    console.log("_: " + typeof _);
    console.log("Backbone: " + typeof Backbone);
  }
});