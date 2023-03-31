import { client, productsCollection } from "./mongoconnect.js";

const deleteProduct = async () => {
    //start try catch here
  
    try {
      await client.connect();
      const itemDeleted = await productsCollection.deleteOne({ name: "single scoop" });
      console.log(itemDeleted);
    } catch (error) {
      console.log(error);
    } finally {
      await client.close();
    }
  };
  deleteProduct();
  
  // the try catch finaly is just another way to do .then .catch