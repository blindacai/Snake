class View{
    drawSnake(snake: Snake): void{
        let canvas = <HTMLCanvasElement>document.getElementById("snake_canvas");
        let ctx = canvas.getContext("2d");
        ctx.fillStyle = "#4b4312";
        ctx.beginPath();
        ctx.arc(snake.getX(), snake.getY(), 5, 0, 2*Math.PI, false);
        ctx.fill();
    }
}

