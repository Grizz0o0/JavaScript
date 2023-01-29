window.onload = function () {
    var tens = 00;
    var seconds = 00;
    var appearSecond = document.getElementById("seconds");
    var appearTens = document.getElementById("tens");
    var buttonStart = document.getElementById("button-start");
    var buttonStop = document.getElementById("button-stop");
    var buttonReset = document.getElementById("button-reset");
    var interval;

    buttonStart.onclick = function () {
        clearInterval(interval); // Nếu bỏ đi sẽ "có thể" gặp lỗi ko ấn Stop được mà chỉ Reset được
        interval = setInterval(start, 10);
    };

    buttonStop.onclick = function () {
        clearInterval(interval);
    };

    buttonReset.onclick = function () {
        clearInterval(interval);
        seconds = 00;
        tens = 00;
        appearTens.innerHTML = "0" + tens;
        appearSecond.innerHTML = "0" + seconds;
    };

    function start() {
        tens++;

        if (tens <= 9) {
            appearTens.innerHTML = "0" + tens;
        }

        if (tens > 9) {
            appearTens.innerHTML = tens;
        }

        if (tens > 99) {
            seconds++;
            appearSecond.innerHTML = "0" + seconds;
            tens = 0;
            appearTens.innerHTML = "0" + tens;
        }

        if (seconds <= 9) {
            appearSecond.innerHTML = "0" + seconds;
        }

        if (seconds > 9) {
            appearSecond.innerHTML = seconds;
        }
    }
};
