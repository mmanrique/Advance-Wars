$(function(){
	AW.Map.Interactive=function(positionX,positionY, player){
		this.position={
			x:positionX,
			y:positionY
		};
		this.size= 1.2;
		this.sprites=[];
		this.player=player;
		this.currentSprite=0;
		this.changeColor(player);
	};

	AW.Map.Interactive.prototype.changeColor=function(player){

	};

	AW.Map.City=function(positionX,positionY, player){
		AW.Map.Interactive.call(this,positionX,positionY,player);
	};
	AW.Map.City.prototype=new AW.Map.Interactive();
	AW.Map.City.prototype.constructor=AW.Map.City;

	AW.Map.City.SPRITES={
		EMPTY: [{
			x:22,
			y:1482,
			width: 16,
			height: 21
		}],
		RED: [{
			x:22,
			y: 1515,
			width: 16,
			height: 21
		}],
		GREEN: [],
		BLUE: [],
		YELLOW: []
	};
	AW.Map.City.prototype.changeColor=function(player){
		switch(player){
			case AW.Player.EMPTY:
								this.sprites=AW.Map.City.SPRITES.EMPTY;
								break;
			case AW.Player.RED:
								this.sprites=AW.Map.City.SPRITES.RED;
								break;
			case AW.Player.GREEN:
								this.sprites=AW.Map.City.SPRITES.GREEN;
								break;
			case AW.Player.BLUE:
								this.sprites=AW.Map.City.SPRITES.BLUE;
								break;
			case AW.Player.YELLOW:
								this.sprites=AW.Map.City.SPRITES.YELLOW;
								break;
		}
		this.player=player;
	};




	AW.Map.Base=function(positionX,positionY, player){
		AW.Map.Interactive.call(this,positionX,positionY,player);
		this.size=1;
	};
	AW.Map.Base.prototype=new AW.Map.Interactive();
	AW.Map.Base.prototype.constructor=AW.Map.Base;

	AW.Map.Base.SPRITES={
		EMPTY: [{
			x:40,
			y:1488,
			width: 16,
			height: 15
		}],
		RED: [{
			x:40,
			y: 1521,
			width: 16,
			height: 15
		}],
		GREEN: [],
		BLUE: [],
		YELLOW: []
	};

	AW.Map.Base.prototype.changeColor=function(player){
		switch(player){
			case AW.Player.EMPTY:
								this.sprites=AW.Map.Base.SPRITES.EMPTY;
								break;
			case AW.Player.RED:
								this.sprites=AW.Map.Base.SPRITES.RED;
								break;
			case AW.Player.GREEN:
								this.sprites=AW.Map.Base.SPRITES.GREEN;
								break;
			case AW.Player.BLUE:
								this.sprites=AW.Map.Base.SPRITES.BLUE;
								break;
			case AW.Player.YELLOW:
								this.sprites=AW.Map.Base.SPRITES.YELLOW;
								break;
		}
		this.player=player;
	};

});