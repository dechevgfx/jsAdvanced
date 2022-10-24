class footballTeam {
    constructor(clubName, country) {
        this.clubName = clubName;
        this.country = country;
        this.invitedPlayers = [];
        this.players = [];
        this.windowPlayers = [];
    }
    newAdditions(footballPlayers) {
        footballPlayers.forEach((playerStat) => {
            let [name, age, playerValue] = playerStat.split("/");
            let find = this.invitedPlayers.findIndex((x) => {
                x.name == name;
            });
            if (find == -1) {
                this.invitedPlayers.push({
                    name,
                    age,
                    playerValue,
                });
            } else {
                if (playerValue > this.invitedPlayers[find].playerValue) {
                    this.invitedPlayers[find].playerValue = playerValue;
                }
            }
            this.invitedPlayers.forEach((player) => {
                if (!this.players.includes(player.name)) {
                    this.players.push(player.name);
                }
            });
        });
        return `You successfully invite ${this.players.join(", ")}.`;
    }

    signContract(selectedPlayer) {
        let splitted = selectedPlayer.split("/");
        let name = splitted[0];
        let offer = splitted[1];

        let find = this.invitedPlayers.findIndex((x) => {
            return x.name == name;
        });
        if (find == -1) {
            throw new Error(`${name} is not invited to the selection list!`);
        }
        let priceDifference =
            Number(this.invitedPlayers[find].playerValue) - Number(offer);
        if (offer < this.invitedPlayers[find].playerValue) {
            throw new Error(
                `The manager's offer is not enough to sign a contract with ${name}, ${priceDifference} million more are needed to sign the contract!`,
            );
        } else {
            this.invitedPlayers[find].playerValue = "Bought";
            return `Congratulations! You sign a contract with ${name} for ${offer} million dollars.`;
        }
    }

    ageLimit(name, age) {
        let find = this.invitedPlayers.findIndex((x) => {
            return x.name == name;
        });
        if (find == -1) {
            throw new Error(`${name} is not invited to the selection list!`);
        }
        let ageDifference = Number(age) - Number(this.invitedPlayers[find].age);
        if (Number(this.invitedPlayers[find].age) > age) {
            return `${name} is above age limit!`;
        }
        if (ageDifference < 5) {
            return `${name} will sign a contract for ${ageDifference} years with ${this.clubName} in ${this.country}!`;
        } else if (ageDifference > 5) {
            return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`;
        }
    }

    transferWindowResult() {
        let firstLine = `Players list:`;
        this.invitedPlayers.forEach((player) => {
            this.windowPlayers.push(
                `Player ${player.name}-${player.playerValue}`,
            );
        });
        return `${firstLine}\n${this.windowPlayers.join("\n")}`;
    }
}

let fTeam = new footballTeam("Barcelona", "Spain");

console.log(
    fTeam.newAdditions([
        "Kylian Mbappé/23/160",
        "Lionel Messi/35/50",
        "Pau Torres/25/52",
    ]),
);

console.log(fTeam.signContract("Kylian Mbappé/240"));

console.log(fTeam.ageLimit("Kylian Mbappé", 30));

console.log(fTeam.transferWindowResult());
