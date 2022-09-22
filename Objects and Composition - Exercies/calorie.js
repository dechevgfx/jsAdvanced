function calorie(array) {
    let names = [];
    let calories = [];
    let obj = {};
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (index % 2 === 0) {
            names.push(element);
        } else {
            calories.push(Number(element));
        }
    }
    for (let index = 0; index < names.length; index++) {
        const name = names[index];
        const cals = calories[index];
        obj[name] = cals;
    }
    console.log(obj);
}
calorie(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'] )