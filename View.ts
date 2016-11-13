class View{
    canvas;
    ctx;

    constructor(){
        this.canvas = <HTMLCanvasElement>document.getElementById("snake_canvas");
        this.ctx = this.canvas.getContext("2d");
    }

    drawPoint(point: Point, color?: string, size?: number): void{
        this.ctx.fillStyle = color || "#4b4312";
        this.ctx.beginPath();
        this.ctx.arc(point.getX(), point.getY(), size || 5, 0, 2*Math.PI, false);
        this.ctx.fill();
    }

    drawSnake(snake: Snake): void{
        this.drawHead(snake.getHead());
    }

    drawHead(head: Point): void{
        this.drawPoint(head);
    }

    clearPoint(tail: Point): void{
        this.ctx.fillStyle = "white";
        this.ctx.fillRect(tail.getX() - 5, tail.getY() - 5, 10, 10);
    }

    drawCandy(candy: Candy): void{
        this.drawPoint(candy.getPosition(), "red");
    }
}