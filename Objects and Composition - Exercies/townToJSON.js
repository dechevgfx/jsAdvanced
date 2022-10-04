function townJson(array) {
    array.shift();
    let finalArr = [];
    for (let iterator of array) {
        iterator = " " + iterator + " ";
        let props = iterator.split(" | ");
        let name = props[1];
        let lat = Number(props[2]);
        let long = Number(props[3]);
        let obj = {
            Town: name,
            Latitude: Number(lat.toFixed(2)),
            Longitude: Number(long.toFixed(2)),
        };
        finalArr.push(obj);
    }
    console.log(JSON.stringify(finalArr));
}
