const app = require('express').Router();
const botsdata = require("../database/models/botlist/bots.js");

console.log("[vcodes.xyz]: Mini pages router loaded.");

app.get("/error", async (req,res) => {
    res.render("error.ejs", {
    	bot: global.Client,
        path: req.path,
        config: global.config,
        user: req.isAuthenticated() ? req.user : null,
        req: req,
        roles:global.config.server.roles,
        channels: global.config.server.channels
    })
})

app.get("/bot-rules", async (req,res) => {
    res.render("botlist/bot-rules.ejs", {
        bot: global.Client,
        path: req.path,
        config: global.config,
        user: req.isAuthenticated() ? req.user : null,
        req: req,
        roles:global.config.server.roles,
        channels: global.config.server.channels
    })
})

app.get("/dc", async (req,res) => {
    res.redirect(global.config.server.invite)
})
app.get("/discord", async (req,res) => {
    res.redirect(global.config.server.invite)
})

app.get("/robots.txt", function(req, res) {
    res.set('Content-Type', 'text/plain');
    res.send(`Sitemap: https://pbots.tk/sitemap-xml`);
});

app.get("/sitemap-xml", async function(req, res) {
    let link = "<url><loc>https://.xyz/</loc></url>";
    let botdataforxml = await botsdata.find()
    botdataforxml.forEach(bot => {
        link += "\n<url><loc>https://pbots.tk/bot/" + bot.botID + "</loc></url>";
    })
    res.set('Content-Type', 'text/plain');
    res.send(`https://www.pbots.tk/
https://www.pbots.tk/servers`);
});

module.exports = app;