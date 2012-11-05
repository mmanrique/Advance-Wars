define([], function() {
	var Loader = function() {
		
		};
	Loader.loadResources = function(callback) {
		Loader.SPRITESHEET = new Image();
		Loader.SPRITESHEET.onload = function() {
			if(!!callback){
				callback.call();
			}
		};
		Loader.SPRITESHEET.src = "sprites/AW1SpritesTransparent.png";
	};
	return Loader;
});