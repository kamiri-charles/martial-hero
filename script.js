import Game from "./modules/Game.js";
import Player from "./modules/Player.js";
import { game_utils } from "./utils.js";

document.addEventListener('DOMContentLoaded', () => {
	/** @type {HTMLCanvasElement} */
	const canvas = document.getElementById('canvas');
	const ctx = canvas.getContext('2d');

	
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	
	// Game init
	new Game(canvas, ctx);
	
	let player = new Player(canvas);
	
	// Player controls
	window.addEventListener('keydown', e => {
		if (e.code == 'Space') console.log('Space')
		if (e.code == 'ArrowRight') player.mov_x = 5
		if (e.code == 'ArrowLeft') player.mov_x  = -5
		if (e.code == 'ArrowUp') console.log('Up')
	});

	window.addEventListener('keyup', e => {
		if (e.code == 'Space') console.log('Space')
		if (e.code == 'ArrowRight') player.mov_x = 0
		if (e.code == 'ArrowLeft') player.mov_x  = 0
		if (e.code == 'ArrowUp') console.log('Up')
	});


	
	
	const animate = () => {
		ctx.fillStyle = "skyblue";
    	ctx.fillRect(0, 0, canvas.width, (canvas.height - game_utils.surface));
		player.update();
		player.draw(ctx);
		
		requestAnimationFrame(animate);
	};
	
	animate();
});