"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Game = /** @class */ (function () {
    function Game(canvas, context) {
        this.canvas = canvas;
        this.context = context;
        this.init(this.context);
    }
    Game.prototype.init = function (context) {
        // Draw bottom surface
        context.beginPath();
        context.fillStyle = "darkgreen";
        context.fillRect(0, this.canvas.height - 100, this.canvas.width, this.canvas.height);
        context.closePath();
    };
    return Game;
}());
exports.default = Game;
