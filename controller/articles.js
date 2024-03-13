
exports.articles = async (req, res) => {
    let data = [
        {
            title: "Safety",
            body: "Drive and Ride safe Mom is waiting at home",
        },
        {
            title: "Health",
            body: "Eat apple a day & Stay healthy",
        },
    ]
    this.articles = data;
    res.render("pages/articles", {
        article: this.articles,
        title: "Articles Page"
    });
}