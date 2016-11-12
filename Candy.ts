class Candy{
    point: Point;
    view: View;

    constructor(point: Point, view: View){
        this.point = point;
        this.view = view;
        view.drawCandy(this);
    }

    getPosition(): Point{
        return this.point;
    }

    eatCandy(candy: Candy){
        this.view.drawPoint(candy.getPosition());
    }
}