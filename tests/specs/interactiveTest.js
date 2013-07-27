/*global QUnit */
define(function(require){
    var Interactive = require('interactive');
    var Player = require('player');

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
        this.interactive.initialize(15,20,Player.RED);
        QUnit.equal(this.interactive.position.x,15,'Position X is initialized Correctly');
        QUnit.equal(this.interactive.position.y,20,'Position Y is initialized Correctly');
        QUnit.equal(this.interactive.size,1.20,'Size is initialized Correctly');
        QUnit.deepEqual(this.interactive.sprites,this.interactive.DEFAULT_SPRITES.RED,'Sprites is initialized Correctly');
        QUnit.equal(this.interactive.player,Player.RED,'Player is initialized Correctly');
        QUnit.equal(this.interactive.currentSprite,0,'Player is initialized Correctly');
    });
    QUnit.test('Changing the Player, changes the sprites and the Player object',function(){
        this.interactive.initialize(15,20,Player.RED);
        this.interactive.changeColor(Player.BLUE);
        QUnit.equal(this.interactive.player,Player.BLUE,'Player was changed to blue now');
        QUnit.equal(this.interactive.sprites, this.interactive.DEFAULT_SPRITES.BLUE,'Array of Sprites was changed')
    });
});
