
export default class Game {
    canvas: HTMLCanvasElement;
    context: CanvasRenderingContext2D;

  constructor(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D) {
    this.canvas = canvas;
    this.context = context;

    this.init(this.context);
  }

  init(context: CanvasRenderingContext2D) {
    // Draw bottom surface
    context.beginPath();
    context.fillStyle = "darkgreen";
    context.fillRect(
      0,
      this.canvas.height - 100,
      this.canvas.width,
      this.canvas.height
    );
    context.closePath();
  }
}
