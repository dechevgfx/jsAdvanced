function solve(fruit, weight, money) {
    let moneyNeeded = (weight / 1000) * money;
    console.log(`I need $${moneyNeeded.toFixed(2)} to buy ${(weight/1000).toFixed(2)} kilograms ${fruit}.`)
}