/// <reference path='Point.ts'/>

class Snake{
    head: Point;
    body: Array<Point> = [];
    direction: number;

    constructor(view: View){
        this.direction = 0;
        this.setHead(new Point(130, 100));
        this.setBody([new Point(120, 100), new Point(110, 100), new Point(100, 100)]);
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

    setBody(body: Array<Point>): void{
        this.body = body;
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