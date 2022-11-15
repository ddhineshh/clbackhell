const wishes = document.getElementById("wishes");
console.log(wishes);

setTimeout(function () {
    wishes.innerText = "10";

    setTimeout(function () {
        wishes.innerText = "9";

        setTimeout(function () {
            wishes.innerText = "8";

            setTimeout(function () {
                wishes.innerText = "7";

                setTimeout(function () {
                    wishes.innerText = "6";

                    setTimeout(function () {
                        wishes.innerText = "5";

                        setTimeout(function () {
                            wishes.innerText = "4";

                            setTimeout(function () {
                                wishes.innerText = "3";

                                setTimeout(function () {
                                    wishes.innerText = "2";

                                    setTimeout(function () {
                                        wishes.innerText = "1";

                                        setTimeout(function () {
                                            wishes.innerText = "Happy 75th Independence Day";

                                        }, 1000);

                                    }, 1000);

                                }, 1000);

                            }, 1000);

                        }, 1000);

                    }, 1000);

                }, 1000);

            }, 1000);

        }, 1000);

    }, 1000);

}, 1000);

