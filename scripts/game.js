require.config({
	paths: {
		jquery: 'libs/jquery.min'
	}
});
define(["interactives/City", "Player", "interactives/Base", "map", "jquery", "loader","controller","map-debug"], function(City, Player, Base, Map, $, Loader,Controller,CanvasDebugger) {
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
			new City(4, 1, Player.EMPTY),
			new City(8, 3, Player.EMPTY),
			new City(10, 5, Player.RED),
			new Base(9, 6, Player.EMPTY),
			new Base(12, 1, Player.EMPTY),
			new Base(19, 6, Player.EMPTY),
			new Base(4, 7, Player.RED),
			new City(15, 3, Player.EMPTY),
			new City(17, 2, Player.EMPTY)
			];
			//var mapName="sprites/GBA_Advance_Wars.png";
			var mapName = "sprites/Machiavellianism.png";
			var myMap = new Map(canvas, mapArray, interactives, mapName);
			var canvasDebugger = new CanvasDebugger(myMap);
			var controller = new Controller(myMap);

			function update() {
				myMap.render();
				//canvasDebugger.drawlines();
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
	Loader.loadResources(start);


	



});