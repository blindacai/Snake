/// <reference path='Point.ts'/>

class Snake{
    head: Point;
    body: Array<Point> = [];

    constructor(){
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