class Snake{
    private pos_x: number;
    private pos_y: number;
    private direction: number;

    constructor(pos_x: number, pos_y: number){
        this.pos_x = pos_x;
        this.pos_y = pos_y;
    }

    getX(): number{
        return this.pos_x;
    }

    getY(): number{
        return this.pos_y;
    }

    print(): string{
        return "Hello Snake";
    }
}

