import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import {Short} from "./controllers/short.js";
import {Redirect} from "./controllers/redirect.js";


dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.post("/short", Short);
app.get("/:route",Redirect);

const port = process.env.PORT || 3000;

const start = async () => {
    try{
        await mongoose.connect(process.env.MONGO_DB_URL)

        app.listen(port,"0.0.0.0", () => {
            console.log(`Server is running on port ${port}`);
        });
    }
    catch(error) {
        console.warn("error");
    }
};

start();



//rest -> json fromat