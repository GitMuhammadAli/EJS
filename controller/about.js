


exports.About = async (req, res) => {

    let about = {
        head: "this is about page",
    }

    let jokes = [
        {
            info: `Why don't scientists trust atoms ? 
     Because they make up everything!`
        },
        {
            info: `Why did the scarecrow win an award?
Because he was outstanding in his field!`
        }
    ]

    const randomindex = Math.floor(Math.random() * jokes.length)
    const randomjoke = jokes[randomindex]
    res.render('pages/about', {
        about,
        jokes,
        randomjoke,
        title: "About Page"
    })

}