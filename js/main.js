

// Set the date we're counting down to
var countDownDate = new Date("May 5, 2022 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    document.getElementById("demo").innerHTML = days + ": " + hours + ":"
        + minutes + ":" + seconds + " ";
    document.getElementById("demo-2").innerHTML = days + ": " + hours + ":"
        + minutes + ":" + seconds + " ";
    document.getElementById("demo-3").innerHTML = days + ": " + hours + ":"
        + minutes + ":" + seconds + " ";
    document.getElementById("demo-4").innerHTML = days + ": " + hours + ":"
        + minutes + ":" + seconds + " ";

    document.getElementById("demo-5").innerHTML = days + ": " + hours + ":"
        + minutes + ":" + seconds + " ";
    document.getElementById("demo-6").innerHTML = days + ": " + hours + ":"
        + minutes + ":" + seconds + " ";
    document.getElementById("demo-7").innerHTML = days + ": " + hours + ":"
        + minutes + ":" + seconds + " ";


    document.getElementById("demo-8").innerHTML = days + ": " + hours + ":"
        + minutes + ":" + seconds + " ";
    document.getElementById("demo-9").innerHTML = days + ": " + hours + ":"
        + minutes + ":" + seconds + " ";
    document.getElementById("demo-10").innerHTML = days + ": " + hours + ":"
        + minutes + ":" + seconds + " ";

    document.getElementById("demo-11").innerHTML = days + ": " + hours + ":"
        + minutes + ":" + seconds + " ";
    document.getElementById("demo-12").innerHTML = days + ": " + hours + ":"
        + minutes + ":" + seconds + " ";
    document.getElementById("demo-13").innerHTML = days + ": " + hours + ":"
        + minutes + ":" + seconds + " ";


    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
        document.getElementById("demo-2").innerHTML = "EXPIRED";
        document.getElementById("demo-3").innerHTML = "EXPIRED";
        document.getElementById("demo-4").innerHTML = "EXPIRED";
        document.getElementById("demo-5").innerHTML = "EXPIRED";
        document.getElementById("demo-6").innerHTML = "EXPIRED";
        document.getElementById("demo-7").innerHTML = "EXPIRED";
        document.getElementById("demo-8").innerHTML = "EXPIRED";
        document.getElementById("demo-9").innerHTML = "EXPIRED";
        document.getElementById("demo-10").innerHTML = "EXPIRED";
        document.getElementById("demo-11").innerHTML = "EXPIRED";
        document.getElementById("demo-12").innerHTML = "EXPIRED";
        document.getElementById("demo-13").innerHTML = "EXPIRED";
    }
}, 1000);