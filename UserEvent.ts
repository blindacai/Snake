
class UserEvent{
    engine: Engine;

    constructor(engine: Engine){
        this.engine = engine;
    }

    eventListener(){
        window.addEventListener("keydown", (event) => this.handleKeyDown(event), true);
    }


    private handleKeyDown(event: KeyboardEvent): any{
        if(event.keyCode === 39){
            this.engine.start();
        }
    }

}