class UserEvent{
    eventListener(){
        var ev: KeyboardEvent;
        window.addEventListener("keydown", this.handleKeyDown(ev), true);
    }

    private handleKeyDown(event: KeyboardEvent): any{
        console.log(event);
        //console.log(event.keyCode);
    }
}