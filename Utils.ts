class Utils{
    static checkCollide(first: Point, second: Point): boolean{
        return (first.getX() == second.getX()) && (first.getY() == second.getY());
    }

    static pickCandyPos(snake: Snake): Point{
        let again = true;
        let newpoint = new Point(this.randomPos(), this.randomPos());

        while(again){
            if(!this.overlap(newpoint, snake)){
                again = false
            }
            else{
                newpoint = new Point(this.randomPos(), this.randomPos());
            }
        }

        return newpoint;
    }

    static overlap(point: Point, snake: Snake): boolean{
        if(point.getX() == snake.getHead().getX() && point.getY() == snake.getHead().getY()){
            return true;
        }
        for(let body_point of snake.getBody()){
            if(point.getX() == body_point.getX() && point.getY() == body_point.getY()){
                return true;
            }
        }

        return false;
    }

    static randomPos(){
        let random = Math.floor( Math.random() * 200);
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
    canvas_size = 200,
    snake_radius = 5,
    snake_dia = snake_radius * 2
}