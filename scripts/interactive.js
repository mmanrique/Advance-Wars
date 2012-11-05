define([], function() {
	var Interactive = function(positionX, positionY, player) {
		this.position = {
			x: positionX,
			y: positionY
		};
		this.size = 1.2;
		this.sprites = [];
		this.player = player;
		this.currentSprite = 0;
		this.changeColor(player);
	};

	Interactive.prototype.changeColor = function(player) {

	};
	return Interactive;
});