class Frame{
    view: View;
    oldsnake: Snake;
    newsnake: Snake;
    user_event: UserEvent;

    constructor(view: View, snake:Snake, user_event: UserEvent){
        this.view = view;
        this.oldsnake = snake;
        this.user_event = user_event;
    }

    nextFrame(){
        let dir = this.user_event.getLastDirection();

        if(dir == Direction.RIGHT){
            this.newsnake = new Snake(this.oldsnake.getX() + 10, this.oldsnake.getY());
        }
        else if(dir == Direction.DOWN){
            this.newsnake = new Snake(this.oldsnake.getX(), this.oldsnake.getY() + 10);
        }
        else if(dir == Direction.LEFT){
            this.newsnake = new Snake(this.oldsnake.getX() - 10, this.oldsnake.getY());
        }
        else if(dir == Direction.UP){
            this.newsnake = new Snake(this.oldsnake.getX(), this.oldsnake.getY() - 10);
        }
        else return;

        this.view.clearSnake(this.oldsnake);
        this.oldsnake = this.newsnake;
        this.view.drawSnake(this.newsnake);
    }
}