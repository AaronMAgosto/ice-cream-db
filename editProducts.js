import { client, productsCollection } from "./mongoconnect.js";


const editProduct = async () => {
    //collection.findOne({name: 'cantaloupe'})
    const updatedProduct = await productsCollection.findOneAndUpdate(
      { name: "sundae" },
      { $set: { name: "chocolate sundae" } }
    );
    console.log(updatedProduct);
  };
  
  editProduct()