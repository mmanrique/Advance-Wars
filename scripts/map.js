define(["loader"], function(Loader) {
    return {
        WIDTH: 15,
        HEIGHT: 10,
        canvas: {},
        canvasContext: {},
        tileWidth: 0,
        tileHeight: 0,
        mapImage: {
            src: ''
        },
        mapProperties: {
            tileWidth: 16,
            tileHeight: 16,
            size: {
                x: 30,
                y: 20
            },
            currentView: {
                x: 0,
                y: 0
            }
        },
        initialize: function(canvas, mapTerrainMatrix, interactivesList, mapName) {
            var self = this;
            this.canvas = canvas;
            this.mapTerrainMatrix = mapTerrainMatrix;
            this.interactivesList = interactivesList;
            this.tileHeight = this.canvas.height / this.HEIGHT;
            this.tileWidth = this.canvas.width / this.WIDTH;
            this.mapImage = new Image();
            this.mapImage.onload = function() {
                self.onload();
            };
            this.mapImage.src = mapName;
            this.canvasContext = canvas.getContext("2d");
            return this;
        },
        render: function() {
            this.renderBackground();
            this.renderInteractables();
        },
        renderBackground: function() {
            var mapWidth = this.WIDTH * this.mapProperties.tileWidth;
            var mapHeight = this.HEIGHT * this.mapProperties.tileHeight;
            this.canvasContext.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.canvasContext.drawImage(this.mapImage, this.mapProperties.currentView.x * this.mapProperties.tileWidth,
                this.mapProperties.currentView.y * this.mapProperties.tileHeight, mapWidth, mapHeight, 0, 0, this.canvas.width, this.canvas.height);
        },
        renderInteractables: function() {
            var interactive = null;
            var maximunLineOfSight_X = this.mapProperties.currentView.x + this.WIDTH;
            var maximunLineOfSight_Y = this.mapProperties.currentView.y + this.HEIGHT;
            for (var i = 0; i < this.interactivesList.length; i++) {
                interactive = this.interactivesList[i];
                if (interactive.position.x >= this.mapProperties.currentView.x && interactive.position.x <= maximunLineOfSight_X) {
                    if (interactive.position.y >= this.mapProperties.currentView.y && interactive.position.y <= maximunLineOfSight_Y) {
                        var x = interactive.position.x - this.mapProperties.currentView.x;
                        var y = interactive.position.y - this.mapProperties.currentView.y;
                        var currentSprite = interactive.sprites[interactive.currentSprite];
                        this.canvasContext.drawImage(Loader.SPRITESHEET, currentSprite.position.x, currentSprite.position.y, currentSprite.width,
                            currentSprite.height, x * this.tileWidth, (y + 1) * this.tileHeight, this.tileWidth, -this.tileHeight * interactive.size);
                    }
                }
            }
        },
        onload: function() {

        },
        moveRight: function() {
            var maximunLineOfSight = this.mapProperties.currentView.x + this.WIDTH;
            if (maximunLineOfSight < this.mapProperties.size.x) {
                this.mapProperties.currentView.x++;
                return true;
            }
            return false;
        },
        moveLeft: function() {
            if (this.mapProperties.currentView.x > 0) {
                this.mapProperties.currentView.x--;
                return true;
            }
            return false;
        },
        moveDown: function() {
            var maximunLineOfSight = this.mapProperties.currentView.y + this.HEIGHT;
            if (maximunLineOfSight < this.mapProperties.size.y) {
                this.mapProperties.currentView.y++;
                return true;
            }
            return false;
        },
        moveUp: function() {
            if (this.mapProperties.currentView.y > 0) {
                this.mapProperties.currentView.y--;
                return true;
            }
            return false;
        }

    };

});