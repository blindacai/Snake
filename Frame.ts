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
        console.log("direction: " + this.snake.getDirection());

        // prevent snake from moving in complete opposite direction
        (dir + this.snake.getDirection() == 0)? (dir = this.snake.getDirection()) : this.snake.setDirection(dir);

        // prevent snake's body from growing when user hit non-arrow keys before starting the game
        if(dir != 0){
            this.snake.getBody().unshift(this.snake.getHead());
            this.initialGrowth();
        }

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

        this.checkEatCandy();
        this.view.drawHead(this.snake.getHead());
        this.view.clearPoint(this.snake.removeTail());
    }

    checkEatCandy(){
        if(Utils.checkCollide(this.candy.getPosition(), this.snake.getHead())){
            this.candy.eatCandy(this.candy);
            this.snake.grow(this.snake.getTail());
            this.candy = new Candy(Utils.pickCandyPos(this.snake), this.view);
        }
    }

    initialGrowth(){
        if(this.snake.growthLeft > 0){
            this.snake.grow(this.snake.getTail());
            this.snake.growthLeft--;
        }
    }
}