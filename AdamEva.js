class Apple {
    constructor() {
        this.weight = 10;
    }

    setweight(w) {
        this.weight=w;
    }

    getweight() {
        console.log(this.weight);
        return this.weight;
    }

    decreaseWeight() {
        if (this.weight > 0) {
            this.weight--;
        } else {
            alert('het roi');
        }
    }
}

class Human {
    constructor(name, weight) {
        this.name = name;
        this.gender = false;
        this.weight = weight
    }

    getname() {
        return this.name;
    }

    getmale() {
        return this.gender = false;
    }

    getfemale() {
        return this.gender = true;
    }


    getweight() {
        console.log(this.weight);
        return this.weight;
    }

    speak() {
        if (this.gender) {
            console.log('I am EVA');
        } else {
            console.log('I am ADAM');
        }
    }

    eatApple(apple) {
        apple.decreaseWeight();
        this.weight++;
    }

    checkApple(apple) {
        apple.getweight();
    }
}

let apple = new Apple();
apple.getweight();
let adam = new Human('Adam', 65);
adam.getmale();
adam.speak();
let eva = new Human('Eva', 50);
eva.getfemale();
eva.speak();
adam.eatApple(apple);
eva.eatApple(apple);
adam.getweight();
eva.getweight();
adam.checkApple(apple);
eva.checkApple(apple);
apple.setweight(1);
eva.eatApple(apple);
adam.eatApple(apple);


