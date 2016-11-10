class Frame{
    view: View;
    oldsnake: Snake;
    newsnake: Snake;

    constructor(view: View, snake:Snake){
        this.view = view;
        this.oldsnake = snake;
    }

    nextFrame(){
        this.newsnake = new Snake(this.oldsnake.getX() + 10, this.oldsnake.getY());
        this.view.clearSnake(this.oldsnake);
        this.oldsnake = this.newsnake;
        this.view.drawSnake(this.newsnake);
    }
}