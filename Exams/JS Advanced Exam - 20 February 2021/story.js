class Story {
    constructor(title, creator) {
        this.title = title;
        this.creator = creator;
        this._comments = [];
        this._likes = [];
    }

    get likes() {
        if (this._likes.length === 0) {
            return `${this.title} has 0 likes`;
        } else if (this._likes.length === 1) {
            return `${this._likes[0]} likes this story!`;
        }

        return `${this._likes[0]} and ${
            this._likes.slice(1).length
        } others like this story!`;
    }

    like(username) {
        if (this._likes.includes(username)) {
            throw new Error("You can't like the same story twice!");
        }

        if (username === this.creator) {
            throw new Error("You can't like your own story!");
        }

        this._likes.push(username);
        return `${username} liked ${this.title}!`;
    }

    dislike(username) {
        if (!this._likes.includes(username)) {
            throw new Error("You can't dislike this story!");
        }

        this._likes = this._likes.filter((user) => user !== username);

        return `${username} disliked ${this.title}`;
    }

    comment(username, content, ID) {
        let comment = {
            ID: ID,
            username: username,
            content: content,
            replies: [],
        };

        let commentID = this._comments.find((comment) => comment.ID === ID);

        if (commentID) {
            let replyID = Number(
                commentID.ID + "." + (commentID.replies.length + 1),
            );
            let reply = {
                ID: replyID,
                username: username,
                content: content,
            };

            commentID.replies.push(reply);

            return "You replied successfully";
        }

        comment.ID = this._comments.length + 1;
        this._comments.push(comment);

        return `${username} commented on ${this.title}`;
    }

    toString(sortingType) {
        let result = [];
        result.push(`Title: ${this.title}`);
        result.push(`Creator: ${this.creator}`);
        result.push(`Likes: ${this._likes.length}`);
        result.push("Comments:");

        if (this._comments.length > 0) {
            let sortedComments = this._sortCriteria(
                this._comments,
                sortingType,
            );
            result.push(this._sortThem(sortedComments, sortingType));
        }
        return result.join("\n");
    }

    _sortCriteria(commentsReplies, criteria) {
        let copyCommentsReplies = commentsReplies.slice();
        let sortedCommentsReplies = null;

        if (criteria === "asc") {
            sortedCommentsReplies = copyCommentsReplies.sort(
                (a, b) => a.ID - b.ID,
            );
        } else if (criteria === "desc") {
            sortedCommentsReplies = copyCommentsReplies.sort(
                (a, b) => b.ID - a.ID,
            );
        } else if (criteria === "username") {
            sortedCommentsReplies = copyCommentsReplies.sort((a, b) =>
                a.username.localeCompare(b.username),
            );
        }

        return sortedCommentsReplies;
    }

    _sortThem(sortedComments, criteria) {
        let commentAndReplies = [];

        for (let comment of sortedComments) {
            commentAndReplies.push(
                `-- ${comment.ID}. ${comment.username}: ${comment.content}`,
            );

            if (comment.replies.length > 0) {
                let sortedReplies = this._sortCriteria(
                    comment.replies,
                    criteria,
                );
                sortedReplies.forEach((reply) =>
                    commentAndReplies.push(
                        `--- ${reply.ID}. ${reply.username}: ${reply.content}`,
                    ),
                );
            }
        }

        return commentAndReplies.join("\n");
    }
}
