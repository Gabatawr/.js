//#region Task 2

Number.prototype.around = function(a = 2) {
    if (a == 0) return Math.floor(this.valueOf());
    
    let b = 1;
    for (let i = 0; i < a; i++) {
        b *= 10;
    }
    return Math.floor(this.valueOf() * b) / b;
}

class Prod {
    constructor(name, count = 0, price = 0.01) {
        this.name = name;
        this.count = count;
        this.price = price;
    }
    toString(...tabs) {
        return this.name.padEnd(tabs[0])
            + this.count.toString().padEnd(tabs[1])
            + this.price.toString().padEnd(tabs[2]);
    }
};

class Сheck extends Array {
    print() {
        let ml = 0; //max length
        super.forEach(p => {
            if (ml < p.name.length) ml = p.name.length;
        });

        console.log('Name'.padEnd(ml) + ' Count Price')
        super.forEach(p => console.log(p.toString(ml+1, 5+1, 5)));
    }
    total() {
        let ret = 0;
        super.forEach(p => ret += p.price);
        return ret.around(2);
    }
    maxPrice() {
        let ret = 0;
        super.forEach(p => {
            if (ret < p.price) ret = p.price;
        });
        return ret;
    }
    avgPrice() {
        return (this.total() / this.length).around(2);
    }
};

let check = new Сheck();
for (let i = 0; i < 10; i++) {
    check.push(
        new Prod(
            `prod_${i + 1}`,
            Math.floor(Math.random() * 10 + 1),
            (Math.random() * 100).around(2)
        )
    )
}

//#endregion Task 2