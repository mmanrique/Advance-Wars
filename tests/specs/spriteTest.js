/*global QUnit */
define(function(require){
    var Sprite = require('sprite');

    QUnit.module("loader module", {
        setup: function () {
            this.sprite = new Sprite();
        },
        teardown: function () {
        }
    });

    QUnit.test("Test we can create a Sprite",function(){
        QUnit.ok(this.sprite, 'a sprite Object is created');
    });
    QUnit.test("Test Sprite has defined properties",function(){
        QUnit.expect(4);
        QUnit.deepEqual(this.sprite.position.x, 0, 'Position X is 0');
        QUnit.deepEqual(this.sprite.position.y, 0, 'Position y is 0');
        QUnit.deepEqual(this.sprite.width, 0, 'width is 0');
        QUnit.deepEqual(this.sprite.height, 0, 'height is 0');
    });
});
