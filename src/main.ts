import Game from "./modules/Game";
import Player from "./modules/Player";

document.addEventListener('DOMContentLoaded', () => {

	const canvas = document.getElementById('canvas') as HTMLCanvasElement;
	const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
	
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	
	// Game init
	new Game(canvas, ctx);
	
	let player = new Player(canvas);
	
	// Player controls
	window.addEventListener('keydown', e => {
		if (e.code == 'Space') console.log('Space')
		if (e.code == 'ArrowRight') player.mov_x = player.speed;
		if (e.code == 'ArrowLeft') player.mov_x  = -player.speed;
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
    	ctx.fillRect(0, 0, canvas.width, (canvas.height - 100));
		player.update();
		player.draw(ctx);
		
		requestAnimationFrame(animate);
	};
	
	animate();
});