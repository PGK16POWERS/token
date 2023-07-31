const express = require("express");
const app = express();
const path = require("path");

app.use(express.static("cssfolders"));
app.use(express.static("htmlfolders"));
app.use(express.static("jscriptfolders"));
app.use(express.static("photos"));

app.get("/",(req,res) => {
    res.status(200).sendFile(path.join(__dirname, "index.html"));
})

app.get("/innerlayout", (req,res)=> {
    res.sendFile(path.join(__dirname,'innerlayout.html'));
});

app.get("/skincare-products", (req,res)=> {
    res.sendFile(path.join(__dirname,'skincare-products.html'));
});

app.get("/Shapewear", (req,res)=> {
    res.sendFile(path.join(__dirname,'Shapewear.html'));
});

app.get("/hairproducts", (req,res)=> {
    res.sendFile(path.join(__dirname,'hairproducts.html'));
});

app.get("/perfumepage", (req,res)=> {
    res.sendFile(path.join(__dirname,'perfumepage.html'));
});

app.listen(4500, () => {
    console.log("Danko supreme!!!!!!!");
});
