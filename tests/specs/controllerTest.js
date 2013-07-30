/*global QUnit*/
define(function(require){
    var controller = require('controller');

    QUnit.module("controller  module", {
        setup: function () {
            this.controller = Object.create(controller);
        },
        teardown: function () {
        }
    });
    QUnit.test("Test we can create a Controller",function(){
        QUnit.ok(this.controller, 'a controller Object is created');
    });
    QUnit.test('Test a controller has the appropiate Methods',function(){
        QUnit.ok(this.controller.render, 'controller has a render methode');
        QUnit.ok(this.controller.keyBoardHandler, 'controller has a keyboardHandler');
    });
    QUnit.test('Initialize takes a map and sets the map to an instance variable',function(){
        this.controller.initialize('MAP');
        QUnit.equal(this.controller.map,'MAP','map in the controller is saved, controller is now attached to that map')
    });

    //TODO: Fill in with Map tests after mapTest.js is finished
});
