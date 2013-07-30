//map only displays 15 width*10 height
define([], function() {
    return {
        terrainMatrix:{},
        TYPE:{
            PLAIN : 0,
            WOOD : 2,
            MOUNTAIN : 6,
            RIVER : 1,
            ROAD : 7,
            BRIGE : 8,
            CITY : 9,
            BASE : 10,
            PORT : 11,
            SHOAL : 5,
            SEA : 3,
            REEF : 4
        },
        initialize:function(terrainMatrix){
            this.terrainMatrix = terrainMatrix;
        }
    };
});