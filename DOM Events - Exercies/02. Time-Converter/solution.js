function attachEventsListeners() {
    let daysBtn = document.getElementById("daysBtn");
    let hoursBtn = document.getElementById("hoursBtn");
    let minutesBtn = document.getElementById("minutesBtn");
    let secondsBtn = document.getElementById("secondsBtn");

    let daysText = document.getElementById("days");
    let hoursText = document.getElementById("hours");
    let minutesText = document.getElementById("minutes");
    let secondsText = document.getElementById("seconds");

    daysBtn.addEventListener("click", function () {
        let days = daysText.value;
        hoursText.value = days * 24;
        minutesText.value = days * 1440;
        secondsText.value = days * 86400;
    });
    hoursBtn.addEventListener("click", function () {
        let hours = hoursText.value;
        daysText.value = hours / 24;
        minutesText.value = hours * 60;
        secondsText.value = hours * 60 * 60;
    });
    minutesBtn.addEventListener("click", function () {
        let minutes = minutesText.value;
        hoursText.value = minutes / 60;
        daysText.value = minutes / 60 / 24;
        secondsText.value = minutes * 60;
    });
    secondsBtn.addEventListener("click", function () {
        let seconds = secondsText.value;
        hoursText.value = seconds / 60 / 60;
        minutesText.value = seconds / 60;
        daysText.value = seconds / 60 / 60 / 24;
    });
}
