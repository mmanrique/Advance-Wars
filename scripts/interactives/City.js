define(["interactive","player", "sprite"], function(Interactive, Player, Sprite) {
	var City = function(positionX, positionY, player) {
		Interactive.call(this, positionX, positionY, player);
	};
	City.prototype = new Interactive();
	City.prototype.constructor =City;

	City.SPRITES = {
		EMPTY: [
            Object.create(Sprite).initialize(22,1482,16,21)
        ],
		RED: [
            Object.create(Sprite).initialize(22,1515,16,21)
            ],
		GREEN: [],
		BLUE: [],
		YELLOW: []
	};
	City.prototype.changeColor = function(player) {
		switch(player) {
		case Player.EMPTY:
			this.sprites = City.SPRITES.EMPTY;
			break;
		case Player.RED:
			this.sprites = City.SPRITES.RED;
			break;
		case Player.GREEN:
			this.sprites = City.SPRITES.GREEN;
			break;
		case Player.BLUE:
			this.sprites = City.SPRITES.BLUE;
			break;
		case Player.YELLOW:
			this.sprites = City.SPRITES.YELLOW;
			break;
		}
		this.player = player;
	};
	return City;
});