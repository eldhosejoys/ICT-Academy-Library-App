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
        }
    });

    return dashboardRouter;
}
module.exports = router;