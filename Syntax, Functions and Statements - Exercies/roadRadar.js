function speedLimit(speed, zone) {
    let motorway = 130;
    let interstate = 90;
    let city = 50;
    let residential = 20;
    let status = "";

    if (zone == "motorway") {
        if (speed > motorway) {
            let diff = speed - motorway;
            if (diff <= 20) {
                status = "speeding";
            } else if (diff <= 40) {
                status = "excessive speeding";
            } else {
                status = "reckless driving";
            }
            console.log(
                `The speed is ${diff} km/h faster than the allowed speed of ${motorway} - ${status}`,
            );
        } else {
            console.log(`Driving ${speed} km/h in a ${motorway} zone`);
        }
    } else if (zone == "interstate") {
        if (speed > interstate) {
            let diff = speed - interstate;
            if (diff <= 20) {
                status = "speeding";
            } else if (diff <= 40) {
                status = "excessive speeding";
            } else {
                status = "reckless driving";
            }
            console.log(
                `The speed is ${diff} km/h faster than the allowed speed of ${interstate} - ${status}`,
            );
        } else {
            console.log(`Driving ${speed} km/h in a ${interstate} zone`);
        }
    } else if (zone == "city") {
        if (speed > city) {
            let diff = speed - city;
            if (diff <= 20) {
                status = "speeding";
            } else if (diff <= 40) {
                status = "excessive speeding";
            } else {
                status = "reckless driving";
            }
            console.log(
                `The speed is ${diff} km/h faster than the allowed speed of ${city} - ${status}`,
            );
        } else {
            console.log(`Driving ${speed} km/h in a ${city} zone`);
        }
    } else if (zone == "residential") {
        if (speed > residential) {
            let diff = speed - residential;
            if (diff <= 20) {
                status = "speeding";
            } else if (diff <= 40) {
                status = "excessive speeding";
            } else {
                status = "reckless driving";
            }
            console.log(
                `The speed is ${diff} km/h faster than the allowed speed of ${residential} - ${status}`,
            );
        } else {
            console.log(`Driving ${speed} km/h in a ${residential} zone`);
        }
    }
}
