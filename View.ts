class View{
    draw(pos_x: number, pos_y: number): void{
        let canvas = <HTMLCanvasElement>document.getElementById("snake_canvas");
        let ctx = canvas.getContext("2d");
        ctx.fillStyle = "#4b4312";
        ctx.beginPath();
        ctx.arc(pos_x, pos_y, 5, 0, 2*Math.PI, false);
        ctx.fill();
    }
}

