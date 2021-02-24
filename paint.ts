export abstract class Figure{
    figureType: string
    drawer: Drawer

    constructor(drawer: Drawer){
        this.drawer = drawer;
    }

    draw(){
        console.log(this.figureType);
        this.drawer.draw();
    }
}

export class Circle extends Figure{
    constructor(drawer: Drawer){
        super(drawer);
        this.figureType="Circle";
    }
}

export class Triangle extends Figure{
    constructor(drawer: Drawer){
        super(drawer);
        this.figureType="Triangle";
    }
}

export class Square extends Figure{
    constructor(drawer: Drawer){
        super(drawer);
        this.figureType="Square";
    }
}

export interface Drawer{
    draw:()=>void;
}

export class DottedDrawer implements Drawer{
    draw (){ 
        console.log(" draw Dotted")
    };
}

export class SolidDrawer implements Drawer{
    draw (){ 
        console.log(" draw Solid")
    };
}

export class DashedDrawer implements Drawer{
    draw (){ 
        console.log(" draw Dashed")
    };
}


export let figure = new Square(new SolidDrawer);

figure.draw();
figure.drawer=new DashedDrawer();
figure.draw();