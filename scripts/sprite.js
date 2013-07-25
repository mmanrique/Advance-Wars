define([], function() {
    return {
        position: {
            x:0,
            y:0
        },
        width:0,
        height:0,
        initialize: function(positionX, positionY, width, height) {
            this.position = {
                x: positionX,
                y: positionY
            };
            this.width = width;
            this.height = height;
            return this;
        }
    };
});