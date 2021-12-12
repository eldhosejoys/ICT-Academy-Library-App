const express = require("express");

const nav = [{
    text: "Books",
    link: "/books"
}, {
    text: "Authors",
    link: "/authors"
}];

const books = [{
    title: "Tom and Jerry",
    author: "Joseph Barbera",
    genre: "Cartoon",
    img: "https://cdn.statically.io/img/i.imgur.com/fy33MwW.png",
    description: "Tom and Jerry is an American animated media franchise and series of comedy short films created in 1940 by William Hanna and Joseph Barbera. Best known for its 161 theatrical short films by Metro-Goldwyn-Mayer, the series centers on the rivalry between the titular characters of a cat named Tom and a mouse named Jerry."
}, {
    title: "Peanuts",
    author: "Charles M. Schulz",
    genre: "Humor",
    img: "https://cdn.statically.io/img/i.imgur.com/fK28xZ5.png",
    description: "Peanuts is a syndicated daily and Sunday American comic strip written and illustrated by Charles M. Schulz. The strip's original run extended from 1950 to 2000, continuing in reruns afterward."
}];

const booksRouter = express.Router();

const app = new express();
app.use(express.static('./public'));
app.set('view engine', 'ejs');
app.set('views', './src/views');
app.use('/books', booksRouter);

app.get("/", function(req, res) {
    res.render("index", {
        title: "Home Page",
        description: "The home page of the Library App",
        nav

    });
});

booksRouter.get("/", function(req, res) {
    res.render("books", {
        title: "Books",
        description: "Displays books of the Library App",
        nav,
        books
    });
});

booksRouter.get("/:id", function(req, res) {
    const id = req.params.id;
    res.render("book", {
        title: books[id].title + " book",
        description: "Displaying " + books[id].title +
            " book in the Library App",
        nav,
        book: books[id]
    });
});
app.listen(5000);