define([], function() {
    return {
        changeColor: function(player) {

        },
        initialize: function(positionX, positionY, player) {
            this.position = {
                x: positionX,
                y: positionY
            };
            this.size = 1.2;
            this.sprites = [];
            this.player = player;
            this.currentSprite = 0;
            this.changeColor(player)
        }
    };
});