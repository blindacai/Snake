/// <reference path='Snake.ts'/>
/// <reference path='View.ts'/>
/// <reference path='UserEvent.ts'/>
/// <reference path='Frame.ts'/>

class Engine{
    snake: Snake;
    view: View;
    event: UserEvent;
    frame: Frame;

    constructor(){
        this.snake = new Snake(100, 100);
        this.view = new View();
        this.event = new UserEvent(this);
        this.frame = new Frame(this.view, this.snake);
    }

    main(){
        document.getElementById("snake_p").innerHTML = this.snake.print();
        this.view.drawSnake(this.snake);
        this.event.eventListener();
    }

    start(){
        setInterval(this.frame.nextFrame.bind(this.frame), 750);
    }
}


var engine = new Engine();
engine.main();



