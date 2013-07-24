define([], function() {
    var Sprite = function(positionX, positionY, width, height) {
        this.position = {
            x: positionX || 0,
            y: positionY || 0
        };
        this.width = width || 0;
        this.height = height || 0;
    };
    return Sprite;
});