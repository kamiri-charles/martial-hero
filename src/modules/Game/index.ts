import Player from "../Player";
import Controller from "../Controller";

export default class Game {
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  player: Player;
  controller: Controller;
  
  constructor(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D) {
    this.canvas = canvas;
    this.context = context;
    this.player = new Player(canvas);
    this.controller = new Controller(this.player);
  }
  
  // Main game loop
  run() {
    // Draw background
    this.context.beginPath();
    this.context.fillStyle = "skyblue";
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this.context.closePath();
    
    // Draw bottom surface
    this.context.beginPath();
    this.context.fillStyle = "darkgreen";
    this.context.fillRect(
      0,
      this.canvas.height - 102,
      this.canvas.width,
      this.canvas.height
      );
      this.context.closePath();

      // Player controls
      this.controller.handle_input();
      
      // Draw player
      this.player.update();
      this.player.draw(this.context);
      
      requestAnimationFrame(() => this.run());
    }
  }
  