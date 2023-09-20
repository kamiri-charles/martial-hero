"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Game_1 = require("./modules/Game");
var Player_1 = require("./modules/Player");
document.addEventListener('DOMContentLoaded', function () {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    // Game init
    new Game_1.default(canvas, ctx);
    var player = new Player_1.default(canvas);
    // Player controls
    window.addEventListener('keydown', function (e) {
        if (e.code == 'Space')
            console.log('Space');
        if (e.code == 'ArrowRight')
            player.mov_x = player.speed;
        if (e.code == 'ArrowLeft')
            player.mov_x = -player.speed;
        if (e.code == 'ArrowUp')
            console.log('Up');
    });
    window.addEventListener('keyup', function (e) {
        if (e.code == 'Space')
            console.log('Space');
        if (e.code == 'ArrowRight')
            player.mov_x = 0;
        if (e.code == 'ArrowLeft')
            player.mov_x = 0;
        if (e.code == 'ArrowUp')
            console.log('Up');
    });
    var animate = function () {
        ctx.fillStyle = "skyblue";
        ctx.fillRect(0, 0, canvas.width, (canvas.height - 100));
        player.update();
        player.draw(ctx);
        requestAnimationFrame(animate);
    };
    animate();
});
