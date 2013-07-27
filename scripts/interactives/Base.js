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
        initialize: function(positionX, positionY, player) {
            Interactive.initialize.call(this, positionX, positionY, player);
            this.size = 1;
            return this;
        }
    });
});