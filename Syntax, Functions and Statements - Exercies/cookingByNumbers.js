function cook(num, ...rest) {
    for (let command of rest) {
        switch (command) {
            case "chop":
                num = num / 2;
                console.log(num);
                break;
            case "dice":
                num = Math.sqrt(num);
                console.log(num);
                break;
            case "spice":
                num = num + 1;
                console.log(num);
                break;
            case "bake":
                num = num * 3;
                console.log(num);
                break;
            case "fillet":
                num = num * 0.8;
                console.log(num);
                break;

            default:
                break;
        }
    }
}
