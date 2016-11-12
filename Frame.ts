class Frame{
    view: View;
    snake: Snake;
    user_event: UserEvent;

    constructor(view: View, snake:Snake, user_event: UserEvent){
        this.view = view;
        this.snake = snake;
        this.user_event = user_event;
    }

    nextFrame(){
        let dir = this.user_event.getNewDirection();
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

        this.view.clearTail(this.snake.removeTail());
        this.view.drawHead(this.snake.getHead());
    }
}