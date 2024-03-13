const express = require('express')
const app = express()
const path = require('path')
const port = 3000
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'));



const indexRoutes = require("./routes/indexRoutes");



app.use('/', indexRoutes);


app.listen(port, () => {
    console.log(`App listening at port ${port}`)
})