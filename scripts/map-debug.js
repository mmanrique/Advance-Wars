define(["mapTerrain", "loader"], function(MapTerrain, Loader) {
    return  {
        initialize: function(map) {
            this.map = map;
            this.canvasWidth = map.canvas.width;
            this.canvasHeight = map.canvas.height;
            this.barHeight = this.canvasHeight / map.HEIGHT; //Height of the square
            this.barWidth = this.canvasWidth / map.WIDTH; //Width of the square
            return this;
        },
        debug: function() {
            var context = this.map.canvas.getContext("2d");
            var matrix = this.map.mapTerrainMatrix;
            for (var i = 0; i < matrix.length; i++) {

                switch (matrix[i]) {
                    case MapTerrain.PLAIN:
                        context.fillStyle = "#c2e02c";
                        break;
                    case MapTerrain.RIVER:
                        context.fillStyle = "#7250f8";
                        break;
                    case MapTerrain.WOOD:
                        context.fillStyle = "#3f5056";
                        break;
                    case MapTerrain.SEA:
                        context.fillStyle = "#5d94f8";
                        break;
                    case MapTerrain.REEF:
                        context.fillStyle = "#c4a05c";
                        break;
                    case MapTerrain.SHOAL:
                        context.fillStyle = "#f9dd2e";
                        break;
                    case MapTerrain.MOUNTAIN:
                        context.fillStyle = "#88c818";
                        break;
                    case MapTerrain.ROAD:
                        context.fillStyle = "#98a0b8";
                        break;
                }
                var iWidth = i * this.barWidth;
                var x = iWidth % this.canvasWidth;
                var y = Math.floor(iWidth / this.canvasWidth) * this.barHeight;
                context.fillRect(x, y, this.barWidth, this.barHeight);
            }
            this.drawlines();
        },
        drawlines: function() {
            var context = this.map.canvasContext;
            var pointer = {
                x: 0,
                y: 0
            };
            context.strokeStyle = "#404040";
            while (pointer.y < this.canvasHeight) {
                pointer.y += this.barHeight;
                context.moveTo(pointer.x, pointer.y);
                context.lineTo(this.canvasWidth, pointer.y);
            }
            pointer.y = 0;
            while (pointer.x < this.canvasWidth) {
                pointer.x += this.barWidth;
                context.moveTo(pointer.x, pointer.y);
                context.lineTo(pointer.x, this.canvasHeight);
            }
            context.stroke();
        },
        generateImageFromTerrain: function() {
            var context = this.map.canvas.getContext("2d");
            var matrix = this.map.mapTerrainMatrix;
            var sliceParams = {
                //IN my sprites, the images have a 15*15 size
                x: 0,
                y: 0,
                width: 16,
                height: 16
            };

            for (var i = 0; i < matrix.length; i++) {
                switch (matrix[i]) {
                    case MapTerrain.PLAIN:
                        sliceParams.x = 217;
                        sliceParams.y = 1567;
                        break;
                    case MapTerrain.RIVER:
                        break;
                    case MapTerrain.WOOD:
                        sliceParams.x = 444;
                        sliceParams.y = 1567;
                        break;
                    case MapTerrain.SEA:
                        //context.fillStyle="#5d94f8";
                        break;
                    case MapTerrain.REEF:
                        //context.fillStyle="#c4a05c";
                        break;
                    case MapTerrain.SHOAL:
                        //context.fillStyle="#f9dd2e";
                        break;
                    case MapTerrain.MOUNTAIN:
                        sliceParams.x = 252;
                        sliceParams.y = 1548;
                        break;
                    case MapTerrain.ROAD:
                        sliceParams.x = 601;
                        sliceParams.y = 1568;
                        break;
                }

                var iWidth = i * this.barWidth;
                var x = iWidth % this.canvasWidth;
                var y = Math.floor(iWidth / this.canvasWidth) * this.barHeight;
                context.drawImage(Loader.SPRITESHEET, sliceParams.x, sliceParams.y, sliceParams.width, sliceParams.height, x, y, this.barWidth,
                    this.barHeight);
            }
        }
    };
});