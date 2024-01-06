function time() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes().toString();
    minutes = minutes.padStart(2, '0');
    document.getElementById("clock-time").innerText = hours + ":" + minutes;
}

setInterval(time, 1000);