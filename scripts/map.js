$(function(){

	window.AW = window.AW || {};
	window.requestAnimationFrame=window.requestAnimationFrame || window.webkitRequestAnimationFrame;

	AW.loadResources=function(){
		AW.SPRITESHEET=new Image();
		AW.SPRITESHEET.onload=function(){
			AW.start();
		};
		AW.SPRITESHEET.src="sprites/AW1SpritesTransparent.png";
	};
	AW.Map=function(canvas,mapTerrainMatrix,interactivesList,mapName){
		var self=this;
		this.canvas=canvas;
		this.mapTerrainMatrix=mapTerrainMatrix;
		this.interactivesList=interactivesList;
		this.tileHeight=this.canvas.height/AW.Map.HEIGHT;
		this.tileWidth=this.canvas.width/AW.Map.WIDTH;
		this.mapImage=new Image();
		this.mapImage.onload=function(){
			self.onload();
		};
		this.mapImage.src=mapName;
		this.canvasContext=canvas.getContext("2d");
		this.mapProperties={
			tileWidth: 16,
			tileHeight: 16,
			size:{
				x: 30,
				y: 20
			},
			currentView:{
				x:0,
				y:0
			}
		};
	};
	AW.Map.prototype.render=function(){
		this.renderBackground();
		this.renderInteractables();
	};
	AW.Map.prototype.renderBackground=function(){
		var mapWidth=AW.Map.WIDTH*this.mapProperties.tileWidth;
		var mapHeight=AW.Map.HEIGHT*this.mapProperties.tileHeight;
		this.canvasContext.clearRect(0,0,this.canvas.width,this.canvas.height);
		this.canvasContext.drawImage(this.mapImage,this.mapProperties.currentView.x*this.mapProperties.tileWidth,this.mapProperties.currentView.y*this.mapProperties.tileHeight,mapWidth,mapHeight,0,0,this.canvas.width,this.canvas.height);
	};

	AW.Map.prototype.renderInteractables=function(){
		var interactive=null;
		var maximunLineOfSight_X=this.mapProperties.currentView.x+AW.Map.WIDTH;
		var maximunLineOfSight_Y=this.mapProperties.currentView.y+AW.Map.HEIGHT;
		for (var i = 0; i < this.interactivesList.length; i++) {
			interactive=this.interactivesList[i];
			if(interactive.position.x>=this.mapProperties.currentView.x && interactive.position.x <=maximunLineOfSight_X){
				if(interactive.position.y>=this.mapProperties.currentView.y && interactive.position.y <= maximunLineOfSight_Y){
					var x=interactive.position.x - this.mapProperties.currentView.x;
					var y=interactive.position.y - this.mapProperties.currentView.y;
					var currentSprite=interactive.sprites[interactive.currentSprite];
					this.canvasContext.drawImage(AW.SPRITESHEET,
												currentSprite.x,
												currentSprite.y,
												currentSprite.width,
												currentSprite.height,
												x*this.tileWidth,
												(y+1)*this.tileHeight,
												this.tileWidth,
												-this.tileHeight*interactive.size);
				}
			}
		}
	};
	AW.Map.prototype.moveRight=function(){
		var maximunLineOfSight=this.mapProperties.currentView.x+AW.Map.WIDTH;
		if(maximunLineOfSight<this.mapProperties.size.x){
			this.mapProperties.currentView.x++;
			return true;
		}
		return false;
	};
	AW.Map.prototype.moveLeft=function(){
		if(this.mapProperties.currentView.x>0){
			this.mapProperties.currentView.x--;
			return true;
		}
		return false;
	};
	AW.Map.prototype.moveDown=function(){
		var maximunLineOfSight=this.mapProperties.currentView.y+AW.Map.HEIGHT;
		if(maximunLineOfSight<this.mapProperties.size.y){
			this.mapProperties.currentView.y++;
			return true;
		}
		return false;
	};
	AW.Map.prototype.moveUp=function(){
		if(this.mapProperties.currentView.y>0){
			this.mapProperties.currentView.y--;
			return true;
		}
		return false;
	};
	AW.Map.prototype.onload=function(){};


	AW.Map.WIDTH=15;
	AW.Map.HEIGHT=10;




	AW.start=function(){
		var canvas=$("canvas")[0];
		var mapArray=[	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
						[7,9,7,9,7,7,7,7,7,7,7,7,7,7,7],
						[0,0,9,0,0,0,0,0,0,0,0,0,0,0,0],
						[0,0,0,0,0,6,6,6,0,2,6,0,0,0,0],
						[6,0,0,0,6,0,0,9,0,6,0,0,0,0,0],
						[0,6,0,6,2,0,0,2,9,6,0,0,0,0,0],
						[0,0,6,0,6,0,0,9,0,6,0,0,0,0,0],
						[0,0,0,0,0,6,6,0,6,0,6,0,0,0,0],
						[0,0,0,0,0,2,0,0,2,0,9,6,0,0,0],
						[7,7,7,7,7,7,7,7,7,7,7,7,7,7,7],
						[0,0,0,0,0,0,0,2,0,0,0,0,0,0,0]];
		var interactives=[
							new AW.Map.City(4,1, AW.Player.EMPTY),
							new AW.Map.City(8,3,AW.Player.EMPTY),
							new AW.Map.City(10,5,AW.Player.RED),
							new AW.Map.Base(9,6,AW.Player.EMPTY),
							new AW.Map.Base(12,1,AW.Player.EMPTY),
							new AW.Map.Base(19,6,AW.Player.EMPTY),
							new AW.Map.Base(4,7,AW.Player.RED),
							new AW.Map.City(15,3,AW.Player.EMPTY),
							new AW.Map.City(17,2,AW.Player.EMPTY)
						];
		//var mapName="sprites/GBA_Advance_Wars.png";
		var mapName="sprites/Machiavellianism.png";
		var myMap=new AW.Map(canvas,mapArray,interactives, mapName);
		var canvasDebugger=new AW.CanvasDebugger(myMap);
		var controller=new AW.Controller(myMap);

		function update(){
			myMap.render();
			//canvasDebugger.drawlines();
			controller.render();
		}

		function render(){
			update();
			requestAnimationFrame(render);
		}
		$(document).bind("keydown",jQuery.proxy(controller.keyBoardHandler,controller));

		myMap.onload=function(){
			render();
		};
		
	};

	AW.loadResources();
});