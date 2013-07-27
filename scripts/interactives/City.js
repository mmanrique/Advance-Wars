define(["interactive", "player", "sprite"], function(Interactive, Player, Sprite) {
    return Object.extend(Interactive, {
        DEFAULT_SPRITES: {
            EMPTY: [
                Object.create(Sprite).initialize(22, 1482, 16, 21)
            ],
            RED: [
                Object.create(Sprite).initialize(22, 1515, 16, 21)
            ],
            GREEN: [],
            BLUE: [],
            YELLOW: []
        }
    });
});