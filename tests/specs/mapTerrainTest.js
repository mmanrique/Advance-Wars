/*global QUnit */
define(function(require){
    var MapTerrain = require('mapTerrain');

    QUnit.module("map Terrain module", {
        setup: function () {
            this.mapTerrain = Object.create(MapTerrain);
        },
        teardown: function () {
        }
    });

    QUnit.test("Test we can create a map Terrain Object",function(){
        QUnit.ok(this.mapTerrain, 'a map terrain Object is created');
    });
    QUnit.test("Test map Terrain object has defined properties",function(){
        this.mapTerrain.initialize('MAPTERRAINmATRIX');
        QUnit.equal(this.mapTerrain.terrainMatrix,'MAPTERRAINmATRIX','Terrain Matrix is saved');
        QUnit.equal(this.mapTerrain.TYPE.PLAIN,0,'Plain object is initialize correctly');
        QUnit.equal(this.mapTerrain.TYPE.WOOD,2,'Wood object is initialize correctly');
        QUnit.equal(this.mapTerrain.TYPE.MOUNTAIN,6,'Mountains object is initialize correctly');
        QUnit.equal(this.mapTerrain.TYPE.RIVER,1,'River object is initialize correctly');
        QUnit.equal(this.mapTerrain.TYPE.ROAD,7,'Road object is initialize correctly');
        QUnit.equal(this.mapTerrain.TYPE.BRIGE,8,'Bridge object is initialize correctly');
        QUnit.equal(this.mapTerrain.TYPE.CITY,9,'City object is initialize correctly');
        QUnit.equal(this.mapTerrain.TYPE.BASE,10,'Base object is initialize correctly');
        QUnit.equal(this.mapTerrain.TYPE.PORT,11,'Port object is initialize correctly');
        QUnit.equal(this.mapTerrain.TYPE.SHOAL,5,'Shoal object is initialize correctly');
        QUnit.equal(this.mapTerrain.TYPE.SEA,3,'Sea object is initialize correctly');
        QUnit.equal(this.mapTerrain.TYPE.REEF,4,'Reef object is initialize correctly');
    });
});
