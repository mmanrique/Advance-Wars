define(["unit"],function(Unit){
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
		EMPTY: [{
			x: 40,
			y: 1488,
			width: 16,
			height: 15
		}],
		RED: [{
			x: 40,
			y: 1521,
			width: 16,
			height: 15
		}],
		GREEN: [],
		BLUE: [],
		YELLOW: []
	};
});