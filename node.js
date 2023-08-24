const express = require("express");
const app = express();
const path = require("path");
const ejs = require("ejs");
//const helmet = require("helmet");
const bodyParser = require("body-parser");
const { MongoClient, ServerApiVersion } = require("mongodb");


const uri = "mongodb+srv://PGK16POWERS:p59sRcfcKGnUFhI0@nahstore.tpctfgo.mongodb.net/?retryWrites=true&w=majority" ;

const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
});

app.set("view engine","ejs");
//app.use(helmet());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static("public"))
app.use(express.static("jscriptfolders"));
app.use(express.static("views"));

async function mongoConnect() {
    try {
        await client.connect()
        console.log("Database connected successfully.")
    } catch (error) {
        console.log("Error experienced while trying to connect database", error)
    }
}

app.get("/",(req,res) => {
    res.render("index.ejs");
})

app.get("/dashboard", (req,res)=> {
    res.render("dashboard.ejs");
});

app.get("/skincare-products", (req,res)=> {
    res.render("skincare-products.ejs");
});

app.get("/shapewear", (req,res)=> {
    res.render("shapewear.ejs");
});

app.get("/hairproducts", (req,res)=> {
    res.render("hairproducts.ejs");
});

app.get("/perfumepage", (req,res)=> {
    res.render("perfumepage.ejs");
});

app.get("/checkout",(req,res)=>{
    res.render("checkout.ejs");
})

app.post("/newslletter", async (req,res) => {
    const { name, number, email } = req.body;
    const newUser = { name, number, email };
    const db = client.db("BigMarjella");
    const collection = db.collection("NAHSTORE");

    try {
        //CHECK IF USER ALREADY EXISTS
        const doesUserExist = await collection.findOne({ email:email });
        if(!doesUserExist){
            const addUser = await collection.insertOne(newUser);
            console.log("New doc created:",addUser);
            res.render("/index.ejs");
        } else {
            res.render("/innerlayout.html");
        }
        } catch (error) {
            console.log("Error experienced while trying to create mew doc:",error)
        }
    
})

mongoConnect()

app.listen(4500, () => {
    console.log("server connected on port 4500");
});
