import { player_states } from './player_state';


export default class Player {

    canvas: HTMLCanvasElement;
    mov_x: number;
    idle_sprite: HTMLImageElement;
    sprite_width: number;
    sprite_height: number;
    width: any;
    height: any;
    x: number;
    y: number;
    frame: number;
    frame_speed: number;
    counter: number;
    speed: number;
    state: any;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.mov_x = 0;
    this.idle_sprite = new Image();
    this.sprite_width = 50;
    this.sprite_height = 55;
    this.width = this.sprite_width;
    this.height = this.sprite_height;
    this.x = 100;
    this.y = this.canvas.height - this.height - 100;
    this.frame = 70;
    this.frame_speed = 5;
    this.counter = 0;
    this.speed = 10;

    this.state = player_states.IDLE_RIGHT;
  }

  draw(context: CanvasRenderingContext2D) {
    context.beginPath();
    context.strokeStyle = "black";

    // Set the player's sprite based on the current state
    switch (this.state) {
      case player_states.IDLE_RIGHT:
      case player_states.IDLE_LEFT:
        this.idle_sprite.src = "../sprites/Idle.png";
        this.frame_speed = 5;
        break;

      case player_states.SPRINT_RIGHT:
      case player_states.SPRINT_LEFT:
        this.idle_sprite.src = "../sprites/Run.png";
        this.frame_speed = 3;
        break;

      case player_states.JUMP_RIGHT:
      case player_states.JUMP_LEFT:
        this.idle_sprite.src = "../sprites/Jump.png";
        this.frame_speed = 5;
        break;

      default:
        this.idle_sprite.src = "../sprites/Idle.png";
    }

    // Check the player's facing direction and apply scaling if facing left
    if (this.state.includes("left")) {
      context.save(); // Save the current canvas state
      context.scale(-1, 1); // Flip horizontally
      const flippedX = -this.x - this.width; // Adjust the x-coordinate for flipping
      context.drawImage(
        this.idle_sprite,
        this.frame,
        68,
        this.sprite_width,
        this.sprite_height,
        flippedX,
        this.y,
        this.width,
        this.height
      );
      context.restore(); // Restore the canvas state
    } else {
      context.drawImage(
        this.idle_sprite,
        this.frame,
        68,
        this.sprite_width,
        this.sprite_height,
        this.x,
        this.y,
        this.width,
        this.height
      );
    }

    // Draw the player's hitbox
    context.strokeRect(this.x, this.y, this.width, this.height);

    context.closePath();
  }

  update() {
    this.counter++;
    // Handle horizontal movement
    this.x += this.mov_x;
    if (this.counter % this.frame_speed == 0) this.frame += 200;

    if (this.frame > 1520) this.frame = 70;

    // Handle player state
    if (this.mov_x > 0) {
      this.state = player_states.SPRINT_RIGHT;
    } else if (this.mov_x < 0) {
      this.state = player_states.SPRINT_LEFT;
    } else {
      if (this.state.includes("right")) {
        this.state = player_states.IDLE_RIGHT;
      } else {
        this.state = player_states.IDLE_LEFT;
      }
    }

    // Boundaries
    /* if (this.x <= 0) this.x = 0;
        if (this.x >= (this.canvas.width - player_utils.width)) this.x = this.canvas.width - player_utils.width; */
  }

  jump() {
    this.y -= 1;
  }
}
