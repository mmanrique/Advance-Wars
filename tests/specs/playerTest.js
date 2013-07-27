/*global QUnit */
define(function(require) {
    var Player = require('player');

    QUnit.module("player module", {
        setup: function() {
            this.player = Object.create(Player);
        },
        teardown: function() {
        }
    });
    QUnit.test("Test we can create a Player", function() {
        QUnit.ok(this.player, 'a Playe Object is created');
    });
    QUnit.test("Test Player properties are initialized", function() {
        QUnit.equal(this.player.EMPTY, 0, 'Empty is created');
        QUnit.equal(this.player.RED, 1, 'Red is created');
        QUnit.equal(this.player.GREEN, 2, 'Green is created');
        QUnit.equal(this.player.BLUE, 3, 'Blue is created');
        QUnit.equal(this.player.YELLOw, 4, 'Yellow is created');
    });
});
