var hour = 0;
var mins = 0;
var secnds = 0;
var msecnds = 0;
var interval;
hourBody = document.getElementById('hour')
minBody = document.getElementById("min");
secBody = document.getElementById("sec");
msecBody = document.getElementById("msec");

function timer() {
    msecnds++
    msecBody.innerHTML = msecnds
    if (msecnds >= 100) {
        secnds++
        secBody.innerHTML = secnds
        msecnds = 0;
    } else if (secnds >= 60) {
        mins++
        secnds = 0;
        minBody.innerHTML = mins
    } else if (mins >= 60) {
        mins = 0;
        hour++
        hourBody.innerHTML = hour
    }
}

function start() {
    interval = setInterval(timer, 10)
    
}
function stop() {
    clearInterval(interval)
    document.getElementById("myBtn").disabled = false;
}
function reset() {
    hour = 0;
    mins = 0;
    secnds = 0;
    msecnds = 0;
    hourBody.innerHTML = hour
    minBody.innerHTML = mins;
    secBody.innerHTML = secnds;
    msecBody.innerHTML = msecnds;
    stop()
    document.getElementById("myBtn").disabled = false;

}
function disableBtn() {
    document.getElementById("myBtn").disabled = true;
}

function add() {
    var ulListb = document.getElementById('result_time')
    var txtHour = ulListb.childNodes[1].childNodes[0].nodeValue
    var txtmin = ulListb.childNodes[5].childNodes[0].nodeValue
    var txtsec = ulListb.childNodes[9].childNodes[0].nodeValue
    var txtmsec = ulListb.childNodes[13].childNodes[1].childNodes[0].nodeValue
    var ulList = document.getElementById('ul_Split')
    var liList = document.createElement('h3')
    ulList.appendChild(liList)
    var txtNode = document.createTextNode("Hour " + txtHour + " : " + "Min " + txtmin + " : " + "Sec " + txtsec + " : " + " Msec " + txtmsec   )
    liList.appendChild(txtNode)
  
}


