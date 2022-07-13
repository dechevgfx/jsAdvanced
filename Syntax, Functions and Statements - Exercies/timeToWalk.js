function time(steps, footprint, speed) {
    let metersToWalk = steps * footprint;
    let delayInSec = Math.floor(metersToWalk / 500) * 60;
    let resultInSec = metersToWalk / (speed / 3.6);
    let totalSeconds = resultInSec + delayInSec;

    let hh = Math.floor(totalSeconds / 3600);
    let mm = Math.floor(totalSeconds / 60);
    let ss = Math.round(totalSeconds % 60);
    if (hh < 10) {
        hh = "0" + hh;
    }
    if (mm < 10) {
        mm = "0" + mm;
    }
    if (ss < 10) {
        ss = "0" + ss;
    }
    console.log(`${hh}:${mm}:${ss}`);
}
time(2564, 0.7, 5.5);
