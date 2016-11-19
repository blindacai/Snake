/// <reference path='View.ts'/>
/// <reference path='UserEvent.ts'/>
/// <reference path='Frame.ts'/>
/// <reference path='Snake.ts'/>
/// <reference path='Candy.ts'/>

class Engine{
    view: View;
    event: UserEvent;
    frame: Frame;
    snake: Snake;
    candy: Candy;

    gameState: number;
    frameIntervalId: number;

    constructor(){
        this.view = new View();

        this.snake = new Snake(this.view);
        this.event = new UserEvent(this);
        this.candy = new Candy(new Point(105, 105), this.view);
        this.frame = new Frame(this);

        this.gameState = State.ready;
    }

    getView(){
        return this.view;
    }

    getSnake(){
        return this.snake;
    }

    getEvent(){
        return this.event;
    }

    getCandy(){
        return this.candy;
    }

    main(){
        document.getElementById("snake_p").innerHTML = this.snake.print();
        this.event.eventListener();
    }

    start(){
        if(this.gameState == State.ready){
            this.frameIntervalId = setInterval(this.frame.nextFrame.bind(this.frame), 120);
            this.gameState = State.play;
        }
    }

    gameOver(snake: Snake){
        clearInterval(this.frameIntervalId);
        setTimeout(() => this.clearBody(), 500);
        this.snake.setLive(false);
    }

    clearBody(): void{
        if(this.snake.getBody().length == 0){
            return;
        }
        else{
            if(!Utils.singleCollide(this.snake.getTail(), this.snake.getBody()[0])){
                this.view.clearPoint(this.snake.getBody().pop());
            }
            else{ this.snake.getBody().pop(); }

            setTimeout(() => this.clearBody(), 150);
        }
    }
}


var engine = new Engine();
engine.main();



