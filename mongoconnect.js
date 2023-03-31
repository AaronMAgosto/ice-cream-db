import { MongoClient } from "mongodb";

import {MONGOURI} from "./credentials.js"


// create instance of mongo
export const client = new MongoClient(MONGOURI); // use the URI path

const database = client.db("Ice-Cream-Parlor");

// conect to collection - or create if none
export const productsCollection = database.collection("products")
