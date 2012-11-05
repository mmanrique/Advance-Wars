//map only displays 15 width*10 height
define([], function() {
	var MapTerrain = function(terrainMatrix) {
			this.terrainMatrix = terrainMatrix;
		};
	MapTerrain.PLAIN = 0;
	MapTerrain.WOOD = 2;
	MapTerrain.MOUNTAIN = 6;
	MapTerrain.RIVER = 1;
	MapTerrain.ROAD = 7;
	MapTerrain.BRIGE = 8;
	MapTerrain.CITY = 9;
	MapTerrain.BASE = 10;
	MapTerrain.PORT = 11;
	MapTerrain.SHOAL = 5;
	MapTerrain.SEA = 3;
	MapTerrain.REEF = 4;
	return MapTerrain;

});