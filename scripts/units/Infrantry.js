define(["unit", "sprite"],function(Unit){
	var Infantry=function(positionX,positionY,player){
		this.player=player;
		Unit.call(this, positionX, positionY);
			
	};
	Infantry.prototype = new Unit();
	Infantry.prototype.constructor = Infantry;
	Infantry.prototype.initialize=function(){
		this.gas=99;
		this.movementType=Unit.MOVETYPE.FOOT;
		this.movementUnits=3;
		this.vision=2;
	};

	Infantry.sprites={
		RED: {
            STAND_BY:[
                new Sprite(),
                new Sprite(),
                new Sprite()
            ]
        },
		GREEN: {
            STAND_BY:[
                new Sprite(),
                new Sprite(),
                new Sprite()
            ]
        },
		BLUE: {
            STAND_BY:[
                new Sprite(),
                new Sprite(),
                new Sprite()
            ]
        },
		YELLOW: {
            STAND_BY:[
                new Sprite(),
                new Sprite(),
                new Sprite()
            ]

        }
	};
});