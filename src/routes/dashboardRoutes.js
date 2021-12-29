const express = require("express");
const dashboardRouter = express.Router();
const bookdata = require('../models/bookdata');
const authordata = require('../models/authordata');
const multer = require("multer");
const fs = require('fs');

const storage = multer.diskStorage({
    destination: function(req, file, callback) {
        callback(null, './public/uploads');
    },
    filename: function(req, file, callback) {
        callback(null, Date.now() + file.originalname)
    }
});
const upload = multer({
    storage: storage,
    limits: {
        fieldSize: 1024 * 1024 * 2
    }
});

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
        text: "Update/Delete Books",
        link: "/dashboard/deletebooks"
    }, {
        text: "Update/Delete Authors",
        link: "/dashboard/deleteauthors"
    }];

    dashboardRouter.get("/", function(req, res) {
        res.render("dashboard", {
            title: "Dashboard",
            description: "This is the User Dashboard.",
            nav
        });
    });

    dashboardRouter.post("/addbook", upload.single('image'), function(req, res) {

        var item = {
            title: req.body.title,
            author: req.body.author,
            genre: req.body.genre,
            image: req.file.filename,
            description: req.body.description
        }
        var book = bookdata(item);
        book.save();
        res.redirect('/dashboard/addbooks?status=added');

    });

    dashboardRouter.post("/deletebook", function(req, res) {
        bookdata.findOne({ _id: req.body.id })
            .then(function(book) {
                var location = "./public/uploads/" + book.image;
                try {
                    fs.unlinkSync(location)

                } catch (err) {
                    console.error(err)
                }
            })
        bookdata.findByIdAndRemove({ _id: req.body.id })
            .then(function() {
                res.redirect('/dashboard/deletebooks?' + req.body.id + '&status=deleted');
            })
    });
    dashboardRouter.post("/deleteauthor", function(req, res) {
        authordata.findOne({ _id: req.body.id })
            .then(function(author) {
                var location = "./public/uploads/" + author.image;
                try {
                    fs.unlinkSync(location)

                } catch (err) {
                    console.error(err)
                }
            })
        authordata.findByIdAndRemove({ _id: req.body.id })
            .then(function() {
                res.redirect('/dashboard/deleteauthors?' + req.body.id + '&status=deleted');
            })
    });

    dashboardRouter.post("/updatebook", upload.single('image'), function(req, res) {
        bookdata.findOne({ _id: req.body.id })
            .then(function(book) {
                var location = "./public/uploads/" + book.image;
                try {
                    fs.unlinkSync(location)

                } catch (err) {
                    console.error(err)
                }
            })
        var item = {
            title: req.body.title,
            author: req.body.author,
            genre: req.body.genre,
            image: req.file.filename,
            description: req.body.description
        }
        bookdata.updateOne({ _id: req.body.id }, item, (err) => {
            if (err) {
                console.log(err);
                res.end(err);
            } else {
                // refresh
                res.redirect('/dashboard/updatebooks?id=' + req.body.id + '&status=updated');
            }
        });
    });
    dashboardRouter.post("/updateauthor", upload.single('image'), function(req, res) {
        authordata.findOne({ _id: req.body.id })
            .then(function(author) {
                var location = "./public/uploads/" + author.image;
                try {
                    fs.unlinkSync(location)

                } catch (err) {
                    console.error(err)
                }
            })
        var item = {
            author: req.body.author,
            image: req.file.filename,
            description: req.body.description
        }
        authordata.updateOne({ _id: req.body.id }, item, (err) => {
            if (err) {
                console.log(err);
                res.end(err);
            } else {
                // refresh
                res.redirect('/dashboard/updateauthors?id=' + req.body.id + '&status=updated');
            }
        });
    });





    dashboardRouter.post("/addauthor", upload.single('image'), function(req, res) {
        var item = {
            author: req.body.author,
            image: req.file.filename,
            description: req.body.description
        }
        var author = authordata(item);
        author.save();
        res.redirect('/dashboard/addauthors?status=added');

    });

    dashboardRouter.get("/:id", function(req, res) {
        const id = req.params.id;
        if (id == "addbooks") {
            res.render("addbooks", {
                title: "Add New Book",
                description: "You can add new books here.",
                nav,
                status: req.query.status
            });
        } else if (id == "addauthors") {
            res.render("addauthors", {
                title: "Add New Author",
                description: "You can add new authors here.",
                nav,
                status: req.query.status
            });
        } else if (id == "deletebooks") {
            bookdata.find()
                .then(function(books) {
                    res.render("deletebooks", {
                        title: "Delete Books",
                        description: "Delete books of the Library App",
                        nav,
                        books,
                        status: req.query.status
                    });
                })
        } else if (id == "deleteauthors") {
            authordata.find()
                .then(function(authors) {
                    res.render("deleteauthors", {
                        title: "Delete Authors",
                        description: "Delete authors of the books in the Library App",
                        nav,
                        authors,
                        status: req.query.status
                    });
                })
        } else if (id == "updatebooks") {
            bookdata.findOne({ _id: req.query.id })
                .then(function(books) {
                    res.render("updatebooks", {
                        title: "Update Book",
                        description: "Update book: " + req.query.id,
                        nav,
                        books,
                        status: req.query.status
                    });
                })
        } else if (id == "updateauthors") {
            authordata.findOne({ _id: req.query.id })
                .then(function(authors) {
                    res.render("updateauthors", {
                        title: "Update Author",
                        description: "Update Author: " + req.query.id,
                        nav,
                        authors,
                        status: req.query.status
                    });
                })
        }
    });

    return dashboardRouter;
}
module.exports = router;
module.exports = router;