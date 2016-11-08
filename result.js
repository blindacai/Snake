var Snake = (function () {
    function Snake(pos_x, pos_y) {
        this.pos_x = pos_x;
        this.pos_y = pos_y;
    }
    Snake.prototype.getX = function () {
        return this.pos_x;
    };
    Snake.prototype.getY = function () {
        return this.pos_y;
    };
    Snake.prototype.print = function () {
        return "Hello Snake";
    };
    return Snake;
}());
var View = (function () {
    function View() {
    }
    View.prototype.draw = function (pos_x, pos_y) {
        var canvas = document.getElementById("snake_canvas");
        var ctx = canvas.getContext("2d");
        ctx.fillStyle = "#4b4312";
        ctx.beginPath();
        ctx.arc(pos_x, pos_y, 5, 0, 2 * Math.PI, false);
        ctx.fill();
    };
    return View;
}());
/// <reference path='Snake.ts'/>
/// <reference path='View.ts'/>
var Engine = (function () {
    function Engine() {
        this.snake = new Snake(100, 100);
        this.view = new View();
    }
    Engine.prototype.get = function () {
        return this.snake;
    };
    Engine.prototype.main = function () {
        document.getElementById("snake_p").innerHTML = engine.get().print();
        this.view.draw(this.snake.getX(), this.snake.getY());
    };
    return Engine;
}());
var engine = new Engine();
engine.main();
