import Player from "../Player";
import { player_states } from "../Player/player_states";

export default class Game {
    canvas: HTMLCanvasElement;
    context: CanvasRenderingContext2D;
    player: Player;
    keys_pressed: { [key: string]: boolean };

  constructor(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D) {
    this.canvas = canvas;
    this.context = context;
    this.player = new Player(canvas);
    this.keys_pressed = {};

    window.addEventListener("keydown", (e) => this.keys_pressed[e.key] = true);
    window.addEventListener("keyup", (e) => this.keys_pressed[e.key] = false);
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
    this.context.fillRect(0, this.canvas.height - 100, this.canvas.width, this.canvas.height);
    this.context.closePath();

    // Player controls
    if (this.keys_pressed["ArrowRight"]) {
      this.player.set_state(player_states.SPRINT_RIGHT);
    } else if (this.keys_pressed["ArrowLeft"]) {
      this.player.set_state(player_states.SPRINT_LEFT);
    } else {
      this.player.set_state(player_states.IDLE_RIGHT);
    };

    // Draw player
    this.player.draw(this.context);
    this.player.update();

    requestAnimationFrame(() => this.run());
  }
}
