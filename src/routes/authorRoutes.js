const express = require("express");
const authorRouter = express.Router();
const authordata = require('../models/authordata');

function router(nav, nav2) {

    // const authors = [{
    //     author: "Joseph Barbera",
    //     img: "https://cdn.statically.io/img/i.imgur.com/vtkF69k.png",
    //     description: "Joseph 'Joe' Roland Barbera was an American animator, director, producer, storyboard artist, and cartoon artist, who co-founded the animation studio and production company Hanna-Barbera. Born to Italian immigrants in New York City, Barbera joined Van Beuren Studios in 1927 and subsequently Terrytoons in 1929."
    // }, {
    //     author: "Charles M. Schulz",
    //     img: "https://cdn.statically.io/img/i.imgur.com/HfbqBOz.png",
    //     description: "Charles Monroe 'Sparky' Schulz was an American cartoonist and creator of the comic strip Peanuts. He is widely regarded as one of the most influential cartoonists of all time, cited by cartoonists including Jim Davis, Bill Watterson, Matt Groening, and Dav Pilkey"
    // }];



    authorRouter.get("/", function(req, res) {
        authordata.find()
            .then(function(authors) {
                res.render("authors", {
                    title: "Authors",
                    description: "Displays authors of the books in the Library App",
                    nav,
                    nav2,
                    authors
                });
            })
    });

    authorRouter.get("/:id", function(req, res) {
        const id = req.params.id;
        authordata.findOne({ _id: id })
            .then(function(author) {
                res.render("author", {
                    title: "Author",
                    description: "Displaying the author details",
                    nav,
                    nav2,
                    author
                });
            })
    });
    return authorRouter;
}
module.exports = router;