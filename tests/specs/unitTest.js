/*global QUnit */
define(function(require){
    var Unit = require('unit');

    QUnit.module("Unit module", {
        setup: function () {
            this.unit = Object.create(Unit);
        },
        teardown: function () {
        }
    });

    QUnit.test("Test we can create a Unit",function(){
        QUnit.ok(this.unit, 'a Unit Object is created');
    });
    QUnit.test('Unit is initialized as expected',function(){
        this.unit.initialize(15,20);
        QUnit.equal(this.unit.position.x,15,'Position X is initialized Correctly');
        QUnit.equal(this.unit.position.y,20,'Position Y is initialized Correctly');
        QUnit.equal(this.unit.type,0,'Unit type is initialized Correctly');
        QUnit.equal(this.unit.config.standBySpriteMovementSpeed,0.2,'Config StandBy Sprite Movement is initialized Correctly');
        QUnit.equal(this.unit.config.selectedSpriteMovementSpeed,0.6,'Config selected Sprite Movement is initialized Correctly');
        QUnit.equal(this.unit.config.movingSpriteMovementSpeed,0.6,'Config moving Sprite Movement is initialized Correctly');
        QUnit.equal(this.unit.MOVEMENT.FOOT,1,'Moving by foot is initialized Correctly');
        QUnit.equal(this.unit.MOVEMENT.THREAD,2,'Moving by foot is initialized Correctly');
        QUnit.equal(this.unit.MOVEMENT.TIRES,3,'Moving by foot is initialized Correctly');
        QUnit.equal(this.unit.MOVEMENT.AIR,4,'Moving by foot is initialized Correctly');
    });
});
