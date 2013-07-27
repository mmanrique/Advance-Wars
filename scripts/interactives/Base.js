define(["interactive", "player", "sprite"], function(Interactive, Player, Sprite) {
    return Object.extend(Interactive,{
        size:1,
        DEFAULT_SPRITES:{
            EMPTY: [
                Object.create(Sprite).initialize(40,1488,16,15)
            ],
            RED: [
                Object.create(Sprite).initialize(40,1521,16,15)
            ],
            GREEN: [],
            BLUE: [],
            YELLOW: []
        },
        changeColor:function(player) {
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
        },
        initialize:function(positionX, positionY, player) {
            Interactive.initialize(positionX,positionY,player);
            this.size=1;
        }
    });
});