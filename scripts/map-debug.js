$(function() {
	AW.CanvasDebugger = function(map) {
		this.map = map;
		this.canvasWidth = map.canvas.width;
		this.canvasHeight = map.canvas.height;
		this.barHeight = this.canvasHeight / AW.Map.HEIGHT; //Height of the square
		this.barWidth = this.canvasWidth / AW.Map.WIDTH; //Width of the square
	};
	AW.CanvasDebugger.prototype.debug = function() {
		var context = this.map.canvas.getContext("2d");
		var matrix = this.map.mapTerrainMatrix;
		for (var i = 0; i < matrix.length; i++) {

			switch (matrix[i]) {
			case AW.MapTerrain.PLAIN:
				context.fillStyle = "#c2e02c";
				break;
			case AW.MapTerrain.RIVER:
				context.fillStyle = "#7250f8";
				break;
			case AW.MapTerrain.WOOD:
				context.fillStyle = "#3f5056";
				break;
			case AW.MapTerrain.SEA:
				context.fillStyle = "#5d94f8";
				break;
			case AW.MapTerrain.REEF:
				context.fillStyle = "#c4a05c";
				break;
			case AW.MapTerrain.SHOAL:
				context.fillStyle = "#f9dd2e";
				break;
			case AW.MapTerrain.MOUNTAIN:
				context.fillStyle = "#88c818";
				break;
			case AW.MapTerrain.ROAD:
				context.fillStyle = "#98a0b8";
				break;
			}
			var iWidth = i * this.barWidth;
			var x = iWidth % this.canvasWidth;
			var y = Math.floor(iWidth / this.canvasWidth) * this.barHeight;
			context.fillRect(x, y, this.barWidth, this.barHeight);
		}
		this.drawlines();
	};
	AW.CanvasDebugger.prototype.drawlines = function() {
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
	};
	AW.CanvasDebugger.prototype.generateImageFromTerrain = function() {
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
			case AW.MapTerrain.PLAIN:
				sliceParams.x = 217;
				sliceParams.y = 1567;
				break;
			case AW.MapTerrain.RIVER:
				break;
			case AW.MapTerrain.WOOD:
				sliceParams.x = 444;
				sliceParams.y = 1567;
				break;
			case AW.MapTerrain.SEA:
				//context.fillStyle="#5d94f8";
				break;
			case AW.MapTerrain.REEF:
				//context.fillStyle="#c4a05c";
				break;
			case AW.MapTerrain.SHOAL:
				//context.fillStyle="#f9dd2e";
				break;
			case AW.MapTerrain.MOUNTAIN:
				sliceParams.x = 252;
				sliceParams.y = 1548;
				break;
			case AW.MapTerrain.ROAD:
				sliceParams.x = 601;
				sliceParams.y = 1568;
				break;
			}


			var iWidth = i * this.barWidth;
			var x = iWidth % this.canvasWidth;
			var y = Math.floor(iWidth / this.canvasWidth) * this.barHeight;
			context.drawImage(AW.SPRITESHEET, sliceParams.x, sliceParams.y, sliceParams.width, sliceParams.height, x, y, this.barWidth, this.barHeight);


			//window.open(this.map.canvas.toDataURL('image/png'));
		}
	};
});