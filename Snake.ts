/// <reference path='Point.ts'/>

class Snake{
    head: Point;
    body: Array<Point> = [];
    direction: number;
    growthLeft: number;
    live: boolean;

    constructor(view: View){
        this.direction = 0;
        this.growthLeft = 2;
        this.live = true

        this.setHead(new Point(125, 105));
        view.drawHead(this.head);
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

    setLive(live: boolean){
        this.live = live;
    }

    getLive(): boolean{
        return this.live;
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