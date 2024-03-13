exports.User = async (req, res) => {
    let data = {
        firstName: 'Ali',
        lastName: 'Shahid',
        admin: false
    };
    this.user = data;
    res.render('pages/index', {
        user: this.user,
        title: "Home Page"

    });
};
