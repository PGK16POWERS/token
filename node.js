const express = require("express");
const app = express();
const { auth, requiresAuth } = require('express-openid-connect');
const { json, urlencoded } = require("express");
const path = require("path");
require("dotenv").config();

app.use(express.static("cssfolders"));
app.use(express.static("htmlfolders"));
app.use(express.static("jscriptfolders"));
app.use(express.static("photos"));

app.use(json());
app.use(urlencoded({ extended: true }));
       
const config = {
    authRequired: false,
    auth0Logout: true,
    baseURL: process.env.BASEURL,
    clientID: process.env.CLIENTID,
    issuerBaseURL: process.env.ISSUERURL,
    secret: process.env.SECRET
};

app.use(auth(config));

app.get("/",(req,res) => {
    res.status(200).sendFile(path.join(__dirname, "index.html"));
})

app.get("/innerlayout", /* requiresAuth() */ (req,res)=> {
    res.sendFile(path.join(__dirname,'innerlayout.html'));
});

app.get("/skincare-products",  /* requiresAuth() */ (req,res)=> {
    res.sendFile(path.join(__dirname,'skincare-products.html'));
});

app.get("/Shapewear",  /* requiresAuth() */ (req,res)=> {
    res.sendFile(path.join(__dirname,'Shapewear.html'));
});

app.get("/hairproducts",  /* requiresAuth() */ (req,res)=> {
    res.sendFile(path.join(__dirname,'hairproducts.html'));
});

app.get("/perfumepage",  /* requiresAuth() */ (req,res)=> {
    res.sendFile(path.join(__dirname,'perfumepage.html'));
});

app.get("/logout", (req,res) => {
    res.logout();
    res.redirect("/");
})

app.listen(4500, () => {
    console.log("Danko supreme!!!!!!!");
});