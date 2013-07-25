define(["interactive", "player", "sprite"], function(Interactive, Player, Sprite) {
	Base = function(positionX, positionY, player) {
		Interactive.call(this, positionX, positionY, player);
		this.size = 1;
	};
	Base.prototype = new Interactive();
	Base.prototype.constructor = Base;

	Base.SPRITES = {
		EMPTY: [
            Object.create(Sprite).initialize(40,1488,16,15)
		],
		RED: [
            Object.create(Sprite).initialize(40,1521,16,15)
		],
		GREEN: [],
		BLUE: [],
		YELLOW: []
	};

	Base.prototype.changeColor = function(player) {
		switch(player) {
		case Player.EMPTY:
			this.sprites = Base.SPRITES.EMPTY;
			break;
		case Player.RED:
			this.sprites = Base.SPRITES.RED;
			break;
		case Player.GREEN:
			this.sprites = Base.SPRITES.GREEN;
			break;
		case Player.BLUE:
			this.sprites = Base.SPRITES.BLUE;
			break;
		case Player.YELLOW:
			this.sprites = Base.SPRITES.YELLOW;
			break;
		}
		this.player = player;
	};
	return Base;
});