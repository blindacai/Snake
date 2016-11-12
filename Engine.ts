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
        this.snake = new Snake(0);
        this.snake.setHead(new Point(130, 100));
        this.snake.setBody([new Point(120, 100), new Point(110, 100), new Point(100, 100)]);

        this.candy = new Candy(new Point(200, 200));

        this.view = new View();
        this.event = new UserEvent(this);
        this.frame = new Frame(this.view, this.snake, this.event);

        this.gameState = State.ready;
    }

    main(){
        document.getElementById("snake_p").innerHTML = this.snake.print();
        this.view.drawSnake(this.snake);
        this.view.drawCandy(this.candy);
        this.event.eventListener();
    }

    start(){
        if(this.gameState == State.ready){
            setInterval(this.frame.nextFrame.bind(this.frame), 150);
            this.gameState = State.play;
        }
    }
}


var engine = new Engine();
engine.main();



