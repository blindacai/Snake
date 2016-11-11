
class UserEvent{
    engine: Engine;
    listening: boolean;

    constructor(engine: Engine){
        this.engine = engine;
    }

    eventListener(){
        this.listening = true;
        window.addEventListener("keydown", (event) => this.handleKeyDown(event), true);
    }

    private handleKeyDown(event: KeyboardEvent): any{
        if(this.listening){
            this.engine.getFrame().nextFrame(new Snake(this.engine.getFrame().getoldSnake().getX(), 
                                                       this.engine.getFrame().getoldSnake().getY() + 10));
            engine.start();
        }
    }
}