class Frame{
    view: View;
    snake: Snake;
    user_event: UserEvent;
    candy: Candy;

    constructor(view: View, snake:Snake, user_event: UserEvent, candy: Candy){
        this.view = view;
        this.snake = snake;
        this.user_event = user_event;
        this.candy = candy;
    }

    nextFrame(){
        let dir = this.user_event.getNewDirection();

        console.log("snake: " + this.snake.getHead().getX() + " " + this.snake.getHead().getY());
        console.log("candy: " + this.candy.getPosition().getX() + " " + this.candy.getPosition().getY());

        // prevent snake from moving in complete opposite direction
        (dir + this.snake.getDirection() == 0)? (dir = this.snake.getDirection()) : this.snake.setDirection(dir);

        this.snake.getBody().unshift(this.snake.getHead());

        if(dir == Direction.RIGHT){
            this.snake.setHead( new Point(this.snake.getHead().getX() + 10, this.snake.getHead().getY()) );
        }
        else if(dir == Direction.DOWN){
            this.snake.setHead( new Point(this.snake.getHead().getX(), this.snake.getHead().getY() + 10) );
        }
        else if(dir == Direction.LEFT){
            this.snake.setHead( new Point(this.snake.getHead().getX() - 10, this.snake.getHead().getY()) );
        }
        else if(dir == Direction.UP){
            this.snake.setHead( new Point(this.snake.getHead().getX(), this.snake.getHead().getY() - 10) );
        }
        else return;

        this.view.clearPoint(this.snake.removeTail());
        this.view.drawHead(this.snake.getHead());

        this.checkEatCandy()
    }

    checkEatCandy(){
        if(Utils.checkCollide(this.candy.getPosition(), this.snake.getHead())){
            console.log("Snake in check: " + this.snake.getHead().getX() + " " + this.snake.getHead().getY());
            console.log("Candy in check: " + this.candy.getPosition().getX() + " " + this.candy.getPosition().getY());
            this.candy.eatCandy(this.candy);
            this.snake.grow(this.snake.getTail());
            this.candy = new Candy(Utils.pickCandyPos(this.snake), this.view);
        }
    }
}