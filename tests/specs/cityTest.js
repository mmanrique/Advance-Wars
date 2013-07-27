define(function(require){
    var city = require('interactives/City');
    var Player = require('player');

    QUnit.module("city module", {
        setup: function () {
            this.city = Object.create(city);
        },
        teardown: function () {
        }
    });
    QUnit.test("Test we can create a City",function(){
        QUnit.ok(this.city, 'a City Object is created');
    });
    QUnit.test('Test a City has extended from Interactives',function(){
        QUnit.ok(this.city.changeColor, 'City has methods from Interactive');
    });
    QUnit.test('City is initialized as expected',function(){
        this.city.initialize(15,20,Player.RED);
        QUnit.equal(this.city.position.x,15,'Position X is initialized Correctly');
        QUnit.equal(this.city.position.y,20,'Position Y is initialized Correctly');
        QUnit.equal(this.city.size,1.2,'Size is initialized Correctly');
        QUnit.deepEqual(this.city.sprites,this.city.DEFAULT_SPRITES.RED,'Sprites is initialized Correctly');
        QUnit.equal(this.city.player,Player.RED,'Player is initialized Correctly');
        QUnit.equal(this.city.currentSprite,0,'Player is initialized Correctly');
    });
});
