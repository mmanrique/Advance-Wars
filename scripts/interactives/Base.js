define(["interactive", "player", "sprite"], function(Interactive, Player, Sprite) {
    return Object.extend(Interactive, {
        DEFAULT_SPRITES: {
            EMPTY: [
                Object.create(Sprite).initialize(40, 1488, 16, 15)
            ],
            RED: [
                Object.create(Sprite).initialize(40, 1521, 16, 15)
            ],
            GREEN: [],
            BLUE: [],
            YELLOW: []
        },
        changeColor: function(player) {
            switch (player) {
                case Player.EMPTY:
                    this.sprites = this.DEFAULT_SPRITES.EMPTY;
                    break;
                case Player.RED:
                    this.sprites = this.DEFAULT_SPRITES.RED;
                    break;
                case Player.GREEN:
                    this.sprites = this.DEFAULT_SPRITES.GREEN;
                    break;
                case Player.BLUE:
                    this.sprites = this.DEFAULT_SPRITES.BLUE;
                    break;
                case Player.YELLOW:
                    this.sprites = this.DEFAULT_SPRITES.YELLOW;
                    break;
            }
            this.player = player;
        },
        initialize: function(positionX, positionY, player) {
            Interactive.initialize(positionX, positionY, player);
            this.size = 1;
        }
    });
});