// function solve(area, vol, dataAsJSON) {
//     //parse input
//     const figures = JSON.parse(dataAsJSON)
//     //perform operations
//     //create empty 'result' array
//     const result = [];
//     //iterate over figures one by one 
//     for (const figure of figures) {
//         //create an object with two properties area and volume.
//         const output = {
//             area: area.call(figure),
//             volume: vol.call(figure)
//         }
//         //return result as array
//         result.push(output)
//     }
//     return result;
// }





// 2ND VARIANT OF SOLUTION
// function solve(area, vol, dataAsJSON) {
//     //parse input
//     const figures = JSON.parse(dataAsJSON)
//     //perform operations
//     //от единия масив правим друг и за всяка фигура ми върни обект с две пропъртита 'лице' и 'обем'.
//     const result = figures.map(f => ({
//         area: area.call(f),
//         volume: vol.call(f)
//     }))
//     return result;
// }






const example1 = '[{"x":"1","y":"2","z":"10"},{"x":"7","y":"7","z":"10"},{"x":"5","y":"2","z":"10"}]'
const example2 = '[{"x":"10","y":"-22","z":"10"},{"x":"47","y":"7","z":"-5"},{"x":"55","y":"8","z":"0"},{"x":"100","y":"100","z":"100"},{"x":"55","y":"80","z":"250"}]'

console.log(solve(area, vol, example1));
console.log(solve(area, vol, example2));



function area() {
    return Math.abs(this.x * this.y);
};

function vol() {
    return Math.abs(this.x * this.y * this.z);
};