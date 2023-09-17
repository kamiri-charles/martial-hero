import { game_utils } from "../utils.js";

const player_states = {
    IDLE_RIGHT: "idle_right",
    IDLE_LEFT: "idle_left",
    RUNNING_RIGHT: "walking_right",
    RUNNING_LEFT: "walking_left",
};

export default class Player {
    constructor(canvas) {
        this.canvas = canvas;
        this.mov_x = 0;
        this.idle_sprite = new Image();
        this.sprite_width = 50;
        this.sprite_height = 55;
        this.width = this.sprite_width;
        this.height = this.sprite_height;
        this.x = 100;
        this.y = this.canvas.height - this.height - game_utils.surface;
        this.frame = 70;
        this.counter = 0;
        
        this.state = player_states.IDLE_RIGHT;
    };
    
    draw(context) {
        context.beginPath();
        context.strokeStyle = "black";

        // Set the player's sprite based on the current state
        switch (this.state) {
            case player_states.IDLE_RIGHT:
            case player_states.IDLE_LEFT:
                this.idle_sprite.src = "../sprites/Idle.png";
                break;

            case player_states.RUNNING_RIGHT:
            case player_states.RUNNING_LEFT:
                this.idle_sprite.src = "../sprites/Run.png";
                break;

            default:
                this.idle_sprite.src = "../sprites/Idle.png";
        };

        // Check the player's facing direction and apply scaling if facing left
        if (this.state.includes('left')) {
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

        // Handle player state
        if (this.mov_x > 0) {
            this.state = player_states.RUNNING_RIGHT;
        } else if (this.mov_x < 0) {
            this.state = player_states.RUNNING_LEFT;
        } else {
            if (this.state.includes('right')) {
                this.state = player_states.IDLE_RIGHT;
            } else {
                this.state = player_states.IDLE_LEFT;
            }
        }
        
        
        // Boundaries
        /* if (this.x <= 0) this.x = 0;
        if (this.x >= (this.canvas.width - player_utils.width)) this.x = this.canvas.width - player_utils.width; */
    }
};