class SummerCamp {
    constructor(organizer, location) {
        this.organizer = organizer;

        this.location = location;

        this.priceForTheCamp = { child: 150, student: 300, collegian: 500 };

        this.listOfParticipants = [];
    }

    registerParticipant(name, condition, money) {
        if (!this.priceForTheCamp.hasOwnProperty(condition)) {
            throw new Error("Unsuccessful registration at the camp.");
        } else {
            let findInList = this.listOfParticipants.find(
                (participant) => participant.name === name,
            );

            if (findInList) {
                return `The ${name} is already registered at the camp.`;
            }
            let price = 0;
            for (const key in this.priceForTheCamp) {
                if (key === condition) {
                    price = this.priceForTheCamp[key];
                }
            }
            if (price > money) {
                return `The money is not enough to pay the stay at the camp.`;
            }
            this.listOfParticipants.push({
                name,
                condition,
                power: 100,
                wins: 0,
            });
            return `The ${name} was successfully registered.`;
        }
    }

    unregisterParticipant(name) {
        let index = this.listOfParticipants.findIndex(
            (participant) => participant.name === name,
        );
        if (index == -1) {
            throw new Error(`The ${name} is not registered in the camp.`);
        } else {
            this.listOfParticipants.splice(index, 1);
            return `The ${name} removed successfully.`;
        }
    }

    timeToPlay(typeOfGame, participant1, participant2) {
        let p1 = this.listOfParticipants.find(
            (participant) => participant.name === participant1,
        );
        let p2 = this.listOfParticipants.find(
            (participant) => participant.name === participant2,
        );
        if (typeOfGame === "WaterBalloonFights") {
            if (!p1 || !p2 || (!p1 && !p2)) {
                throw new Error(`Invalid entered name/s.`);
            } else {
                if (p1.condition !== p2.condition) {
                    throw new Error(`Choose players with equal condition.`);
                } else {
                    if (p1.power > p2.power) {
                        p1.wins++;
                        return `The ${p1.name} is winner in the game ${typeOfGame}.`;
                    } else if (p1.power < p2.power) {
                        p2.wins++;
                        return `The ${p2.name} is winner in the game ${typeOfGame}.`;
                    } else {
                        return `There is no winner.`;
                    }
                }
            }
        } else if (typeOfGame === "Battleship") {
            if (!p1) {
                throw new Error(`Invalid entered name/s.`);
            } else {
                p1.power += 20;
                return `The ${p1.name} successfully completed the game ${typeOfGame}.`;
            }
        }
    }

    toString() {
        let firstLine = `${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`;
        let secondLineArr = [];
        let sorted = this.listOfParticipants
            .map((e) => {
                return e;
            })
            .sort((a, b) => {
                return Number(b.wins) - Number(a.wins);
            });
        sorted.forEach((participant) =>
            secondLineArr.push(
                `${participant.name} - ${participant.condition} - ${participant.power} - ${participant.wins}`,
            ),
        );
        return `${firstLine}\n${secondLineArr.join("\n")}`;
    }
}
const summerCamp = new SummerCamp(
    "Jane Austen",
    "Pancharevo Sofia 1137, Bulgaria",
);
console.log(summerCamp.registerParticipant("Petar Petarson", "child", 300));
console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
console.log(summerCamp.timeToPlay("Battleship", "Sara Dickinson"));
console.log(
    summerCamp.timeToPlay(
        "WaterBalloonFights",
        "Sara Dickinson",
        "Petar Petarson",
    ),
);
console.log(summerCamp.toString());
