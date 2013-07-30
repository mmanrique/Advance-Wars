/*global QUnit */
define(function(require){
    var Map = require('map');

    QUnit.module("Unit module", {
        setup: function () {
            this.map = Object.create(Map);
        },
        teardown: function () {
        }
    });

    QUnit.test("Test we can create a map",function(){
        QUnit.ok(this.map, 'a Map object is created');
    });
    QUnit.test('Test the map has the correct methods',function(){
        QUnit.ok(this.map.initialize, 'Initialize method is created');
        QUnit.ok(this.map.render, 'render Method is created');
        QUnit.ok(this.map.renderBackground, 'renderBackground Method is created');
        QUnit.ok(this.map.renderInteractables, 'renderInteractables Method is created');
        QUnit.ok(this.map.onload, 'onload Method is created');
        QUnit.ok(this.map.moveLeft, 'moveLeft Method is created');
        QUnit.ok(this.map.moveDown, 'moveDown Method is created');
        QUnit.ok(this.map.moveUp, 'moveUp Method is created');

    });
});
