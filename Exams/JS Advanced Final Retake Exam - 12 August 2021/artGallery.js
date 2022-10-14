class ArtGallery {
    constructor(creator) {
        this.creator = creator;
        this.possibleArticles = { picture: 200, photo: 50, item: 250 };
        this.listOfArticles = [];
        this.guests = [];
    }

    addArticle(articleModel, articleName, quantity) {
        articleModel = articleModel.toLowerCase();
        if (!this.possibleArticles.hasOwnProperty(articleModel)) {
            throw new Error(
                "This article model is not included in this gallery!",
            );
        }
        let index = this.listOfArticles.findIndex(
            (e) => e.articleName === articleName,
        );
        if (
            index !== -1 &&
            this.listOfArticles[index].articleModel === articleModel
        ) {
            this.listOfArticles[index].quantity += quantity;
        } else {
            this.listOfArticles.push({
                articleModel,
                articleName,
                quantity,
            });
        }
        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`;
    }
    inviteGuest(guestName, personality) {
        let guest = this.guests.find((currentGuest) => {
            return currentGuest.guestName === guestName;
        });

        if (guest) {
            throw new Error(`${guestName} has already been invited.`);
        }
        let points = 0;

        if (personality == "Vip") {
            points = 500;
        } else if (personality === "Middle") {
            points = 250;
        } else {
            points = 50;
        }

        this.guests.push({ guestName, points, purchaseArticle: 0 });

        return `You have successfully invited ${guestName}!`;
    }

    buyArticle(articleModel, articleName, guestName) {
        let findModel = this.listOfArticles.find((x) => {
            return (
                x.articleModel === articleModel.toLowerCase() &&
                x.articleName === articleName
            );
        });
        let guest = this.guests.find((currentGuest) => {
            return currentGuest.guestName === guestName;
        });

        if (!findModel) {
            throw new Error("This article is not found.");
        }

        if (findModel.quantity === 0) {
            // throw new Error(`The ${articleName} is not available.`) // no Error throwing!!!
            return `The ${articleName} is not available.`;
        }

        if (!guest) {
            // throw new Error("This guest is not invited."); // no Error throwing!!!
            return "This guest is not invited.";
        }

        let neededPoints = Number(
            this.possibleArticles[articleModel.toLowerCase()],
        );
        let guestPoints = Number(guest.points);

        if (neededPoints <= guestPoints) {
            guest.points -= neededPoints;
            findModel.quantity -= 1;
            guest.purchaseArticle += 1;
        } else {
            return "You need to more points to purchase the article.";
        }

        return `${guestName} successfully purchased the article worth ${neededPoints} points.`;
    }

    showGalleryInfo(criteria) {
        if (criteria === "article") {
            let result = "Articles information:\n";

            this.listOfArticles.forEach(
                (article) =>
                    (result += `${article.articleModel} - ${article.articleName} - ${article.quantity}\n`),
            );
            return result.trim();
        } else {
            let result = "Guests information:\n";

            this.guests.forEach(
                (guest) =>
                    (result += `${guest.guestName} - ${guest.purchaseArticle}\n`),
            );
            return result.trim();
        }
    }
}
