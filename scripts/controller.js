define(["loader"], function(Loader) {
    return {
        position: {
            x: 0,
            y: 0
        },
        canvasPosition: {
            x: 0,
            y: 0
        },
        map: {},
        horizontalMoveLeft: false,
        horizontalMoveRight: false,
        verticalMoveUp: false,
        verticalMoveDown: false,

        initialize: function(mapArgument) {
            this.map = mapArgument;
            return this;
        },
        render: function() {
            var context = this.map.canvasContext;
            var initialX = this.map.tileWidth * this.canvasPosition.x;
            var initialY = this.map.tileHeight * this.canvasPosition.y;
            context.drawImage(Loader.SPRITESHEET, 70, 1682, 29, 32, initialX, initialY, this.map.tileWidth * 1.6, this.map.tileHeight * 1.6);
        },
        keyBoardHandler: function(event) {
            this.horizontalMoveLeft = false;
            this.horizontalMoveRight = false;
            this.verticalMoveUp = false;
            this.verticalMoveDown = false;
            switch (event.keyCode) {
                case 39:
                    this.horizontalMoveRight = true;
                    break;
                case 37:
                    //this.position.x--;
                    //this.canvasPosition.x--;
                    this.horizontalMoveLeft = true;
                    break;
                case 38:
                    this.verticalMoveUp = true;
                    break;
                case 40:

                    this.verticalMoveDown = true;
                    break;
                default:
                    console.log(this.position.x, this.position.y);
                    break;
            }
            if (this.horizontalMoveRight) {
                if (this.position.x < (this.map.mapProperties.size.x - 1)) {
                    this.position.x++;
                    if (this.canvasPosition.x > 12) {
                        if (this.map.moveRight()) {
                            return;
                        }
                    }
                    this.canvasPosition.x++;
                }

            }
            if (this.horizontalMoveLeft) {
                if (this.position.x > 0) {
                    this.position.x--;
                    if (this.canvasPosition.x < 2) {
                        if (this.map.moveLeft()) {
                            return;
                        }
                    }
                    this.canvasPosition.x--;
                }
            }
            if (this.verticalMoveDown) {
                if (this.position.y < (this.map.mapProperties.size.y - 1)) {
                    this.position.y++;
                    if (this.canvasPosition.y > 7) {
                        if (this.map.moveDown()) {
                            return;
                        }
                    }
                    this.canvasPosition.y++;
                }
            }
            if (this.verticalMoveUp) {
                if (this.position.y > 0) {
                    this.position.y--;
                    if (this.canvasPosition.y < 2) {
                        if (this.map.moveUp()) {
                            return;
                        }
                    }
                    this.canvasPosition.y--;
                }
            }
        }
    };
});