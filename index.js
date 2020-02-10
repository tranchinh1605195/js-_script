var express = require("express");
var app = express();
app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "./views");
app.listen(3000);

var request = require("request");
var cheerio = require("cheerio");
app.get("/", function(req, res) {
    request("https://vnexpress.net/y-kien/dia-phuong-khong-co-dich-nen-cho-ho-c-sinh-quay-la-i-ho-c-4052815.html", function(err, response, body) {
        if (err) {
            console.log(err);
        } else {
            $ = cheerio.load(body);
            var title = $(body).find("h1.title_news_detail");
            var content = $(body).find("p.Normal")
            title.each(function(i, e) {
                console.log($(this).text());
            });
            content.each(function(i, e) {
                console.log($(this).text());
            });
            res.render("home", { html: body });
        }
    })

});