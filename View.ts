class View{
    canvas;
    ctx;

    constructor(){
        this.canvas = <HTMLCanvasElement>document.getElementById("snake_canvas");
        this.ctx = this.canvas.getContext("2d");
    }

    private drawPoint(point: Point): void{
        this.ctx.fillStyle = "#4b4312";
        this.ctx.beginPath();
        this.ctx.arc(point.getX(), point.getY(), 5, 0, 2*Math.PI, false);
        this.ctx.fill();
    }

    drawSnake(snake: Snake): void{
        this.drawHead(snake.getHead());
        for(let point of snake.getBody()){
            this.drawPoint(point);
        }
    }

    drawHead(head: Point): void{
        this.drawPoint(head);
    }

    clearTail(tail: Point): void{
        this.ctx.fillStyle = "white";
        this.ctx.fillRect(tail.getX() - 5, tail.getY() - 5, 10, 10);
    }
}