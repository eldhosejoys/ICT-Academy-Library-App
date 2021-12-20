const express = require("express");
const dashboardRouter = express.Router();

function router(nav) {

    dashboardRouter.get("/", function(req, res) {
        res.render("dashboard", {
            title: "Dashboard",
            description: "This is the User Dashboard.",
            nav
        });
    });

    dashboardRouter.get("/:id", function(req, res) {
        const id = req.params.id;
        res.render("addbooks", {
            title: "Add/Delete New Books",
            description: "You can add or delete new books here.",
            nav,
        });
    });

    dashboardRouter.get("/:id", function(req, res) {
        const id = req.params.id;
        res.render("addauthors", {
            title: "Add/Delete New Authors",
            description: "You can add or delete new authors here.",
            nav,
        });
    });

    return dashboardRouter;
}
module.exports = router;