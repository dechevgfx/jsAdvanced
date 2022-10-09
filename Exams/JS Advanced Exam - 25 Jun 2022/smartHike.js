class SmartHike {
    constructor(username) {
        this.username = username;
        this.goals = {};
        this.listOfHikes = [];
        this.resources = 100;
    }
    addGoal(peak, altitude) {
        if (!this.goals.hasOwnProperty(peak)) {
            this.goals[peak] = altitude;
            return `You have successfully added a new goal - ${peak}`;
        } else {
            return `${peak} has already been added to your goals`;
        }
    }
    hike(peak, time, difficultyLevel) {
        if (!this.goals.hasOwnProperty(peak)) {
            throw new Error(`${peak} is not in your current goals`);
        }
        if (this.goals.hasOwnProperty(peak) && this.resources < 1) {
            throw new Error(
                `You don't have enough resources to start the hike`,
            );
        }
        let differenceInResources = this.resources - time * 10;
        if (differenceInResources < 0) {
            return "You don't have enough resources to complete the hike";
        } else {
            this.resources = differenceInResources;
            this.listOfHikes.push({
                peak,
                time,
                difficultyLevel,
            });
            return `You hiked ${peak} peak for ${time} hours and you have ${this.resources}% resources left`;
        }
    }
    rest(time) {
        if (this.resources + time * 10 >= 100) {
            this.resources = 100;
            return `Your resources are fully recharged. Time for hiking!`;
        } else {
            this.resources += time * 10;
            return `You have rested for ${time} hours and gained ${
                time * 10
            }% resources`;
        }
    }
    showRecord(criteria) {
        let hard = [];
        let easy = [];

        if (this.listOfHikes.length < 1) {
            return `${this.username} has not done any hiking yet`;
        }

        if (criteria === "hard") {
            this.listOfHikes.forEach((hike) => {
                if (hike.difficultyLevel === "hard") hard.push(hike);
            });
            if (hard.length < 1) {
                return `${this.username} has not done any ${criteria} hiking yet`;
            } else {
                hard.sort(function (a, b) {
                    return a.time - b.time;
                });
                return `${this.username}'s best ${criteria} hike is ${hard[0].peak} peak, for ${hard[0].time} hours`;
            }
        } else if (criteria === "easy") {
            this.listOfHikes.forEach((hike) => {
                if (hike.difficultyLevel === "easy") easy.push(hike);
            });
            if (easy.length < 1) {
                return `${this.username} has not done any ${criteria} hiking yet`;
            } else {
                easy.sort(function (a, b) {
                    return a.time - b.time;
                });
                return `${this.username}'s best ${criteria} hike is ${easy[0].peak} peak, for ${easy[0].time} hours`;
            }
        } else if (criteria === "all") {
            let all = [];
            this.listOfHikes.forEach((hike) => {
                all.push(
                    `${this.username} hiked ${hike.peak} for ${hike.time} hours`,
                );
            });

            return "All hiking records:" + "\n" + all.join("\n");
        }
    }
}
//input 1
// const user = new SmartHike("Vili");

// console.log(user.addGoal("Musala", 2925));

// console.log(user.addGoal("Rui", 1706));

// console.log(user.addGoal("Musala", 2925));

// console.log(user.showRecord("hard"));

//input 2
// const user = new SmartHike("Vili");

// console.log(user.addGoal("Musala", 2925));

// console.log(user.addGoal("Rui", 1706));

// console.log(user.hike("Musala", 3, "hard"));

// console.log(user.hike("Musala", 2, "hard"));

// console.log(user.hike("Musala", 1, "hard"));

// console.log(user.hike("Rui", 2, "easy"));

// console.log(user.hike("Rui", 6, "easy"));

// console.log(user.hike("Rui", 1, "easy"));

// console.log(user.showRecord("hard"));

// console.log(user.showRecord("easy"));

// console.log(user.showRecord("all"));

// console.log(user.hike("Everest", 12, "hard"));

//Testing showRecord
const newHike = new SmartHike("Vili");

console.log(newHike.addGoal("Musala", 2925)),
    console.log(newHike.hike("Musala", 8, "hard")),
    console.log(newHike.showRecord("easy")),
    console.log(newHike.addGoal("Vihren", 2914)),
    console.log(newHike.hike("Vihren", 4, "hard")),
    console.log(newHike.showRecord("hard")),
    console.log(newHike.addGoal("Rui", 1706)),
    console.log(newHike.hike("Rui", 3, "easy")),
    console.log(newHike.showRecord("all"));
