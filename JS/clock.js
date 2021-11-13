setInterval(function () {

    let new_hour = new Date();
    let hour = new_hour.getHours();
    let min = new_hour.getMinutes();
    let sec = new_hour.getSeconds();

    if (hour < 10)
        hour = "0" + hour;
    if (min < 10)
        min = "0" + min;
    if (sec < 10)
        sec = "0" + sec;

    document.getElementById("hour").innerHTML = hour;
    document.getElementById("min").innerHTML = min;
    document.getElementById("sec").innerHTML = sec;

}, 1000)