define(["player"], function(Player) {
    return {
        sprites : [],
        size : 1.2,
        player: {},
        position: {
            x:0,
            y:0
        },
        currentSprite:0,
        DEFAULT_SPRITES:{
            EMPTY:[],
            RED:[],
            GREEN:[],
            BLUE:[],
            YELLOW:[]
        },
        changeColor:function(player) {
            switch(player) {
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
            this.position = {
                x: positionX,
                y: positionY
            };
            this.player = player;
            this.changeColor(player);
            return this;
        }
    };
});