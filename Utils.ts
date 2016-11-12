class Utils{
    static checkCollide(first: Point, second: Point): boolean{
        return (first.getX() == second.getX()) && (first.getY() == second.getY());
    }

    static pickCandyPos(snake: Snake): Point{
        return new Point(this.randomPos(), this.randomPos());
    }

    static randomPos(){
        let random = Math.floor( Math.random() * 200);
        return this.roundTen(random);
    }

    static roundTen(random: number){
        if(random < 10){
            return 10;
        }
        else{
            return random - random % 10;
        }
    }
}

const enum Direction{
    RIGHT = 1,
    LEFT = -1,
    DOWN = 2,
    UP = -2
}

const enum State{
    ready = 1,
    play = 2
}

const enum Config{

}