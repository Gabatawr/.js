//#region Task 1

class Product {
    constructor(name, count = 0, bought = false) {
        this.name = name;
        this.count = count;
        this.bought = bought;
    }
    toString() {
        return this.name + ' ' + this.count + ' ' + this.bought;
    }
};

class ShoppingList extends Map {
    addProduct(name, count = 1) {
        if (super.has(name)) {
            super.get(name).count += count;
        }
        else {
            super.set(name, new Product(name, count));
        }
    }
    buyProduct(name) {
        if (super.has(name)) {
            super.get(name).bought = true;
        }
        else {
            console.log("This product is not listed!");
        }
    }
    print() {
        super.forEach(el => {
            if (el.bought == false)
            console.log(el.toString())
        });
        super.forEach(el => {
            if (el.bought == true)
            console.log(el.toString())
        });
    }
};

let shoppingList = new ShoppingList();

//#endregion Task 1