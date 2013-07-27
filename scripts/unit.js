define([], function() {
    var config = {
        standBySpriteMovementSpeed: 0.2,
        selectedSpriteMovementSpeed: 0.6,
        movingSpriteMovementSpeed: 0.6
    };
    return {
        type: 0,
        position: {
            x: 0,
            y: 0
        },
        config: config,
        stats: {},
        MOVEMENT: {
            FOOT: 1,
            THREAD: 2,
            TIRES: 3,
            AIR: 4
        },
        initialize:function(positionX,positionY){
            this.position.x = positionX;
            this.position.y = positionY;
        }

    };

});