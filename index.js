let digitalClock = () => {

    let date = new Date();    //get the time using Date() func.

    let hour = date.getHours();
    hour = (hour % 12);
    let minute = date.getMinutes();
    let second = date.getSeconds();
    let amORpm = date.getHours() >= 12 ? "PM" : "AM";


    document.getElementById("hours").innerHTML = hour;
    document.getElementById("minutes").innerHTML = minute;
    document.getElementById("seconds").innerHTML = second;
    document.getElementById("am_or_pm").innerHTML = amORpm;

    setTimeout(digitalClock, 500)

}

digitalClock();