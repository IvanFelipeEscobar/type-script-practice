interface Greetable {
    name : string;
    age : number;

    greet(phrase : string) : void
}

let user: Greetable;

user = {
    name: "john",
    age: 30,
    greet(phrase){
        console.log(`${phrase} ${this.name}, your age is ${this.age}`)
    }
}
user.greet(`hello`);