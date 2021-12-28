const express = require("express");
const dashboardRouter = express.Router();
const bookdata = require('../models/bookdata');
const authordata = require('../models/authordata');

function router(nav) {

    var nav = [{
        text: "Dashboard",
        link: "/dashboard"
    }, {
        text: "Add Books",
        link: "/dashboard/addbooks"
    }, {
        text: "Add Authors",
        link: "/dashboard/addauthors"
    }, {
        text: "Delete Books",
        link: "/dashboard/deletebooks"
    }, {
        text: "Delete Authors",
        link: "/dashboard/deleteauthors"
    }];

    dashboardRouter.get("/", function(req, res) {
        res.render("dashboard", {
            title: "Dashboard",
            description: "This is the User Dashboard.",
            nav
        });
    });

    dashboardRouter.post("/addbook", function(req, res) {

        var item = {
            title: req.body.title,
            author: req.body.author,
            genre: req.body.genre,
            image: req.body.image,
            description: req.body.description
        }
        var book = bookdata(item);
        book.save();
        res.redirect('/dashboard/addbooks');

    });

    dashboardRouter.post("/deletebook", function(req, res) {
        bookdata.findByIdAndRemove({ _id: req.body.id })
            .then(function() {
                res.redirect('/dashboard/deletebooks?' + req.body.id);
            })
    });
    dashboardRouter.post("/deleteauthor", function(req, res) {
        authordata.findByIdAndRemove({ _id: req.body.id })
            .then(function() {
                res.redirect('/dashboard/deleteauthors?' + req.body.id);
            })
    });

    dashboardRouter.post("/updatebook", function(req, res) {
        var item = {
            title: req.body.title,
            author: req.body.author,
            genre: req.body.genre,
            image: req.body.image,
            description: req.body.description
        }
        var book = bookdata(item);
        book.update({ _id: req.body.id });
        res.redirect('/dashboard/updatebooks?' + req.body.id);
    });



    dashboardRouter.post("/addauthor", function(req, res) {
        var item = {
            author: req.body.author,
            image: req.body.image,
            description: req.body.description
        }
        var author = authordata(item);
        author.save();
        res.redirect('/dashboard/addauthors');

    });

    dashboardRouter.get("/:id", function(req, res) {
        const id = req.params.id;
        if (id == "addbooks") {
            res.render("addbooks", {
                title: "Add New Book",
                description: "You can add new books here.",
                nav,
            });
        } else if (id == "addauthors") {
            res.render("addauthors", {
                title: "Add New Author",
                description: "You can add new authors here.",
                nav,
            });
        } else if (id == "deletebooks") {
            bookdata.find()
                .then(function(books) {
                    res.render("deletebooks", {
                        title: "Delete Books",
                        description: "Delete books of the Library App",
                        nav,
                        books
                    });
                })
        } else if (id == "deleteauthors") {
            authordata.find()
                .then(function(authors) {
                    res.render("deleteauthors", {
                        title: "Delete Authors",
                        description: "Delete authors of the books in the Library App",
                        nav,
                        authors
                    });
                })
        } else if (id == "updatebooks") {
            bookdata.findOne({ _id: req.query.id })
                .then(function(books) {
                    res.render("updatebooks", {
                        title: "Update Book",
                        description: "Update book: " + req.query.id,
                        nav,
                        books
                    });
                })
        }
    });

    return dashboardRouter;
}
module.exports = router;