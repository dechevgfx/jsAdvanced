function addRemove(params) {
    let num = 1;
    let result = []

    params.forEach((element) => {
        if (element == 'add') {
            result.push(num)
        } else {
            result.pop()
        }
        num++
    })
    if (result.length == 0) {
        console.log("Empty")
    }else{
        console.log(result.join("\n"))
    }
}