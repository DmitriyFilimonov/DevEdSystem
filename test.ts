export interface Animal{
    name: string
    age: number
    legsCount: number
    eat: () => void
}

export class Cat implements Animal{
    constructor(){
        this.legsCount=4;
    }

    readonly legsCount: number
    name: string
    age: number
    breed: string

    
    eat(): number{
        //do smthng
        return 42;
    };
}

export class BritishCat extends Cat{
    constructor(){
        super();
        this.breed="BritishCat";
    }
}

const cat: Animal = {
    name:'Cat',
    age: 4,
    legsCount: 4,
    eat: ()=>{
        console.log('Om-nom-nom')
    }
}