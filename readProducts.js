import { client, productsCollection } from "./mongoconnect.js";


const getAllProducts= async () => {
    try {
      await client.connect();
      const allProducts = await productsCollection.find().toArray();
      console.log(allProducts);
    } catch (error) {
      console.log(error);
    } finally {
      client.close();
    }
    
  };
  getAllProducts()