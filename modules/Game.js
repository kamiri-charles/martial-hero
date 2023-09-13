import { game_utils } from "../utils.js";

export default class Game {
    constructor(canvas, context) {
        this.canvas = canvas;
        this.context = context;


        this.init(this.context);
    };

    init(context) {
        // Draw bottom surface
        context.beginPath();
        context.fillStyle = 'darkgreen';
        context.fillRect(0, (this.canvas.height - game_utils.surface), this.canvas.width, this.canvas.height);
        context.closePath();
    }
}