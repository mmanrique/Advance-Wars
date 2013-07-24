/*global QUnit */
define(function(require){
    var Loader = require('loader');

    QUnit.module("loader module", {
        setup: function () {
            this.loader = new Loader();
        },
        teardown: function () {
        }
    });

    QUnit.test("Test we can create a Loader",function(){
        var loader = new Loader();
        QUnit.ok(loader, 'a loader Object is created');
    });
    QUnit.test('Test Loader.loadResource can be called as static',function(){
        QUnit.ok(Loader.loadResources, 'Method exists in the static context');
    });
    QUnit.test('Test Loader.loadResource can be called as a method in the object ',function(){
        QUnit.ok(this.loader.loadResources, 'Method exists in the instnace context');
    });
    QUnit.test('Test Loader calls the callbackfunction',function(){
        QUnit.stop();
        var qunit = QUnit;
        this.loader.loadResources(function(){
            qunit.ok(true, 'Callback is called');
            qunit.start();
        }, '../sprites/AW1SpritesTransparent.png');
    });
});
