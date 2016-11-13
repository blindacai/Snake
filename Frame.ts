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
        let x_pos = this.snake.getHead().getX();
        let y_pos = this.snake.getHead().getY();

        // prevent snake from moving in complete opposite direction
        (dir + this.snake.getDirection() == 0)? (dir = this.snake.getDirection()) : this.snake.setDirection(dir);

        // prevent snake's body from growing when users hit non-arrow keys before starting the game
        if(dir != 0){
            this.snake.getBody().unshift(this.snake.getHead());
            this.initialGrowth();
        }

        if(dir == Direction.RIGHT){
            this.snake.setHead( new Point( (Config.canvas_size - (x_pos + Config.snake_dia) < Config.snake_radius )?
                                                5 : (x_pos + Config.snake_dia),
                                            y_pos) );
        }
        else if(dir == Direction.DOWN){
            this.snake.setHead( new Point( x_pos,
                                (Config.canvas_size - (y_pos + Config.snake_dia) < Config.snake_radius )?
                                    5 : (y_pos + Config.snake_dia) ) );
        }
        else if(dir == Direction.LEFT){
            this.snake.setHead( new Point( (x_pos - Config.snake_dia < 5)?
                                                Config.canvas_size - Config.snake_radius : (x_pos - Config.snake_dia),
                                            y_pos ) );
        }
        else if(dir == Direction.UP){
            this.snake.setHead( new Point( x_pos,
                                           (y_pos - Config.snake_dia < 5)?
                                                Config.canvas_size - Config.snake_radius : (y_pos - Config.snake_dia) ) );
        }
        else return;

        this.checkEatCandy();
        this.view.drawSnake(this.snake);
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