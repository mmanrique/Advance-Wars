/*global QUnit, sinon */
define(function(require){
    var Map = require('map');

    QUnit.module("Map module", {
        setup: function () {
            this.map = Object.create(Map);
            this.canvas = document.getElementById('mapcanvas');
            this.mapTerrain = [];
            this.interactivesList = [];
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
    QUnit.test('Map initialize set custom variables values',function(){
        QUnit.stop();
        var qunit = QUnit;
        this.map.onload = function(){
            qunit.ok(true, 'Onload method was called');
            qunit.start();
        };
        this.map.initialize(this.canvas,this.mapTerrain,this.interactivesList,'AkilonWastes.jpg');
        QUnit.equal(this.map.canvas,this.canvas,'Canvas elements are the same');
        QUnit.equal(this.map.mapTerrainMatrix,this.mapTerrain,'mapTerrainMatrix Object is the same');
        QUnit.equal(this.map.interactivesList,this.interactivesList,'interactivesList is the same');
        QUnit.equal(this.map.tileHeight,15, 'Tile Height is calculated from canvas and the default HEIGHT');
        QUnit.ok(this.map.mapImage,'a map image object is created');
        QUnit.ok(this.map.mapImage.src,'The name of the map is saved Akilon Wastes');
    });
    QUnit.test('Map Render calls the renderBackground and renderInteractables',function(){
        this.map.initialize(this.canvas,this.mapTerrain,this.interactivesList,'Akilon Wastes');
        this.map.renderBackground = sinon.spy();
        this.map.renderInteractables = sinon.spy();
        this.map.render();
        QUnit.ok(this.map.renderBackground.called,'RenderBackground is called');
        QUnit.ok(this.map.renderInteractables.called,'renderInteractables is called')
    });
    QUnit.test('Render Background does calls to the canvas context',function(){
        this.map.initialize(this.canvas,this.mapTerrain,this.interactivesList,'AkilonWastes.jpg');
        var spy1 = sinon.spy(this.map.canvasContext,'clearRect');
        var spy2 = sinon.spy(this.map.canvasContext,'drawImage');
        this.map.renderInteractables = sinon.spy();
        this.map.render();
        QUnit.ok(spy1.called,'clear rect is caled');
        QUnit.ok(spy1.calledWith(0,0,300,150),  'Arguments are expected for ClearRect');
        QUnit.ok(spy2.called,'draw Image is called');
        QUnit.ok(spy2.calledWith(this.map.mapImage,0,0,240,160,0,0,300,150), 'Arguments are expected for drawImage');
    });
});
