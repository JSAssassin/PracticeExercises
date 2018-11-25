function first() {

    let first_number = 7;

    function second(n) {

        console.log(first_number * n);

        function third() {

        }
        third();
    }

    second(2);
}

first();

