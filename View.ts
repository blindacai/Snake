class View{
    canvas;
    ctx;

    constructor(){
        this.canvas = <HTMLCanvasElement>document.getElementById("snake_canvas");
        this.ctx = this.canvas.getContext("2d");
    }

    drawPoint(point: Point, color?: string): void{
        this.ctx.fillStyle = color || "#4b4312";
        this.ctx.beginPath();
        this.ctx.arc(point.getX(), point.getY(), Config.snake_radius, 0, 2*Math.PI, false);
        this.ctx.fill();
    }

    drawHead(head: Point): void{
        this.drawPoint(head);
    }

    clearPoint(tail: Point): void{
        this.ctx.fillStyle = "white";
        this.ctx.fillRect(tail.getX() - Config.snake_radius, tail.getY() - Config.snake_radius, Config.snake_dia, Config.snake_dia);
    }

    drawCandy(candy: Candy): void{
        this.drawPoint(candy.getPosition(), "red");
    }
}