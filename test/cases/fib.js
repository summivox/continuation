var fib = function () {
    var a = 0, current = 1;
    while (true) {
        var b = a;
        a = current;
        current = a + b;
        setTimeout(continuation(), 1000);
        console.log(current);
    }
};

fib();
