(function(){
    Object.extend = Object.extend || function (type, props) {
        var obj= Object.create(type);
        for(prop in props) {
            if(props.hasOwnProperty(prop)) {
                obj[prop] = props[prop];
            }
        }
        return obj;
    }

})();
require.config({
	paths: {
		jquery: 'libs/jquery.min'
	}
});
define(["interactives/City", "player", "interactives/Base", "map", "jquery", "loader","controller","map-debug"], function(City, Player, Base, Map, $, Loader,Controller,CanvasDebugger) {
	window.requestAnimationFrame=window.requestAnimationFrame || window.webkitRequestAnimationFrame;


	var start = function() {
			var canvas = $("canvas")[0];
			var mapArray = [
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[7, 9, 7, 9, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
				[0, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 6, 6, 6, 0, 2, 6, 0, 0, 0, 0],
				[6, 0, 0, 0, 6, 0, 0, 9, 0, 6, 0, 0, 0, 0, 0],
				[0, 6, 0, 6, 2, 0, 0, 2, 9, 6, 0, 0, 0, 0, 0],
				[0, 0, 6, 0, 6, 0, 0, 9, 0, 6, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 6, 6, 0, 6, 0, 6, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 2, 0, 0, 2, 0, 9, 6, 0, 0, 0],
				[7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
				[0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0]
			];
			var interactives = [
			Object.create(City).initialize(4, 1, Player.EMPTY),
            Object.create(City).initialize(8, 3, Player.EMPTY),
            Object.create(City).initialize(10, 5, Player.RED),
			Object.create(Base).initialize(9, 6, Player.EMPTY),
            Object.create(Base).initialize(12, 1, Player.EMPTY),
            Object.create(Base).initialize(19, 6, Player.EMPTY),
            Object.create(Base).initialize(4, 7, Player.RED),
            Object.create(City).initialize(15, 3, Player.EMPTY),
            Object.create(City).initialize(17, 2, Player.EMPTY)
			];
			//var mapName="sprites/GBA_Advance_Wars.png";
			var mapName = "sprites/Machiavellianism.png";
			var myMap = Object.create(Map).initialize(canvas, mapArray, interactives, mapName);
//			var canvasDebugger = Object.create(CanvasDebugger).initialize(myMap);
			var controller = Object.create(Controller).initialize(myMap);

			function update() {
				myMap.render();
//				canvasDebugger.drawlines();
				controller.render();
			}

			function render() {
				update();
				requestAnimationFrame(render);
			}
			$(document).bind("keydown", jQuery.proxy(controller.keyBoardHandler, controller));
			myMap.onload = function() {
				render();
			};
		};
	Loader.loadResources(start,'sprites/AW1SpritesTransparent.png');
});