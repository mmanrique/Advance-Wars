define([],function(){
    var config= {
        standBySpriteMovementSpeed: 0.2,
        selectedSpriteMovementSpeed: 0.6,
        movingSpriteMovementSpeed: 0.6
    };
	var Unit=function(x,y){
		this.type=type;
		this.x=x;
		this.y=y;
        this.config = config;
		this.stats=this.initizalize();
	};


	Unit.MOVETYPE={};
	Unit.MOVETYPE.FOOT=1;
	Unit.MOVETYPE.THREAD=2;
	Unit.MOVETYPE.TIRES=3;
	Unit.MOVETYPE.AIR=4;
	return Unit;
});