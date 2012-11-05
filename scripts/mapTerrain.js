//map only displays 15 width*10 height
$(function(){
	AW.MapTerrain=function(terrainMatrix){
		
		this.terrainMatrix=terrainMatrix;
	};
	AW.MapTerrain.PLAIN=0;
	AW.MapTerrain.WOOD=2;
	AW.MapTerrain.MOUNTAIN=6;
	AW.MapTerrain.RIVER=1;
	AW.MapTerrain.ROAD=7;
	AW.MapTerrain.BRIGE=8;
	AW.MapTerrain.CITY=9;
	AW.MapTerrain.BASE=10;
	AW.MapTerrain.PORT=11;
	AW.MapTerrain.SHOAL=5;
	AW.MapTerrain.SEA=3;
	AW.MapTerrain.REEF=4;
});
