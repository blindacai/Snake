/// <reference path='Snake.ts'/>
/// <reference path='View.ts'/>

class Engine{
    snake: Snake;
    view: View;

    constructor(){
        this.snake = new Snake(100, 100);
        this.view = new View();
    }

    get(): any{
        return this.snake;
    }

    main(){
        document.getElementById("snake_p").innerHTML = engine.get().print();
        this.view.draw(this.snake.getX(), this.snake.getY());
    }
}

var engine = new Engine();
engine.main();



