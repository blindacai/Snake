/// <reference path='Snake.ts'/>
/// <reference path='View.ts'/>
/// <reference path='UserEvent.ts'/>
/// <reference path='Frame.ts'/>

class Engine{
    snake: Snake;
    view: View;
    event: UserEvent;
    frame: Frame;

    gameState;

    constructor(){
        this.snake = new Snake(100, 100);
        this.view = new View();
        this.frame = new Frame(this.view, this.snake);
        this.event = new UserEvent(this);

        this.gameState = State.ready;
    }

    getFrame(): Frame{
        return this.frame;
    }

    getSnake(): Snake{
        return this.snake
    }

    main(){
        document.getElementById("snake_p").innerHTML = this.snake.print();
        this.view.drawSnake(this.snake);
        this.event.eventListener();
    }

    start(){
        if(this.gameState == State.ready){
            setInterval(this.frame.nextFrame.bind(this.frame), 1000);
            this.gameState = State.play;
        }
    }
}


var engine = new Engine();
engine.main();



