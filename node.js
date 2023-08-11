const express = require("express");
const app = express();
const path = require("path");
const ejs = require("ejs");
const helmet = require("helmet");
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
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static("cssfolders"));
app.use(express.static("htmlfolders"));
app.use(express.static("jscriptfolders"));
app.use(express.static("photos"));
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
            res.render("")
        }
        } catch (error) {
            console.log("Error experienced while trying to create mew doc:",error)
        }
    
})

mongoConnect()
app.listen(4500, () => {
    console.log("server connected on port 4500");
});
