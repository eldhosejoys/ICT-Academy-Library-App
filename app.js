const express = require("express");

const nav = [{
    text: "Books",
    link: "/books"
}, {
    text: "Authors",
    link: "/authors"
}];

const booksRouter = require('./src/routes/booksRoutes')(nav);
const authorRouter = require('./src/routes/authorRoutes')(nav);
const app = new express();

app.use(express.static('./public'));
app.set('view engine', 'ejs');
app.set('views', './src/views');
app.use('/books', booksRouter);
app.use('/authors', authorRouter);

app.get("/", function(req, res) {
    res.render("index", {
        title: "Home Page",
        description: "The home page of the Library App",
        nav

    });
});

app.listen(5000);