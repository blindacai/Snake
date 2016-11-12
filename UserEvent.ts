class UserEvent{
    engine: Engine;
    listening: boolean;
    new_direction: number;

    constructor(engine: Engine){
        this.engine = engine;
    }

    eventListener(){
        this.listening = true;
        window.addEventListener("keydown", (event) => this.handleKeyDown(event), true);
    }

    getNewDirection(){
        return this.new_direction;
    }

    private handleKeyDown(event: KeyboardEvent): any{
        engine.start(); 
        this.newDirection(event);
    }

    private newDirection(event: KeyboardEvent): void{
        if(event.keyCode == 39){
            this.new_direction = Direction.RIGHT;
        }
        else if(event.keyCode == 40){
            this.new_direction = Direction.DOWN;
        }
        else if(event.keyCode == 37){
            this.new_direction = Direction.LEFT;
        }
        else if(event.keyCode == 38){
            this.new_direction = Direction.UP;
        }
    }
}