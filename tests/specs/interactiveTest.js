/*global QUnit */
define(function(require){
    var Interactive = require('interactive');

    QUnit.module("Interactive module", {
        setup: function () {
            this.interactive = Object.create(Interactive);
        },
        teardown: function () {
        }
    });

    QUnit.test("Test we can create a Sprite",function(){
        QUnit.ok(this.interactive, 'a sprite Object is created');
    });
    QUnit.test('Interactive is initialized as expected',function(){
        this.interactive.initialize(15,20,'RED');
        QUnit.equal(this.interactive.position.x,15,'Position X is initialized Correctly');
        QUnit.equal(this.interactive.position.y,20,'Position Y is initialized Correctly');
        QUnit.equal(this.interactive.size,1.20,'Size is initialized Correctly');
        QUnit.deepEqual(this.interactive.sprites,[],'Sprites is initialized Correctly');
        QUnit.equal(this.interactive.player,'RED','Player is initialized Correctly');
        QUnit.equal(this.interactive.currentSprite,0,'Player is initialized Correctly');
    });
});
