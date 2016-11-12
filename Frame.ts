class Frame{
    view: View;
    oldhead: Point;
    newhead: Point;
    newSnake: Snake;
    user_event: UserEvent;

    constructor(view: View, snake:Snake, user_event: UserEvent){
        this.view = view;
        this.newSnake = snake;

        this.oldhead = this.newSnake.getHead();
        this.user_event = user_event;
    }

    nextFrame(){
        let dir = this.user_event.getNewDirection();
        this.newSnake.getBody().unshift(this.newSnake.getHead());

        if(dir == Direction.RIGHT){
            this.newSnake.setHead( new Point(this.newSnake.getHead().getX() + 10, this.newSnake.getHead().getY()) );
        }
        else if(dir == Direction.DOWN){
            this.newSnake.setHead( new Point(this.newSnake.getHead().getX(), this.newSnake.getHead().getY() + 10) );
        }
        else if(dir == Direction.LEFT){
            this.newSnake.setHead( new Point(this.newSnake.getHead().getX() - 10, this.newSnake.getHead().getY()) );
        }
        else if(dir == Direction.UP){
            this.newSnake.setHead( new Point(this.newSnake.getHead().getX(), this.newSnake.getHead().getY() - 10) );
        }
        else return;

        this.view.clearSnake(this.newSnake.removeTail());
        this.view.drawHead(this.newSnake.getHead());
    }
}