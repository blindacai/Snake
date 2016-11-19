class Utils{
    static singleCollide(first: Point, second: Point): boolean{
        return (first.getX() == second.getX()) && (first.getY() == second.getY());
    }

    static listCollide(point: Point, body: Array<Point>): boolean{
        for(let each of body){
            if(this.singleCollide(point, each)){
                return true;
            }
        }
        return false;
    }

    static pickCandyPos(snake: Snake): Point{
        let again = true;
        let newpoint = new Point(this.randomPos(), this.randomPos());

        while(again){
            if(!this.candyOverlap(newpoint, snake)){
                again = false;
            }
            else{
                newpoint = new Point(this.randomPos(), this.randomPos());
            }
        }
        return newpoint;
    }

    static candyOverlap(point: Point, snake: Snake): boolean{
        return this.singleCollide(point, snake.getHead()) || this.listCollide(point, snake.getBody());
    }

    static randomPos(){
        let random = Math.floor( Math.random() * 250);
        return this.roundFive(random);
    }

    static roundFive(random: number): number{
        let checkone = random - random % 5;
        let checktwo = checkone % 10;

        if(checktwo != 0){
            return checkone;
        }
        else{
            return random + (5 - random % 5);
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
    canvas_size = 250,
    snake_radius = 5,
    snake_dia = snake_radius * 2
}