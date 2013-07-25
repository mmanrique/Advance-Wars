/*global QUnit */
define(function(require){
    var Player = require('player');

    QUnit.module("player module", {
        setup: function () {
            this.player = Object.create(Player);
        },
        teardown: function () {
        }
    });

    QUnit.test("Test we can create a Player",function(){
        QUnit.ok(this.player, 'a sprite Object is created');
    });
});
