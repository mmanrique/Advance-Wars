define([], function() {
	var Loader = function() {
		
		};
	Loader.prototype.loadResources = function(callback,imageUrl) {
		Loader.SPRITESHEET = new Image();
		Loader.SPRITESHEET.onload = function() {
			if(!!callback){
				callback.call();
			}
		};
		Loader.SPRITESHEET.src = imageUrl;
	};
    Loader.loadResources = Loader.prototype.loadResources;
	return Loader;
});