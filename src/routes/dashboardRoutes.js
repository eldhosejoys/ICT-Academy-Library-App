const express = require("express");
const dashboardRouter = express.Router();
const bookdata = require('../models/bookdata');

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

    dashboardRouter.get("/addbook", function(req, res) {
        var item = {
            title: req.query.title,
            author: req.query.author,
            genre: req.query.genre,
            image: req.query.image,
            description: req.query.description
        }
        var book = bookdata(item);
        book.save();
        res.redirect('/dashboard/addbooks');

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