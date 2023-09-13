import { game_utils, player_utils } from "../utils.js";

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
    };

    draw(context) {
        context.beginPath();
        context.strokeStyle = 'black';
        //context.strokeRect(this.x, this.y, this.width, this.height);
        context.drawImage(this.idle_sprite, this.frame, 68, this.sprite_width, this.sprite_height, this.x, this.y, this.width, this.height);
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