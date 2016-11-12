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

    constructor(){
        this.view = new View();

        this.snake = new Snake(this.view);
        this.event = new UserEvent(this);
        this.candy = new Candy(new Point(50, 50), this.view);
        this.frame = new Frame(this.view, this.snake, this.event, this.candy);

        this.gameState = State.ready;
    }

    main(){
        document.getElementById("snake_p").innerHTML = this.snake.print();
        this.event.eventListener();
    }

    start(){
        if(this.gameState == State.ready){
            setInterval(this.frame.nextFrame.bind(this.frame), 200);
            this.gameState = State.play;
        }
    }
}


var engine = new Engine();
engine.main();



