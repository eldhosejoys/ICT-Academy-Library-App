const express = require("express");

const nav = [{
    text: "Books",
    link: "/books"
}, {
    text: "Authors",
    link: "/authors"
}];

const nav2 = [{
    text: "Signin",
    link: "/signin"
}, {
    text: "Signup",
    link: "/signup"
}];

// const nav3 = [{
//     text: "Logout",
//     link: "/"
// }];

const booksRouter = require('./src/routes/booksRoutes')(nav, nav2);
const authorRouter = require('./src/routes/authorRoutes')(nav, nav2);
const dashboardRouter = require('./src/routes/dashboardRoutes')(nav, nav2);
const app = new express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static('./public'));
app.set('view engine', 'ejs');
app.set('views', './src/views');
app.use('/books', booksRouter);
app.use('/authors', authorRouter);
app.use('/dashboard', dashboardRouter);

app.get("/", function(req, res) {
    res.render("index", {
        title: "Home Page",
        description: "The home page of the Library App",
        nav,
        nav2

    });
});

app.get("/signin", function(req, res) {
    res.render("signin", {
        title: "Login Page",
        description: "Login to the Library App",
        nav,
        nav2,
        error: req.query.error

    });
});

app.get("/signup", function(req, res) {
    res.render("signup", {
        title: "Signup Page",
        description: "Signup to the Library App",
        nav,
        nav2,
        error: req.query.error
    });
});


var port = process.env.PORT || 5002;
app.listen(port);