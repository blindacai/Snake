/// <reference path='Point.ts'/>

class Snake{
    head: Point;
    body: Array<Point> = [];
    direction: number;
    growthLeft: number;

    constructor(view: View){
        this.direction = 0;
        this.growthLeft = 2;
        this.setHead(new Point(125, 105));
        view.drawSnake(this);
    }

    setHead(head: Point): void{
        this.head = head;
    }

    getHead(): Point{
        return this.head;
    }

    getTail(): Point{
        return this.body[this.body.length - 1];
    }

    getLength(): number{
        return this.body.length + 1;
    }

    getBody(): Array<Point>{
        return this.body;
    }

    setDirection(dir: number): void{
        this.direction = dir;
    }

    getDirection(): number{
        return this.direction;
    }

    removeTail(): Point{
        return this.body.pop();
    }

    grow(point: Point): void{
        this.body.push(point);
    }

    print(): string{
        return "Hello Snake";
    }
}