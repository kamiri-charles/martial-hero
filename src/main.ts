import Game from "./modules/Game";

document.addEventListener('DOMContentLoaded', () => {
	
	const canvas = document.getElementById('canvas') as HTMLCanvasElement;
	const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
	
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	const game = new Game(canvas, ctx);
	game.run();
});