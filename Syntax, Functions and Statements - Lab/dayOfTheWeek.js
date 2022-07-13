function day(input) {
    let days = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
    ];
    if (days.includes(input)) {
        let day = days.indexOf(input) + 1;
        return day;
    } else {
        return "error";
    }
}
