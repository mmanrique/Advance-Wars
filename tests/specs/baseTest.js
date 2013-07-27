/*global QUnit */
define(function(require){
    var Base = require('interactives/Base');
    var Player = require('player');

    QUnit.module("Base module", {
        setup: function () {
            this.base = Object.create(Base);
        },
        teardown: function () {
        }
    });

    QUnit.test("Test we can create a Base",function(){
        QUnit.ok(this.base, 'a sprite Object is created');
    });
    QUnit.test('Test a Base has extended from bases ',function(){
        QUnit.ok(this.base.changeColor, 'Base has methods from base');
    });
    QUnit.test('Base is initialized as expected',function(){
        this.base.initialize(15,20,Player.RED);
        QUnit.equal(this.base.position.x,15,'Position X is initialized Correctly');
        QUnit.equal(this.base.position.y,20,'Position Y is initialized Correctly');
        QUnit.equal(this.base.size,1,'Size is initialized Correctly');
        QUnit.deepEqual(this.base.sprites,[],'Sprites is initialized Correctly');
        QUnit.equal(this.base.player,Player.RED,'Player is initialized Correctly');
        QUnit.equal(this.base.currentSprite,0,'Player is initialized Correctly');
    });
    QUnit.test('Changing the Player is changes the sprites and the Player object',function(){
        this.base.initialize(15,20,Player.RED);
        this.base.changeColor(Player.BLUE);
        QUnit.equal(this.base.player,Player.BLUE,'Player was changed to blue now');
        QUnit.equal(this.base.sprites, this.base.DEFAULT_SPRITES.BLUE,'Array of Sprites was changed')
    });
});
