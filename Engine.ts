/// <reference path='Snake.ts'/>
/// <reference path='View.ts'/>
/// <reference path='UserEvent.ts'/>

class Engine{
    snake: Snake;
    view: View;
    event: UserEvent;

    constructor(){
        this.snake = new Snake(100, 100);
        this.view = new View();
        this.event = new UserEvent();
    }

    main(){
        document.getElementById("snake_p").innerHTML = this.snake.print();
        this.view.drawSnake(this.snake);
        this.event.eventListener();
    }

    start(){
        //setInterval(next, 150);
    }
}

var engine = new Engine();
engine.main();



