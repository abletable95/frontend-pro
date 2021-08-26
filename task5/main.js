// 1

let calculator = {
    x: 0,
    y: 0,
    read: function() {
        this.x = +prompt('x', '');
        this.y = +prompt('y', '')
    },
    sum: function() {
        return this.x + this.y
    },
    multi: function() {
        return this.x * this.y
    },
    diff: function() {
        return this.x - this.y
    },
    div: function() {
        return this.x / this.y
    }
};

calculator.read();
alert(calculator.sum());
alert(calculator.multi());

// 2

let coffeeMachine = {
    message: 'Your coffee is ready!',
    start: function() {
        let showMessage = () => {
            alert(this.message)
        };
        setTimeout(showMessage, 3000)
    },
};

// 3