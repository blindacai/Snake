class View{
    canvas;
    ctx;

    constructor(){
        console.log("view");
        this.canvas = <HTMLCanvasElement>document.getElementById("snake_canvas");
        this.ctx = this.canvas.getContext("2d");
    }

    drawSnake(snake: Snake): void{
        this.ctx.fillStyle = "#4b4312";
        this.ctx.beginPath();
        this.ctx.arc(snake.getX(), snake.getY(), 5, 0, 2*Math.PI, false);
        this.ctx.fill();
    }

    clearSnake(snake: Snake): void{
        this.ctx.fillStyle = "white";
        this.ctx.fillRect(snake.getX() - 5, snake.getY() - 5, 10, 10);
    }
}