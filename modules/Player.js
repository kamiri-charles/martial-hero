import { game_utils, player_utils } from "../utils.js";

const player_state = {
  IDLE_RIGHT: "idle_right",
  IDLE_LEFT: "idle_left",
  WALKING_RIGHT: "walking_right",
  WALKING_LEFT: "walking_left",
};

export default class Player {
    constructor(canvas) {
        this.canvas = canvas;
        this.mov_x = 0;
        this.idle_sprite = new Image();
        this.idle_sprite.src = '../sprites/Idle.png';
        this.sprite_width = 50;
        this.sprite_height = 55;
        this.width = this.sprite_width;
        this.height = this.sprite_height;
        this.x = 100;
        this.y = this.canvas.height - this.height - game_utils.surface;
        this.frame = 70;
        this.counter = 0;

        this.isFacingLeft = true;
    };

    draw(context) {
      context.beginPath();
      context.strokeStyle = "black";

      // Check the player's facing direction and apply scaling if facing left
      if (this.isFacingLeft) {
        context.save(); // Save the current canvas state
        context.scale(-1, 1); // Flip horizontally
        const flippedX = -this.x - this.width; // Adjust the x-coordinate for flipping
        context.drawImage(this.idle_sprite, this.frame, 68, this.sprite_width, this.sprite_height, flippedX, this.y, this.width, this.height);
        context.restore(); // Restore the canvas state

      } else {
        context.drawImage(this.idle_sprite, this.frame, 68, this.sprite_width, this.sprite_height, this.x, this.y, this.width, this.height);
      }

      context.closePath();
    }

    update() {
        this.counter++;
        // Handle horizontal movement
        this.x += this.mov_x;
        if (this.counter % 5 == 0) this.frame += 200;

        if (this.frame > 1520) this.frame = 70

        // Boundaries
        /* if (this.x <= 0) this.x = 0;
        if (this.x >= (this.canvas.width - player_utils.width)) this.x = this.canvas.width - player_utils.width; */
    }
};