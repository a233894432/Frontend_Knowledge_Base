class Dog {
    constructor(name) {
        this.name = name
    }

    biteCriminals(name1, name2) {
        console.log(`${this.name} bite 2 criminals! Their name is ${name1} and ${name2}.`)
    }
}


class Cat {
    constructor(name) {
        this.name = name
    }

    catchMouse(name1, name2) {
        console.log(`${this.name} caught 2 mouse! They call ${name1} and ${name2}.`)
    }
}


const kitty = new Cat('Kitty')
// const doggy = new Dog('Doggy')


kitty.catchMouse('Mickey', 'Minnie')
// doggy.biteCriminal('Tom', 'Jerry')